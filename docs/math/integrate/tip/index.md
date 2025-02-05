---
description: 关于积分，有一些话想说...
sidebar_label: '积分三两事'
title: 积分三两事
authors: [Life_Checkpoint]
tags: [math]
---

# 积分三两事

## 常数问题

嗯，这里的不定积分默认**不加**常数 $C$

具体原因可以戳 👉 [虚调子：(2022)不定积分的一个根本性问题](https://zhuanlan.zhihu.com/p/586089550)

大概来讲嘛...原因就是，**简单的** $+C$ **修正对于很多函数并不直接成立，需要细致严谨的讨论才能确定最终的常数修正情况**

举一个简单的例子

$$\begin{aligned}\int\frac{1}{x}\mathrm{d}x=\log|x|+C\end{aligned}$$

其实这是❌**不完整**的，完整结果应该是

$$\begin{aligned}\int\frac{1}{x}\mathrm{d}x=\begin{cases}\log x+C_1&(x>0)\\\log (-x)+C_2&(x<0)\end{cases}\end{aligned}$$

毕竟分段嘛，两个常数才行

为了规避很多复杂讨论，就统一忽略常数咯

## 错误问题

如果有任何错误请与我联系——平时会...有点粗心 ≡[。。]≡

感谢您的包容~

**Contributors (From 2024-12-20) / Fran**