---
description: 时滞微分方程，感觉怪怪的...
sidebar_label: '时滞微分方程解法一例'
title: 时滞微分方程解法一例
authors: [Life_Checkpoint]
tags: [math]
---

**解微分方程**

$$
\begin{aligned}
f(x)-f(x-1)=f'(x)
\end{aligned}
$$

平凡解：

$$
\begin{aligned}
f(x)&=kx+b\\
f(x)-f(x-1)&=f'(x)
\end{aligned}
$$

对于非平凡解，假定其为振荡周期解

$$
\begin{aligned}
f(x)&=\mathrm{e}^{ Ax }\cos(Bx+\phi)\\
f'(x)&=A e^{A x} \cos (B x+\phi )-B e^{A x} \sin (B x+\phi )\\
&=-A e^{A x} \sin (\phi ) \sin (B x)+A e^{A x} \cos (\phi ) \cos (B x)\\&\quad\;-B e^{A x} \cos (\phi ) \sin (B x)-B e^{A x} \sin (\phi ) \cos (B x)
\end{aligned}
$$

再来看左侧，有

$$
\begin{aligned}
f(x)-f(x-1)&=e^{A x} \cos (B x+\phi )-e^{A (x-1)} \cos (B (x-1)+\phi )\\
&=e^{A (x-1)} \sin (\phi ) \sin (B (x-1))-e^{A x} \sin (\phi ) \sin (B x)\\&\quad\;-e^{A (x-1)} \cos (\phi ) \cos (B (x-1))+e^{A x} \cos (\phi ) \cos (B x)\\
&=-e^{A (x-1)} \cos (B) \cos (Bx) \cos (\phi )-e^{A (x-1)} \sin (B) \sin (Bx) \cos (\phi )\\&\quad\;-e^{A (x-1)} \sin (B) \cos (Bx) \sin (\phi )+e^{A (x-1)} \cos (B) \sin ( Bx) \sin (\phi )\\&\quad\;-e^{A x} \sin ( Bx) \sin (\phi )+e^{A x} \cos ( Bx) \cos (\phi )
\end{aligned}
$$

对比上下两式系数，即可得关于 $A$, $B$, $\phi$ 的方程

$$
\begin{aligned}
R:[\mathrm{e}^{ Ax }\sin Bx]&=-A\sin \phi-B\cos \phi\\
[\mathrm{e}^{ Ax }\cos Bx]&=A\cos \phi-B\sin \phi\\\\
L:[\mathrm{e}^{ Ax }\sin Bx]&=-\mathrm{e}^{ -A }\sin B\cos \phi+\mathrm{e}^{ -A }\cos B\sin \phi-\sin \phi\\
[\mathrm{e}^{ Ax }\cos Bx]&=-\mathrm{e}^{-A}\cos B\cos \phi-\mathrm{e}^{ -A }\sin B\sin \phi+\cos \phi
\end{aligned}
$$

即，满足以下方程的 $A$, $B$ 构成原式的一组特解：

$$
\begin{aligned}
\begin{cases}
-\mathrm{e}^{ -A }\sin B\cos \phi+\mathrm{e}^{ -A }\cos B\sin \phi-\sin \phi&=-A\sin \phi-B\cos \phi \\
-\mathrm{e}^{-A}\cos B\cos \phi-\mathrm{e}^{ -A }\sin B\sin \phi+\cos \phi&=A\cos \phi-B\sin \phi
\end{cases}
\end{aligned}
$$

