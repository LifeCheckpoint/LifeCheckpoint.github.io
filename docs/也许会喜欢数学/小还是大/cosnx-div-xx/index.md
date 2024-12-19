---
description: 一个有趣的极限
sidebar_label: 'lim (1-Πcos(nx))/x^2'
title: lim (1-Πcos(nx))/x^2 的计算思路
authors: [Life_Checkpoint]
tags: [math]
---

**计算极限**

$$
\begin{aligned}
\lim_{x\to0}\frac{1-\cos x\cos2x\cos3x\cdots \cos nx}{x^2}
\end{aligned}
$$

## Method 1: Term-by-term Expansion

Notice that $\cos x=1-\frac{x^2}{2}+O(x^3)$, then

$$
\begin{aligned}
\lim_{x\to0}\frac{1-\cos x\cos2x\cos3x\cdots \cos nx}{x^2}&=\lim_{x\to0}\frac{1-\left( 1-\frac{x^2}{2}+O(x^3) \right)\left( 1-\frac{(2x)^2}{2}+O(x^3) \right)\cdots\left( 1-\frac{(nx)^2}{2}+O(x^3) \right)}{x^2}
\end{aligned}
$$

Comparing coefficients, the coefficient of $x^0$ and $x^2$ is

$$
\begin{aligned}
[x^0]&=1\cdot1\cdot\dots\cdot1=1\\
[x^2]&=-\frac{1^2}{2}-\frac{2^2}{2}-\dots-\frac{n^2}{2}=-\frac{1}{12} n (n+1) (2 n+1)
\end{aligned}
$$

Then the limitation

$$
\begin{aligned}
\lim_{x\to0}\frac{1-\left( 1-\frac{x^2}{2}+O(x^3) \right)\left( 1-\frac{(2x)^2}{2}+O(x^3) \right)\cdots\left( 1-\frac{(nx)^2}{2}+O(x^3) \right)}{x^2}&=\lim_{x\to0}\frac{1-\left( 1-\frac{1}{12} n (n+1) (2 n+1)x^2+O(x^3) \right)}{x^2}\\
&=\frac{1}{12} n (n+1) (2 n+1)+\lim_{x\to0}O(x)\\
&=\frac{1}{12} n (n+1) (2 n+1)
\end{aligned}
$$

## Method 2: Global Expansion

donote $\cos x\cos2x\cdots\cos nx$ as $\prod_{k=1}^n\cos kx$,

$$
\begin{aligned}
f(x)&=\prod_{k=1}^n\cos kx\\
f(0)&=1\\
\rightarrow\quad\log f(x)&=\sum_{k=1}^n\log \cos kx\\
\rightarrow\quad\frac{f'(x)}{f(x)}
&=\sum_{k=1}^n\frac{-k\sin kx}{\cos kx}\\
&=\sum_{k=1}^n(-k\tan kx)\\
\rightarrow\quad f'(x)&=f(x)\sum_{k=1}^n(-k\tan kx)\\
f'(0)&=f(0)\cdot0=0\\
\rightarrow\quad f''(x)&=f'(x)\sum_{k=1}^n(-k\tan kx)+f(x)\sum_{k=1}^n(-k^2\sec^2 kx)\\
f''(0)&=f(0)\sum_{k=1}^n(-k^2)=-\frac{1}{6} n (n+1) (2 n+1)\\
\end{aligned}
$$

Then

$$
\begin{aligned}
f(x)&=1+\frac{-\frac{1}{6}n(n+1)(2n+1)}{2!}(x-0)^2+O(x^3)\\
&=1-\frac{1}{12}n(n+1)(2n+1)x^2+O(x^3)
\end{aligned}
$$

$$
\begin{aligned}
\lim_{x\to0}\frac{1-f(x)}{x^2}&=\lim_{x\to0}\frac{1-(1-\frac{1}{12}n(n+1)(2n+1)x^2+O(x^3))}{x^2}\\
&=\frac{1}{12}n(n+1)(2n+1)+\lim_{x\to0}O(x)\\
&=\frac{1}{12}n(n+1)(2n+1)
\end{aligned}
$$
