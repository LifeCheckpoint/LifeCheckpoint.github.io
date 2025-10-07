---
title: 03. SQL
authors: [Life_Checkpoint]
tags: [note, db]
sidebar_position: 3
---
## 1. 其他数据模型 (Other Data Models)

除了关系数据模型（Relational Data Model）之外，还存在多种数据模型，它们各自适用于不同的应用场景和数据特性。

### 1.1 逻辑数据模型 (Logic-based Data Model)
*   **概念**: 基于逻辑推理的数据模型，通常与演绎数据库管理系统（Deductive DBMS）相关联。
*   **特点**:
    *   扩展了DBMS的查询功能，特别是**递归查询**（Recursive Query）功能。
    *   增强了DBMS的**演绎能力**（Deductive Ability），能够从已知事实和规则中推导出新的事实。
*   **应用**: 适用于需要复杂推理和规则处理的领域，如专家系统、知识库等。

### 1.2 时态数据模型 (Temporal Data Model)
*   **概念**: 专门用于处理带有时间维度的数据，能够记录数据的历史状态和变化。
*   **特点**: 支持时间点、时间段、有效时间、事务时间等概念，方便查询和分析数据在不同时间点的状态。
*   **应用**: 审计、版本控制、历史数据分析等。

### 1.3 空间数据模型 (Spatial Data Model)
*   **概念**: 用于表示和操作具有空间位置信息的数据。
*   **特点**: 支持点、线、面等几何对象，以及空间关系（如邻近、包含、相交）和空间操作（如缓冲区分析、路径规划）。
*   **应用**: 地理信息系统（GIS）、导航系统、城市规划等。

### 1.4 XML数据模型 (XML Data Model)
*   **概念**: 基于可扩展标记语言（eXtensible Markup Language, XML）的数据模型，用于表示半结构化数据。
*   **特点**:
    *   **互联网数据存储**（Store Data on Internet）：广泛用于Web服务和数据交换。
    *   **常见数据交换标准**（Common Data Exchange Standard）：作为不同系统之间数据传输的通用格式。
    *   **信息系统集成**（Information Systems Integration）：促进异构系统之间的数据互操作。
    *   **半结构化数据表达**（Expression of Semi-structured Data）：能够灵活表示结构不完全固定或不规则的数据。
*   **应用**: Web服务、数据集成、文档管理等。

## 2. 数据库管理系统用户接口 (User Interfaces of DBMS)

DBMS提供多种接口以支持用户访问数据库，包括：

*   **查询语言**（Query Languages）：用于数据查询和操作。
    *   **形式化查询语言**（Formal Query Language）：基于严格数学理论，如关系代数和关系演算。
    *   **表格查询语言**（Tabular Query Language, TQL）：通过填写表格进行查询。
    *   **图形查询语言**（Graphic Query Language, GQL）：通过图形界面进行查询。
    *   **有限自然语言查询语言**（Limited Natural Language Query Language）：允许使用受限的自然语言进行查询。
*   **接口和维护工具**（Interface and Maintaining Tools, GUI）：图形用户界面工具，方便数据库管理和维护。
*   **应用程序编程接口**（Application Programming Interfaces, APIs）：供应用程序调用数据库功能的接口。
*   **类库**（Class Library）：面向对象编程中封装数据库操作的类集合。

## 3. 关系查询语言 (Relational Query Languages)

关系查询语言允许从数据库中操作和检索数据。

*   **特点**:
    *   **强大的形式化基础**（Strong Formal Foundation）：基于逻辑，如关系代数和关系演算。
    *   **支持优化**（Allows for Much Optimization）：形式化基础使得查询优化成为可能。
    *   **非图灵完备**（Not Turing Complete）：查询语言不期望具备通用编程语言的所有功能，不用于复杂计算。
    *   **高效访问大数据集**（Support Easy, Efficient Access to Large Data Sets）：专注于高效地访问和处理大量数据。

### 3.1 形式化关系查询语言 (Formal Relational Query Languages)

两种数学查询语言构成了“实际”语言（如SQL）的基础：

*   **关系代数**（Relational Algebra）：
    *   **操作性更强**（More Operational），描述如何计算结果。
    *   非常适用于表示**执行计划**（Execution Plans）。
*   **关系演算**（Relational Calculus）：
    *   **非操作性**（Non-operational），**声明性**（Declarative），用户描述想要什么，而不是如何计算。

### 3.2 SQL语言 (SQL Language)

**SQL**（Structured Query Language，结构化查询语言）是目前最成功的关系数据库语言。

SQL语言根据功能可分为四部分：

*   **数据定义语言**（Data Definition Language, **DDL**）：用于定义、删除或修改数据模式（schema）。
    *   **CREATE**: 创建数据库对象（如表、视图、索引）。
    *   **ALTER**: 修改数据库对象的结构。
    *   **DROP**: 删除数据库对象。
*   **查询语言**（Query Language, **QL**）：用于检索数据。
    *   **SELECT**: 从数据库中检索数据。
*   **数据操作语言**（Data Manipulation Language, **DML**）：用于插入、删除或更新数据。
    *   **INSERT**: 向表中插入新行。
    *   **DELETE**: 从表中删除行。
    *   **UPDATE**: 更新表中现有行的值。
*   **数据控制语言**（Data Control Language, **DCL**）：用于控制用户对数据的访问权限。
    *   **GRANT**: 授予用户权限。
    *   **REVOKE**: 撤销用户权限。

## 4. SQL基本概念与查询 (Basic SQL Concepts and Queries)

### 4.1 重要术语和概念 (Important Terms and Concepts)

