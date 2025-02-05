---
description: 王者百题系列积分
sidebar_label: '王者百题 T59'
title: 王者百题 T59
authors: [Life_Checkpoint]
tags: [math]
---

求

$$
\begin{aligned}
\int \sqrt{\frac{x+\sqrt{x}}{x-\sqrt{x}}}\mathrm{d}x
\end{aligned}
$$

观察到积分中没有出现常数，一般来说可以先尝试化简，例如消去因式 $\sqrt{x}$.

$$
\begin{aligned}
\int \sqrt{\frac{x+\sqrt{x}}{x-\sqrt{x}}}\mathrm{d}x&=\int \sqrt{\frac{\sqrt{x}+1}{\sqrt{x}-1}}\mathrm{d}x\\
&=\int \sqrt{\frac{(\sqrt{x}+1)^2}{(\sqrt{x}-1)(\sqrt{x}+1)}}\mathrm{d}x\\
&=\int \frac{\sqrt{x}+1}{\sqrt{x-1}}\mathrm{d}x
\end{aligned}
$$

这里已经出现了明显的双元构型，稍加处理即可获得结果。

令 $p=\sqrt{x}$, $q=\sqrt{x-1}$, $p^2-q^2=1$, $p\mathrm{d}p=q\mathrm{d}p$, $p\mathrm{d}p=x$.

$$
\begin{aligned}
\int \frac{\sqrt{x}+1}{\sqrt{x-1}}\mathrm{d}x&=\int \frac{2(p+1)p\mathrm{d}p}{q}\\
&=\int \frac{2(p+1)q\mathrm{d}q}{q}\\
&=2\int \mathrm{d}q+2\int p\mathrm{d}q\\
&=q+2\left( \frac{1}{2}pq+\frac{p^2-q^2}{2}\int \frac{\mathrm{d}q}{p} \right)\\
&=2q+pq+\ln(p+q)+C\\
&=(2+\sqrt{x})\sqrt{x-1}+\ln(\sqrt{x}+\sqrt{x-1})+C
\end{aligned}
$$