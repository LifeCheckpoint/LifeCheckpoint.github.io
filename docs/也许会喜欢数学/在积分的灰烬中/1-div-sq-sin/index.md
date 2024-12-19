---
description: 一个简单的椭圆积分
sidebar_label: '1/sqrt(sinx)'
title: 一个简单的椭圆积分
authors: [Life_Checkpoint]
tags: [math]
---


$$
\begin{aligned}
\int \frac{1}{\sqrt{\sin x}}\mathrm{d}x&=\int \frac{1}{\sqrt{\cos\left( x-\frac{\pi}{2} \right)}}\mathrm{d}x\\
&=\int \frac{1}{\sqrt{1-2\sin\left( \frac{x}{2}-\frac{\pi}{4} \right)}}\mathrm{d}x\\
&=2\int \frac{1}{\sqrt{1-2\sin\left( \frac{x}{2}-\frac{\pi}{4} \right)}}\mathrm{d}\left( \frac{x}{2}-\frac{\pi}{4} \right)\\
&=2F\left(\left. \frac{x}{2}-\frac{\pi}{4}\right|2 \right)
\end{aligned}
$$