*   **基本表**（Base Table）：数据库中实际存储数据的表。
*   **视图**（View）：基于一个或多个基本表或其他视图定义的**虚拟表**（Virtual Table），其数据不实际存储，而是通过查询动态生成。
    *   **逻辑数据独立性**（Logical Data Independence）：视图提供了一种抽象层，使得应用程序不必关心底层基本表的具体结构变化。
    *   **数据安全性**（Security of Data）：可以通过视图限制用户只能访问表中的部分数据或列。
    *   **视图更新问题**（Update Problems of View）：某些复杂的视图（如包含聚合函数、GROUP BY、JOIN等）可能无法直接更新。
*   **支持的数据类型**（Data Type Supported）：SQL支持多种数据类型，如整数、浮点数、字符串、日期时间等。
*   **NULL值**（NULL）：表示未知（unknown）或不适用（inapplicable）的值。
    *   NULL值会使许多操作复杂化，例如，`rating > 8` 在 `rating` 为NULL时，结果既不是真也不是假，而是**未知**（unknown）。
    *   需要**三值逻辑**（3-valued logic）：真（true）、假（false）、未知（unknown）。
    *   `WHERE` 子句会过滤掉计算结果为 `false` 或 `unknown` 的行。
*   **UNIQUE约束**：确保列中的所有值都是唯一的。
*   **DEFAULT约束**：为列指定默认值。
*   **主键**（PRIMARY KEY）：唯一标识表中每一行的列或列的组合。主键列的值必须是唯一的且不能为NULL。
*   **外键**（FOREIGN KEY）：一个表中的列，其值引用另一个表中的主键。用于建立表之间的关系，维护**参照完整性**（Referential Integrity）。
*   **CHECK约束**（Integration Constraint）：定义列中允许值的条件。

### 4.2 基本查询语句 (Basic Query Statement)

```sql
SELECT [DISTINCT] target-list
FROM relation-list
WHERE qualification
```

*   `relation-list`：关系名称列表，每个名称后可带范围变量（range-variable）。
*   `target-list`：`relation-list` 中关系的属性列表。
*   `qualification`：使用 `AND`、`OR` 和 `NOT` 组合的比较条件。
*   `DISTINCT`：可选关键字，表示结果中不包含重复行。默认情况下，不消除重复行。

#### 4.2.1 概念性评估策略 (Conceptual Evaluation Strategy)

SQL查询的语义可以通过以下概念性评估策略来理解：

1.  计算 `relation-list` 中所有关系的**笛卡尔积**（Cross-product）。
2.  如果结果元组不满足 `qualification` 条件，则**丢弃**（Discard）这些元组。
3.  **删除**（Delete）`target-list` 中未包含的属性。
4.  如果指定了 `DISTINCT`，则**消除重复行**（Eliminate Duplicate Rows）。

**注意**：这种策略通常是计算查询效率最低的方式。查询优化器会寻找更高效的策略来计算相同的结果。

#### 4.2.2 范围变量 (Range Variables)

当同一个关系在 `FROM` 子句中出现两次时，范围变量是必需的。即使不是必需，使用范围变量也是良好的编程风格。

**示例**：
查找预订了船只 #103 的水手姓名：
```sql
SELECT S.sname
FROM Sailors S, Reserves R
WHERE S.sid = R.sid AND R.bid = 103;
```
或
```sql
SELECT sname
FROM Sailors, Reserves
WHERE Sailors.sid = Reserves.sid AND bid = 103;
```

#### 4.2.3 表达式和字符串 (Expressions and Strings)

*   **算术表达式**（Arithmetic Expressions）：可以在 `SELECT` 子句中使用算术表达式。
*   **字符串模式匹配**（String Pattern Matching）：使用 `LIKE` 操作符进行字符串匹配。
    *   `_`：代表任意一个字符。
    *   `%`：代表零个或多个任意字符。
*   **结果字段命名**：可以使用 `AS` 或 `=` 为结果中的字段命名。

**示例**：
查找水手年龄，以及年龄减5和年龄两倍的字段，条件是水手姓名以'B'开头和结尾，且至少包含三个字符。
```sql
SELECT S.age, age1 = S.age - 5, 2 * S.age AS age2
FROM Sailors S
WHERE S.sname LIKE 'B_%B';
```

#### 4.2.4 集合操作符 (Set Operators)

SQL支持集合操作，用于组合两个或多个查询的结果。

*   **UNION**：计算两个**并兼容**（union-compatible）结果集的并集。默认会消除重复行，`UNION ALL` 则保留所有重复行。
*   **INTERSECT**：计算两个并兼容结果集的交集。SQL/92标准支持，但并非所有系统都实现。
*   **EXCEPT**：计算第一个结果集减去第二个结果集的部分（差集）。

**示例**：
查找预订了红色或绿色船只的水手ID：
```sql
SELECT S.sid
FROM Sailors S, Boats B, Reserves R
WHERE S.sid = R.sid AND R.bid = B.bid AND (B.color = 'red' OR B.color = 'green');
```
等价于：
```sql
SELECT S.sid
FROM Sailors S, Boats B, Reserves R
WHERE S.sid = R.sid AND R.bid = B.bid AND B.color = 'red'
UNION
SELECT S.sid
FROM Sailors S, Boats B, Reserves R
WHERE S.sid = R.sid AND R.bid = B.bid AND B.color = 'green';
```

**示例**：
查找预订了红色**和**绿色船只的水手ID：
```sql
SELECT S.sid
FROM Sailors S, Boats B1, Reserves R1, Boats B2, Reserves R2
WHERE S.sid = R1.sid AND R1.bid = B1.bid
  AND S.sid = R2.sid AND R2.bid = B2.bid
  AND B1.color = 'red' AND B2.color = 'green';
```
等价于（如果系统支持 `INTERSECT`）：
```sql
SELECT S.sid
FROM Sailors S, Boats B, Reserves R
WHERE S.sid = R.sid AND R.bid = B.bid AND B.color = 'red'
INTERSECT
SELECT S.sid
FROM Sailors S, Boats B, Reserves R
WHERE S.sid = R.sid AND R.bid = B.bid AND B.color = 'green';
```

