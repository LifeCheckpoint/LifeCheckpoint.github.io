---
title: 09. 综合复习
authors: [Life_Checkpoint]
tags: [note, db]
sidebar_position: 9
---
## 1. 数据库系统概述 (Introduction)

### 1.1 什么是数据库 (Database) 和数据库管理系统 (DBMS)

*   **数据库 (Database)**：一个非常大、集成的**数据集合 (Collection of Data)**，用于建模现实世界的企业，包含**实体 (Entities)**（如学生、课程）和**关系 (Relationships)**（如选课）。
*   **数据库管理系统 (DBMS)**：一个旨在存储和管理数据库的**软件包 (Software Package)**。

### 1.2 为什么使用 DBMS

*   **数据独立性 (Data Independence)** 和高效访问。
*   减少应用程序开发时间。
*   **数据完整性 (Data Integrity)** 和**安全性 (Security)**。
*   统一数据管理。
*   **并发访问 (Concurrent Access)** 和**崩溃恢复 (Crash Recovery)**。

### 1.3 数据、数据模型和数据模式

*   **数据 (Data)**：描述现实世界事物的符号，是信息的存在形式。
*   **数据模型 (Data Model)**：描述数据的概念和定义集合。
*   **模式 (Schema)**：使用给定数据模型对特定数据集合的描述。
    *   **关系数据模型 (Relational Model of Data)**：目前最广泛使用的数据模型，核心概念是**关系 (Relation)**，即表格。每个关系都有一个模式，描述其列或字段。

### 1.4 抽象层次 (Levels of Abstraction)

DBMS 提供多层抽象，以实现数据独立性：

*   **视图 (Views)**：描述用户如何看待数据。
*   **概念模式 (Conceptual Schema)**：定义数据的逻辑结构。
*   **物理模式 (Physical Schema)**：描述使用的文件和索引。

**数据独立性 (Data Independence)** 是使用 DBMS 最重要的好处之一。

*   **逻辑数据独立性 (Logical Data Independence)**：保护应用程序免受数据逻辑结构变化的影响。
*   **物理数据独立性 (Physical Data Independence)**：保护应用程序免受数据物理结构变化的影响。

### 1.5 数据库技术发展与分类

*   **按数据模型发展**：
    *   无管理（1960年前）：科学计算。
    *   文件系统：简单数据管理。
    *   DBMS 出现：层次模型、网状模型、关系模型（E.F.Codd 于 1970 年提出）、面向对象模型等。
*   **按 DBMS 架构发展**：
    *   集中式数据库系统 (Centralized Database Systems)。
    *   并行数据库系统 (Parallel Database Systems)。
    *   分布式数据库系统 (Distributed Database Systems)。
    *   移动数据库系统 (Mobile Database Systems)。
*   **按应用系统架构发展**：
    *   集中式结构：主机+终端。
    *   分布式结构。
    *   客户端/服务器 (Client/Server) 结构。
    *   三层/多层结构。
    *   移动计算、网格计算、云计算。
*   **按应用领域扩展**：
    *   联机事务处理 (OLTP)。
    *   工程数据库。
    *   多媒体数据库。
    *   数据仓库 (Data Warehouse)、联机分析处理 (OLAP)、数据挖掘 (Data Mining)。

### 1.6 数据库系统组成

*   **应用程序 (Applications)**
*   **DBMS** (核心)
*   **数据库 (Database)**
*   **数据库管理员 (DBA)**

**DBMS 的核心功能**：

*   高级用户接口。
*   **查询处理 (Query Processing)** 和**优化 (Optimization)**。
*   **目录管理 (Catalog Management)**。
*   **并发控制 (Concurrency Control)** 和**恢复 (Recovery)**。
*   **完整性约束 (Integrity Constraints)** 检查。
*   **访问控制 (Access Control)**。

### 1.7 数据库系统生命周期

1.  数据库系统规划。
2.  **数据库设计 (Database Designing)**。
3.  数据库建立和加载。
4.  数据库运行、管理和维护。
5.  数据库扩展和重构。

## 2. 数据模型 (Data Model)

### 2.1 层次数据模型 (Hierarchical Data Model)

*   **基本思想**：用树形结构描述现实世界。
*   **记录 (Record)** 和**字段 (Field)**。
*   **父子关系 (Parent-Child Relationship, PCR)**：层次模型中最基本的数据关系，表示两个记录类型之间的 1: N 关系。
*   **限制**：每个记录类型只能有一个父。
*   **虚拟记录 (Virtual Record)**：为避免冗余，引入虚拟记录（实际上是指针）来表达非层次关系，如 M: N 关系、多父关系和 N 元关系。

### 2.2 网状数据模型 (Network Data Model)

*   **基本数据结构**：“**集 (Set)**”，表示现实世界中事物之间的 1: N 关系。“1”端称为**所有者 (Owner)**，“N”端称为**成员 (Member)**。一个记录类型可以是一个或多个集的所有者，也可以是一个或多个集的成员。
*   **突破**：突破了层次结构的限制，更容易表达非层次数据。
*   **LINK 记录类型**：用于表达自引用关系、M: N 关系和 N 元关系。

### 2.3 关系数据模型 (Relational Data Model)

*   **基本数据结构**：“**表 (Table)**”或**关系 (Relation)**。现实世界中的事物及其关系都表示为表，可以用严格的数学方法进行研究。
*   **特点**：
    *   基于集合论，抽象级别高。
    *   屏蔽所有底层细节，简单清晰，易于理解。
    *   可建立新的代数系统——**关系代数 (Relational Algebra)**。
    *   非过程化查询语言——**SQL**。
    *   **软连接 (Soft Link)**：与早期数据模型的本质区别。

#### 2.3.1 属性 (Attributes) 和域 (Domain)

