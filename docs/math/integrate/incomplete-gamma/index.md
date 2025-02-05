---
description: 上不完全 Gamma 函数的简单应用
sidebar_label: '上不完全 Gamma 函数'
title: 上不完全 Gamma 函数的简单介绍
authors: [Life_Checkpoint]
tags: [math]
---

**上不完全 Gamma 函数指的是如下函数**

*(我还没有检查过≡[。。]≡)*

$$
\begin{aligned}
\Gamma(a,z)&=\int_{z}^\infty t^{a-1}\mathrm{e}^{-t}\mathrm{d}t\\
\frac{\mathrm{d}}{\mathrm{d}z}\Gamma(a,z)&=-z^{a-1}\mathrm{e}^{-z}
\end{aligned}
$$

注意到这里 $z$ 已经成为了积分的一个下限，也就是对 $z$ 所作的操作都不会进入到积分中，从而拓展了操作空间.

由此可以得到几个积分的例子:

$$
\begin{aligned}
\int2^{-x^2}\mathrm{d}x&=\int \mathrm{e}^{-(x\sqrt{\log2})^2}\mathrm{d}x\\
&=\int \mathrm{e}^{-z^2}\mathrm{d}\sqrt{\frac{z}{\log2}}&\text{(set $x=\sqrt{\frac{z}{\log2}}$)}\\
&=\int \frac{1}{2\log2\cdot\sqrt{\frac{z}{\log2}}} \mathrm{e}^{-z^2}\mathrm{d}z\\
&=-\frac{1}{2\sqrt{\log2}}\int -z^{\frac{1}{2}-1}\mathrm{e}^{-z^2}\mathrm{d}z\\
&=-\frac{\Gamma \left( \frac{1}{2},x^2\log2 \right) }{2\sqrt{\log2}}
\end{aligned}
$$

常见的菲涅尔积分函数 $\mathrm{FresnelS}(z)=\mathrm{S}(z)$ 等，指数化后也可以约化为上不完全 $\Gamma$ 函数.

$$
\begin{aligned}
\mathrm{S}(z)&=\int_{0}^z\sin\left( \frac{\pi t^2}{2} \right)\mathrm{d}t\\
\end{aligned}
$$

设 $\frac{\pi t^2}{2}=s^2$,

$$
\begin{aligned}
\int_{0}^{\sqrt{\frac{2}{\pi}}z} \sin s^2\cdot \sqrt{\frac{2}{\pi}}\mathrm{d}t&=\sqrt{\frac{2}{\pi}}\int_{0}^{\sqrt{\frac{2}{\pi}}z}\frac{\mathrm{e}^{ \mathrm{i}s^2 }-\mathrm{e}^{ -\mathrm{i}s^2 }}{2\mathrm{i}}\mathrm{d}s\\
&=-\frac{2\sqrt{2}\mathrm{i}}{\sqrt{\pi}}\left( \int_{0}^{\sqrt{\frac{2}{\pi}}z}\mathrm{e}^{ \mathrm{i}s^2 }\mathrm{d}s-\int_{0}^{\sqrt{\frac{2}{\pi}}}\mathrm{e}^{ -\mathrm{i}s^2 }\mathrm{d}s \right) 
\end{aligned}
$$

如果令 $\omega^{\pm}=\frac{\sqrt{2}}{2}\pm\frac{\sqrt{2}}{2}\mathrm{i}$ 为单位根, $(\omega s)^2=r$ 那么这里有

$$
\begin{aligned}
\int \mathrm{e}^{\mathrm{i}s^2}\mathrm{d}s&=\int \mathrm{e}^{-(\omega^- s)^2}\mathrm{d}s\\
&=\int \mathrm{e}^{ -r}\mathrm{d}\sqrt{\frac{r}{\omega^-}}\\
&=\int \frac{1}{2\omega^-\sqrt{\frac{r}{\omega^-}}}\mathrm{e}^{ -r }\mathrm{d}r\\
&=\frac{1}{2\sqrt{\omega^-}}\int r^{\frac{1}{2}-1}\mathrm{e}^{-r}\mathrm{d}r\\
&=\frac{1}{2\sqrt{\omega^-}}\Gamma\left( \frac{1}{2},r \right)
\end{aligned}
$$

对于负指数积分处理是类似的

$$
\begin{aligned}
\int \mathrm{e}^{ -\mathrm{i}s^2 }=\frac{1}{2\sqrt{\omega^+}}\Gamma\left( \frac{1}{2},r \right)
\end{aligned}
$$

依次记上面两个积分结果为 $I^+$, $I^-$, 有 $I^+(0)=\frac{\sqrt{\pi}}{2\sqrt{\omega^-}}$, $I^+(0)=\frac{\sqrt{\pi}}{2\sqrt{\omega^+}}$. 也即

$$
\begin{aligned}
&\quad\,\,-\frac{2\sqrt{2}\mathrm{i}}{\sqrt{\pi}}\left( \int_{0}^{\sqrt{\frac{2}{\pi}}z}\mathrm{e}^{ \mathrm{i}s^2 }\mathrm{d}s-\int_{0}^{\sqrt{\frac{2}{\pi}}}\mathrm{e}^{ -\mathrm{i}s^2 }\mathrm{d}s \right) \\
&=-\frac{2\sqrt{2}\mathrm{i}}{\sqrt{\pi}}\left( I^+\left( \sqrt{\frac{2}{\pi}}z \right)-I^-\left( \sqrt{\frac{2}{\pi}}z \right)-\frac{\sqrt{\pi}}{2\sqrt{\omega^-}}+\frac{\sqrt{\pi}}{2\sqrt{\omega^+}} \right) \\
&=-\frac{2\sqrt{2}\mathrm{i}}{\sqrt{\pi}}\left( \frac{1}{2\sqrt{\omega^-}}\Gamma\left( \frac{1}{2},\frac{\sqrt{2}}{\pi} z\right)- \frac{1}{2\sqrt{\omega^+}}\Gamma\left( \frac{1}{2},\frac{\sqrt{2}}{\pi} z\right) -\frac{\sqrt{\pi}}{2\sqrt{\omega^-}}+\frac{\sqrt{\pi}}{2\sqrt{\omega^+}}\right)\\
&=\frac{2\sqrt{2}\mathrm{i}}{\sqrt{\pi}}\left( \frac{1}{2\sqrt{\omega^+}} -\frac{1}{2\sqrt{\omega^-}}\right)\Gamma\left( \frac{1}{2},\frac{\sqrt{2}}{\pi} z\right)+\sqrt{2}\mathrm{i}\left( \frac{1}{\sqrt{\omega^-}} -\frac{1}{\sqrt{\omega^+}}\right)\\
&=\frac{2\sqrt{2}\mathrm{i}}{\sqrt{\pi}}\cdot\left( -\frac{\mathrm{i}}{\sqrt{2}} \right)\Gamma\left( \frac{1}{2},\frac{\sqrt{2}}{\pi}z \right)+\sqrt{2}\mathrm{i}\cdot \sqrt{2}\mathrm{i}\\
&=\frac{2}{\sqrt{\pi}}\Gamma\left( \frac{1}{2},\frac{\sqrt{2}}{\pi} z\right)-2
\end{aligned}
$$

也即 $\mathrm{FresnelS}$ 函数的 $\Gamma$ 约化形式.