---
title: PyTorch 源码阅读 I - Init 入口文件
authors: [Life_Checkpoint]
tags: [AI]
---

大工程，读起来也不算简单呢...

*如果有误，感谢您的指出！*

<!-- truncate -->

# `__init__.py` 相关代码

作为 `torch` 的入口文件，重要性不必多说。这里放一点零碎的片段...

## I. 所有后端启动启动启动...

`torch` 本身依赖于众多的 cpp 后端来提供高性能的深度学习计算，自然要进行后端的加载

看得出来，为了跨平台，开发者也是够拼的...

---


```python
__all__ = ['Tensor', 'nn', 'optim', 'utils', ...]
```

`__all__` 在 python 中是一个特殊变量，代表着想要暴露给外界（导出）的符号，它定义了当使用 `from module import *` 语法时，模块中哪些名称会被导入，用来显式地声明模块的公共 API

---

```python
################################################################################
# Load the extension module
################################################################################

if sys.platform == 'win32':
    import sysconfig
    pfiles_path = os.getenv('ProgramFiles', 'C:\\Program Files')
    py_dll_path = os.path.join(sys.exec_prefix, 'Library', 'bin')
    th_dll_path = os.path.join(os.path.dirname(__file__), 'lib')
    usebase_path = os.path.join(sysconfig.get_config_var("userbase"), 'Library', 'bin')
```

添加一些路径到加载路径中，以供动态载入后端的接口

---

```python
try:
        ctypes.CDLL('vcruntime140.dll')
        ctypes.CDLL('msvcp140.dll')
        ctypes.CDLL('vcruntime140_1.dll')
    except OSError:
        print('''Microsoft Visual C++ Redistributable is not installed, this may lead to the DLL load failure.
                 It can be downloaded at https://aka.ms/vs/16/release/vc_redist.x64.exe''')

...
```

导入诸如 `vsruntime140.dll` 等 cpp 运行支持环境，加载这些支持库可以让 `torch` 的后端得到正常运行

---

```python
for dll in dlls:
        is_loaded = False
        if with_load_library_flags:
            res = kernel32.LoadLibraryExW(dll, None, 0x00001100)
            last_error = ctypes.get_last_error()
            if res is None and last_error != 126:
                err = ctypes.WinError(last_error)
                err.strerror += f' Error loading "{dll}" or one of its dependencies.'
                raise err
            elif res is not None:
                is_loaded = True
        if not is_loaded:
            if not path_patched:
                os.environ['PATH'] = ';'.join(dll_paths + [os.environ['PATH']])
                path_patched = True
            res = kernel32.LoadLibraryW(dll)
            if res is None:
                err = ctypes.WinError(ctypes.get_last_error())
                err.strerror += f' Error loading "{dll}" or one of its dependencies.'
                raise err

...
```

一开始比较好奇 `0x00001100` 是什么意思

查了一下，这个函数的原型是

```cpp
HMODULE LoadLibraryExW(
  LPCWSTR lpLibFileName,  // DLL 文件名
  HANDLE  hFile,          // 文件句柄（通常为 NULL）
  DWORD   dwFlags         // 加载选项
);
```

而 `0x00001100` 是以下两个标志的组合：

 - `0x00001000` (LOAD_LIBRARY_AS_IMAGE_RESOURCE)，将 DLL 加载为**映像资源**

 - `0x00000100` (LOAD_LIBRARY_AS_DATAFILE)，将 DLL 加载为**数据文件**

这样便能将 DLL 加载为非执行资源，仅用于读取资源或数据。

---

```python
if (USE_RTLD_GLOBAL_WITH_LIBTORCH or os.getenv('TORCH_USE_RTLD_GLOBAL')) and \
        (_running_with_deploy() or platform.system() != 'Windows'):
    # Do it the hard way.  You might want to load libtorch with RTLD_GLOBAL in a
    # few circumstances:
    #
    #   ...
    #
    old_flags = sys.getdlopenflags()
    sys.setdlopenflags(os.RTLD_GLOBAL | os.RTLD_LAZY)
    from torch._C import *  # noqa: F403
    sys.setdlopenflags(old_flags)
    del old_flags

else:
    # Easy way.  You want this most of the time, because it will prevent
    # C++ symbols from libtorch clobbering C++ symbols from other
    # libraries, leading to mysterious segfaults.
    # ...
    if USE_GLOBAL_DEPS:
        _load_global_deps()
    from torch._C import *  # noqa: F403
```

