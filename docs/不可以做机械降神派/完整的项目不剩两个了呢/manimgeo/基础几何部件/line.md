---
description: 线相关 API
sidebar_label: 'line'
title: Lines
authors: [Life_Checkpoint]
tags: [manim, math]
sidebar_position: 2
---

# line 相关构造 API

---

### 1. 构造线段

#### `LineSegmentPP(start: Point, end: Point, name: str = "")`
构造一条由起点和终点定义的线段。

**参数**:
- `start` (Point): 起点。
- `end` (Point): 终点。
- `name` (str, 可选): 线段的名称，默认为空字符串。

**返回值**:
- `LineSegment`: 返回一个线段对象。

---

### 2. 构造射线

#### `RayPP(start: Point, end: Point, name: str = "")`
构造一条由起点和终点定义的射线。

**参数**:
- `start` (Point): 起点。
- `end` (Point): 终点。
- `name` (str, 可选): 射线的名称，默认为空字符串。

**返回值**:
- `Ray`: 返回一个射线对象。

---

### 3. 构造直线

#### `InfinityLinePP(start: Point, end: Point, name: str = "")`
构造一条由起点和终点定义的直线。

**参数**:
- `start` (Point): 起点。
- `end` (Point): 终点。
- `name` (str, 可选): 直线的名称，默认为空字符串。

**返回值**:
- `InfinityLine`: 返回一条直线对象。

---

### 4. 平移构造线

#### `LineTranslation(line: Line, vec: Vector, name: str = "")`
构造一条平移后的线。

**参数**:
- `line` (Line): 原始线。
- `vec` (Vector): 平移向量。
- `name` (str, 可选): 新线的名称，默认为空字符串。

**返回值**:
- `Line`: 返回平移后的线对象。

---

### 5. 垂直构造线

#### `LineVerticalPL(point: Point, line: Line, name: str = "")`
构造一条垂直于给定线的线。

**参数**:
- `point` (Point): 垂线经过的点。
- `line` (Line): 给定的原始线。
- `name` (str, 可选): 新线的名称，默认为空字符串。

**返回值**:
- `Line`: 返回垂直线对象。

---

### 6. 平行构造线

#### `LineParallelPL(point: Point, line: Line, name: str = "")`
构造一条平行于给定线的线。

**参数**:
- `point` (Point): 平行线经过的点。
- `line` (Line): 给定的原始线。
- `name` (str, 可选): 新线的名称，默认为空字符串。

**返回值**:
- `Line`: 返回平行线对象。

---

### 7. 过一点构造圆切线

#### `Lines2TangentsCirP(circle: Circle, point: Point, name: str = "")`
构造一条通过指定点的圆切线。

**参数**:
- `circle` (Circle): 给定的圆。
- `point` (Point): 圆外或圆上的一点。
- `name` (str, 可选): 新线的名称，默认为空字符串。

**返回值**:
- `InfinityLines2`: 返回圆切线对象。

---

### 8. 构造两圆外切线

#### `Lines2TangentsOutCirCir(circle1: Circle, circle2: Circle, name: str = "")`
构造两圆的外切线。

**参数**:
- `circle1` (Circle): 第一个圆。
- `circle2` (Circle): 第二个圆。
- `name` (str, 可选): 新线的名称，默认为空字符串。

**返回值**:
- `InfinityLines2`: 返回外切线对象。

---

### 9. 构造两圆内切线

#### `Lines2TangentsInCirCir(circle1: Circle, circle2: Circle, name: str = "")`
构造两圆的内切线。

**参数**:
- `circle1` (Circle): 第一个圆。
- `circle2` (Circle): 第二个圆。
- `name` (str, 可选): 新线的名称，默认为空字符串。

**返回值**:
- `InfinityLines2`: 返回内切线对象。

---

### 10. 获取两条线中的单线对象

#### `LineOfLines2(lines2: Lines2, index: Literal[0, 1], name: str = "") -> Line`
从两条线组合对象中获取单条线。

**参数**:
- `lines2` (Lines2): 两条线的组合对象。
- `index` (Literal[0, 1]): 要获取的线的索引（0 或 1）。
- `name` (str, 可选): 新线的名称，默认为空字符串。

**返回值**:
- `Line`: 返回指定的单条线对象。

---

### 11. 获取两条线的线对象列表

#### `LineOfLines2List(lines2: Lines2, name: str = "") -> List[Line, Line]`
从两条线组合对象中获取单条线的列表。

**参数**:
- `lines2` (Lines2): 两条线的组合对象。
- `name` (str, 可选): 新线的名称，默认为空字符串。

**返回值**:
- `List[Line]`: 返回包含两条线的列表。
