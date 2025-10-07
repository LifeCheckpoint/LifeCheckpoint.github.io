---
title: 05. 数据库安全与完整性约束
authors: [Life_Checkpoint]
tags: [note, db]
sidebar_position: 5
---
## 1. 概述

数据库的稳定运行和数据质量是其核心价值的体现。数据库的破坏通常由以下因素引起：

*   **系统故障** (System Failure)：如硬件故障、软件错误等。
*   **并发访问导致的不一致性** (Inconsistency Caused by Concurrent Access)：多个用户同时操作数据时可能出现的问题。
*   **人为破坏** (Man-caused Destruction)：包括有意或无意的破坏行为。
*   **数据输入错误或更新事务不遵守一致性规则** (Incorrect Data Input or Update Transaction Violating Consistency Preservation)：数据本身不符合预设的规范。

其中，系统故障和并发访问不一致性主要通过数据库管理系统（DBMS）的**恢复机制**（Recovery Mechanism）解决；人为破坏属于**数据库安全**（Database Security）范畴；数据输入错误和不遵守一致性规则则属于**完整性约束**（Integrity Constraints）范畴。

## 2. 数据库安全 (Database Security)

数据库安全旨在保护数据库不被非法访问和篡改。

### 2.1 数据库安全机制

| 机制名称 | 英文翻译 | 描述 | 示例/说明 |
| :------- | :------- | :------- | :-------- |
| **视图与查询重写** | View and Query Rewriting | 通过视图限制用户对数据的访问范围，用户只能看到视图定义的数据子集。 | 用户只能查询到其所在部门的员工信息。 |
| **访问控制** | Access Control | 确定用户对数据库对象的访问权限。 | |
| &nbsp;&nbsp;&nbsp;&nbsp;**用户分类** | User Classification | | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 普通用户 | General User | 拥有基本的数据操作权限。 | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 拥有资源权限的用户 | User with Resource Privilege | 对特定数据库资源拥有额外权限。 | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 数据库管理员 | DBA (Database Administrator) | 拥有最高权限，负责数据库的安装、配置、维护和安全管理。 | |
| **用户身份识别与认证** | Identification and Authentication of Users | 验证用户身份的合法性。 | |
| &nbsp;&nbsp;&nbsp;&nbsp; 密码 | Password | 最常见的认证方式。 | |
| &nbsp;&nbsp;&nbsp;&nbsp; 特殊物品 | Special Articles | 如密钥、IC卡等。 | |
| &nbsp;&nbsp;&nbsp;&nbsp; 个人特征 | Personal Features | 如指纹、签名等生物识别技术。 | |
| **授权** | Authorization | 授予用户对数据库对象的特定操作权限。 | `GRANT CONNECT TO JOHN IDENTIFIED BY xyzabc;` (允许John连接数据库)<br />`GRANT SELECT ON TABLE S TO U1 WITH GRANT OPTION;` (允许U1查询表S，并可将此权限授予他人) |
| **角色** | Role | 将一组权限打包，然后将角色授予用户，简化权限管理。 | |
| **数据加密** | Data Encryption | 对敏感数据进行加密存储，防止数据泄露。 | |
| **审计跟踪** | Audit Trail | 记录数据库操作日志，以便追踪和分析可疑行为。 | `AUDIT SELECT, INSERT, DELETE, UPDATE ON emp WHENEVER SUCCESSFUL;` (记录对emp表的查询、插入、删除、更新操作) |

### 2.2 统计数据库安全 (Security of Statistical Database)

在许多情况下，统计数据是公开的，但详细的个人数据是保密的。然而，有时可以通过公开的统计数据推导出详细的个人数据，这被称为**推理攻击** (Inference Attack)。

#### 2.2.1 个人追踪器 (Individual Tracker)

**个人追踪器**是一种通过一系列统计查询来推断出特定个体敏感信息的方法。

**用例：**
假设有一个名为 `STATS` 的表，包含 `NAME`、`SEX`、`DEPENDENTS`、`OCCUPATION`、`SALARY` 等字段。其中 `SALARY` 是保密的，其他信息公开。

**场景：** 已知王（Wang）是一名男性程序员，我们想推断出他的工资。

1.  **查询1：** 统计男性程序员的数量。
    `SELECT COUNT(*) FROM STATS WHERE SEX='M' AND OCCUPATION='programmer';`
    结果：1 (说明只有王是男性程序员)

2.  **查询2：** 统计男性程序员的总工资。
    `SELECT SUM(SALARY) FROM STATS WHERE SEX='M' AND OCCUPATION='programmer';`
    结果：120 (由于只有王一个男性程序员，所以这个总工资就是王的工资)

**更复杂的追踪器：**

即使直接查询无法得到结果，也可以通过组合查询来推断。

**用例：**
假设 `STATS` 表有10条记录。