这段代码没读懂，查找资料，发现这是一个解决**符号解析冲突**的逻辑，并确保加载行为对后续代码无副作用

对于我们的主线而言，似乎不是非常重要

## II. 拼尽全力无法战胜依赖地狱

作为一个 cpp 使用频率较少的开发者，其实一直比较疑惑其依赖的管理方式

早前就听说过 cpp 的**依赖地狱**问题

设想以下场景：

```
A (v1.0) ----> B ----> D (应用)

A (v2.0) ----> C ----> D (应用)
```

作为应用的 `D` 同时依赖于 `B` 与 `C` 两个库，`B` 与 `C` 依赖于 `A` 库，形成菱形依赖。然而，`B` 与 `C` 所依赖的 `A` 库是不同的两个版本！

这...让编译器很为难，毕竟 `A (v1.0)` 和 `A (v2.0)` 暴露着相同的符号，但具体的实现却不一样...

主流的解决方案是 `Conan` 和 `vcpkg`，后续可能会进行学习

## III. 符号计算包装数值之心

毕竟要支持张量之间的自动求导，有时候还要对梯度张量做一些操作 e.g. 梯度裁剪，所以需要一个符号计算引擎

数值微分 / 符号微分的概念区别应当已经掌握...

---

```python
class SymInt:
    """
    Like an int (including magic methods), but redirects all operations on the
    wrapped node. This is used in particular to symbolically record operations
    in the symbolic shape workflow.
    """

    def __init__(self, node):
        # This field MUST be named node; C++ binding code assumes that this
        # class has a field named node that stores SymNode
        self.node = node

    def __bool__(self):
        return builtins.bool(self != 0)

    def __int__(self):
        return self.node.int_()

    def __index__(self):
        return self.node.int_()

    # Magic methods installed by torch.fx.experimental.sym_node

    def __eq__(self, other: object) -> builtins.bool:
        raise AssertionError("type stub not overridden")

    ...
```

如其所言，这个类包装了一个**符号整数**，将整数的运算重定向到**符号节点**上，以供计算图进行符号计算

同理，有 `SymBool` 等类支持**符号布尔值**等

接下来是一系列方法，包括符号类型的转换，等等，例如 `sym_float` 方法

```python
def sym_float(a):
    r""" SymInt-aware utility for float casting.

    Args:
        a (SymInt, SymFloat, or object): Object to cast
    """
    from .overrides import has_torch_function_unary, handle_torch_function

    if has_torch_function_unary(a):
        return handle_torch_function(sym_float, (a,), a)
    if isinstance(a, SymFloat):
        return a
    elif hasattr(a, '__sym_float__'):
        return a.__sym_float__()
    return py_float(a)  # type: ignore[operator]
```

## 那些基础的神奇妙妙工具

放一张表格整理一下定义的基础函数...

| 函数名称                     | 描述                                                                 | 参数                                      | 返回类型   | 备注                                                                                       |
|------------------------------|----------------------------------------------------------------------|-------------------------------------------|------------|--------------------------------------------------------------------------------------------|
| `is_tensor(obj)`             | 检查对象是否为 PyTorch 张量。                                         | `obj` (Object): 要测试的对象               | `bool`     | 建议使用 `isinstance(obj, torch.Tensor)` 进行类型检查（兼容 mypy）。                        |
| `is_storage(obj)`            | 检查对象是否为 PyTorch 存储对象。                                     | `obj` (Object): 要测试的对象               | `bool`     |                                                                                            |
| `get_default_device()`       | 获取默认的张量分配设备。                                              | 无                                        | `torch.device` | 从全局上下文中获取设备；如果未设置，则回退到 CPU。                                           |
| `set_default_device(device)` | 设置默认的张量分配设备。                                              | `device` (device 或 string): 要设置的设备  | 无         | 影响张量分配的默认设备；不影响显式传递设备参数的工厂函数；可能带来轻微的性能开销。           |
| `set_default_tensor_type(t)` | 设置默认的浮点张量类型。                                              | `t` (type 或 string): 浮点张量类型或其名称 | 无         | 自 PyTorch 2.1 起已弃用；建议使用 `torch.set_default_dtype()` 和 `torch.set_default_device()`。 |
| `set_default_dtype(d)`       | 设置默认的浮点数据类型。                                              | `d` (torch.dtype): 要设置的浮点数据类型    | 无         | 支持 `torch.float32` 和 `torch.float64`；影响默认复数类型、类型推断和类型提升规则。          |

