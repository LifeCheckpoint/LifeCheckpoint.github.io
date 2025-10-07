---
title: 01. 绪论：核心概念
authors: [Life_Checkpoint]
tags: [note, db]
sidebar_position: 1
---
## 一、引言：数据库系统概述

本课程主要学习数据库系统的基本概念、原理和应用，特别是关系型数据库系统。

### 1.1 什么是数据库（Database）？
一个非常庞大、集成的**数据集合**。它建模了真实的**企业实体**（Entities，如学生、课程）及其**关系**（Relationships，如选课）。

### 1.2 什么是数据库管理系统（DBMS）？
一个旨在存储和管理数据库的**软件包**（Software Package）。

### 1.3 为什么使用DBMS？（**考试重点**）
使用DBMS相比直接使用文件系统具有显著优势：
*   **数据独立性**（Data Independence）和高效访问：应用程序与数据结构和存储方式解耦。
*   **减少应用开发时间**（Reduced Application Development Time）。
*   **数据完整性**（Data Integrity）和**安全性**（Security）。
*   **统一数据管理**（Uniform Data Administration）。
*   **并发访问**（Concurrent Access），支持多用户同时操作。
*   **从崩溃中恢复**（Recovery from Crashes）。

### 1.4 为什么学习数据库？
*   从“计算”转向“信息”：数据量和多样性爆炸式增长。
*   DBMS涵盖了计算机科学的诸多领域，如操作系统、语言、理论、人工智能、多媒体、逻辑等。

## 二、数据、数据模型与数据模式

### 2.1 数据（Data）
描述现实世界事物的符号，是信息的现有形式。

### 2.2 数据模型（Data Model）
用于描述数据的一系列概念和定义。

### 2.3 数据模式（Schema）
使用给定数据模型对特定数据集合的描述。
*   **关系模型**（Relational Model）：目前最广泛使用的数据模型。
    *   核心概念：**关系**（Relation），本质上是一个带有行和列的表。
    *   每个关系都有一个模式，描述其列或字段。

### 2.4 抽象级别（Levels of Abstraction）（**考试重点**）
数据库系统通过多层抽象来管理数据，实现数据独立性。
*   **视图**（Views）：描述用户如何看待数据。
*   **概念模式**（Conceptual Schema）：定义逻辑结构。
*   **物理模式**（Physical Schema）：描述使用的文件和索引。
*   模式定义使用**数据定义语言**（DDL），数据修改/查询使用**数据操作语言**（DML）。

**示例：大学数据库**
*   **概念模式**：
    *   学生（sid: string, name: string, login: string, age: integer, gpa:real）
    *   课程（cid: string, cname: string, credits:integer）
    *   选课（sid: string, cid: string, grade:integer）
*   **物理模式**：
    *   关系存储为无序文件。
    *   学生表的第一列有索引。
*   **外部模式（视图）**：
    *   课程信息（cid: string, enrollment:integer）

### 2.5 数据独立性（Data Independence）（**考试重点**）
应用程序与数据结构和存储方式的解耦。这是使用DBMS最重要的好处之一。
*   **逻辑数据独立性**（Logical Data Independence）：保护应用程序不受数据逻辑结构变化的影响。
*   **物理数据独立性**（Physical Data Independence）：保护应用程序不受数据物理存储结构变化的影响。

## 三、数据库技术发展与分类

### 3.1 按数据模型发展分类
*   **无管理阶段**（1960年前）：科学计算。
*   **文件系统阶段**：简单数据管理。
*   **DBMS出现**：
    *   1964年：第一个DBMS（美国）IDS，**网络模型**（Network Model）。
    *   1969年：IBM第一个商用DBMS，**层次模型**（Hierarchical Model）。
    *   1970年：E.F.Codd提出**关系数据模型**（Relational Data Model）。
    *   其他数据模型：**面向对象模型**（Object-Oriented Model）、**演绎模型**（Deductive Model）、**ER模型**（ER Model）等。

### 3.2 按DBMS架构发展分类
*   **集中式数据库系统**（Centralized Database Systems）。
*   **并行数据库系统**（Parallel Database Systems）。
*   **分布式数据库系统**（Distributed Database Systems）和联邦数据库系统（Federated Database Systems）。
*   **移动数据库系统**（Mobile Database Systems）。

### 3.3 按基于数据库的应用系统架构发展分类
*   **集中式结构**：主机+终端。
*   **分布式结构**。
*   **客户端/服务器结构**（Client/Server Structure）。
*   **三层/多层结构**（Three-tier/Multi-tier Structure）。
*   **移动计算**（Mobile Computing）。
*   **网格计算**（Grid Computing）/ **云计算**（Cloud Computing）。

### 3.4 按应用领域扩展分类
*   **联机事务处理**（OLTP）。
*   **工程数据库**（Engineering Database）。
*   **演绎数据库**（Deductive Database）。
*   **多媒体数据库**（Multimedia Database）。
*   **时态数据库**（Temporal Database）。
*   **空间数据库**（Spatial Database）。
*   **数据仓库**（Data Warehouse）、**联机分析处理**（OLAP）、**数据挖掘**（Data Mining）。
*   **知识管理**（Knowledge Management）。

## 四、数据库系统组成与生命周期

### 4.1 数据库系统组成
**应用程序**（Applications）+ **DBMS** + **数据库**（Database）+ **数据库管理员**（DBA）。
其中，**DBMS是数据库系统的核心**。

**DBMS核心功能**：
*   高级用户接口。
*   查询处理和优化。
*   目录管理。
*   并发控制和恢复。
*   完整性约束检查。
*   访问控制。

### 4.2 数据库系统生命周期
1.  **数据库系统规划**。
2.  **数据库设计**：信息需求、过程需求、数据模式、DBMS特性、硬件/操作系统特性。
3.  **数据库建立和加载**。
4.  **数据库运行、管理和维护**。
5.  **数据库扩展和重构**。