*   **属性 (Attributes)**：现实世界中实体的特征。
*   **域 (Domain)**：属性值的取值范围。
    *   **原子数据 (Atomic Data)**：**第一范式 (1NF)** 要求属性值是原子的。
    *   **空值 (Null)**。

#### 2.3.2 关系 (Relation) 和元组 (Tuple)

*   **关系 (Relation)**：现实世界中的实体可以表示为一个或多个关系。关系是定义在其所有属性域上的 N 元关系。
    *   关系模式 $R = (A_1/D_1, A_2/D_2, ..., A_n/D_n)$，其中 $A_i$ 是属性，$D_i$ 是域。
    *   $n$ 是属性数量，称为关系的**度 (Degree)**。
*   **元组 (Tuple)**：关系的一个实例，是 $n$ 元组的集合 $r = \{t_1, t_2, ..., t_m\}$。
    *   每个元组 $t = <v_1, v_2, ..., v_n>$，其中 $v_i \in D_i$。
    *   关系也称为**表 (Table)**，属性也称为**列 (Column)**，元组也称为**行 (Row)**。

#### 2.3.3 键 (Keys)

*   **候选键 (Candidate Key)**：属性集合满足：
    1.  没有两个不同的元组在该属性集合上具有相同的值。
    2.  该属性集合的任何真子集都不满足条件 1。
*   **超键 (Superkey)**：满足条件 1 但不一定满足条件 2 的属性集合。
*   **主键 (Primary Key)**：如果一个关系有多个候选键，其中一个被 DBA 选定为主键，其他称为**备用键 (Alternate Key)**。
*   **全键 (All Key)**：如果主键包含关系的所有属性。
*   **外键 (Foreign Key)**：一个关系中的属性集合，用于“引用”另一个关系中的元组（必须对应于第二个关系的主键）。

#### 2.3.4 参照完整性 (Referential Integrity)

*   如果所有外键约束都得到强制执行，则实现**参照完整性 (Referential Integrity)**，即没有悬空引用 (Dangling References)。

#### 2.3.5 其他完整性约束 (Other Integrity Constraints)

*   **域完整性约束 (Domain Integrity Constraint)**：属性值必须在其域内。最基本的约束，所有流行的 RDBMS 都能自动检查。
*   **实体完整性约束 (Entity Integrity Constraint)**：每个关系都应有主键。主键的值必须唯一，且不能为 NULL。

#### 2.3.6 关系代数 (Relational Algebra)

*   **基本操作**：
    *   **选择 (Selection)** ($\sigma$)：从关系中选择满足条件的行子集。
    *   **投影 (Projection)** ($\pi$)：删除关系中不需要的列。
    *   **笛卡尔积 (Cross-product)** ($\times$)：组合两个关系。
    *   **集合差 (Set-difference)** ($-$)：关系 1 中有但关系 2 中没有的元组。
    *   **并 (Union)** ($\cup$)：关系 1 或关系 2 中有的元组。
*   **完备操作集**：$\{\sigma, \pi, \cup, -, \times\}$ 是一个完备操作集，其他关系代数操作都可以从它们派生。
*   **附加操作**：交 (Intersection)、连接 (Join)、除 (Division)、外连接 (Outer Join)、外并 (Outer Union)。这些不是必需的，但非常有用。
*   **封闭性 (Closed)**：每个操作都返回一个关系，因此操作可以组合。

##### 2.3.6.1 投影 ($\pi$)

*   删除不在投影列表中的属性。
*   结果模式只包含投影列表中的字段，名称与输入关系中相同。
*   投影操作符必须消除重复项。

##### 2.3.6.2 选择 ($\sigma$)

*   选择满足选择条件的行。
*   结果中没有重复项。
*   结果模式与输入关系相同。
*   结果关系可以作为另一个关系代数操作的输入。

##### 2.3.6.3 并、交、集合差

*   所有这些操作都接受两个输入关系，它们必须是**并兼容 (Union-compatible)** 的：
    *   字段数量相同。
    *   对应属性具有相同类型。

##### 2.3.6.4 笛卡尔积 ($\times$)

*   S1 的每一行与 R1 的每一行配对。
*   结果模式包含 S1 和 R1 的每个属性，如果可能，属性名称会继承。

##### 2.3.6.5 连接 (Joins)

*   **条件连接 (Condition Join)**：$R \bowtie_C S = \sigma_C (R \times S)$。
*   **等值连接 (Equi-Join)**：条件 $C$ 只包含等式条件的条件连接的特例。
*   **自然连接 (Natural Join)**：在所有公共属性上进行等值连接。

##### 2.3.6.6 除 (Division)

*   用于表达“找到预订了所有船只的水手”之类的查询。
*   $A/B = \{x | \forall y \in B, \exists xy \in A\}$。
*   **使用基本操作表达**：$A/B = \pi_x(A) - \pi_x((\pi_x(A) \times B) - A)$。

##### 2.3.6.7 外连接 (Outer Joins)

*   连接操作的扩展。在连接操作中，只有满足连接条件的匹配元组才保留在结果中。外连接会保留未匹配的元组，空缺部分填充为 Null。
    *   **左外连接 (Left Outer Join)** ($\ast \bowtie$)：保留左关系的所有元组。
    *   **右外连接 (Right Outer Join)** ($\bowtie \ast$)：保留右关系的所有元组。
    *   **全外连接 (Full Outer Join)** ($\ast \bowtie \ast$)：保留左右关系的所有元组。

##### 2.3.6.8 外并 (Outer Unions)

*   并操作的扩展。可以合并两个非并兼容的关系。
*   结果中的属性集是两个操作数属性集的并集。
*   原始元组中不存在的属性值填充为 NULL。

#### 2.3.7 关系演算 (Relational Calculus)