1.  **查询3：** 统计所有记录数。
    `SELECT COUNT(*) FROM STATS;`
    结果：10

2.  **查询4：** 统计非男性程序员的记录数。
    `SELECT COUNT(*) FROM STATS WHERE NOT(SEX='M' AND OCCUPATION='programmer');`
    结果：9
    （通过查询3和查询4，可以推断出只有1个男性程序员，即王）

3.  **查询5：** 统计所有记录的总工资。
    `SELECT SUM(SALARY) FROM STATS;`
    结果：1420

4.  **查询6：** 统计非男性程序员的总工资。
    `SELECT SUM(SALARY) FROM STATS WHERE NOT(SEX='M' AND OCCUPATION='programmer');`
    结果：1300

**推断：** 王的工资 = 查询5结果 - 查询6结果 = $1420 - 1300 = 120$。

#### 2.2.2 通用追踪器 (General Tracker)

**通用追踪器**是一个谓词 $T$，满足 $2b \le |\text{SET}(T)| \le (n-2b)$，其中 $b < n/4$，$n$ 是总记录数。
如果一个元组 $R$ 可以被谓词 $p$ 唯一限定，即 $\text{SET}(p) = \{R\}$，那么：
$\text{SET}(p) = \text{SET}(p \text{ or } T) \cup \text{SET}(p \text{ or not } T) - \text{SET}(T) - \text{SET}(\text{not } T)$
（其中 $\cup$ 表示不消除重复元组的并集）。

**核心思想：** 通过构造一系列查询，使得目标个体是这些查询结果的唯一交集或差集，从而推断出其敏感信息。

## 3. 完整性约束 (Integrity Constraints, IC)

完整性约束描述了数据库合法实例必须满足的条件。违反完整性约束的插入、删除或更新操作将被禁止。它们用于确保应用程序语义（如主键）或防止不一致性（如数据类型、取值范围）。

### 3.1 完整性约束的类型

| 类型名称 | 英文翻译 | 描述 | 示例/说明 |
| :------- | :------- | :------- | :-------- |
| **静态约束** | Static Constraints | 针对数据库状态的约束。 | |
| &nbsp;&nbsp;&nbsp;&nbsp; 固有约束 | Inherent Constraints | 数据模型本身固有的约束。 | **第一范式 (1NF)**：关系中的所有属性都是原子性的，不可再分。 |
| &nbsp;&nbsp;&nbsp;&nbsp; 隐式约束 | Implicit Constraints | 在数据模式中隐含，通常通过数据定义语言（DDL）指定。 | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 域约束 | Domain Constraints | 字段值必须符合其定义的数据类型和取值范围。 | 始终强制执行。 |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 主键约束 | Primary Key Constraints | 唯一标识关系中的每个元组，且值不能为空。 | |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 外键约束 | Foreign Key Constraints | 引用另一个关系的主键，确保参照完整性。 | |
| &nbsp;&nbsp;&nbsp;&nbsp; 显式约束/通用约束 | Explicit Constraints / General Constraints | 用户自定义的更复杂的约束。 | |
| **动态约束** | Dynamic Constraints | 针对数据库从一个状态转换到另一个状态时的约束。 | 可以与**触发器 (Trigger)** 结合使用。 |

### 3.2 数据库修改与参照完整性

当数据库进行插入、删除或更新操作时，需要检查并维护参照完整性。
假设关系 $r_2$ 中的外键 $\alpha$ 引用关系 $r_1$ 的主键 $K_1$，参照完整性约束表示为：$\Pi_{\alpha}(r_2) \subseteq \Pi_{K_1}(r_1)$。

*   **插入 (Insert)**：
    如果向 $r_2$ 插入元组 $t_2$，系统必须确保 $t_2[\alpha]$ 的值在 $r_1$ 的 $K_1$ 列中存在。即 $t_2[\alpha] \in \Pi_{K_1}(r_1)$。

*   **删除 (Delete)**：
    如果从 $r_1$ 删除元组 $t_1$，系统必须计算 $r_2$ 中引用 $t_1$ 的元组集合：$\sigma_{\alpha=t_1[K_1]}(r_2)$。
    如果此集合不为空，则：
    *   删除命令被拒绝（作为错误）。
    *   引用 $t_1$ 的元组也必须被删除（**级联删除** (Cascading Deletions)）。

*   **更新 (Update)**：
    有两种情况：
    1.  **更新 $r_2$ 中的外键 $\alpha$ 值**：
        如果更新 $r_2$ 中的元组 $t_2$，修改了外键 $\alpha$ 的值，则必须进行类似插入的检查。设 $t_2'$ 是 $t_2$ 的新值，系统必须确保 $t_2'[\alpha] \in \Pi_{K_1}(r_1)$。
    2.  **更新 $r_1$ 中的主键 $K_1$ 值**：
        如果更新 $r_1$ 中的元组 $t_1$，修改了主键 $K_1$ 的值，则必须进行类似删除的检查。系统必须计算 $\sigma_{\alpha=t_1[K_1]}(r_2)$（使用 $t_1$ 的旧值）。如果此集合不为空，则：
        *   更新可能被拒绝。
        *   更新可能**级联** (Cascaded) 到 $r_2$ 中引用该主键的元组。
        *   $r_2$ 中引用该主键的元组可能被删除。