阅读到函数 `use_deterministic_algorithms` 的时候，一直没搞清楚其用意，查阅资料后得知，该函数指示 `torch` 是否**仅使用确定性算法**（无论环境如何，计算结果都应当一致的一类算法）

类似的函数还有 `are_deterministic_algorithms_enabled` `is_deterministic_algorithms_warn_only_enabled` `set_deterministic_debug_mode` `get_deterministic_debug_mode` 等，不再一一介绍

继续总结一些函数定义...

| 函数名称                                | 描述                                                                 | 参数                                      | 返回类型   | 备注                                                                                       |
|-----------------------------------------|----------------------------------------------------------------------|-------------------------------------------|------------|--------------------------------------------------------------------------------------------|
| `get_float32_matmul_precision()`        | 返回当前 float32 矩阵乘法的计算精度设置。                             | 无                                        | `str`      | 详情参考 `torch.set_float32_matmul_precision` 文档。                                        |
| `set_float32_matmul_precision(precision)` | 设置 float32 矩阵乘法的内部计算精度。                                | `precision` (str): 精度设置（"highest"、"high" 或 "medium"） | 无         | 支持三种精度设置：- "highest"：使用 float32 数据类型。- "high"：使用 TensorFloat32 或 bfloat16 算法。- "medium"：使用 bfloat16 数据类型。仅影响 CUDA 设备。 |
| `set_warn_always(b)`                    | 设置是否强制所有警告始终显示。                                       | `b` (bool): 如果为 True，则强制显示所有警告；如果为 False，则恢复默认行为。 | 无         | 默认情况下，某些警告可能只显示一次。启用后，警告将始终显示，适用于调试。                     |
| `is_warn_always_enabled()`              | 返回全局 warn_always 标志是否启用。                                   | 无                                        | `bool`     | 如果启用了 `set_warn_always(True)`，则返回 True；否则返回 False。                           |

后面还有一些用于**错误检查**的内置方法以及一部分**数学常数定义**，不是很重要

---

```python
...

class BFloat16Storage(_LegacyStorage):
    @classproperty
    def dtype(self):
        _warn_typed_storage_removal(stacklevel=3)
        return self._dtype

    @classproperty
    def _dtype(self):
        return torch.bfloat16

...
```

以 `BFloat16` 为例，这是一系列数据类型的**储存类**

由于命名复杂、管理不便，这些储存类将被弃用，推荐使用 `TypedStorage` 进行对应数据类型储存管理

---

依然是一系列辅助方法的定义，略过不表

## 开导

**导入各种模块！** 导入的顺序一定要按照依赖来，这样才不会出现依赖错误

```python
# Use the redundant form so that type checkers know that these are a part of
# the public API. The "regular" import lines are there solely for the runtime
# side effect of adding to the imported module's members for other users.
from torch import cuda as cuda
from torch import cpu as cpu
from torch import mps as mps
from torch import xpu as xpu
from torch import autograd as autograd
from torch.autograd import (
    no_grad as no_grad,
    enable_grad as enable_grad,
    set_grad_enabled as set_grad_enabled,
    inference_mode as inference_mode,
)
from torch import fft as fft
from torch import futures as futures
from torch import _awaits as _awaits
from torch import nested as nested
from torch import nn as nn
from torch.signal import windows as windows
from torch import optim as optim
import torch.optim._multi_tensor
from torch import multiprocessing as multiprocessing
from torch import sparse as sparse
from torch import special as special
import torch.utils.backcompat
from torch import jit as jit
from torch import linalg as linalg
from torch import hub as hub
from torch import random as random
from torch import distributions as distributions
from torch import testing as testing
from torch import backends as backends
import torch.utils.data
from torch import __config__ as __config__
from torch import __future__ as __future__
from torch import profiler as profiler

# Quantized, sparse, AO, etc. should be last to get imported, as nothing
# is expected to depend on them.
from torch import ao as ao
# nn.quant* depends on ao -- so should be after those.
import torch.nn.quantizable
import torch.nn.quantized
import torch.nn.qat
import torch.nn.intrinsic

_C._init_names(list(torch._storage_classes))

# attach docstrings to torch and tensor functions
from . import _torch_docs, _tensor_docs, _storage_docs
del _torch_docs, _tensor_docs, _storage_docs


def compiled_with_cxx11_abi() -> builtins.bool:
    r"""Returns whether PyTorch was built with _GLIBCXX_USE_CXX11_ABI=1"""
    return _C._GLIBCXX_USE_CXX11_ABI


# Import the ops "namespace"
from torch._ops import ops
from torch._classes import classes
import torch._library

# quantization depends on torch.fx
# Import quantization
from torch import quantization as quantization

# Import the quasi random sampler
from torch import quasirandom as quasirandom

# If you are seeing this, it means that this call site was not checked if
# the memory format could be preserved, and it was switched to old default
# behaviour of contiguous
legacy_contiguous_format = contiguous_format

# Register fork handler to initialize OpenMP in child processes (see gh-28389)
from torch.multiprocessing._atfork import register_after_fork
register_after_fork(torch.get_num_threads)
del register_after_fork

# Import tools that require fully imported torch (for applying
# torch.jit.script as a decorator, for instance):
from ._lobpcg import lobpcg as lobpcg

# These were previously defined in native_functions.yaml and appeared on the
# `torch` namespace, but we moved them to c10 dispatch to facilitate custom
# class usage. We add these lines here to preserve backward compatibility.
quantized_lstm = torch.ops.aten.quantized_lstm
quantized_gru = torch.ops.aten.quantized_gru

from torch.utils.dlpack import from_dlpack, to_dlpack

# Import experimental masked operations support. See
# [RFC-0016](https://github.com/pytorch/rfcs/pull/27) for more
# information.
from . import masked

# Import removed ops with error message about removal
from ._linalg_utils import (  # type: ignore[misc]
    matrix_rank,
    eig,
    solve,
    lstsq,
)
from ._linalg_utils import _symeig as symeig  # type: ignore[misc]
```