#### 4.2.5 嵌套查询 (Nested Queries)

SQL的一个强大特性是 `WHERE` 子句（以及 `FROM` 和 `HAVING` 子句）可以包含另一个SQL查询（**子查询**，Sub-query）。

*   **IN/NOT IN**：用于检查一个值是否在子查询结果集中。
*   **EXISTS/NOT EXISTS**：用于检查子查询是否返回任何行。
    *   **关联子查询**（Correlated Subquery）：子查询的执行依赖于外部查询的每一行。
*   **ANY/ALL**：与比较操作符（\<, \>, =, \<=, \>=, !=）结合使用。
    *   `op ANY`：如果与子查询结果集中的**任何一个**值满足条件，则为真。
    *   `op ALL`：如果与子查询结果集中的**所有**值都满足条件，则为真。
*   **UNIQUE**：检查子查询结果集中是否存在重复行。

**示例**：
查找预订了船只 #103 的水手姓名：
```sql
SELECT S.sname
FROM Sailors S
WHERE S.sid IN (SELECT R.sid FROM Reserves R WHERE R.bid = 103);
```

**示例**：
查找预订了船只 #103 的水手姓名（使用 `EXISTS`）：
```sql
SELECT S.sname
FROM Sailors S
WHERE EXISTS (SELECT * FROM Reserves R WHERE R.bid = 103 AND S.sid = R.sid);
```

**示例**：
查找评分高于某个名为“Horatio”的水手评分的水手：
```sql
SELECT *
FROM Sailors S
WHERE S.rating > ANY (SELECT S2.rating FROM Sailors S2 WHERE S2.sname = 'Horatio');
```

#### 4.2.6 除法运算 (Division in SQL)

SQL中没有直接的除法操作符，但可以通过 `NOT EXISTS` 和 `EXCEPT`（或嵌套 `NOT EXISTS`）来实现关系代数中的除法操作。

**示例**：
查找预订了所有船只的水手姓名：
**方案1 (使用EXCEPT)**：
```sql
SELECT S.sname
FROM Sailors S
WHERE NOT EXISTS (
    (SELECT B.bid FROM Boats B)
    EXCEPT
    (SELECT R.bid FROM Reserves R WHERE R.sid = S.sid)
);
```
**方案2 (使用嵌套NOT EXISTS)**：
```sql
SELECT S.sname
FROM Sailors S
WHERE NOT EXISTS (
    SELECT B.bid FROM Boats B
    WHERE NOT EXISTS (
        SELECT R.bid FROM Reserves R
        WHERE R.bid = B.bid AND R.sid = S.sid
    )
);
```
**解释**：
该查询的逻辑是：找出那些水手S，对于**所有**船只B，**不存在**一个船只B使得水手S**没有**预订它。换句话说，对于所有船只B，水手S都预订了它。

#### 4.2.7 聚合操作符 (Aggregate Operators)

聚合操作符对一组值进行计算，并返回单个结果。

*   `COUNT(*)`：计算行数，包括NULL值。
*   `COUNT([DISTINCT] A)`：计算列A中非NULL值的数量，`DISTINCT` 表示只计算唯一值。
*   `SUM([DISTINCT] A)`：计算列A中非NULL值的总和，`DISTINCT` 表示只对唯一值求和。
*   `AVG([DISTINCT] A)`：计算列A中非NULL值的平均值，`DISTINCT` 表示只对唯一值求平均。
*   `MAX(A)`：计算列A中的最大值。
*   `MIN(A)`：计算列A中的最小值。

**注意**：聚合操作符不能直接嵌套使用，例如 `MIN(AVG(S2.age))` 是错误的。

#### 4.2.8 GROUP BY 和 HAVING 子句

*   **GROUP BY**：将查询结果按照一个或多个列的值进行分组。聚合函数将应用于每个组。
    *   `SELECT` 子句中非聚合的属性必须出现在 `GROUP BY` 子句中。
*   **HAVING**：用于过滤 `GROUP BY` 子句产生的组。它类似于 `WHERE` 子句，但作用于组而不是单个行。
    *   `HAVING` 子句中的条件可以包含聚合函数。

**语法**：
```sql
SELECT [DISTINCT] target-list
FROM relation-list
WHERE qualification
GROUP BY grouping-list
HAVING group-qualification
```

**概念性评估**：
1.  计算 `relation-list` 的笛卡尔积。
2.  丢弃不满足 `qualification` 条件的元组。
3.  根据 `grouping-list` 中的属性值将剩余元组**分区**（partition）成组。
4.  对每个组应用 `group-qualification` 来**消除**（eliminate）一些组。`group-qualification` 中的表达式必须对每个组只有一个值。
5.  为每个符合条件的组生成一个结果元组。

**示例**：
查找年龄大于等于18岁的水手中，每个评分等级下年龄最小的水手，且该评分等级至少有2个这样的水手。
```sql
SELECT S.rating, MIN(S.age) AS minage
FROM Sailors S
WHERE S.age >= 18
GROUP BY S.rating
HAVING COUNT(*) > 1;
```

**示例**：
查找平均年龄最小的评分等级：
```sql
SELECT Temp.rating
FROM (
    SELECT S.rating, AVG(S.age) AS avgage
    FROM Sailors S
    GROUP BY S.rating
) AS Temp
WHERE Temp.avgage = (SELECT MIN(Temp.avgage) FROM Temp);
```
**解释**：这里使用了**表表达式**（Table Expression）来解决聚合函数不能嵌套的问题。

## 5. SQL新特性 (New Features of SQL)

### 5.1 CAST表达式 (CAST Expression)

*   **概念**：用于将表达式转换为目标数据类型。
*   **用途**：
    *   匹配函数参数的数据类型。
    *   在计算中改变精度。
    *   为 `NULL` 值指定数据类型。