*   关系代数需要指定操作顺序，而关系演算只需指示结果必须满足的逻辑条件。
*   **元组关系演算 (Tuple Relational Calculus, TRC)**：变量范围是元组。
*   **域关系演算 (Domain Relational Calculus, DRC)**：变量范围是域元素（属性值）。
*   **公式 (Formulas)**：演算中的表达式。
*   **不安全查询 (Unsafe Queries)**：可能产生无限数量答案的语法正确的演算查询。
*   **关系完备性 (Relational Completeness)**：关系代数和关系演算具有相同的表达能力。SQL 语言基于关系演算，因此可以表达关系代数/演算中可表达的任何查询。

### 2.4 ER 数据模型 (ER Data Model)

*   **概念模型 (Concept Model)**：实体-关系，独立于实际 DBMS。
*   **实体 (Entity)**：现实世界中可区分的对象。用一组属性描述。
*   **实体集 (Entity Set)**：相似实体的集合。
*   **关系 (Relationship)**：两个或多个实体之间的关联。
*   **关系集 (Relationship Set)**：相似关系的集合。
*   **基数比约束 (Cardinality Ratio Constraints)**：关系可以是 1:1、1: N 和 M: N。
*   **参与约束 (Participation Constraints)**：实体参与关系的最小和最大数量。
    *   **完全参与 (Total Participation)**：实体集中的每个实体都必须参与关系。
    *   **部分参与 (Partial Participation)**：实体集中的实体不一定都参与关系。
*   **ER 模型高级主题**：
    *   **弱实体 (Weak Entity)**。
    *   **特化 (Specialization)** 和**泛化 (Generalization)**：类似于面向对象数据模型中的继承。
    *   **聚合 (Aggregation)**：允许将关系集视为实体集，以便参与其他关系。
    *   **类别 (Category)**：允许表达由不同类型实体组成的实体集。

### 2.5 面向对象数据模型 (Object-Oriented Data Model)

*   解决关系数据模型的不足（如突破 1NF、缺乏语义信息、数据类型少）。
*   面向对象分析和编程。
*   对象持久化存储的需求。
*   对象-关系 DBMS (Object-Relation DBMS)。
*   原生（纯）面向对象 DBMS。

### 2.6 其他数据模型

*   **基于逻辑的数据模型 (Logic-based Data Model)**（演绎 DBMS）：扩展 DBMS 的查询功能（特别是递归查询功能），提升演绎能力。
*   **时态数据模型 (Temporal Data Model)**。
*   **空间数据模型 (Spatial Data Model)**。
*   **XML 数据模型 (XML Data Model)**：用于互联网数据存储、数据交换标准、信息系统集成、半结构化数据表达等。

## 3. 用户接口和 SQL 语言 (User Interfaces and SQL Language)

### 3.1 DBMS 用户接口

*   **查询语言 (Query Languages)**：
    *   形式化查询语言 (Formal Query Language)。
    *   表格查询语言 (Tabular Query Language)。
    *   图形查询语言 (Graphic Query Language)。
    *   受限自然语言查询语言 (Limited Natural Language Query Language)。
*   接口和维护工具 (GUI)。
*   API。
*   类库 (Class Library)。

### 3.2 关系查询语言

*   **关系代数 (Relational Algebra)**：更具操作性，非常适合表示执行计划。
*   **关系演算 (Relational Calculus)**：让用户描述他们想要什么，而不是如何计算（非操作性，声明性）。
*   **SQL (Structured Query Language)**：最成功的关系数据库语言。

### 3.3 SQL 语言分类

*   **数据定义语言 (Data Definition Language, DDL)**：用于定义、删除或修改数据模式。
*   **查询语言 (Query Language, QL)**：用于检索数据。
*   **数据操作语言 (Data Manipulation Language, DML)**：用于插入、删除或更新数据。
*   **数据控制语言 (Data Control Language, DCL)**：用于控制用户对数据的访问权限。

### 3.4 SQL 基本查询

*   `SELECT [DISTINCT] target-list FROM relation-list WHERE qualification`
*   **概念评估策略**：
    1.  计算 `relation-list` 中关系的笛卡尔积。
    2.  如果元组不满足 `qualification`，则丢弃。
    3.  删除不在 `target-list` 中的属性。
    4.  如果指定 `DISTINCT`，则消除重复行。

### 3.5 SQL 表达式和字符串

*   `AS` 和 `=` 是两种在结果中命名字段的方式。
*   `LIKE` 用于字符串匹配。`_` 代表任意一个字符，`%` 代表零个或多个任意字符。

### 3.6 集合操作 (Set Operations)

*   `UNION`：计算两个并兼容的 SQL 查询结果的并集。
*   `EXCEPT`：计算集合差。
*   `INTERSECT`：计算交集。

### 3.7 嵌套查询 (Nested Queries)

*   `WHERE` 子句中可以包含 SQL 查询。
*   `IN`、`EXISTS`、`UNIQUE` 是集合比较操作符。
*   `NOT IN`、`NOT EXISTS`、`NOT UNIQUE`。
*   `op ANY`、`op ALL`、`op IN`。

### 3.8 SQL 中的除 (Division in SQL)

*   通过 `NOT EXISTS` 和 `EXCEPT` 或双重 `NOT EXISTS` 实现。

### 3.9 聚合操作符 (Aggregate Operators)

*   `COUNT(*)`
*   `COUNT([DISTINCT] A)`
*   `SUM([DISTINCT] A)`
*   `AVG([DISTINCT] A)`
*   `MAX(A)`
*   `MIN(A)`
*   **注意**：聚合操作不能嵌套。

### 3.10 `GROUP BY` 和 `HAVING` 子句

*   `SELECT [DISTINCT] target-list FROM relation-list WHERE qualification GROUP BY grouping-list HAVING group-qualification`
*   `target-list` 包含属性名和聚合操作。
*   `target-list` 中的属性必须是 `grouping-list` 的子集。
*   `group-qualification` 应用于组，表达式必须对每个组具有单一值。

