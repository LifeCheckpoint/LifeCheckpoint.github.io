---
description: 好难的积分啊...
sidebar_label: 'asin x acos x atan x'
title: asin x acos x atan x 的积分处理思路
authors: [Life_Checkpoint]
tags: [math]
---

**本篇内容也同步发布在知乎**

[积分∫arcsinx arccosx arctanx dx的处理思路](https://zhuanlan.zhihu.com/p/4020814599)

计算这个积分还是挺烧脑的...第一次算这么复杂的积分

过程有些多有些杂，也许不能保证完全正确，但是结构和处理方法应该是没有问题...

*如果有误请指出*

### 1. 代换处理，干掉几个反三角  

知道 $x\in(-1,1)$ ，不妨用代换 $x=\cos t$ , 可以直接得到 $\arccos \cos t=t$ ， $\arcsin \cos t=\frac{\pi}{2}-t$

你说为什么不用别的三角函数代换，比如 $\tan$ ？嗯...你想， $\arcsin\cos x$ 这种起码消得掉，一消消俩，如果用了正切就会留下 $\arcsin\tan x$ 和 $\arccos\tan x$ 这俩没法化简的，不顺手

$\begin{aligned} \int \arcsin x\arccos x\arctan x\mathrm{d}x&=\int\arcsin (\cos t)\arccos( \cos t )\arctan (\cos t)\mathrm{d}(\cos t)\\ &=\int t\left( t-\frac{\pi}{2}\right)\sin t\cdot \arctan(\cos t)\mathrm{d}t \end{aligned}$

这个东西可以分解为俩积分的权和

$\begin{aligned}  I_{t}&=\int t\sin t\cdot \arctan(\cos t)\mathrm{d}t\\ I_{t^2}&=\int t^2\sin t\cdot \arctan(\cos t)\mathrm{d}t\\ I&=I_{t^2}-\frac{\pi}{2}I_{t} \end{aligned}$

从低次开始研究

### 2. $I_t$ 的计算  

先计算次数比较低的 $I_{t}$ . 注意到 $\arctan \cos t$ 无法化成初等函数, 而代换法刚才已经用过, 那就对它分部积分, 试图通过求导转化 $\arctan$ .

$ \int t\sin t\mathrm{d}t=\sin t-t\cos t$

分部后三角函数是二次的，所以可以化成二倍角

$\begin{aligned} \int t\sin t\cdot \arctan (\cos t)\mathrm{dt}&=(\sin t-t\cos t)\arctan(\cos t)-\int(\sin t-t\cos t)\left( -\frac{\sin t}{\cos^2t+1} \right)\mathrm{d}t\\ &=(\sin t-t\cos t)\arctan(\cos t)-\int\left( \frac{2t \sin (2 t)-8}{2\cos (2 t)+6}+1 \right)\mathrm{d}t\\ &=(\sin t-t\cos t)\arctan(\cos t)-t-\frac{1}{4}\int\frac{2t \sin (2 t)-8}{\cos (2 t)+3}\mathrm{d}(2t)\\ \end{aligned}$

令 $T=2t$ , $T\in\left( 0,\frac{\pi}{2}\right)$ , 注意到常数能分离成以 $\cos T$ 为分母的积分, 通过万能代换即可求出, 这里省略了过程

$\begin{aligned}  \int \frac{T\sin T-8}{\cos T+3}\mathrm{d}T&=\int \frac{T\sin T}{\cos T+3}\mathrm{d}T-\int \frac{8}{\cos T+3}\mathrm{d}T\\ &=\int \frac{T\sin T}{\cos T+3}\mathrm{d}T-4\sqrt{2}\arctan\left( \frac{\tan \frac{T}{2}}{\sqrt{2}} \right) \end{aligned}$

左侧积分看起来与一个有趣的特殊积分 $\int_{0}^{\frac{\pi}{2}} \frac{x\sin x}{1+\cos^2x}$ 是近亲，所以我搜索了一下资料，找到了一些资料

[xsinx/(1+cos²x)的不定积分怎么求？](https://www.zhihu.com/question/452322422)

求完积分之后我才发现里面有一些现成结论，当时应该看得仔细一点（雾）

左侧积分有一个明显的因子 $T$ , 所以我们尝试分部积分一下, 看看是否有好的结构出现

$\begin{aligned}  \int \frac{T\sin T}{\cos T+3}\mathrm{d}T&=\int T\cdot \frac{\sin T}{\cos T+3}\mathrm{d}T\\ &=T\int \frac{\sin T}{\cos T+3}\mathrm{d}T-\int 1\left( \int \frac{\sin T}{\cos T+3}\mathrm{d}T \right)\mathrm{d}T\\ &=-T\log(\cos T+3)+\int \log(\cos T+3)\mathrm{d}T \end{aligned}$

熟悉的味道? 右侧积分看着就是特殊积分 $\int \log \cos x\mathrm{d}x$ 的变体, 似乎叫 $L$ 函数 (From 《积分的方法与技巧》)

由于两个不同类型的函数复合不方便处理, 回退到上一步. 现在, 分部积分和代换法都用过了, 如何处理这个三角和非三角混合的积分?

想了许久，想起来机器积分结果里出现了一堆复数，想是把 $\sin$ 和 $\cos$ 用复数展开，在复数域 $\mathbb{C}$ 上处理这个积分.

$\begin{aligned}  \cos x&=\frac{\mathrm{e}^{\mathrm{i}x}+\mathrm{e}^{-\mathrm{i}x}}{2}\\ \sin x&=\frac{\mathrm{e}^{\mathrm{i}x}-\mathrm{e}^{-\mathrm{i}x}}{2\mathrm{i}}\\ \end{aligned}$

令 $u=\mathrm{e}^{\mathrm{i}T}$ , $T=\frac{\log u}{\mathrm{i}}=-\mathrm{i}\log u$ , 接下来发现作为因子的分数可以有理分解

$\begin{aligned}  \int \frac{T\sin T}{\cos T+3}\mathrm{d}T&=\int \frac{T\cdot\frac{\mathrm{e}^{\mathrm{i}T}-\mathrm{e}^{-\mathrm{i}T}}{2\mathrm{i}}}{\frac{\mathrm{e}^{\mathrm{i}T}+\mathrm{e}^{-\mathrm{i}T}}{2}+3}\mathrm{d}T\\ &=-\int\frac{\mathrm{i}T \left(\mathrm{e}^{2 \mathrm{i} T}-1\right)}{6 \mathrm{e}^{\mathrm{i} T}+\mathrm{e}^{2 i T}+1}\mathrm{d}T\\ &=-\int \frac{\log u\cdot(u^2-1)}{u^2+6u+1}\mathrm{d}(-\mathrm{i}\log u)\\ &=\mathrm{i}\int \frac{u^2-1}{u((u+3)^2-8)}\cdot \log u\mathrm{d}u\\ &=\mathrm{i}\int \frac{((u+3)^2-8)-6u+2}{u((u+3)^2-8)}\cdot \log u\mathrm{d}u\\ &=\mathrm{i}\int\left( -\frac{\log u}{u}+\frac{2(3+u)\log u}{u^2+6u+1} \right)\mathrm{d}u\\ &=-\frac{\mathrm{i}}{2}\log^2 u+2\mathrm{i}\int \frac{3+u}{u^2+6u+1}\cdot \log u\mathrm{d}u\\ \end{aligned}$

非常惊喜，可以发现 $(u^2+6u+1)'=2(u+3)$ 正好是分子，那么右侧积分可以凑微分进行分部积分：

$\begin{aligned}  \int \frac{u+3}{u^2+6u+1}\mathrm{d}u&=\frac{1}{2}\int \frac{1}{u^2+6u+1}\mathrm{d}(u^2+6u+1)\\ &=\frac{1}{2}\log(u^2+6u+1) \end{aligned}$

$\begin{aligned}  \int \frac{3+u}{u^2+6u+1}\log u\mathrm{d}u&=\frac{1}{2}\log(u^2+6u+1)\log u-\frac{1}{2}\int \frac{\log(u^2+6u+1)}{u}\mathrm{d}u \end{aligned}$

上面可以因式分解. 因为形式上已经很接近特殊积分了, 这里我们正式引入多对数函数 $\mathrm{Li}_{n}(x)$ . $\mathrm{Li}_{n}(x)$ 表示n重对数, 特别地, 其中

$\begin{aligned}  \mathrm{Li}_{2}(x)&=\int-\frac{\log(1-x)}{x}\mathrm{d}x \end{aligned}$

这样，对于原式右侧积分我们就可以因式分解后凑一凑

$\begin{aligned}  &\int \frac{\log(u^2+6u+1)}{u}\mathrm{d}u\\ &=\int \frac{\log(u+3+2\sqrt{2})+\log(u+3-2\sqrt{2})}{u}\mathrm{d}u\\ &=\int \frac{\log(u+3+2\sqrt{2})}{u}\mathrm{d}u+\int \frac{\log(u+3-2\sqrt{2})}{u}\mathrm{d}u\\ &=\int \frac{\log\left( \frac{u}{3+2\sqrt{2}}+1 \right)+\log(3+2\sqrt{2})}{u}\mathrm{d}u+\int \frac{\log\left( \frac{u}{3-2\sqrt{2}}+1 \right)+\log(3-2\sqrt{2})}{u}\mathrm{d}u\\ &=\int \frac{\log\left( 1+\frac{u}{3+2\sqrt{2}} \right)}{\frac{u}{3+2\sqrt{2}}}\mathrm{d}\left( \frac{u}{3+2\sqrt{2}} \right)+\log(3+2\sqrt{2})\int \frac{\mathrm{d}u}{u}+\int \frac{\log\left( 1+\frac{u}{3-2\sqrt{2}} \right)}{\frac{u}{3-2\sqrt{2}}}\mathrm{d}\left( \frac{u}{3-2\sqrt{2}} \right)+\log(3-2\sqrt{2})\int \frac{\mathrm{d}u}{u}\\ &=\log u\log((3+2\sqrt{2})(3-2\sqrt{2}))-\mathrm{Li}_{2}(-(3+2\sqrt{2})u)-\mathrm{Li}_{2}(-(3-2\sqrt{2})u)\\ &=-\mathrm{Li}_{2}(-(3+2\sqrt{2})u)-\mathrm{Li}_{2}(-(3-2\sqrt{2})u) \end{aligned}$

其实很超标, 竟然化出来了. 所以我们有:

$\begin{aligned}  \int \frac{3+u}{u^2+6u+1}\log u\mathrm{d}u&=\frac{1}{2}\log u\log(u^2+6u+1)-\frac{1}{2}\left( -\mathrm{Li}_{2}(-(3+2\sqrt{2})u)-\mathrm{Li}_{2}(-(3-2\sqrt{2})u) \right) \\ &=\frac{1}{2}\log u\log(u^2+6u+1)+\frac{1}{2}\mathrm{Li}_{2}(-(3+2\sqrt{2})u)+\frac{1}{2}\mathrm{Li}_{2}(-(3-2\sqrt{2})u) \end{aligned}$

到这里积分 $I_{t}$ 就被解决了.

### 3. $I_{t^2}$ 的计算  

$\begin{aligned} I_{t^2}=\int t^2\sin t\cdot \arctan (\cos t)\mathrm{dt} \end{aligned}$

可能有人疑惑为啥一开始不就把 $t^2-\frac{\pi}{2}t$ 作为一个整体进行分部积分, 而要分成 $I_{t}$ 和 $I_{t^2}$ , 其实先用低次的较简单积分试试水，有助于理清思路.

$t^2$ 看着有点难受，照猫画虎一通处理掉 $\arctan$ .

$\begin{aligned}  \int t^2\sin t\mathrm{d}t&=2t\sin t+(2-t^2)\cos t \end{aligned}$

$\begin{aligned}  \int t^2\sin t\cdot \arctan (\cos t)\mathrm{dt}&=(2t\sin t+(2-t^2)\cos t)\arctan(\cos t)-\int(2t\sin t+(2-t^2)\cos t)\left( -\frac{\sin t}{\cos^2t+1} \right)\mathrm{d}t\\  \end{aligned}$

看到了二次式, 凑一凑二倍角吧（这里偷懒，用软件化的）

$\begin{aligned}  &\int(2t\sin t+(2-t^2)\cos t)\left( -\frac{\sin t}{1+\cos^2t} \right)\mathrm{d}t\\ =&\int\frac{t^2 \sin 2 t-2 t-2 \sin 2 t+2 t \cos 2 t}{2\cos 2 t+6}\mathrm{d}(2t)\\ \end{aligned}$

有点无计可施，只能复数展开观察情况

$\begin{aligned}  &\int \frac{(T^2-8)\sin T+4T\cos T-4T}{8\cos T+24}\mathrm{d}T\\ =&\int \frac{(T^2-8)\cdot\frac{\mathrm{e}^{\mathrm{i}T}-\mathrm{e}^{-\mathrm{i}T}}{2\mathrm{i}}+4T\cdot\frac{\mathrm{e}^{\mathrm{i}T}+\mathrm{e}^{-\mathrm{i}T}}{2}-4T}{8\frac{\mathrm{e}^{\mathrm{i}T}+\mathrm{e}^{-\mathrm{i}T}}{2}+24}\mathrm{d}T\\ =&\int \frac{-\mathrm{i}(T^2-8)(\mathrm{e}^{\mathrm{i}T}-\mathrm{e}^{-\mathrm{i}T})+4T(\mathrm{e}^{\mathrm{i}T}+\mathrm{e}^{-\mathrm{i}T})-8T}{8(\mathrm{e}^{\mathrm{i}T}+\mathrm{e}^{-\mathrm{i}T})+48}\mathrm{d}T\\ =&\int \frac{-8\mathrm{i}+4T-8T\mathrm{e}^{\mathrm{i}T}+\mathrm{i}T^2+(8\mathrm{i}+4T-\mathrm{i}T^2)\mathrm{e}^{2\mathrm{i}T}}{8(1+6\mathrm{e}^{\mathrm{i}t}+\mathrm{e}^{2\mathrm{i}T})}\mathrm{d}T\\ \end{aligned}$

顶不住了，实在不想化简，用软件辅助一下，换元 $u=\mathrm{e}^{\mathrm{i}T}$ , $T=-\mathrm{i}\log u$

$\begin{aligned}  &=\int\frac{u^2 \left(\mathrm{i} \log ^2u-4 \mathrm{i} \log u+8 \mathrm{i}\right)-\mathrm{i} \log ^2u+8 \mathrm{i} u \log u-4 \mathrm{i} \log u-8 \mathrm{i}}{8 \left(u^2+6 u+1\right)}\mathrm{d}u\\ &=\frac{\mathrm{i}}{8}\int\frac{(u-1) \left(8 (u+1)+(u+1) \log ^2u-4 (u-1) \log u\right)}{u^2+6 u+1}\mathrm{d}u \end{aligned}$

终于有一点可以分解的意思了，观察这个式子, 最显著的特征是 $\log^0$ , $\log^1$ , $\log^2$ , 既然是多项式, 便可以尝试按照这种方法对右侧积分分组，逐个击破.

$\begin{aligned}  &\int\frac{(u-1) \left(8 (u+1)+(u+1) \log ^2u-4 (u-1) \log u\right)}{u^2+6 u+1}\mathrm{d}u\\ =&\int \frac{8(u+1)(u-1)}{u^2+6u+1}\mathrm{d}u+\int \frac{(u+1)(u-1)\log^2u}{u^2+6u+1}\mathrm{d}u-\int \frac{4(u-1)^2\log u}{u^2+6u+1}\mathrm{d}u \end{aligned}$

### 4. 击破 $\log^0$ 

对于 $\log^0$ ，可以用三角换元简单积出

$\begin{aligned}  \int \frac{8(u^2-1)}{u^2+6u+1}\mathrm{d}u&=\int \frac{(u+3)^2-8-6(u+3)+16}{(u+3)^2-8}\mathrm{d}u\\ &=\int \mathrm{d}u-3\int \frac{\mathrm{d}(u+3)^2}{(u+3)^2-8}+16\int \frac{1}{(u+3)^2-8}\mathrm{d}(u+3)\\ &=u-3\log((u+3)^2-8)+2\sqrt{2}\log \frac{2\sqrt{2}-(u+3)}{2\sqrt{2}+(u+3)} \end{aligned}$

### 5. 击破 $\log^2$  

中间的 $\log^2$ 算是魔王积分，式子比较复杂，况且我们的工具本来也不多，只有有理分解能简化一些计算量.

$\begin{aligned}  \int \frac{(u^2-1)\log^2u}{u^2+6u+1}\mathrm{d}u&=\int \frac{[(u+3)^2-8-6(u+3)+16]\log^2u}{(u+3)^2-8}\mathrm{d}u\\ &=\int \log^2u\mathrm{d}u+\int \frac{(16-6u-18)\log^2u}{(u+3)^2-8}\mathrm{d}u\\ &=2 x-2 x \log x+x \log ^2x-2\int \frac{(3u+1)\log^2u}{u^2+6u+1}\mathrm{d}u \end{aligned}$

化掉了一个二次, 还算有些胜利的曙光.

> **死胡同一例**  
> 注意右边的积分式，上面是什么？woc, 这我们做过类似的啊！看原算式我们知道  
>  $\begin{aligned}  \int \frac{3+u}{u^2+6u+1}\log u\mathrm{d}u&=\frac{1}{2}\log(u^2+6u+1)\log u-\frac{1}{2}\int \frac{\log(u^2+6u+1)}{u}\mathrm{d}u\\ &=\frac{1}{2}\log(u^2+6u+1)\log u-\frac{1}{2}\left(\log u\log(u^2+6u+1)-\mathrm{Li}_{2}(-(3+2\sqrt{2})u)-\mathrm{Li}_{2}(-(3-2\sqrt{2})u\right)\\ &=\mathrm{Li}_{2}(-(3+2\sqrt{2})u)+\mathrm{Li}_{2}(-(3-2\sqrt{2})u) \end{aligned}$  
> 嘿, 不看不知道, 一看就想笑, 您瞧瞧这不就剩了一个 $\mathrm{Li}_{2}$ 函数？而且我们知道多重对数积分毕竟有对数俩字, 能处理对数积分的方法自然也能处理多重对数:   
>  $\begin{aligned}  \int \mathrm{Li}_{2}(x)\mathrm{d}x&=\int 1\cdot\mathrm{Li}_{2}(x)\mathrm{d}x\\ &=x\mathrm{Li}_{2}(x)-\int x\cdot\left( -\frac{\log (1-x)}{x} \right)\mathrm{d}x\\ &=x\mathrm{Li}_{2}(x)+\int \log(1-x)\mathrm{d}x\\ &=x\mathrm{Li}_{2}(x)+(x-1) \log (1-x)-x \end{aligned}$   
>  $\begin{aligned}  \int \left( \mathrm{Li}_{2}(-(3+2\sqrt{2})u)+\mathrm{Li}_{2}(-(3-2\sqrt{2})u) \right)\mathrm{d}u&=\int\frac{\mathrm{Li}_{2}(-(3+2\sqrt{2})u)}{-(3+2\sqrt{2})}\mathrm{d}(-(3+2\sqrt{2})u)+\int\frac{\mathrm{Li}_{2}(-(3-2\sqrt{2})u)}{-(3-2\sqrt{2})}\mathrm{d}(-(3-2\sqrt{2})u)\\ &=u \text{Li}_2\left(-(3-\sqrt{2}) u\right)+u\text{Li}_2\left(-\left(3+2 \sqrt{2}\right) u\right)-2 u\\ &\quad+\left(u-2 \sqrt{2}+3\right) \log \left(2 \sqrt{2} u+3 u+1\right)+\left(u+2 \sqrt{2}+3\right) \log \left(-2 \sqrt{2} u+3 u+1\right) \end{aligned}$   
> (看得我都不想做了)

这里又卡住了很久，想了分部积分的办法，然而积上去虽说可以却无比复杂，不像人干的. 有些灰心，但是用软件处理了一下积分式，发现了一个非常重要的变换：

$\begin{aligned}  \frac{(3 u+1) \log ^2u}{u^2+6 u+1}&=\frac{\left(2 \sqrt{2}+3\right) \log ^2u}{2 u+4 \sqrt{2}+6}+\frac{\left(3-2 \sqrt{2}\right) \log ^2u}{2 u-4 \sqrt{2}+6} \end{aligned}$

哥们被干懵了，这还能分...果然还是要养成分解式子的思维直觉（悲）. 所以说一早这样做多好，还弄些七奇八怪的

$\begin{aligned}  \int\frac{(3 u+1) \log ^2u}{u^2+6 u+1}\mathrm{d}u&=\left(\frac{2 \sqrt{2}+3}{2}\right) \int\frac{\log ^2u}{ u+2 \sqrt{2}+3}\mathrm{d}u+\left(\frac{3-2 \sqrt{2}}{2}\right)\int\frac{ \log ^2u}{u-2 \sqrt{2}+3}\mathrm{d}u\\ \end{aligned}$

这个会积了, 是吧? 研究两侧积分的一般形式

$\begin{aligned}  \int \frac{\log^2u}{u+c}\mathrm{d}u&=\int \frac{\log u}{u+c}\cdot \log u\mathrm{d}u\\ &=\int \frac{\log u}{u+c}\mathrm{d}u\cdot \log u-\int \left( \int \frac{\log u}{u+c}\mathrm{d}u \right) \frac{1}{u}\mathrm{d}u\\ \end{aligned}$

$u+c$ 那里可以分部积分，对吧

$\begin{aligned}  \int \frac{\log u}{u+c}\mathrm{d}u&=\log(u+c)\log u-\int \frac{\log(u+c)}{u}\mathrm{d}u\\ &=\log(u+c)\log u-\int \frac{\log\left( \frac{u+c}{c} \right)+\log c}{u}\mathrm{d}u\\ &=\log(u+c)\log u-\log c\cdot \int \frac{\mathrm{d}u}{u}+\int -\frac{\log\left( 1-\left(- \frac{u}{c} \right) \right)}{-\frac{u}{c}}\mathrm{d}\left( -\frac{u}{c} \right)\\ &=\log(u+c)\log u-\log c\log u+\mathrm{Li}_{2}\left( -\frac{u}{c} \right)\\ &=\log u\log\left( \frac{u}{c}+1 \right)+\mathrm{Li}_{2}\left( -\frac{u}{c} \right) \end{aligned}$

回到原式

$\begin{aligned}  \int \frac{\log^2u}{u+c}\mathrm{d}u&=\log^2 u\log\left( \frac{u}{c}+1 \right)+\mathrm{Li}_{2}\left(- \frac{u}{c} \right)\log u-\int \frac{\log u\log\left( \frac{u}{c}+1 \right)+\mathrm{Li}_{2}\left(- \frac{u}{c} \right)}{u}\mathrm{d}u\\ &=\log^2 u\log\left( \frac{u}{c}+1 \right)+\mathrm{Li}_{2}\left( -\frac{u}{c} \right)\log u-\int \frac{\log u\log\left( \frac{u}{c}+1 \right)}{u}\mathrm{d}u-\int\frac{\mathrm{Li}_{2}\left( -\frac{u}{c} \right)}{u}\mathrm{d}u\\ \end{aligned}$

为什么要把一个特殊函数丢到右边的积分里? 因为这就是 $\mathrm{Li}_{3}$ 的定义呀~

( $\mathrm{Li}_{3}$ : 你好.)

$\begin{aligned}  \mathrm{Li}_{3}(x)&=\int \frac{\mathrm{Li}_{2}(x)}{x}\mathrm{d}x \end{aligned}$

$\begin{aligned}  \int \frac{\mathrm{Li}_{2}\left( -\frac{u}{c} \right)}{u}\mathrm{d}u&=\int \frac{\mathrm{Li}_{2}\left( -\frac{u}{c} \right)}{-\frac{u}{c}}\mathrm{d}\left(- \frac{u}{c} \right)\\ &=\mathrm{Li}_{3}\left( -\frac{u}{c} \right) \end{aligned}$

左边的积分还可以把 $\log u$ 拿出来分部积分

$\begin{aligned}  \int \frac{\log\left( \frac{u}{c}+1 \right)}{u}\cdot\log u\mathrm{d}u&=-\mathrm{Li}_{2}\left( -\frac{u}{c} \right)\log u+\int \frac{\mathrm{Li}_{2}\left( -\frac{u}{c} \right)}{u}\mathrm{d}u\\ &=-\mathrm{Li}_{2}\left( -\frac{u}{c} \right)\log u+\int \frac{\mathrm{Li}_{2}\left( -\frac{u}{c} \right)}{-\frac{u}{c}}\mathrm{d}\left( -\frac{u}{c} \right)\\ &=-\mathrm{Li}_{2}\left( -\frac{u}{c} \right)\log u+\mathrm{Li}_{3}\left( -\frac{u}{c} \right) \end{aligned}$

那么最终结果即

$\begin{aligned}  \int \frac{\log^2u}{u+c}\mathrm{d}u&=\log\left( \frac{u}{c}+1 \right)\log^2u+\mathrm{Li}_{2}\left( -\frac{u}{c} \right)\log u-\left( -\mathrm{Li}_{2}\left( -\frac{u}{c} \right)\log u+\mathrm{Li}_{3}\left( -\frac{u}{c} \right) \right) -\mathrm{Li}_{3}\left( -\frac{u}{c} \right)\\ &=\log\left( \frac{u}{c}+1 \right)\log^2u+2\mathrm{Li}_{2}\left( -\frac{u}{c} \right) \log u-2\mathrm{Li}_{3}\left( -\frac{u}{c} \right) \end{aligned}$

$\begin{aligned}  \int \frac{\log^2u}{u+3+2\sqrt{2}}\mathrm{d}u&=\log\left( \frac{u}{3+2\sqrt{2}}+1 \right)\log^2u+2\mathrm{Li}_{2}\left( -\frac{u}{3+2\sqrt{2}} \right) \log u-2\mathrm{Li}_{3}\left( -\frac{u}{3+2\sqrt{2}} \right) \end{aligned}$

$\begin{aligned}  \int \frac{\log^2u}{u+3-2\sqrt{2}}\mathrm{d}u&=\log\left( \frac{u}{3-2\sqrt{2}}+1 \right)\log^2u+2\mathrm{Li}_{2}\left( -\frac{u}{3-2\sqrt{2}} \right) \log u-2\mathrm{Li}_{3}\left( -\frac{u}{3-2\sqrt{2}} \right) \end{aligned}$

好感动...终于终结了最难的那个对数积分. 是该计算最后剩下的 $\log^1$ 了.

### 6. 击破 $\log^1$

$\begin{aligned}  \int \frac{4(u-1)^2\log u}{u^2+6u+1}\mathrm{d}u \end{aligned}$

吸取处理 $\log^2$ 的经验，先尝试拆碎这个积分

$\begin{aligned}  \frac{4(u-1)^2}{u^2+6u+1}&=\frac{4(u+3)^2-8-32(u+3)+72}{(u+3)^2-8}\\ &=1+\frac{72-32(u+3)}{(u+3)^2-8}\\ &=1-\frac{32u+24}{u^2+6u+1} \end{aligned}$

这里的有理分解得列个方程求, 结果有点丑

$\begin{aligned}  1-\frac{32u+24}{u^2+6u+1}&=1-\frac{\left(12-5 \sqrt{2}\right) u-48 \sqrt{2}+72}{u-2 \sqrt{2}+3}-\frac{\left(5 \sqrt{2}-12\right) u}{u+2 \sqrt{2}+3} \end{aligned}$

（说实话，总觉得这一步神神鬼鬼的）

原积分转化为

$\begin{aligned}  \int \frac{4(u-1)^2\log u}{u^2+6u+1}\mathrm{d}u&=\int \left( 1-\frac{\left(12-5 \sqrt{2}\right) u-48 \sqrt{2}+72}{u-2 \sqrt{2}+3}-\frac{\left(5 \sqrt{2}-12\right) u}{u+2 \sqrt{2}+3} \right) \log u\mathrm{d}u\\ &=\int \log u\mathrm{d}u-(12-5\sqrt{2})\int \frac{u-\frac{12}{47}\left(9 \sqrt{2}-16\right)}{u-2\sqrt{2}+3}\log u\mathrm{d}u-(5\sqrt{2}-12)\int \frac{u}{u+2\sqrt{2}+3}\log u\mathrm{d}u \end{aligned}$

可以看到后面两项实际上形式是统一的，所以实质上我们就是在处理以下积分

$\begin{aligned}  \int \frac{u+a}{u+b}\log u\mathrm{d}u&=\int \frac{u+b+(a-b)}{u+b}\log u\mathrm{d}u\\ &=\int\left( 1+\frac{a-b}{u+b} \right)\log u\mathrm{d}u\\ &=\int \log u\mathrm{d}u+(a-b)\int \frac{\log u}{u+b}\mathrm{d}u\\ &=u\log u-u+(a-b)\int \frac{\log u}{u+b}\mathrm{d}u\\ \end{aligned}$

右边那一项是老朋友了，这里直接给出结果

$\begin{aligned}  \int \frac{\log u}{u+b}\mathrm{d}u&=\log u\log\left( \frac{u}{b}+1 \right)+\mathrm{Li}_{2}\left( -\frac{u}{b} \right) \end{aligned}$

于是有

$\begin{aligned}  \int \frac{u+a}{u+b}\log u\mathrm{d}u&=u\log u-u+(a-b)\log u\log\left( \frac{u}{b}+1 \right)+(a-b)\mathrm{Li}_{2}\left( -\frac{u}{b} \right) \end{aligned}$

$\begin{aligned}  \int \frac{u-\frac{12}{47}\left(9 \sqrt{2}-16\right)}{u-2\sqrt{2}+3}\log u\mathrm{d}u&=u\log u-u+\frac{1}{47} \left(51-14 \sqrt{2}\right)\log u\log\left( \frac{u}{3-2 \sqrt{2}}+1 \right)\\&\quad+\frac{1}{47} \left(51-14 \sqrt{2}\right)\mathrm{Li}_{2}\left( -\frac{u}{3-2 \sqrt{2}} \right) \end{aligned}$

$\begin{aligned}  \int \frac{u}{u+2\sqrt{2}+3}\log u\mathrm{d}u&=u\log u-u-(2\sqrt{2}+3)\log u\log\left( \frac{u}{2\sqrt{2}+3}+1 \right)\\ &\quad-(2\sqrt{2}+3)\mathrm{Li}_{2}\left( -\frac{u}{2\sqrt{2}+3} \right) \end{aligned}$

至此，所有的积分都已经求完！

到这个时候我已经在桌子前求了大半天的积分。是时候把它们代回到原式了...

### 7. 代回原式  
> 算力有限，化简是不可能的...

先是 $\log^1$ 积分的整合

$\begin{aligned}  \int \frac{4(u-1)^2\log u}{u^2+6u+1}\mathrm{d}u=\,\,&u\log u-u\\ &-(12-5\sqrt{2})\left( u\log u-u+\frac{1}{47} \left(51-14 \sqrt{2}\right)\log u\log\left( \frac{u}{3-2 \sqrt{2}}+1 \right)+\frac{1}{47} \left(51-14 \sqrt{2}\right)\mathrm{Li}_{2}\left( -\frac{u}{3-2 \sqrt{2}} \right) \right)\\ &-(5\sqrt{2}-12)\left( u\log u-u-(2\sqrt{2}+3)\log u\log\left( \frac{u}{2\sqrt{2}+3}+1 \right)-(2\sqrt{2}+3)\mathrm{Li}_{2}\left(- \frac{u}{2\sqrt{2}+3} \right) \right)  \end{aligned}$

然后是 $\log^0$ 积分

$\begin{aligned}  &\int \frac{8(u+1)(u-1)}{u^2+6u+1}\mathrm{d}u =u-3\log((u+3)^2-8)+2\sqrt{2}\log \frac{2\sqrt{2}-(u+3)}{2\sqrt{2}+(u+3)} \end{aligned}$

以及多得可怕的 $\log^2$ 积分

$\begin{aligned}  &\int \frac{(u^2-1)\log^2u}{u^2+6u+1}\mathrm{d}u\\ =\,\,&2 u-2 u \log u+u \log ^2u-2\int \frac{(3u+1)\log^2u}{u^2+6u+1}\mathrm{d}u\\ =\,\,&2 u-2 u \log u+u \log ^2u-2\left( \left(\frac{2 \sqrt{2}+3}{2}\right) \int\frac{\log ^2u}{ u+2 \sqrt{2}+3}\mathrm{d}u+\left(\frac{3-2 \sqrt{2}}{2}\right)\int\frac{ \log ^2u}{u-2 \sqrt{2}+3}\mathrm{d}u \right) \\ =\,\,&2 u-2 u \log u+u \log ^2u- \left(2 \sqrt{2}+3\right) \int\frac{\log ^2u}{ u+2 \sqrt{2}+3}\mathrm{d}u-\left(3-2 \sqrt{2}\right)\int\frac{ \log ^2u}{u-2 \sqrt{2}+3}\mathrm{d}u  \\ =\,\,&2 u-2 u \log u+u \log ^2u\\ &- \left(2 \sqrt{2}+3\right) \left( \log\left( \frac{u}{3+2\sqrt{2}}+1 \right)\log^2u+2\mathrm{Li}_{2}\left( -\frac{u}{3+2\sqrt{2}} \right) \log u-2\mathrm{Li}_{3}\left( -\frac{u}{3+2\sqrt{2}} \right)\right) \\ &-\left(3-2 \sqrt{2}\right)\left( \log\left( \frac{u}{3-2\sqrt{2}}+1 \right)\log^2u+2\mathrm{Li}_{2}\left( -\frac{u}{3-2\sqrt{2}} \right) \log u-2\mathrm{Li}_{3}\left( -\frac{u}{3-2\sqrt{2}} \right)\right)   \\ \end{aligned}$

三个对数积分加起来，乘上系数 $\frac{\mathrm{i}}{8}$ ,

$\begin{aligned}  &\frac{\mathrm{i}}{8}\bigg[u-3\log((u+3)^2-8)+2\sqrt{2}\log \frac{2\sqrt{2}-(u+3)}{2\sqrt{2}+(u+3)}+u\log u-u\\ &-(12-5\sqrt{2})\left( u\log u-u+\frac{1}{47} \left(51-14 \sqrt{2}\right)\log u\log\left( \frac{u}{3-2 \sqrt{2}}+1 \right)+\frac{1}{47} \left(51-14 \sqrt{2}\right)\mathrm{Li}_{2}\left( -\frac{u}{3-2 \sqrt{2}} \right) \right)\\ &-(5\sqrt{2}-12)\left( u\log u-u-(2\sqrt{2}+3)\log u\log\left( \frac{u}{2\sqrt{2}+3}+1 \right)-(2\sqrt{2}+3)\mathrm{Li}_{2}\left(- \frac{u}{2\sqrt{2}+3} \right) \right) \\ &+2 u-2 u \log u+u \log ^2u\\ &- \left(2 \sqrt{2}+3\right) \left( \log\left( \frac{u}{3+2\sqrt{2}}+1 \right)\log^2u+2\mathrm{Li}_{2}\left( -\frac{u}{3+2\sqrt{2}} \right) \log u-2\mathrm{Li}_{3}\left( -\frac{u}{3+2\sqrt{2}} \right)\right) \\ &-\left(3-2 \sqrt{2}\right)\left( \log\left( \frac{u}{3-2\sqrt{2}}+1 \right)\log^2u+2\mathrm{Li}_{2}\left( -\frac{u}{3-2\sqrt{2}} \right) \log u-2\mathrm{Li}_{3}\left( -\frac{u}{3-2\sqrt{2}} \right)\right) \bigg] \end{aligned}$

要换回三角元咯，还记得 $u=\mathrm{e}^{\mathrm{i}T}$ , $T=2t$ 麽，原式变成

$\begin{aligned}  &\frac{\mathrm{i}}{8}\bigg[{\mathrm{e}^{2\mathrm{i}{t}}}-3\log(({\mathrm{e}^{2\mathrm{i}{t}}}+3)^2-8)+2\sqrt{2}\log \frac{2\sqrt{2}-({\mathrm{e}^{2\mathrm{i}{t}}}+3)}{2\sqrt{2}+({\mathrm{e}^{2\mathrm{i}{t}}}+3)}+{\mathrm{e}^{2\mathrm{i}{t}}}\log {\mathrm{e}^{2\mathrm{i}{t}}}-{\mathrm{e}^{2\mathrm{i}{t}}}\\  &-(12-5\sqrt{2})\left( {\mathrm{e}^{2\mathrm{i}{t}}}\log {\mathrm{e}^{2\mathrm{i}{t}}}-{\mathrm{e}^{2\mathrm{i}{t}}}+\frac{1}{47} \left(51-14 \sqrt{2}\right)\log {\mathrm{e}^{2\mathrm{i}{t}}}\log\left( \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2 \sqrt{2}}+1 \right)+\frac{1}{47} \left(51-14 \sqrt{2}\right)\mathrm{Li}_{2}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2 \sqrt{2}} \right) \right)\\  &-(5\sqrt{2}-12)\left( {\mathrm{e}^{2\mathrm{i}{t}}}\log {\mathrm{e}^{2\mathrm{i}{t}}}-{\mathrm{e}^{2\mathrm{i}{t}}}-(2\sqrt{2}+3)\log {\mathrm{e}^{2\mathrm{i}{t}}}\log\left( \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{2\sqrt{2}+3}+1 \right)-(2\sqrt{2}+3)\mathrm{Li}_{2}\left(- \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{2\sqrt{2}+3} \right) \right) \\  &+2 {\mathrm{e}^{2\mathrm{i}{t}}}-2 {\mathrm{e}^{2\mathrm{i}{t}}} \log {\mathrm{e}^{2\mathrm{i}{t}}}+{\mathrm{e}^{2\mathrm{i}{t}}} \log ^2{\mathrm{e}^{2\mathrm{i}{t}}}\\  &- \left(2 \sqrt{2}+3\right) \left( \log\left( \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3+2\sqrt{2}}+1 \right)\log^2{\mathrm{e}^{2\mathrm{i}{t}}}+2\mathrm{Li}_{2}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3+2\sqrt{2}} \right) \log {\mathrm{e}^{2\mathrm{i}{t}}}-2\mathrm{Li}_{3}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3+2\sqrt{2}} \right)\right) \\  &-\left(3-2 \sqrt{2}\right)\left( \log\left( \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2\sqrt{2}}+1 \right)\log^2{\mathrm{e}^{2\mathrm{i}{t}}}+2\mathrm{Li}_{2}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2\sqrt{2}} \right) \log {\mathrm{e}^{2\mathrm{i}{t}}}-2\mathrm{Li}_{3}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2\sqrt{2}} \right)\right)  \bigg] \end{aligned}$