*   **语法**：`CAST(Expression AS Data type)`

**示例**：
```sql
SELECT name, school, CAST(NULL AS Varchar(20))
FROM Students
UNION
SELECT name, CAST(NULL AS Varchar(20)), service
FROM Soldiers;
```

### 5.2 CASE表达式 (CASE Expression)

*   **概念**：根据条件返回不同的值，实现条件逻辑。
*   **简单形式**：基于一个表达式的值进行匹配。
*   **通用形式**：基于搜索条件进行匹配。

**简单形式示例**：
```sql
SELECT name,
       CASE status
           WHEN 1 THEN 'Active Duty'
           WHEN 2 THEN 'Reserve'
           WHEN 3 THEN 'Special Assignment'
           WHEN 4 THEN 'Retired'
           ELSE 'Unknown'
       END AS status
FROM Officers;
```

**通用形式示例**：
查找每种设备的平均事故率，避免除以零错误：
```sql
SELECT type,
       CASE
           WHEN SUM(hours_used) > 0 THEN SUM(accidents) / SUM(hours_used)
           ELSE NULL
       END AS accident_rate
FROM Machines
GROUP BY type;
```

### 5.3 子查询增强 (Sub-query Enhancements)

新SQL标准增强了子查询的功能，现在它们可以用于 `SELECT` 和 `FROM` 子句。

*   **标量子查询**（Scalar Sub-query）：
    *   **概念**：子查询的结果是一个**单值**（single value）。
    *   **用途**：可以在任何可以使用值的地方使用。
    *   **示例**：
        列出纽约地区部门的部门号、部门名称和最高工资：
        ```sql
        SELECT d.deptno, d.deptname, (SELECT MAX(salary) FROM emp WHERE deptno = d.deptno) AS maxpay
        FROM dept AS d
        WHERE d.location = 'New York';
        ```
*   **表表达式**（Table Expression）：
    *   **概念**：子查询的结果是一个**表**（table）。
    *   **用途**：可以在任何可以使用表的地方使用，相当于**临时视图**（temporary views）。
    *   **示例**：
        查找总付款超过200000的部门：
        ```sql
        SELECT deptno, totalpay
        FROM (
            SELECT deptno, SUM(salary) + SUM(bonus) AS totalpay
            FROM emp
            GROUP BY deptno
        ) AS payroll
        WHERE totalpay > 200000;
        ```
*   **公共表表达式**（Common Table Expression, **CTE**）：
    *   **概念**：使用 `WITH` 子句定义的命名临时结果集，可以在单个SQL语句中多次引用。
    *   **优点**：提高可读性、避免重复计算、解决递归查询问题。
    *   **用途**：主要用于需要多级聚焦的复杂查询。
    *   **语法**：`WITH CTE_name (column1, column2, ...) AS (SELECT ...)`
    *   **示例**：
        查找总付款最高的部门：
        ```sql
        WITH payroll(deptno, totalpay) AS (
            SELECT deptno, SUM(salary) + SUM(bonus)
            FROM emp
            GROUP BY deptno
        )
        SELECT deptno
        FROM payroll
        WHERE totalpay = (SELECT MAX(totalpay) FROM payroll);
        ```

### 5.4 外连接 (Outer Join)

*   **概念**：在连接操作中，即使某个表中的行在另一个表中没有匹配的行，也会保留这些行，并在缺失匹配的列中填充 `NULL`。
*   **类型**：
    *   **左外连接**（LEFT OUTER JOIN）：保留左表中的所有行。
    *   **右外连接**（RIGHT OUTER JOIN）：保留右表中的所有行。
    *   **全外连接**（FULL OUTER JOIN）：保留两个表中的所有行。
*   **用途**：当需要显示所有相关信息，包括那些没有匹配项的信息时。

### 5.5 递归查询 (Recursion)

*   **概念**：当公共表表达式在其定义中引用自身时，称为递归。
*   **用途**：用于计算复杂的递归推断，如层次结构查询、图遍历等。
*   **语法**：`WITH RECURSIVE CTE_name AS (initial_query UNION ALL recursive_query)`
    *   `initial_query`：定义递归的**起始成员**（anchor member）。
    *   `recursive_query`：定义递归的**递归成员**（recursive member），它引用CTE本身。
*   **停止规则**（Stopping Rule）：递归查询必须有明确的停止条件，以避免无限循环。

**示例**：
查找Hoover管理下且工资超过100000的所有员工：
```sql
WITH RECURSIVE agents(name, salary) AS (
    (SELECT name, salary FROM FedEmp WHERE manager = 'Hoover') -- initial query
    UNION ALL
    (SELECT f.name, f.salary FROM agents AS a, FedEmp AS f WHERE f.manager = a.name) -- recursive query
)
SELECT name FROM agents WHERE salary > 100000; -- final query
```

**示例**：
计算一个机翼中铆钉的总用量（经典“零件查找问题”）：
```sql
WITH RECURSIVE wingpart(subpart, qty) AS (
    (SELECT subpart, qty FROM components WHERE part = 'wing') -- initial query
    UNION ALL
    (SELECT c.subpart, w.qty * c.qty FROM wingpart w, components c WHERE w.subpart = c.part) -- recursive query
)
SELECT SUM(qty) AS qty FROM wingpart WHERE subpart = 'rivet';
```

**示例**：
查找从SFO到JFK的最低总成本路线（递归搜索）：
```sql
WITH RECURSIVE trips (destination, route, nsegs, totalcost) AS (
    (SELECT destination, CAST(destination AS VARCHAR(20)), 1, cost FROM flights WHERE origin = 'SFO') -- initial query
    UNION ALL
    (SELECT f.destination, CAST(t.route || ',' || f.destination AS VARCHAR(20)), t.nsegs + 1, t.totalcost + f.cost
     FROM trips t, flights f
     WHERE t.destination = f.origin
       AND f.destination <> 'SFO' -- stopping rule 1: avoid direct loop back to origin
       AND f.origin <> 'JFK'      -- stopping rule 2: avoid going back from destination
       AND t.nsegs <= 3)          -- stopping rule 3: limit path length
)
SELECT route, totalcost
FROM trips
WHERE destination = 'JFK' AND totalcost = (SELECT MIN(totalcost) FROM trips WHERE destination = 'JFK');
```