### 3.11 空值 (Null Values)

*   SQL 提供特殊值 `null` 表示未知或不适用。
*   `null` 的存在使许多问题复杂化，需要三值逻辑（真、假、未知）。

### 3.12 SQL 新特性

*   **`CAST` 表达式**：将表达式转换为目标数据类型。
*   **`CASE` 表达式**：根据条件返回不同值。
*   **子查询 (Sub-query)**：
    *   **标量子查询 (Scalar Sub-query)**：结果是单个值。
    *   **表表达式 (Table Expression)**：结果是表，可用于 `FROM` 子句（临时视图）。
    *   **公共表表达式 (Common Table Expression, CTE)**：使用 `WITH` 子句定义，可多次引用，主要用于多级焦点查询。
*   **外连接 (Outer Join)**。
*   **递归 (Recursion)**：公共表表达式在定义中引用自身，可计算复杂递归推断。

### 3.13 数据操作语言 (DML)

*   `INSERT`：向表中插入元组。
*   `DELETE`：删除满足条件的元组。
*   `UPDATE`：更新满足条件的元组的属性值。

### 3.14 SQL 中的视图 (View in SQL)

*   **通用视图 (General View)**：从基表派生的虚拟表，提供逻辑数据独立性和数据安全性。存在更新问题。
*   **临时视图 (Temporary View)** 和**递归查询 (Recursive Query)**：通过 `WITH` 和 `RECURSIVE` 实现。

### 3.15 嵌入式 SQL (Embedded SQL)

*   在程序中访问数据库，并对查询结果进行进一步处理。
*   **解决方案**：
    *   **嵌入式 SQL**：通过预编译将 SQL 语句转换为内部库函数调用。
    *   **编程 API**：提供一组库函数或 DLL。
    *   **类库**：封装库函数为类。
*   **游标 (Cursor)**：用于处理查询结果集（多行）的机制。
    1.  定义游标。
    2.  打开游标。
    3.  从游标中获取数据。
    4.  关闭游标。

### 3.16 动态 SQL (Dynamic SQL)

*   SQL 语句在程序运行时动态构建。
*   **直接执行动态 SQL**：用于非查询 SQL 语句。
*   **带动态参数的动态 SQL**：使用占位符实现动态参数。
*   **用于查询的动态 SQL**：动态形成查询语句。

### 3.17 存储过程 (Stored Procedure)

*   将频繁使用的数据库访问程序作为过程存储在数据库中，编译后直接调用。
*   **优点**：
    *   方便用户，可重用。
    *   提高性能（已编译，无需再次解析和优化）。
    *   扩展 DBMS 功能。

## 4. 数据库管理系统 (Database Management Systems)

### 4.1 DBMS 核心组件架构

*   **语义分析和查询处理** (DDL, QL, DML, DCL)。
*   **授权检查 (Grant Checking)**。
*   **解析器 (Parser)**。
*   **并发控制 (Concurrency Control)**。
*   **恢复机制 (Recovery Mechanism)**。
*   **访问管理 (Access Management)**。

### 4.2 DBMS 进程结构

*   **单进程结构 (Single Process Structure)**：应用程序与 DBMS 核心编译为单个可执行文件，作为单个进程运行。
*   **多进程结构 (Multi Processes Structure)**：一个应用程序进程对应一个 DBMS 核心进程。
*   **多线程结构 (Multi Threads Structure)**：只有一个 DBMS 进程，每个应用程序进程对应一个 DBMS 核心线程。

### 4.3 数据库访问管理

*   数据库访问最终转换为对操作系统文件的操作。文件结构和访问路径直接影响数据访问速度。
*   **访问类型**：查询所有/大部分记录、查询特定记录、范围查询、更新。
*   **文件组织**：
    *   **堆文件 (Heap File)**：记录按插入顺序存储，顺序检索。
    *   **直接文件 (Direct File)**：通过哈希函数映射记录地址。
    *   **索引文件 (Indexed File)**：索引 + 堆文件/簇。
    *   动态哈希、网格结构文件、裸磁盘。
*   **索引技术**：
    *   **B+ 树 (B+ Tree)**。
    *   **聚簇索引 (Clustering Index)**。
    *   **倒排文件 (Inverted File)**。
    *   动态哈希、网格结构文件和分区哈希函数。
    *   **位图索引 (Bitmap Index)**（用于数据仓库）。

### 4.4 查询优化 (Query Optimization)

*   “重写”用户提交的查询语句，然后决定最有效的操作方法和步骤以获取结果。目标是以最低成本和最短时间获得查询结果。
*   **代数优化 (Algebra Optimization)**：对原始查询表达式进行一系列转换，将其转换为等效的、最有效的执行形式。
    *   **查询树 (Query Tree)**：叶子是关系，中间节点是一元/二元操作。
    *   **关系代数等价转换规则**：如交换律、结合律、投影的聚簇规则、选择的聚簇规则、选择与投影的交换律等。
    *   **基本原则**：将一元操作尽可能下推，寻找并组合公共子表达式。
*   **操作优化 (Operation Optimization)**：为代数优化后的查询选择“好”的访问策略。
    *   **连接操作优化**：
        *   **嵌套循环 (Nested Loop)**：一个关系作为外循环，另一个作为内循环。
        *   **归并排序连接 (Merge Scan)**：预先对关系排序，然后顺序比较元组。
        *   **使用索引或哈希查找映射元组**。
        *   **哈希连接 (Hash Join)**。

### 4.5 恢复 (Recovery)

*   **主要作用**：
    1.  减少故障可能性（预防）。
    2.  从故障中恢复（解决）。