## 给编译器来个包装接口

为了优化模型性能，自然需要各路**AI编译器**优化计算图，于是 `torch` 在这里定义了一些编译器的包装类

以 `_TorchCompileWrapper` 为例

```python
class _TorchCompileWrapper:
    def __init__(self, backend, mode, options, dynamic):
        from torch._dynamo.backends.registry import lookup_backend

        if isinstance(backend, str):
            self.compiler_name = backend
        elif hasattr(backend, "__name__"):
            self.compiler_name = backend.__name__
        else:
            self.compiler_name = str(backend)
        self.dynamic = dynamic
        self.compiler_fn = lookup_backend(backend)
        self.kwargs = {}
        # only pass the args if they non-empty
        if mode and mode != "default":
            self.kwargs["mode"] = mode
        if options:
            self.kwargs["options"] = options

    def __eq__(self, other):
        return (isinstance(other, _TorchCompileWrapper) and
                self.compiler_fn == other.compiler_fn and
                self.kwargs == other.kwargs and
                self.dynamic == other.dynamic)

    def __call__(self, model_, inputs_):
        return self.compiler_fn(model_, inputs_, **self.kwargs)

    def reset(self):
        if hasattr(self.compiler_fn, "reset"):
            self.compiler_fn.reset()


def compile(model: Optional[Callable] = None, *,
            fullgraph: builtins.bool = False,
            dynamic: Optional[builtins.bool] = None,
            backend: Union[str, Callable] = "inductor",
            mode: Union[str, None] = None,
            options: Optional[Dict[str, Union[str, builtins.int, builtins.bool]]] = None,
            disable: builtins.bool = False) -> Callable:
    _C._log_api_usage_once("torch.compile")
    # Temporary until we get proper support for python 3.12
    if sys.version_info >= (3, 12):
        raise RuntimeError("Dynamo is not supported on Python 3.12+")

    # Decorator mode
    if model is None:
        def fn(model: Callable):
            if model is None:
                raise RuntimeError("Model can't be None")
            return compile(model,
                           fullgraph=fullgraph,
                           dynamic=dynamic,
                           backend=backend,
                           mode=mode,
                           options=options,
                           disable=disable)
        return fn

    if mode is not None and options is not None:
        raise RuntimeError("Either mode or options can be specified, but both can't be specified at the same time.")
    if mode is None and options is None:
        mode = "default"
    if backend == "inductor":
        backend = _TorchCompileInductorWrapper(mode, options, dynamic)
    else:
        backend = _TorchCompileWrapper(backend, mode, options, dynamic)

    return torch._dynamo.optimize(backend=backend, nopython=fullgraph, dynamic=dynamic, disable=disable)(model)
```

支持通过**装饰器**或普通**调用**对模型进行编译

## End

剩下的都是一些诸如适配平台 `device`，处理张量大小信息的 `_constrain_as_size` 等函数

总的来说，很符合我对大工程 `__init__.py` 文件的想象，**够大**... (2041 行)

佩服开发者...