## 6. 嵌入式SQL (Embedded SQL)

**概念**：将SQL语句嵌入到宿主编程语言（如C/C++）中，以便在程序中访问和处理数据库。

### 6.1 解决的问题 (Problems to be Solved)

*   如何在编程语言中接受SQL语句。
*   如何在编程语言和DBMS之间交换数据和消息。
*   DBMS的查询结果是**集合**（set），如何将其转换为编程语言中的变量。
*   DBMS和编程语言的数据类型可能不完全相同。

### 6.2 通用解决方案 (General Solutions)

*   **嵌入式SQL**（Embedded SQL）：
    *   最基本的方法。通过**预编译**（pre-compiling），将嵌入式SQL语句转换为对内部库函数的调用来访问数据库。
*   **编程API**（Programming APIs）：
    *   提供一组库函数或DLLs，供程序员直接调用，并在编译时与应用程序链接。
*   **类库**（Class Library）：
    *   面向对象编程出现后，将访问数据库的库函数封装成一组类，提供更便捷的数据库处理方式。

### 6.3 嵌入式SQL的使用 (Usage of Embedded SQL)

*   **SQL语句标记**：以 `EXEC SQL` 开头，以 `;` 结尾。
*   **宿主变量**（Host Variables）：用于在C语言和SQL之间传递信息。
    *   必须在 `EXEC SQL BEGIN DECLARE SECTION;` 和 `EXEC SQL END DECLARE SECTION;` 之间定义。
    *   在SQL语句中，宿主变量前加 `:` 以区分SQL自身变量或属性名。
    *   在宿主语言中，宿主变量作为普通变量使用。
    *   **不能**定义为数组或结构体。
*   **SQLCA**（SQL Communication Area）：特殊的宿主变量，用于获取SQL语句执行状态。
    *   `EXEC SQL INCLUDE SQLCA;`
    *   `SQLCA.SQLCODE`：用于判断结果状态。
*   **指示符变量**（Indicator Variable）：`short int` 类型，用于处理宿主语言中的 `NULL` 值。

**示例**：宿主变量定义
```c
EXEC SQL BEGIN DECLARE SECTION;
char SNO[7];
char GIVENSNO[7];
char CNO[6];
char GIVENCNO[6];
float GRADE;
short GRADEI; /* indicator for GRADE */
EXEC SQL END DECLARE SECTION;
```

### 6.4 可执行语句 (Executable Statements)

*   **CONNECT**：连接到数据库。
    *   `EXEC SQL CONNECT :uid IDENTIFIED BY :pwd;`
*   **执行DDL或DML语句**：
    *   `EXEC SQL INSERT INTO SC(SNO, CNO, GRADE) VALUES(:SNO, :CNO, :GRADE);`
*   **执行查询语句**（单行结果）：
    *   `EXEC SQL SELECT GRADE INTO :GRADE :GRADEI FROM SC WHERE SNO = :GIVENSNO AND CNO = :GIVENCNO;`

### 6.5 游标 (Cursor)

当查询结果包含多行时，需要使用**游标**（Cursor）来逐行处理结果集。

1.  **定义游标**：
    `EXEC SQL DECLARE <cursor name> CURSOR FOR SELECT ... FROM ... WHERE ...;`
2.  **打开游标**：
    `EXEC SQL OPEN <cursor name>;` (类似于打开文件)
3.  **从游标中获取数据**：
    `EXEC SQL FETCH <cursor name> INTO :hostvar1, :hostvar2, ...;`
    *   当到达游标末尾时，`SQLCA.SQLCODE` 将返回100。
4.  **关闭游标**：
    `EXEC SQL CLOSE <cursor name>;`

**示例**：使用游标查询
```c
EXEC SQL DECLARE C1 CURSOR FOR
SELECT SNO, GRADE
FROM SC
WHERE CNO = :GIVENCNO;

EXEC SQL OPEN C1;
if (SQLCA.SQLCODE < 0) exit(1); /* Error in query */

while (1) {
    EXEC SQL FETCH C1 INTO :SNO, :GRADE :GRADEI;
    if (SQLCA.SQLCODE == 100) break;
    /* Process fetched data */
}
EXEC SQL CLOSE C1;
```

### 6.6 动态SQL (Dynamic SQL)

**概念**：在程序运行时动态构建和执行SQL语句。适用于SQL语句在编译前无法确定的情况。

*   **直接执行动态SQL**：
    *   仅用于非查询SQL语句。
    *   `EXEC SQL EXECUTE IMMEDIATE :sqlstring;`
    *   **示例**：
        ```c
        char sqlstring[200];
        char cond[150];
        strcpy(sqlstring, "DELETE FROM STUDENT WHERE ");
        printf(" Enter search condition :");
        scanf("%s", cond);
        strcat(sqlstring, cond);
        EXEC SQL EXECUTE IMMEDIATE :sqlstring;
        ```
*   **带动态参数的动态SQL**：
    *   仅用于非查询SQL语句。
    *   使用**占位符**（place holder）实现动态参数。
    *   `EXEC SQL PREPARE <statement_name> FROM :sqlstring;`
    *   `EXEC SQL EXECUTE <statement_name> USING :param1, :param2, ...;`
    *   **示例**：
        
        ```c
        char sqlstring[200];
        int birth_year;
        strcpy(sqlstring, "DELETE FROM STUDENT WHERE YEAR(BDATE) <= :y;");
        printf(" Enter birth year for delete :");
        scanf("%d", &birth_year);
        EXEC SQL PREPARE purge FROM :sqlstring;
        EXEC SQL EXECUTE purge USING :birth_year;
        ```
