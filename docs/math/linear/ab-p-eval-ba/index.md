---
description: 幂等阵一题：已知 AB，求 BA
sidebar_label: '幂等阵一题：已知 AB，求 BA'
title: 幂等阵一题：已知 AB，求 BA
authors: [Life_Checkpoint]
tags: [math]
---

本文同步于知乎 👉 [幂等矩阵一题：已知 AB，求 BA](https://zhuanlan.zhihu.com/p/1890130189113091953)

这是一道关于幂等矩阵的题目

:::note 题目

已知矩阵 $A\in \mathbb{R}^{3\times2}$, $B\in \mathbb{R}^{2\times3}$，矩阵 $AB$ 为幂等矩阵的倍数，且

$$
AB=\begin{bmatrix}8&0&-4\\-\frac{3}{2}&9&-6\\-2&0&1\end{bmatrix}
$$

求 $BA$.

:::

首先观察 $AB$ 的性质，有 $r(AB)=2$. 由于 $A\in \mathbb{R}^{3\times2}$, $B\in \mathbb{R}^{2\times3}$, 有 $r(A)=r(B)=2$. 此时 $A$ 为列满秩，$B$ 为行满秩。

题目提示 $AB$ 为投影方阵的倍数，求幂得

$$
\begin{aligned}
(AB)^2&=\begin{bmatrix}
 72 & 0 & -36 \\
 -\frac{27}{2} & 81 & -54 \\
 -18 & 0 & 9 \\
\end{bmatrix}
\\&=9AB
\end{aligned}
$$

最开始想构造一个对称式，它在求平方后有类似于幂等的一些良好性质，例如 $(AB+BA)^2$，但是最后留下 $(BA)^2$ 与 $BA$ 并不能很好的消除

思路转变为，如何找到一个求幂后依然保持自身结构的式子。随即可注意到

$$
\begin{aligned}
(AB+I)^2&=(AB)^2
+AB+AB+I\\
&=11AB+I
\\
(kAB+I)^2&=k^2(AB)^2+2kAB+I\\
&=(9k^2+2k)AB+I
\end{aligned}
$$

在这里，对 $AB+I$ 的求幂都会转变为 $AB$ 前面的系数，也就是它保持了线性结构，不会产生多余的项。

这时候可以意识到**伍德伯里公式**了，也即恒等式 $(I+AB)^{-1}=I-A(I+BA)^{-1}B$，由于对矩阵求逆可以看作是一种幂的关系，所以不妨尝试猜想 $(AB+I)^{-1}$ 与 $AB+I$ 具有相同结构。不妨设

$$
\begin{aligned}
(AB+I)^{-1}&=kAB+I\\
I&=(kAB+I)(AB+I)\\
&=k(AB)^2+AB+kAB+I\\
&=(10k+1)AB+I
\end{aligned}
$$

取 $k=-\frac{1}{10}$ 即可得原式恒成立，即 $-\frac{1}{10}AB+I=(AB+I)^{-1}$.

根据恒等式 $(I+AB)^{-1}=I-A(I+BA)^{-1}B$ 可得

$$
\begin{aligned}
-\frac{1}{10}AB&=-A(I+BA)^{-1}B\\
AB&=10A(I+BA)^{-1}B
\end{aligned}
$$

由于 $A$ $B$ 分别是列满秩、行满秩，则分别存在左逆 $A_{L}$ 与右逆 $B_{R}$，

$$
\begin{aligned}
A_{L}ABB_{R}&=10A_{L}A(I+BA)^{-1}BB_{R}\\
I&=10(I+BA)^{-1}
\end{aligned}
$$

求逆得到

$$
\begin{aligned}
I+BA&=\left( \frac{1}{10} I\right)^{-1}\\
&=10I\\
BA&=9I
\end{aligned}
$$