别忘了分部积分的分部哦，这就是我们最开始次数为 $t^2$ 的积分的结果

$\begin{aligned}  &\int t^2\sin t\cdot \arctan (\cos t)\mathrm{dt}\\ =\,\,&(2{t}\sin {t}+(2-{t}^2)\cos {t})\arctan(\cos {t})-\\ &\frac{\mathrm{i}}{8}\bigg[{\mathrm{e}^{2\mathrm{i}{t}}}-3\log(({\mathrm{e}^{2\mathrm{i}{t}}}+3)^2-8)+2\sqrt{2}\log \frac{2\sqrt{2}-({\mathrm{e}^{2\mathrm{i}{t}}}+3)}{2\sqrt{2}+({\mathrm{e}^{2\mathrm{i}{t}}}+3)}+{\mathrm{e}^{2\mathrm{i}{t}}}\log {\mathrm{e}^{2\mathrm{i}{t}}}-{\mathrm{e}^{2\mathrm{i}{t}}}\\  &-(12-5\sqrt{2})\left( {\mathrm{e}^{2\mathrm{i}{t}}}\log {\mathrm{e}^{2\mathrm{i}{t}}}-{\mathrm{e}^{2\mathrm{i}{t}}}+\frac{1}{47} \left(51-14 \sqrt{2}\right)\log {\mathrm{e}^{2\mathrm{i}{t}}}\log\left( \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2 \sqrt{2}}+1 \right)+\frac{1}{47} \left(51-14 \sqrt{2}\right)\mathrm{Li}_{2}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2 \sqrt{2}} \right) \right)\\  &-(5\sqrt{2}-12)\left( {\mathrm{e}^{2\mathrm{i}{t}}}\log {\mathrm{e}^{2\mathrm{i}{t}}}-{\mathrm{e}^{2\mathrm{i}{t}}}-(2\sqrt{2}+3)\log {\mathrm{e}^{2\mathrm{i}{t}}}\log\left( \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{2\sqrt{2}+3}+1 \right)-(2\sqrt{2}+3)\mathrm{Li}_{2}\left(- \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{2\sqrt{2}+3} \right) \right) \\  &+2 {\mathrm{e}^{2\mathrm{i}{t}}}-2 {\mathrm{e}^{2\mathrm{i}{t}}} \log {\mathrm{e}^{2\mathrm{i}{t}}}+{\mathrm{e}^{2\mathrm{i}{t}}} \log ^2{\mathrm{e}^{2\mathrm{i}{t}}}\\  &- \left(2 \sqrt{2}+3\right) \left( \log\left( \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3+2\sqrt{2}}+1 \right)\log^2{\mathrm{e}^{2\mathrm{i}{t}}}+2\mathrm{Li}_{2}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3+2\sqrt{2}} \right) \log {\mathrm{e}^{2\mathrm{i}{t}}}-2\mathrm{Li}_{3}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3+2\sqrt{2}} \right)\right) \\  &-\left(3-2 \sqrt{2}\right)\left( \log\left( \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2\sqrt{2}}+1 \right)\log^2{\mathrm{e}^{2\mathrm{i}{t}}}+2\mathrm{Li}_{2}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2\sqrt{2}} \right) \log {\mathrm{e}^{2\mathrm{i}{t}}}-2\mathrm{Li}_{3}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2\sqrt{2}} \right)\right)  \bigg] \end{aligned}$