*   **用于查询的动态SQL**：
    *   用于动态构建查询语句。
    *   结合 `PREPARE` 和游标使用。
    *   **示例**：
        ```c
        char sqlstring[200];
        char SNO[7];
        float GRADE;
        short GRADEI;
        char GIVENCNO[6];
        char orderby[150];

        strcpy(sqlstring, "SELECT SNO, GRADE FROM SC WHERE CNO = :c");
        printf(" Enter the ORDER BY clause :");
        scanf("%s", orderby);
        strcat(sqlstring, orderby);
        printf(" Enter the course number :");
        scanf("%s", GIVENCNO);

        EXEC SQL PREPARE query FROM :sqlstring;
        EXEC SQL DECLARE grade_cursor CURSOR FOR query;
        EXEC SQL OPEN grade_cursor USING :GIVENCNO;

        while (1) {
            EXEC SQL FETCH grade_cursor INTO :SNO, :GRADE :GRADEI;
            if (SQLCA.SQLCODE == 100) break;
            /* Process fetched data */
        }
        EXEC SQL CLOSE grade_cursor;
        ```

## 7. 存储过程 (Stored Procedure)

**概念**：将常用的数据库访问程序作为过程存储在数据库中，编译后可直接调用。

*   **优点**：
    *   **方便用户**（Make User Convenient）：用户可以直接调用，无需重复编写代码，可重用。
    *   **提高性能**（Improve Performance）：存储过程已编译，无需再次解析和查询优化，执行效率高。
    *   **扩展DBMS功能**（Expand Function of DBMS）：可以通过编写脚本扩展DBMS的功能。

**示例**：删除学生的存储过程
```sql
EXEC SQL
CREATE PROCEDURE drop_student
(IN student_no CHAR(7),
OUT message CHAR(30))
BEGIN ATOMIC
    DELETE FROM STUDENT
    WHERE SNO = student_no;
    DELETE FROM SC
    WHERE SNO = student_no;
    SET message = student_no || ' droped';
END;
```
**调用示例**：
`EXEC SQL CALL drop_student(...);`

## 8. 事务管理 (Transaction Management)

### 8.1 事务 (Transaction)
*   **概念**：事务是数据库管理系统执行过程中的一个逻辑工作单元，它由一个或多个数据库操作组成。这些操作要么全部成功，要么全部失败。
*   **ACID特性**：事务必须满足以下四个基本特性，以确保数据的一致性和可靠性。
    *   **原子性**（Atomicity）：事务是一个不可分割的工作单位，事务中的操作要么全部成功提交，要么全部失败回滚。
    *   **一致性**（Consistency）：事务执行前后，数据库从一个一致状态转换到另一个一致状态。这意味着事务的执行不能破坏数据库的完整性约束。
    *   **隔离性**（Isolation）：并发执行的事务之间互不干扰，一个事务的执行不应影响其他事务的执行，就好像它们是串行执行的一样。
    *   **持久性**（Durability）：一旦事务成功提交，它对数据库的改变就是永久的，即使系统发生故障，这些改变也不会丢失。

### 8.2 事务状态 (Transaction States)
事务在执行过程中会经历不同的状态：
*   **活动状态**（Active）：事务的初始状态，事务正在执行中。
*   **部分提交状态**（Partially Committed）：事务的最后一个操作已经执行，但数据尚未完全写入磁盘。
*   **失败状态**（Failed）：事务的正常执行被中断，可能是由于系统错误、死锁或违反完整性约束等。
*   **中止状态**（Aborted）：事务在失败状态后，数据库系统撤销（undo）了事务对数据库的所有修改，使数据库恢复到事务开始前的状态。
*   **提交状态**（Committed）：事务成功完成，所有修改已永久保存到数据库中。

### 8.3 事务操作 (Transaction Operations)
*   **BEGIN TRANSACTION** 或 **START TRANSACTION**：标记事务的开始。
*   **COMMIT**：提交事务，使所有修改永久生效。
*   **ROLLBACK**：回滚事务，撤销所有修改，使数据库恢复到事务开始前的状态。

### 8.4 并发控制 (Concurrency Control)
*   **概念**：并发控制是管理并发事务以确保数据库一致性和隔离性的技术。
*   **并发问题**：
    *   **丢失更新**（Lost Update）：一个事务的更新被另一个事务的更新覆盖。
    *   **脏读**（Dirty Read）：一个事务读取了另一个未提交事务的数据，如果后者回滚，则前者读取的数据是无效的。
    *   **不可重复读**（Non-repeatable Read）：一个事务两次读取同一数据，但在这两次读取之间，另一个事务修改了该数据并提交，导致两次读取结果不同。
    *   **幻读**（Phantom Read）：一个事务在两次查询之间，另一个事务插入了满足查询条件的新行并提交，导致第一次查询未发现的行在第二次查询中出现。
*   **并发控制技术**：
    *   **锁**（Locking）：最常用的并发控制机制。
        *   **共享锁**（Shared Lock, S-lock）：允许多个事务同时读取同一数据。
        *   **排他锁**（Exclusive Lock, X-lock）：只允许一个事务对数据进行读写操作，其他事务不能同时访问。
        *   **两阶段封锁协议**（Two-Phase Locking, 2PL）：
            *   **增长阶段**（Growing Phase）：事务只能获得锁，不能释放锁。
            *   **收缩阶段**（Shrinking Phase）：事务只能释放锁，不能获得锁。
            *   2PL可以保证**可串行性**（Serializability），即并发执行的结果与某个串行执行的结果相同。
    *   **时间戳排序**（Timestamp Ordering）：为每个事务分配一个唯一的时间戳，根据时间戳来决定事务的执行顺序。
    *   **多版本并发控制**（Multi-Version Concurrency Control, MVCC）：为数据项维护多个版本，读操作可以读取旧版本数据，写操作创建新版本，从而减少读写冲突。