*   **通用方法**：
    *   **周期性转储 (Periodical Dumping)**：备份 + 增量转储。
    *   **备份 + 日志 (Backup + Log)**：日志记录自上次备份以来 DB 的所有更改（旧值 B.I，新值 A.I）。
        *   恢复时，未完成的事务应**撤销 (Undo)**，已完成但结果未写入 DB 的事务应**重做 (Redo)**。

#### 4.5.1 事务 (Transaction)

*   **事务 (Transaction, T)**：对 DB 执行的一系列操作，具有以下特性：
    *   **原子性 (Atomicity)**：要么全部完成，要么全部不完成。
    *   **一致性保持 (Consistency Preservation)**：将 DB 从一个一致状态转换为另一个一致状态。
    *   **隔离性 (Isolation)**：并发事务应像独立运行一样。
    *   **持久性 (Durability)**：成功完成的事务的效果永久反映在 DB 中，即使发生故障也能恢复。
*   **回滚 (Rollback)**：异常终止（不完成任何操作）。
*   **提交 (Commit)**：正常终止（完成所有操作）。

#### 4.5.2 恢复支持结构

*   恢复信息（如日志）应存储在**非易失性存储 (Nonvolatile Storage)** 中。
*   **提交列表 (Commit List)**：已提交事务的 TID 列表。
*   **活动列表 (Active List)**：正在进行中的事务的 TID 列表。
*   **日志 (Log)**：记录 TID、BID、B.I、A.I 等信息。

#### 4.5.3 提交规则和日志先行规则

*   **提交规则 (Commit Rule)**：A.I 必须在事务提交前写入非易失性存储。
*   **日志先行规则 (Log Ahead Rule)**：如果 A.I 在提交前写入 DB，则 B.I 必须首先写入日志。
*   **恢复策略**：Undo 和 Redo 操作是**幂等 (Idempotent)** 的。
    *   **A.I 在提交前写入 DB**：故障后，未在提交列表中的活动事务需要 Undo。
    *   **A.I 在提交后写入 DB**：故障后，在提交列表中的活动事务需要 Redo。
    *   **A.I 与提交同时写入 DB**：故障后，未在提交列表中的活动事务需要 Undo，在提交列表中的活动事务需要 Redo。

### 4.6 并发控制 (Concurrency Control)

*   在多用户 DBMS 中，允许多个事务并发访问数据库。
*   **目的**：提高系统利用率和响应时间。
*   **问题**：
    *   **丢失更新 (Lost Update)**：一个事务的更新被另一个事务覆盖。
    *   **脏读 (Dirty Read)**：一个事务读取了另一个未提交事务写入的数据。
    *   **不可重复读 (Unrepeatable Read)**：一个事务两次读取同一数据，但第二次读取时数据已被另一个事务修改。
*   **冲突**：写-写冲突必须避免；写-读和读-写冲突通常应避免，但在某些应用中可容忍。

#### 4.6.1 串行化 (Serialization)

*   **定义**：如果并发执行的事务集合的调度对数据库产生与该事务集合的某个串行执行相同的效果，则该调度是**可串行化 (Serializable)** 的。

#### 4.6.2 封锁协议 (Locking Protocol)

*   **X 锁 (Exclusive Lock)**：排他锁，用于读写。
    *   **两阶段封锁 (Two Phase Locking, 2PL)**：
        *   **定义 1**：事务中所有加锁操作都在解锁操作之前。
        *   **定义 2**：事务在操作对象前先获取锁。
        *   **结论**：如果调度中的所有事务都是良好形式的（well-formed）且遵循 2PL，则该调度是可串行化的。
        *   **严格两阶段封锁 (Strict Two Phase Locking)**：事务持有所有锁直到 EOT。
*   **(S, X) 锁 (Shared, Exclusive Locks)**：S 锁用于读，X 锁用于写。
*   **(S, U, X) 锁 (Shared, Update, Exclusive Locks)**：U 锁用于更新，先获取 U 锁，再提升为 X 锁。目的：缩短排他时间，提高并发度，减少死锁。

#### 4.6.3 死锁 (Deadlock) 和活锁 (Live Lock)

*   **死锁 (Deadlock)**：循环等待，没有事务能获得完成所需的所有资源。
*   **活锁 (Live Lock)**：虽然其他事务在有限时间内释放资源，但某些事务长时间无法获得所需资源。
*   **死锁处理**：
    *   **死锁检测 (Deadlock Detection)**：
        *   **超时 (Timeout)**：事务等待特定时间后，假定死锁并中止事务。
        *   **等待图 (Wait-for Graph)**：如果图中存在循环，则发生死锁。
    *   **死锁避免 (Deadlock Avoidance)**：
        *   事务开始时请求所有锁。
        *   按指定资源顺序请求锁。
        *   冲突时立即中止。
        *   **事务重试 (Transaction Retry)**：
            *   **Wait-die**：如果 TA 比 TB 老，TA 等待；否则 TA “死亡”（中止并重试）。
            *   **Wound-wait**：如果 TA 比 TB 年轻，TA 等待；否则 TA “伤害” TB（TB 中止并重试）。

## 5. 安全性和完整性约束 (Security and Integrity Constraints)

### 5.1 数据库安全性 (Security of Database)

*   保护数据库不被非法访问。
*   **视图和查询重写**。
*   **访问控制 (Access Control)**：
    *   普通用户、拥有资源权限的用户、DBA。
    *   **用户身份识别和认证 (Identification and Authentication)**：密码、特殊物品、生物特征。
    *   **授权 (Authorization)**：`GRANT` 语句。
    *   **角色 (Role)**。
*   **数据加密 (Data Encryption)**。
*   **审计跟踪 (Audit Trail)**：记录数据库操作。

#### 5.1.1 统计数据库安全性 (Security of Statistical Database)

*   在许多情况下，统计数据是公开的，而详细的个人数据是秘密的。
*   **个体追踪器 (Individual Tracker)**：通过一系列统计查询推断出个体秘密数据。
*   **通用追踪器 (General Tracker)**：通过一个谓词 T 辅助追踪。