回过神来，整理一下次数为 $t$ 积分的结果. 对于最底下那一条

$\begin{aligned}  &\int \frac{3+u}{u^2+6u+1}\log u\mathrm{d}u\\ &=\frac{1}{2}\log u\log(u^2+6u+1)+\frac{1}{2}\mathrm{Li}_{2}(-(3+2\sqrt{2})u)+\frac{1}{2}\mathrm{Li}_{2}(-(3-2\sqrt{2})u) \end{aligned}$

回到三角积分, 即

$\begin{aligned}  &-\frac{\mathrm{i}}{2}\log^2 u+2\mathrm{i}\int \frac{3+u}{u^2+6u+1}\cdot \log u\mathrm{d}u\\ &=\mathrm{i}\left( \log u\log(u^2+6u+1)-\frac{1}{2}\log^2 u+\mathrm{Li}_{2}(-(3+2\sqrt{2})u)+\mathrm{Li}_{2}(-(3-2\sqrt{2})u)\right)  \end{aligned}$

代回一开始的分部积分（咳，第一版还漏了）

$\begin{aligned}  &(\sin t-t\cos t)\arctan(\cos t)-\frac{1}{4}\left(\mathrm{i}\left( \log u\log(u^2+6u+1)-\frac{1}{2}\log^2 u+\mathrm{Li}_{2}(-(3+2\sqrt{2})u)+\mathrm{Li}_{2}(-(3-2\sqrt{2})u)\right) -4\sqrt{2}\arctan\left(\frac{\tan\frac{T}{2}}{\sqrt{2}}\right) \right)\end{aligned}$