### 8.5 事务隔离级别 (Transaction Isolation Levels)
SQL标准定义了四种事务隔离级别，从低到高依次提供不同程度的隔离性，以平衡并发性和数据一致性：
*   **读未提交**（Read Uncommitted）：
    *   最低隔离级别。
    *   允许一个事务读取另一个未提交事务的数据（可能导致**脏读**）。
*   **读已提交**（Read Committed）：
    *   一个事务只能读取已经提交的数据。
    *   可以避免**脏读**，但可能出现**不可重复读**和**幻读**。
*   **可重复读**（Repeatable Read）：
    *   一个事务在整个执行过程中，对同一数据的多次读取结果保持一致。
    *   可以避免**脏读**和**不可重复读**，但可能出现**幻读**。
*   **串行化**（Serializable）：
    *   最高隔离级别。
    *   事务之间完全隔离，就好像它们是串行执行的一样。
    *   可以避免所有并发问题（**脏读**、**不可重复读**、**幻读**）。
    *   并发性最低，性能开销最大。

**隔离级别与并发问题对照表**：

| 隔离级别          | 脏读 (Dirty Read) | 不可重复读 (Non-repeatable Read) | 幻读 (Phantom Read) |
| :---------------- | :---------------- | :------------------------------- | :------------------ |
| 读未提交 (Read Uncommitted) | 可能              | 可能                             | 可能                |
| 读已提交 (Read Committed)   | 否                | 可能                             | 可能                |
| 可重复读 (Repeatable Read)  | 否                | 否                               | 可能                |
| 串行化 (Serializable)     | 否                | 否                               | 否                  |

## 9. 数据库恢复 (Database Recovery)

### 9.1 故障分类 (Failure Classification)
数据库系统可能面临多种类型的故障：
*   **事务故障**（Transaction Failure）：
    *   **逻辑错误**：事务内部的错误，如除以零、数据溢出。
    *   **系统错误**：死锁、资源不足等导致事务无法继续执行。
*   **系统崩溃**（System Crash）：
    *   硬件故障（如CPU、内存故障）、操作系统错误、DBMS软件错误等导致系统突然停止运行，内存中的数据丢失。
*   **磁盘故障**（Disk Failure）：
    *   存储设备损坏，导致存储在磁盘上的数据丢失。
*   **灾难**（Catastrophe）：
    *   火灾、地震、洪水等自然灾害，导致整个数据库系统物理损坏。

### 9.2 恢复技术 (Recovery Techniques)
数据库恢复的目标是在发生故障后，将数据库恢复到故障发生前的一致状态。
*   **日志**（Log / Journal）：
    *   **概念**：记录数据库所有更新操作的顺序文件。日志是数据库恢复的核心。
    *   **内容**：通常包括事务ID、操作类型（插入、删除、更新）、操作对象（表名、记录ID）、旧值、新值等。
    *   **作用**：
        *   **撤销**（Undo）：通过日志中的旧值来撤销未提交事务的修改。
        *   **重做**（Redo）：通过日志中的新值来重做已提交事务的修改。
*   **检查点**（Checkpoint）：
    *   **概念**：数据库系统周期性地执行的一个操作，将内存中所有已修改的数据块强制写入磁盘，并记录当前所有活动事务的列表。
    *   **作用**：缩短恢复时间，因为恢复过程只需从最近的检查点开始，而不是从日志的开头。
*   **数据库转储/备份**（Database Dump / Backup）：
    *   **概念**：定期将整个数据库或部分数据库复制到独立的存储介质上。
    *   **作用**：用于应对磁盘故障或灾难性故障，通过备份和日志文件结合进行恢复。

### 9.3 恢复算法 (Recovery Algorithms)
*   **基于日志的恢复**：
    *   **延迟更新**（Deferred Update）：事务的修改在提交时才写入磁盘。
        *   恢复时只需重做已提交事务的修改。
    *   **立即更新**（Immediate Update）：事务的修改在执行时就写入磁盘。
        *   恢复时需要撤销未提交事务的修改，并重做已提交事务的修改。
*   **Aries恢复算法**：
    *   一种广泛使用的、基于日志的恢复算法，支持并发控制和多种故障类型。
    *   主要思想：
        *   **Write-Ahead Logging (WAL)**：任何数据修改必须先写入日志，再写入磁盘。
        *   **Repeating History**：在恢复过程中，首先重做所有已提交和未提交事务的修改，以恢复到故障发生时的状态。
        *   **Undo/Redo Logging**：使用日志记录的旧值和新值进行撤销和重做操作。

## 10. 数据库安全性 (Database Security)

### 10.1 安全性威胁 (Security Threats)
*   **未经授权的访问**（Unauthorized Access）：非授权用户尝试访问数据库。
*   **数据泄露**（Data Leakage）：敏感数据被未经授权地披露。
*   **数据篡改**（Data Tampering）：数据被未经授权地修改、删除或破坏。
*   **拒绝服务攻击**（Denial of Service, DoS）：攻击者通过消耗系统资源，阻止合法用户访问数据库。

### 10.2 安全性机制 (Security Mechanisms)
*   **用户认证**（User Authentication）：
    *   **概念**：验证用户身份的过程，确保只有合法用户才能访问系统。
    *   **方法**：用户名/密码、生物识别、多因素认证等。