### 5.2 完整性约束 (Integrity Constraints)

*   **定义**：描述关系每个合法实例必须满足的条件。
*   违反 IC 的插入/删除/更新操作将被禁止。
*   用于确保应用程序语义或防止不一致。

#### 5.2.1 完整性约束类型

*   **静态约束 (Static Constraints)**：对数据库状态的约束。
    *   **固有约束 (Inherent Constraints)**（数据模型）：如 1NF。
    *   **隐式约束 (Implicit Constraints)**：隐含在数据模式中，通常由 DDL 指示，如域约束、主键约束、外键约束。
    *   **显式约束 (Explicit Constraints)** 或**通用约束 (General Constraints)**。
*   **动态约束 (Dynamic Constraints)**：数据库从一个状态转换到另一个状态时的约束，可与**触发器 (Trigger)** 结合。

#### 5.2.2 数据库修改

*   涉及外键的插入、删除、更新操作需要检查参照完整性。
    *   **插入**：新元组的外键值必须在被引用关系的主键中存在。
    *   **删除**：如果删除的元组被其他关系引用，可以拒绝删除，或级联删除，或设置 NULL。
    *   **更新**：更新外键值类似插入；更新主键值类似删除。

#### 5.2.3 完整性约束的定义

*   **通过程序指示**：应用程序负责检查。
*   **通过断言 (Assertion) 指示**：使用断言规范语言定义，DBMS 自动检查。
*   **通过 `CHECK` 子句指示**：在基表定义中，DBMS 自动检查。

#### 5.2.4 触发器 (Triggers)

*   **定义**：当 DBMS 发生指定更改时自动启动的过程。
*   **三部分**：
    *   **事件 (Event)**：激活触发器。
    *   **条件 (Condition)**：测试触发器是否应运行。
    *   **动作 (Action)**：触发器运行后发生什么。
*   **活动数据库规则 (Active Database Rules)**：ECA 规则。
*   **执行**：立即执行、延迟执行、解耦模式、级联触发器。

## 6. 数据库设计 (Database Design)

### 6.1 数据依赖和关系模式规范化 (Data Dependency and Normalization of Relational Schema)

*   **函数依赖 (Function Dependency, FD)**：最基本的数据依赖，一个或一组属性的值可以决定其他属性的值。
*   **多值依赖 (Multi-valued Dependency, MVD)**：某些属性的值可以决定其他属性的一组值。
*   **连接依赖 (Join Dependency, JD)**：无损连接分解的约束。

#### 6.1.1 范式 (Normal Forms)

*   **第一范式 (1NF)**：关系的每个属性必须是原子的。
*   **第二范式 (2NF)**：关系在 1NF 的基础上，且没有**部分函数依赖 (Partially Function Dependency)**。
    *   **问题**：插入异常、删除异常、更新困难。
    *   **解决**：分解关系。
*   **第三范式 (3NF)**：关系在 2NF 的基础上，且没有**传递函数依赖 (Transfer Function Dependency)**。
    *   **问题**：插入异常、删除异常、更新困难。
    *   **解决**：分解关系。

### 6.2 ER 模型和 ER 图

*   **概念模型**：实体-关系，独立于实际 DBMS。
*   **ER 图**：用于表示实体、属性和关系。

### 6.3 数据库设计方法

*   **面向过程方法 (Procedure Oriented Method)**：以业务过程为中心，数据库模式根据业务凭证、收据、报告等直接设计。不适合大型复杂系统。
*   **面向数据方法 (Data Oriented Method)**：以数据为中心，基于对数据及其内部关系的详细分析设计数据库模式。适合大型复杂系统。

### 6.4 数据库设计流程

1.  **需求分析 (Requirement Analysis)**：系统需求分析的重要部分，数据字典和 DFD（或 UML）图对数据库设计最重要。
    *   名称冲突（同义词、多义词）、概念冲突、域冲突。
    *   编码标准化、实体识别、信息压缩。
2.  **概念设计 (Concept Design)**：基于数据字典和 DFD，分析和分类数据，识别实体、属性和实体间的关系，得到数据库的概念模式。
    *   识别实体、定义实体间关系、绘制 ER 图并与用户讨论。
3.  **逻辑设计 (Logic Design)**：根据 ER 图中的实体和关系，在目标 DBMS 中定义表和视图。基本标准是 3NF。
    *   将 ER 图转换为表、命名规则、属性类型和域定义、适当的**反规范化 (Denormalization)**、必要的视图、考虑遗留系统中的表、接口表。
4.  **物理设计 (Physical Design)**：主要任务是根据处理需求创建必要的索引。
    *   分区设计、存储过程、触发器、完整性约束。

## 7. 分布式数据库系统 (Distributed Database Systems)

### 7.1 简介

*   **分布式数据库 (Distributed Database, DDB)**：分布在网络中并由 DDBMS 管理的相关数据集合。
    *   **两类**：物理分布、逻辑集中（通用 DDB）；物理分布、逻辑也分布（联邦数据库系统 FDBS）。
*   **特点**：分布性、相关性、DDBMS。
*   **优点**：本地自治、高可用性、高灵活性、低系统成本、高效率、并行处理。
*   **缺点**：难以集成现有数据库、过于复杂。
*   **主要问题**：
    *   查询优化（优化目标不同）。
    *   并发控制（需考虑整个网络）。
    *   恢复机制（所有子事务必须同时提交或中止）。
    *   数据分布。

### 7.2 数据分布 (Data Distribution)

#### 7.2.1 数据分布策略

*   **集中式 (Centralized)**：数据集中存储，无 DDB 优势。
*   **分区式 (Partitioned)**：数据无重复分布。
*   **复制式 (Replicated)**：每个站点都有完整的 DB 副本，利于检索密集型系统。
*   **混合式 (Hybrid)**：上述方法的混合，最灵活复杂。