换元， $u=\mathrm{e}^{\mathrm{i}T}$ , $T=2t$ , 易得原式等于

$\begin{aligned}(\sin t-t\cos t)\arctan(\cos t)-\frac{1}{4}  \left(\mathrm{i}\left( \log {\mathrm{e}^{2\mathrm{i}{t}}}\log({\mathrm{e}^{4\mathrm{i}{t}}}+6{\mathrm{e}^{2\mathrm{i}{t}}}+1)-\frac{1}{2}\log^2 {\mathrm{e}^{2\mathrm{i}{t}}}+\mathrm{Li}_{2}(-(3+2\sqrt{2}){\mathrm{e}^{2\mathrm{i}{t}}})+\mathrm{Li}_{2}(-(3-2\sqrt{2}){\mathrm{e}^{2\mathrm{i}{t}}})\right)-4\sqrt{2}\arctan\left(\frac{\tan\frac{T}{2}}{\sqrt{2}}\right)\right) \end{aligned}$

  


最开始的积分，是这两个不同次数的积分的权和

$\begin{aligned}  &\int t\left( t-\frac{\pi}{2}\right)\sin t\cdot \arctan(\cos t)\mathrm{d}t\\ &=I_{t^2}-\frac{\pi}{2}I_{t}\\ &=(2{t}\sin {t}+(2-{t}^2)\cos {t})\arctan(\cos {t})-\\ &\frac{\mathrm{i}}{8}\bigg[{\mathrm{e}^{2\mathrm{i}{t}}}-3\log(({\mathrm{e}^{2\mathrm{i}{t}}}+3)^2-8)+2\sqrt{2}\log \frac{2\sqrt{2}-({\mathrm{e}^{2\mathrm{i}{t}}}+3)}{2\sqrt{2}+({\mathrm{e}^{2\mathrm{i}{t}}}+3)}+{\mathrm{e}^{2\mathrm{i}{t}}}\log {\mathrm{e}^{2\mathrm{i}{t}}}-{\mathrm{e}^{2\mathrm{i}{t}}}\\  &-(12-5\sqrt{2})\left( {\mathrm{e}^{2\mathrm{i}{t}}}\log {\mathrm{e}^{2\mathrm{i}{t}}}-{\mathrm{e}^{2\mathrm{i}{t}}}+\frac{1}{47} \left(51-14 \sqrt{2}\right)\log {\mathrm{e}^{2\mathrm{i}{t}}}\log\left( \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2 \sqrt{2}}+1 \right)+\frac{1}{47} \left(51-14 \sqrt{2}\right)\mathrm{Li}_{2}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2 \sqrt{2}} \right) \right)\\  &-(5\sqrt{2}-12)\left( {\mathrm{e}^{2\mathrm{i}{t}}}\log {\mathrm{e}^{2\mathrm{i}{t}}}-{\mathrm{e}^{2\mathrm{i}{t}}}-(2\sqrt{2}+3)\log {\mathrm{e}^{2\mathrm{i}{t}}}\log\left( \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{2\sqrt{2}+3}+1 \right)-(2\sqrt{2}+3)\mathrm{Li}_{2}\left(- \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{2\sqrt{2}+3} \right) \right) \\  &+2 {\mathrm{e}^{2\mathrm{i}{t}}}-2 {\mathrm{e}^{2\mathrm{i}{t}}} \log {\mathrm{e}^{2\mathrm{i}{t}}}+{\mathrm{e}^{2\mathrm{i}{t}}} \log ^2{\mathrm{e}^{2\mathrm{i}{t}}}\\  &- \left(2 \sqrt{2}+3\right) \left( \log\left( \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3+2\sqrt{2}}+1 \right)\log^2{\mathrm{e}^{2\mathrm{i}{t}}}+2\mathrm{Li}_{2}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3+2\sqrt{2}} \right) \log {\mathrm{e}^{2\mathrm{i}{t}}}-2\mathrm{Li}_{3}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3+2\sqrt{2}} \right)\right) \\  &-\left(3-2 \sqrt{2}\right)\left( \log\left( \frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2\sqrt{2}}+1 \right)\log^2{\mathrm{e}^{2\mathrm{i}{t}}}+2\mathrm{Li}_{2}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2\sqrt{2}} \right) \log {\mathrm{e}^{2\mathrm{i}{t}}}-2\mathrm{Li}_{3}\left( -\frac{{\mathrm{e}^{2\mathrm{i}{t}}}}{3-2\sqrt{2}} \right)\right)  \bigg]\\ &-\frac{\pi}{2}\left[(\sin t-t\cos t)\arctan(\cos t)\\-\frac{1}{4}  \left(\mathrm{i}\left( \log {\mathrm{e}^{2\mathrm{i}{t}}}\log({\mathrm{e}^{4\mathrm{i}{t}}}+6{\mathrm{e}^{2\mathrm{i}{t}}}+1)-\frac{1}{2}\log^2 {\mathrm{e}^{2\mathrm{i}{t}}}+\mathrm{Li}_{2}(-(3+2\sqrt{2}){\mathrm{e}^{2\mathrm{i}{t}}})+\mathrm{Li}_{2}(-(3-2\sqrt{2}){\mathrm{e}^{2\mathrm{i}{t}}})\right)-4\sqrt{2}\arctan\left(\frac{\tan\frac{T}{2}}{\sqrt{2}}\right)\right) \right]  \end{aligned}$