### 3.3 完整性约束的定义方式

| 定义方式 | 描述 | 示例/说明 |
| :------- | :------- | :------- |
| **通过程序指定** | 让应用程序负责检查完整性约束。 | 灵活性高，但容易出错且难以维护。 |
| **通过断言 (Assertion) 指定** | 使用断言规范语言定义，由DBMS自动检查。 | `ASSERT balanceCons ON account: balance>=0;` (断言账户余额必须大于等于0) |
| **通过基本表定义中的 `CHECK` 子句指定** | 在创建表时定义，由DBMS自动检查。 | `CREATE TABLE Sailors ( sid INTEGER, sname CHAR(10), rating INTEGER, age REAL, PRIMARY KEY (sid), CHECK( rating >= 1 AND rating <= 10));` (检查rating字段的取值范围) |

### 3.4 跨多关系的约束

当约束涉及多个关系时，`CHECK` 子句可能无法满足需求，或者表达起来非常笨拙甚至错误。

**错误示例：**
`CREATE TABLE Sailors (...) CHECK ((SELECT COUNT(S.sid) FROM Sailors S) + (SELECT COUNT(B.bid) FROM Boats B) < 100);`
这个 `CHECK` 约束是错误的，因为它只在 `Sailors` 表被修改时才会被检查。如果 `Sailors` 表为空，那么 `Boats` 表的元组数量可以是任意值，而这个约束仍然成立。

**正确解决方案：** 使用**断言 (Assertion)**。断言不与任何特定表关联，而是独立于表定义存在。

**示例：**
`CREATE ASSERTION smallClub CHECK ((SELECT COUNT(S.sid) FROM Sailors S) + (SELECT COUNT(B.bid) FROM Boats B) < 100);`
这个断言会在任何涉及 `Sailors` 或 `Boats` 表的修改操作后被检查，确保总数小于100。

## 4. 触发器 (Triggers)

**触发器**是一种特殊的存储过程，当数据库中发生特定事件时，它会自动执行。

### 4.1 触发器的组成

触发器通常由三部分组成，也称为 **ECA规则 (Event-Condition-Action Rules)**：

*   **事件 (Event)**：激活触发器的数据库操作（如 `INSERT`、`DELETE`、`UPDATE`）。
*   **条件 (Condition)**：一个布尔表达式，用于测试触发器是否应该运行。如果条件为真，则执行动作。
*   **动作 (Action)**：如果条件满足，触发器将执行的操作。

### 4.2 触发器示例 (SQL:1999)

**用例：** 当 `SAILORS` 表插入新记录时，如果水手年龄小于等于18岁，则将其信息插入到 `YoungSailors` 表中。

```sql
CREATE TRIGGER youngSailorUpdate
AFTER INSERT ON SAILORS                 -- 事件：在SAILORS表插入后
REFERENCING NEW TABLE NewSailors        -- 引用新插入的行集合
FOR EACH STATEMENT                      -- 针对每个语句执行一次
INSERT INTO YoungSailors(sid, name, age, rating)
SELECT sid, name, age, rating
FROM NewSailors N
WHERE N.age <= 18;                      -- 条件：新插入水手年龄小于等于18
```

### 4.3 触发器的执行模式

*   **立即执行** (Immediate Execution)：事件发生后立即执行触发器。
*   **延迟执行** (Deferred Execution)：在事务提交时执行触发器。
*   **解耦或分离模式** (Decoupled or Detached Mode)：触发器在一个独立的事务中执行。
*   **级联触发** (Cascading Trigger)：一个触发器的动作可能导致另一个触发器被激活，形成级联效应。
    *   需要控制嵌套执行，防止无限循环。
    *   可以通过**触发图** (Triggering Graph) 分析。
    *   可以指定级联次数的上限。
    *   因此，触发器应合理使用。

### 4.4 ECA实现方式

*   **松散耦合** (Loosely Coupling)：触发器逻辑与DBMS核心分离。
*   **紧密耦合** (Tightly Coupling)：触发器逻辑集成在DBMS核心中（如DB2, Oracle等）。
    *   **嵌套方法** (Nested Method)：规则嵌套在事务中，作为事务的一部分由DBMS执行。
    *   **嫁接方法** (Grafting Method)：在查询执行计划中插入触发器逻辑。
    *   **查询修改方法** (Query Modification Method)：通过修改用户查询来包含触发器逻辑。