*   **访问控制**（Access Control）：
    *   **概念**：根据用户的身份和权限，限制其对数据库对象的访问。
    *   **自主访问控制**（Discretionary Access Control, DAC）：
        *   **概念**：数据库对象的所有者可以自主决定将访问权限授予其他用户。
        *   **GRANT/REVOKE语句**：SQL中的 `GRANT` 用于授予权限，`REVOKE` 用于撤销权限。
        *   **权限类型**：`SELECT`（查询）、`INSERT`（插入）、`UPDATE`（更新）、`DELETE`（删除）、`REFERENCES`（引用）、`ALL PRIVILEGES`（所有权限）等。
        *   **WITH GRANT OPTION**：允许被授权用户将其获得的权限再授予其他用户。
    *   **强制访问控制**（Mandatory Access Control, MAC）：
        *   **概念**：基于安全级别和分类标签，由系统强制执行的访问控制策略。
        *   **用途**：适用于高度安全的系统，如军事、政府等。
    *   **基于角色的访问控制**（Role-Based Access Control, RBAC）：
        *   **概念**：将权限分配给角色，再将角色分配给用户。
        *   **优点**：简化权限管理，提高安全性。
*   **视图**（Views）：
    *   **概念**：通过创建视图，可以限制用户只能看到表中的部分数据或列，从而实现数据隐藏。
*   **加密**（Encryption）：
    *   **概念**：将数据转换为密文，防止未经授权的访问者理解数据内容。
    *   **类型**：数据传输加密、数据存储加密。
*   **审计**（Auditing）：
    *   **概念**：记录所有数据库操作，以便追踪和分析可疑活动。
    *   **用途**：发现安全漏洞、追溯攻击来源、满足合规性要求。

## 11. 数据库完整性 (Database Integrity)

### 11.1 完整性约束 (Integrity Constraints)
*   **概念**：数据库完整性是指数据库中数据的正确性、有效性和一致性。完整性约束是确保这些特性的规则。
*   **类型**：
    *   **域完整性**（Domain Integrity）：
        *   **概念**：限制列中允许的值的范围或类型。
        *   **实现**：通过数据类型、`CHECK` 约束、`DEFAULT` 值、`NOT NULL` 约束等。
    *   **实体完整性**（Entity Integrity）：
        *   **概念**：确保表中的每一行都有唯一的标识。
        *   **实现**：通过**主键**（PRIMARY KEY）约束，主键列的值必须唯一且不能为NULL。
    *   **参照完整性**（Referential Integrity）：
        *   **概念**：确保表之间引用关系的有效性，防止引用不存在的数据。
        *   **实现**：通过**外键**（FOREIGN KEY）约束。外键值必须引用被引用表中的现有主键值，或者为NULL。
        *   **外键操作**：
            *   **ON DELETE CASCADE**：当被引用行被删除时，引用该行的所有行也随之删除。
            *   **ON DELETE SET NULL**：当被引用行被删除时，引用该行的外键值设为NULL。
            *   **ON DELETE RESTRICT**：如果存在引用该行的外键，则不允许删除被引用行。
            *   **ON DELETE NO ACTION**：与RESTRICT类似，但检查时机可能不同。
    *   **用户定义完整性**（User-Defined Integrity）：
        *   **概念**：根据特定业务规则定义的完整性约束。
        *   **实现**：通过 `CHECK` 约束、触发器（Trigger）、存储过程（Stored Procedure）等。

### 11.2 触发器 (Trigger)
*   **概念**：一种特殊的存储过程，它在数据库中定义，并在特定事件（如 `INSERT`、`UPDATE`、`DELETE`）发生时自动执行。
*   **用途**：
    *   维护复杂的用户定义完整性约束。
    *   实现业务规则。
    *   自动生成审计日志。
    *   级联更新或删除。
*   **触发时机**：
    *   **BEFORE**：在事件发生之前执行。
    *   **AFTER**：在事件发生之后执行。
*   **触发粒度**：
    *   **FOR EACH ROW**：对受事件影响的每一行执行一次。
    *   **FOR EACH STATEMENT**：对整个事件（语句）只执行一次。

**示例**：
创建一个触发器，在学生表插入新行时，自动更新系表中的学生人数。
```sql
CREATE TRIGGER update_dept_student_count
AFTER INSERT ON Students
FOR EACH ROW
BEGIN
    UPDATE Departments
    SET student_count = student_count + 1
    WHERE dept_id = NEW.dept_id;
END;
```

## 总结

本笔记涵盖了数据库原理中的核心概念，从数据模型、SQL语言的基础与高级特性，到事务管理、数据库恢复、安全性与完整性。

*   **数据模型**是理解数据库如何组织和表示数据的基石。
*   **SQL语言**是与关系数据库交互的标准工具，掌握其查询、DML、DDL和DCL功能至关重要。特别是**嵌套查询**、**聚合函数**、**GROUP BY/HAVING**以及**CTE**等高级特性，是解决复杂查询的关键。
*   **事务管理**的**ACID特性**是数据库可靠性的保障，**并发控制**和**隔离级别**是处理多用户并发访问的核心。
*   **数据库恢复**和**安全性**是确保数据可用性和防止未经授权访问的重要机制。
*   **数据库完整性**通过各种约束确保数据的正确性和一致性。

**考试复习重点**：

*   **ACID特性**：务必理解并能解释每个特性的含义。
*   **并发控制问题**（脏读、不可重复读、幻读）及其与**隔离级别**的对应关系，**对比记忆**。
*   **SQL查询语句**的各个子句（`SELECT`, `FROM`, `WHERE`, `GROUP BY`, `HAVING`）的执行顺序和作用。
*   **子查询**的各种形式（标量、表表达式、CTE）及其应用场景。
*   **聚合函数**的使用，以及 `DISTINCT` 关键字对其行为的影响。
*   **外键**的定义和**参照完整性**的维护（`ON DELETE` 选项）。
*   **NULL值**在SQL中的特殊处理和三值逻辑。
*   **嵌入式SQL**和**动态SQL**的概念及应用场景。
*   **存储过程**和**触发器**的作用和优势。