换回最后一个元，**我们热烈而又忠诚地看到最终表达式的诞生**

### 8. Final Answer  

$\begin{aligned} &(2{\arccos x}\sin {\arccos x}+(2-{\arccos x}^2)\cos {\arccos x})\arctan(\cos {\arccos x})-\\ &\frac{\mathrm{i}}{8}\bigg[{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}-3\log(({\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}+3)^2-8)+2\sqrt{2}\log \frac{2\sqrt{2}-({\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}+3)}{2\sqrt{2}+({\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}+3)}+{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}\log {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}-{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}\\  &-(12-5\sqrt{2})\left( {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}\log {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}-{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}+\frac{1}{47} \left(51-14 \sqrt{2}\right)\log {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}\log\left( \frac{{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}}{3-2 \sqrt{2}}+1 \right)+\frac{1}{47} \left(51-14 \sqrt{2}\right)\mathrm{Li}_{2}\left( -\frac{{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}}{3-2 \sqrt{2}} \right) \right)\\  &-(5\sqrt{2}-12)\left( {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}\log {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}-{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}-(2\sqrt{2}+3)\log {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}\log\left( \frac{{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}}{2\sqrt{2}+3}+1 \right)-(2\sqrt{2}+3)\mathrm{Li}_{2}\left(- \frac{{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}}{2\sqrt{2}+3} \right) \right) \\  &+2 {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}-2 {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}} \log {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}+{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}} \log ^2{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}\\  &- \left(2 \sqrt{2}+3\right) \left( \log\left( \frac{{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}}{3+2\sqrt{2}}+1 \right)\log^2{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}+2\mathrm{Li}_{2}\left( -\frac{{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}}{3+2\sqrt{2}} \right) \log {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}-2\mathrm{Li}_{3}\left( -\frac{{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}}{3+2\sqrt{2}} \right)\right) \\  &-\left(3-2 \sqrt{2}\right)\left( \log\left( \frac{{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}}{3-2\sqrt{2}}+1 \right)\log^2{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}+2\mathrm{Li}_{2}\left( -\frac{{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}}{3-2\sqrt{2}} \right) \log {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}-2\mathrm{Li}_{3}\left( -\frac{{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}}{3-2\sqrt{2}} \right)\right)  \bigg]\\ &-\frac{\pi}{2}\left[(\sin {\arccos x}-{\arccos x}\cdot x)\arctan(\cos {\arccos x})\\-\frac{1}{4}  \left(\mathrm{i}\left( \log {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}\log({\mathrm{e}^{4\mathrm{i}{\arccos x}}}+6{\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}+1)-\frac{1}{2}\log^2 {\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}}+\mathrm{Li}_{2}(-(3+2\sqrt{2}){\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}})+\mathrm{Li}_{2}(-(3-2\sqrt{2}){\mathrm{e}^{2\mathrm{i}\cdot{\arccos x}}})\right)-4\sqrt{2}\arctan\left(\frac{\tan\frac{\arccos x}{2}}{\sqrt{2}}\right)\right) \right]  \end{aligned}$

乐~