---
description: 椭圆相关 API
sidebar_label: 'ellipse'
title: Ellipses
authors: [Life_Checkpoint]
tags: [manim, math]
sidebar_position: 0
---

# ellipse 相关构造 API

---

### 1. 通过轴点构造椭圆

#### `EllipseXY(center: Point, X_axis_point: Point, Y_axis_point: Point, name: str = "")`
通过椭圆的中心点、长轴端点和短轴端点构造椭圆。

**参数**:
- `center` (Point): 椭圆的中心点。
- `X_axis_point` (Point): 椭圆长轴的一个端点。
- `Y_axis_point` (Point): 椭圆短轴的一个端点。
- `name` (str, 可选): 椭圆的名称，默认为空字符串。

**返回值**:
- `Ellipse`: 返回通过轴点构造的椭圆对象。

---

### 2. 通过数值构造椭圆

#### `EllipseNXY(center: Point, half_x_a: Number, half_y_b: Number, name: str = "")`
通过椭圆的中心点、长轴半长和短轴半长来构造椭圆。

**参数**:
- `center` (Point): 椭圆的中心点。
- `half_x_a` (Number): 椭圆长轴的半长度。
- `half_y_b` (Number): 椭圆短轴的半长度。
- `name` (str, 可选): 椭圆的名称，默认为空字符串。

**返回值**:
- `Ellipse`: 返回通过数值构造的椭圆对象。

---

### 3. 通过离心率构造椭圆

#### `EllipseCE(center: Point, focus: Point, eccentricity: Number, name: str = "")`
通过椭圆的中心点、焦点和离心率来构造椭圆。

**参数**:
- `center` (Point): 椭圆的中心点。
- `focus` (Point): 椭圆的焦点。
- `eccentricity` (Number): 椭圆的离心率（`eccentricity = c/a`）。
- `name` (str, 可选): 椭圆的名称，默认为空字符串。

**返回值**:
- `Ellipse`: 返回通过离心率构造的椭圆对象。

---

### 4. 通过数值离心率构造椭圆

#### `EllipseNCE(center: Point, focus_c: Number, eccentricity: Number, focus_on: str = "x", name: str = "")`
通过椭圆的中心点、焦距、离心率以及焦点位置来构造椭圆。

**参数**:
- `center` (Point): 椭圆的中心点。
- `focus_c` (Number): 椭圆的焦距（`focus_c = c`）。
- `eccentricity` (Number): 椭圆的离心率。
- `focus_on` (str, 可选): 焦点位于 x 轴（"x"）还是 y 轴（"y"），默认为 "x"。
- `name` (str, 可选): 椭圆的名称，默认为空字符串。

**返回值**:
- `Ellipse`: 返回通过数值离心率构造的椭圆对象。