#### 7.2.2 数据分布单元

*   按关系（或文件），即不分区。
*   按**片段 (Fragments)**：
    *   **水平分片 (Horizontal Fragmentation)**：元组分区。
    *   **垂直分片 (Vertical Fragmentation)**：属性分区。
    *   **混合分片 (Mixed Fragmentation)**：两者兼有。
*   **分片标准**：
    *   **完整性 (Completeness)**：每个元组或属性必须在某个片段中有反映。
    *   **可重构性 (Reconstruction)**：应能重构原始全局关系。
    *   **互斥性 (Disjointness)**：针对水平分片。

#### 7.2.3 数据分布引起的问题

1.  **多副本一致性 (Multi Copies' Consistency)**。
2.  **分布一致性 (Distribution Consistency)**：主要由更新操作引起的元组存储位置变化。
    *   **再分布 (Redistribution)**。
    *   **捎带 (Piggybacking)**。
3.  **全局查询到片段查询的转换和物理副本的选择**。
4.  **数据库片段的设计和片段的分配**。

### 7.3 联邦数据库 (Federated Database)

*   **定义**：每个成员都是自治的，并基于协商相互协作的数据库系统。
*   没有全局模式，每个联邦成员保留自己的数据模式。
*   成员之间协商决定各自的输入/输出模式，建立数据共享关系。

### 7.4 DDBMS 中的查询优化

*   **优化目标**：最小化网络传输成本。
*   代数优化。
*   全局查询到片段查询的转换和物理副本的选择。
*   查询分解。
*   全局查询计划。

### 7.5 DDBMS 中的恢复机制

*   基本原理与集中式 DBMS 相同。
*   **分布式事务 (Distributed Transactions)**：关键是如何确保所有子事务要么一起提交，要么一起中止。
*   **两阶段提交协议 (Two Phase Commitment Protocol)**。
*   故障组合。

### 7.6 DDBMS 中的并发控制

*   基本原理与集中式 DBMS 相同，要求并发事务可串行化调度。
*   由于多副本，需要全局加锁。
*   通信开销。
*   全局死锁。

## 8. 新研究和应用领域 (New Research and Application Fields)

### 8.1 数据仓库 (Data Warehouse) 和 OLAP

*   **数据需求**：需要汇总数据、历史数据、大量外部数据、面向决策主题的数据、不需实时更新。
*   **OLTP (On-Line Transaction Processing)** 和 **OLAP (On-Line Analytical Processing)**。

#### 8.1.1 什么是数据仓库

*   **定义**：从多个来源收集的信息存储库。
    *   面向决策主题、提供统一接口、存储历史数据、主要用于检索、定期从 OLTP 系统下载数据。
*   **数据仓库问题**：语义集成、异构源、加载/刷新/清除、元数据管理。

#### 8.1.2 软件解决方案

*   **联机分析处理 (OLAP)**：使用户能够跨多个维度和层次分析数据。
*   **分析和查询报告解决方案**。
*   **数据挖掘 (Data Mining)**：使用户能够识别数据中的模式和关联，或从数据中创建预测模型。

#### 8.1.3 多维数据模型 (Multidimensional Data Model)

*   **定义**：数值度量集合，依赖于一组维度。
*   **维度层次结构 (Dimension Hierarchies)**。
*   **MOLAP vs ROLAP**：
    *   **MOLAP (Multidimensional OLAP)**：多维数据物理存储为数组。
    *   **ROLAP (Relational OLAP)**：多维数据存储为关系。
*   **事实表 (Fact Table)**：将维度与度量关联的主关系。
*   **维度表 (Dimension Table)**：包含维度附加属性的表。
*   **星型模式 (Star Schema)**：事实表与维度表直接连接。
*   **雪花模式 (Snowflake Schema)**：维度表进一步规范化。

#### 8.1.4 物化视图 (Materialized View)

*   预先计算并存储的聚合结果，以提高查询性能。
*   视图之间的依赖关系形成一个格。

#### 8.1.5 OLAP 查询

*   **聚合 (Aggregate)**：对一个或多个维度上的度量进行聚合。
*   **上卷 (Roll-up)**：在维度层次结构的不同级别进行聚合。
*   **下钻 (Drill-down)**：上卷的逆操作。
*   **旋转 (Pivoting)**：在选定维度上进行聚合。
*   **切片和切块 (Slicing and Dicing)**：在一个或多个维度上进行等式和范围选择。
*   **CUBE 操作符**：生成所有可能的 GROUP BY 组合。

#### 8.1.6 位图索引 (Bitmap Index)

*   索引本身就是数据，通过位图表示属性值是否存在。
*   适用于低基数属性，可高效处理多条件查询和连接操作。

#### 8.1.7 数据仓库工程流程

1.  需求分析。
2.  数据仓库架构设计。
3.  环境构建。
4.  数据仓库模式设计。
5.  ETL 处理数据。
6.  元数据管理。
7.  前端应用设计与实现。
8.  测试。
9.  运行与维护。

#### 8.1.8 数据仓库模式设计

*   **自顶向下 (Top Down)**：先构建企业数据仓库 (EDW)，再从 EDW 构建数据集市。
*   **自底向上 (Bottom Up)**：先构建部门数据集市，再逐步扩展到企业数据仓库。
*   混合方法。

### 8.2 数据挖掘 (Data Mining)

*   **定义**：探索和分析大量数据，以发现有效、新颖、潜在有用且最终可理解的模式。
    *   **有效 (Valid)**：模式普遍成立。
    *   **新颖 (Novel)**：事先不知道的模式。
    *   **有用 (Useful)**：可从中制定行动。
    *   **可理解 (Understandable)**：可解释和理解模式。
*   **原因**：数据量和维度巨大、数据增长率高、存储和计算能力可用、现成软件和专业知识。
*   **应用**：数据库营销、客户细分、欺诈检测、网站分析等。
*   **操作**：分类和预测、聚类、关联分析、预测。
*   **技术**：聚类分析、最近邻、神经网络、朴素贝叶斯、决策树。

#### 8.2.1 知识发现过程 (Knowledge Discovery Process)

1.  识别业务问题。
2.  数据挖掘。
3.  行动。
4.  评估和度量。
5.  部署和集成到业务流程。

#### 8.2.2 数据挖掘步骤

1.  **数据预处理 (Data Preprocessing)**：
    *   数据选择、数据清洗（去除噪声和异常值）、数据转换（创建通用单位，生成新字段）。
2.  **数据挖掘模型构建**。
3.  **模型评估**。

#### 8.2.3 数据类型

*   关系数据和事务数据。
*   空间和时间数据。
*   时间序列数据。
*   文本、图像、视频。
*   混合数据、序列数据。

#### 8.2.4 变量类型

*   **数值型 (Numerical)**：域有序，可在实线上表示。
*   **名义型 (Nominal) 或分类型 (Categorical)**：域有限，无自然顺序。
*   **序数型 (Ordinal)**：域有序，但值之间绝对差异未知。

#### 8.2.5 数据挖掘操作

*   **分类和预测 (Classification and Prediction)**：将数据集细分为特定结果类别。
    *   **训练 (Training)**：在历史数据上训练模型。
    *   **过拟合 (Overfitting)**：模型过于适应训练数据。
*   **聚类 (Clustering)**：无监督操作，寻找数据集中相似记录的分组。
*   **关联分析 (Association Analysis)**：寻找数据集中记录之间的联系。
    *   **支持度 (Support)**：衡量项目一起出现的频率。
    *   **置信度 (Confidence)**：衡量一个项目对另一个项目的依赖程度。
    *   **提升度 (Lift)**：衡量规则置信度与预期置信度之间的比率。
*   **预测 (Forecasting)**：预测连续值。

#### 8.2.6 数据挖掘技术

*   **聚类分析 (Cluster Analysis)**：根据相似性和不相似性识别项目之间的关系。
*   **关联规则算法 (Association Rules Algorithm)**：如 Apriori 算法，发现频繁项集和关联规则。
*   **时间序列算法 (Time Sequence Algorithm)**：如 AprioriALL 算法，发现频繁序列。
*   **分类算法 (Classification Algorithm)**：如决策树生成和维护算法。

### 8.3 信息检索 (Information Retrieval)

*   传统上独立于数据库的研究领域。
*   **IR vs DBMS**：
    *   IR：不精确语义、关键词搜索、非结构化数据、读多写少、分页显示结果。
    *   DBMS：精确语义、SQL、结构化数据、有合理数量更新、生成完整答案。
*   **“词袋”模型 (Bag of Words Model)**：每个文档只是一个词（术语）的多重集。
    *   **停用词 (Stop Words)**：无关词。
    *   **词干提取 (Stemming)**：将词转换为基本形式。
*   **布尔文本搜索 (Boolean Text Search)**：查找匹配布尔表达式的文档。
*   **文本“索引” (Text “Indexes”)**：通常指倒排文件或倒排索引，将词映射到文档。
*   **处理布尔逻辑**：并集、交集、集合差。
*   **计算相关性 (Computing Relevance)**：涉及搜索词在文档中出现的频率和在集合中出现的频率。
*   **短语和“近” (Phrases and “Near”)**：处理词语顺序和距离。
*   **更新和文本搜索**：文本搜索引擎通常是查询为主，更新延迟或批量进行。

### 8.4 半结构化数据 (Semistructured Data) 和 XML

*   **Web 现状**：HTML 文档，由应用程序生成，供人类消费，无应用程序互操作性。
*   **XML (Extensible Markup Language)**：新的通用数据交换格式。
    *   W3C 推荐标准，由应用程序生成和消费。
    *   从 HTML 的展示描述转向 XML 的内容描述。
*   **半结构化数据 (Semistructured Data)**：
    *   **起源**：异构源集成、非刚性结构数据源（生物数据、Web 数据）。
    *   **特点**：缺少或额外属性、多属性、不同对象中不同类型、异构集合、自描述、不规则数据、无预定义结构。
*   **XML 术语**：标签、元素、XML 文档、良好形式 XML 文档、有效 XML 文档。
*   **DTD (Document Type Descriptors)**：类似于模式，但存在文档化不足、不支持结构重用、不支持数据类型、键约束有限等缺点。
*   **XML Schema**：XML 格式的模式，支持本地元素名和类型、基本数据类型、值约束、用户定义结构类型、继承、外键等。
*   **XML 数据模型**：将 XML 数据描述为树。
*   **XML vs 半结构化数据**：
    *   两者都最好用图描述，都是无模式、自描述。
    *   XML 有序，半结构化数据无序。
    *   XML 可以混合文本和元素。
    *   XML 有更多其他特性：属性、实体、处理指令、注释。

#### 8.4.1 XQuery

*   **总结**：`FOR-LET-WHERE-ORDERBY-RETURN` (FLWOR)。
*   **`FOR` vs `LET`**：
    *   `FOR`：绑定节点变量，迭代。
    *   `LET`：绑定集合变量，一个值。
*   **路径表达式 (Path Expressions)**：用于导航 XML 树。
*   **集合 (Collections)**：有序和无序集合。
*   **排序 (Sorting)**。
*   **`If-Then-Else`**。
*   **存在量词 (Existential Quantifiers)** 和**全称量词 (Universal Quantifiers)**。
*   **其他特性**：`Before` 和 `After`（处理顺序）、`Filter`（删除结果树中的边）、递归函数。
*   **`GROUP BY`**：XQuery 目前没有内置 `GROUP BY`，但有相关提案。