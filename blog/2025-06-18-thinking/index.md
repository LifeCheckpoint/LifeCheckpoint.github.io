---
title: 还是碎碎念...
authors: [Life_Checkpoint]
tags: [other]
---

<!-- truncate -->

---

## 地理期末

今天看地理看得头发昏，怎么计算机还要学地理...

## 重构计划

翻了翻自己的 Blog，感觉是时候重构 `ManimGeo` 了

## 实习

看到有同学开始找实习了，有点心痒，不过转念一想还是磨练一下自己的能力为先

AI 也给我推荐了一些**技术栈**，是时候看一看...

补兑，怎么这么多...

> **一、基础编程与计算机科学核心**
> 
> 这是所有AI/ML工程师的基石，无论你未来走向哪个细分领域，这些都是必须掌握的。
> 
> 1.  **编程语言：**
>     *   **Python (精通):** AI/ML领域的主流语言。需要熟练掌握其高级特性、面向对象编程、以及各种常用库。
>     *   **Java (熟悉):** 你已熟悉，在一些大型企业级后端系统和大数据生态中仍有广泛应用。
>     *   **C++ (熟练掌握):** **非常重要！** 对于AI Infra、高性能计算、深度学习框架底层优化（如PyTorch/TensorFlow的C++后端）、模型部署推理引擎等，C++是不可或缺的。你需要从基础语法、STL、> 面向对象、内存管理、多线程等方面深入学习。
>     *   **Shell Scripting (熟悉):** Linux环境下自动化运维、数据处理、任务调度等常用。
> 2.  **数据结构与算法 (DSA):**
>     *   **核心：** 链表、树、图、排序、查找、动态规划、贪心等。这是面试的必考项，也是解决实际问题的基础。
>     *   **实践：** LeetCode刷题，从Easy到Medium，逐步挑战Hard。
> 3.  **操作系统：**
>     *   **Linux (熟练使用):** 命令行操作、文件系统、进程管理、内存管理、网络配置等。WSL是很好的起点。
>     *   **操作系统原理：** 进程/线程、并发、同步、死锁、内存管理、文件系统等概念。
> 4.  **计算机网络：**
>     *   **TCP/IP协议栈：** HTTP/HTTPS、Socket编程、网络层、传输层等基本概念。
>     *   **分布式系统网络：** RPC、负载均衡、服务发现等。
> 5.  **数据库：**
>     *   **SQL (熟练):** MySQL, PostgreSQL等关系型数据库的查询、设计、优化。
>     *   **NoSQL (了解):** MongoDB, Redis等键值对、文档型数据库的基本概念和使用场景。
> 6.  **版本控制：**
>     *   **Git (精通):** 分支管理、合并、冲突解决、Pull Request/Merge Request流程。
> 
> **二、核心AI/ML理论与库**
> 
> 这是你“AI理论能力较好”的延伸，需要将理论与实践结合。
> 
> 1.  **数学基础：**
>     *   **线性代数：** 向量、矩阵、特征值、SVD等。
>     *   **概率论与数理统计：** 概率分布、假设检验、贝叶斯定理等。
>     *   **微积分：** 导数、梯度、链式法则等（理解反向传播）。
>     *   **优化理论：** 梯度下降、SGD、Adam等优化器原理。
> 2.  **机器学习基础：**
>     *   **基本概念：** 监督学习、无监督学习、强化学习、过拟合、欠拟合、交叉验证等。
>     *   **经典算法：** 线性回归、逻辑回归、决策树、SVM、K-Means、PCA等。
>     *   **库：** `scikit-learn` (用于传统ML算法)。
> 3.  **深度学习框架：**
>     *   **PyTorch (精通):** **LLM领域的主流框架。** 掌握张量操作、自动微分、神经网络构建、自定义层、数据加载、分布式训练等。
>     *   **TensorFlow (了解):** 了解其生态和基本使用，尤其是在工业界一些老项目或特定场景下仍有应用。
> 4.  **数据处理与分析：**
>     *   **NumPy (精通):** 科学计算基础库。
>     *   **Pandas (精通):** 数据清洗、处理、分析。
>     *   **SciPy (熟悉):** 科学计算、优化、信号处理等。
>     *   **数据可视化：** Matplotlib, Seaborn。
> 
> **三、大语言模型 (LLM) 专属技术栈**
> 
> 这是你未来生成式AI方向的核心。
> 
> 1.  **LLM核心概念与架构：**
>     *   **Transformer架构 (精通):** Self-Attention、Multi-Head Attention、Encoder-Decoder结构、Position Encoding等。
>     *   **预训练与微调：** Pre-training、Fine-tuning (Full FT, LoRA, QLoRA)、Instruction Tuning、Prompt Tuning、P-tuning等。
>     *   **对齐技术：** RLHF (Reinforcement Learning from Human Feedback)。
>     *   **模型压缩与加速：** 量化 (Quantization)、剪枝 (Pruning)、蒸馏 (Distillation)。
> 2.  **LLM生态工具：**
>     *   **Hugging Face Ecosystem (精通):**
>         *   `transformers` 库：加载、使用、微调各种预训练模型。
>         *   `tokenizers` 库：分词器原理与使用。
>         *   `datasets` 库：大规模数据集加载与处理。
>         *   `accelerate` 库：分布式训练加速。
>     *   **Prompt Engineering：** 设计有效的Prompt，引导LLM生成高质量内容。
>     *   **Agent Frameworks：** LangChain, LlamaIndex (你比赛会用到，提前学习)。
>     *   **模型评估：** perplexity, BLEU, ROUGE, GLUE, SuperGLUE等指标，以及针对LLM的特定评估方法。
> 3.  **特定LLM模型：**
>     *   **BERT系列：** 了解其双向编码器特性。
>     *   **GPT系列：** 了解其单向生成特性。
>     *   **Llama系列、Mistral、Qwen等开源模型：** 了解其架构特点、训练数据、性能表现。
> 
> **四、MLOps (机器学习运维)**
> 
> 将模型从实验室带到生产环境的桥梁，Infra方向的重要组成部分。
> 
> 1.  **容器化：**
>     *   **Docker (精通):** 构建、管理、部署容器化应用。
> 2.  **容器编排：**
>     *   **Kubernetes (熟悉/了解):** 部署、管理、扩展容器化应用。了解Pod, Deployment, Service, Ingress等核心概念。
> 3.  **CI/CD (持续集成/持续部署)：**
>     *   **工具：** Jenkins, GitLab CI, GitHub Actions等，用于自动化代码测试、构建、部署。
> 4.  **实验管理与版本控制：**
>     *   **MLflow, Weights & Biases (W&B), TensorBoard：** 跟踪实验、管理模型版本、可视化训练过程。
> 5.  **模型服务与部署：**
>     *   **Web框架：** Flask, FastAPI (构建API接口)。
>     *   **模型服务框架：** Triton Inference Server, BentoML, TorchServe等，用于高性能模型推理。
> 6.  **监控与日志：**
>     *   **工具：** Prometheus, Grafana (监控指标), ELK Stack (Elasticsearch, Logstash, Kibana) (日志管理)。
> 
> **五、AI Infrastructure (Infra)**
> 
> 如果你最终目标是Infra，这些是核心。
> 
> 1.  **云计算平台 (至少精通一个，熟悉其他)：**
>     *   **AWS (Amazon Web Services):** EC2 (虚拟机), S3 (对象存储), EKS (Kubernetes服务), SageMaker (ML平台), Lambda (无服务器计算)。
>     *   **Azure (Microsoft Azure):** 对应服务。
>     *   **GCP (Google Cloud Platform):** 对应服务，尤其在AI领域有优势。
> 2.  **分布式系统：**
>     *   **理论：** CAP定理、一致性模型、共识算法 (Paxos, Raft)。
>     *   **框架：** Apache Spark (大数据处理), Ray (分布式AI计算), Dask (并行计算)。
>     *   **RPC框架：** gRPC。
> 3.  **高性能计算 (HPC)：**
>     *   **GPU编程：** CUDA (如果你想深入GPU底层优化)。
>     *   **分布式训练通信：** NCCL (NVIDIA Collective Communications Library), Horovod。
>     *   **并行计算：** OpenMP, MPI (了解概念)。
> 4.  **存储系统：**
>     *   **分布式文件系统：** HDFS (了解), S3-compatible对象存储。
>     *   **网络存储：** NAS, SAN (了解)。
> 5.  **系统设计：**
>     *   **可伸缩性、可靠性、可维护性、安全性。**
> 
> **六、特定领域（如量子机器学习）**
> 
> 既然你提到了量子机器学习库设计赛，这部分也需要关注。
> 
> 1.  **量子计算基础：**
>     *   **量子力学基础：** 量子比特、叠加、纠缠、测量。
>     *   **量子门：** Pauli门、Hadamard门、CNOT门等。
>     *   **量子算法：** Grover's algorithm, Shor's algorithm (了解概念)。
> 2.  **量子机器学习：**
>     *   **概念：** 量子神经网络、变分量子本征求解器 (VQE)、量子支持向量机等。
> 3.  **量子编程框架：**
>     *   **Qiskit (IBM):** Python库，用于构建和运行量子程序。
>     *   **Cirq (Google):** 另一个流行的量子编程库。
> 
> **七、软技能**
> 
> 这些虽然不是技术栈，但对于职业发展同样重要。
> 
> 1.  **问题解决能力：** 独立思考、分析问题、寻找解决方案。
> 2.  **文献阅读与理解：** 快速学习新知识、跟进前沿研究。
> 3.  **沟通与协作：** 与团队成员有效沟通、参与项目讨论。
> 4.  **调试能力：** 定位和解决代码中的bug。
> 5.  **英文阅读能力：** 大部分前沿论文和技术文档都是英文。

好吧，啃呗（）

早知道先好好学学 C++，现在这么多任务有无力感...

况且学业也得兼顾，绩点啥的还是会被各种环境压力 push（恼