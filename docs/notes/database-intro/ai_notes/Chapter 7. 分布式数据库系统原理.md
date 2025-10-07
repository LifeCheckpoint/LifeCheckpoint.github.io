---
title: 07. 分布式数据库系统原理
authors: [Life_Checkpoint]
tags: [note, db]
sidebar_position: 7
---
## 1. 分布式数据库系统（DDB）概述

### 1.1 什么是分布式数据库系统（DDB）？

**分布式数据库系统（Distributed Database System, DDB）** 是指数据在物理上分布于网络中的不同计算机上，但逻辑上是相互关联的，并由一个 **分布式数据库管理系统（Distributed Database Management System, DDBMS）** 进行管理的数据库系统。

**两种主要类型：**

1.  **物理分布，逻辑集中（General DDB）**：数据分散存储，但从用户角度看，它们构成一个统一的、逻辑集中的数据库。这是本课程的重点。
2.  **物理分布，逻辑也分布（Federated Database System, FDBS）**：更强调自治性，每个成员数据库保持自己的模式和管理，通过协商实现数据共享。

### 1.2 DDBS的特点

*   **分布性（Distribution）**：数据物理上分散存储在不同节点。
*   **关联性（Correlation）**：分散的数据在逻辑上是相互关联的，共同构成一个完整的数据库。
*   **DDBMS管理**：由专门的DDBMS软件统一管理和协调。

### 1.3 DDBS的优缺点

**优点：**

*   **本地自治性（Local Autonomy）**：每个站点可以独立管理其本地数据。
*   **高可用性（Good Availability）**：通过数据副本支持，部分站点故障不影响整个系统。
*   **高灵活性（Good Flexibility）**：系统扩展性好，易于适应业务变化。
*   **低系统成本（Low System Cost）**：可使用廉价的通用硬件构建。
*   **高效率（High Efficiency）**：多数访问可在本地处理，减少通信开销。
*   **并行处理（Parallel Process）**：不同站点可并行执行任务，提高吞吐量。

**缺点：**

*   **集成困难（Hard to Integrate Existing Databases）**：整合现有异构数据库复杂。
*   **系统复杂性高（Too Complex）**：系统本身的设计、使用、维护（如DDB设计）都比集中式数据库复杂。

### 1.4 DDBS面临的主要问题

与集中式DBMS相比，DDBS的特殊性带来了以下挑战：

*   **查询优化（Query Optimization）**：优化目标不同，需考虑网络传输成本。
*   **并发控制（Concurrency Control）**：需考虑整个网络的并发事务协调。
*   **恢复机制（Recovery Mechanism）**：所有子事务必须同时提交或同时中止（原子性）。
*   **数据分布（Data Distribution）**：如何有效地划分和放置数据。

## 2. 数据分布策略（Data Distribution Strategies）

数据分布是DDBS的核心问题之一，决定了数据如何物理存储在网络中的不同站点。

### 2.1 数据分布策略类型

| 策略名称 | 描述 | 优点 | 缺点 |
| :------- | :--- | :--- | :--- |
| **集中式（Centralized）** | 数据仍集中存储在一个站点，但系统是分布式的。 | 最简单。 | 不具备DDB的任何优势。 |
| **分区式（Partitioned）** | 数据被划分为不重复的片段，每个片段存储在一个站点。 | 无数据冗余，节省存储空间。 | 某个片段所在站点故障，该片段数据不可用。 |
| **复制式（Replicated）** | 数据库的完整副本存储在每个站点。 | **高可用性**，**适合读密集型系统**，查询响应快。 | 数据冗余高，更新复杂（需保证所有副本一致）。 |
| **混合式（Hybrid）** | 结合上述策略，部分数据分区，部分数据复制。 | 最灵活。 | 最复杂。 |

### 2.2 数据分布单元（Unit of Data Distribution）

数据可以按不同的粒度进行分布：

1.  **按关系（Relation）或文件（File）**：不进行更细粒度的划分，整个表作为一个单元分布。
2.  **按片段（Fragments）**：将关系分解成更小的逻辑单元进行分布。
    *   **水平分片（Horizontal Fragmentation）**：按行（元组）划分，将关系中的元组子集分配到不同站点。
        *   **用例**：一个包含全国客户信息的 `Customer` 表，可以按省份将客户数据水平分片，每个省份的数据存储在其对应的区域服务器上。例如，`Customer_Beijing` 表存储在北京服务器，`Customer_Shanghai` 表存储在上海服务器。
    *   **垂直分片（Vertical Fragmentation）**：按列（属性）划分，将关系中的属性子集分配到不同站点。
        *   **用例**：一个 `Employee` 表包含员工的基本信息（姓名、工号）和薪资信息（基本工资、奖金）。可以将基本信息分片到 `Employee_Basic` 表，存储在人事部门的服务器；将薪资信息分片到 `Employee_Salary` 表，存储在财务部门的服务器。
    *   **混合分片（Mixed Fragmentation）**：同时进行水平和垂直分片。

### 2.3 分片的准则（Criteria of Fragmentation）

为了确保分片的有效性和正确性，需要遵循以下准则：

1.  **完备性（Completeness）**：关系中的每个元组或属性都必须在某个分片中有其对应。
2.  **可重构性（Reconstruction）**：必须能够通过分片重建出原始的全局关系。
3.  **不相交性（Disjointness）**：对于水平分片，不同分片之间不应有重复的元组。

### 2.4 数据分布带来的问题

数据分布虽然带来了优势，但也引入了新的复杂性：

1.  **多副本一致性（Multi copies’ consistency）**：当数据有多个副本时，如何保证所有副本的数据一致。
2.  **分布一致性（Distribution consistency）**：主要指元组存储位置因更新操作而发生变化时的一致性问题。
    *   **解决方案：**
        *   **再分布（Redistribution）**：更新后，通过“选择->移动->插入->删除”的步骤将元组移动到正确的位置。
        *   **捎带（Piggybacking）**：在更新时立即检查元组是否不一致，如果存在，则随ACK信息一起发送回，然后发送到正确的位置。
3.  **全局查询到片段查询的转换及物理副本的选择（Translation of Global Queries to Fragment Queries and Selection of Physical Copies）**：DDBMS需要将用户提交的全局查询分解为针对各个片段的子查询，并选择最优的物理副本进行访问。
4.  **数据库片段的设计和片段的分配（Design of Database Fragments and Allocation of Fragments）**：这是一个分布式数据库设计问题，需要根据应用需求和系统特性来决定如何分片以及将分片分配到哪个站点。

**注意：** 问题1-3主要由DDBMS解决，问题4是分布式数据库设计需要解决的问题。

## 3. 联邦数据库系统（Federated Database System, FDBS）

联邦数据库系统是一种特殊的分布式数据库系统，它旨在解决多个现有、分布且异构数据库的集成问题。

### 3.1 FDBS的特点

*   **自治性（Autonomy）**：每个成员数据库都保持其高度自治性。
*   **协商（Negotiation）**：成员之间通过协商来协作和共享数据。
*   **无全局模式（No Global Schema）**：与传统DDB不同，FDBS通常没有一个统一的全局模式，每个联邦成员保留自己的数据模式。
*   **数据共享（Data Sharing）**：通过协商决定各自的输入/输出模式，建立数据共享关系。

### 3.2 联邦数据库系统中的模式结构

联邦数据库系统采用多层模式结构来实现异构数据库的集成和数据共享。

$$FS_i = CS_i + IS_i$$

*   **FS_i (Federated Schema)**：站点 $i$ 上用户可用的所有数据模式。
*   **CS_i (Component Schema)**：站点 $i$ 上本地数据库的模式。
*   **IS_i (Import Schema)**：通过与其他站点 $j$ 的 **ES_j (Export Schema)** 协商获得的，从其他站点导入的数据模式。
*   **ES_j (Export Schema)**：站点 $j$ 导出的、可供其他站点访问的数据模式。

**查询处理流程：**

1.  用户在FS_i上提交查询。
2.  查询被分解为针对CS_i和IS_i的子查询。
3.  针对IS_i的子查询进一步转化为针对相应ES_j的子查询，并发送到其他站点。
4.  从ES_j获得的结果被转换为IS_i的格式。
5.  将CS_i和IS_i的查询结果合并，形成FS_i的最终结果。

## 4. DDBS中的查询优化（Query Optimization）

DDBS中的查询优化目标与集中式数据库不同，主要目标是**最小化网络传输成本**。

### 4.1 优化目标

*   **最小化网络传输成本（Minimize the transmission cost on network）**：这是DDBS查询优化的首要目标，因为网络通信通常比本地磁盘I/O昂贵得多。

### 4.2 优化策略

*   **代数优化（Algebra Optimization）**：通过关系代数表达式的等价变换来优化查询。
*   **全局查询到片段查询的转换及物理副本的选择（Translation of Global Queries to Fragment Queries and Selection of Physical Copies）**：将用户提交的全局查询转换为针对具体数据片段的子查询，并选择最优的物理副本进行访问。
*   **查询分解（Query Decomposition）**：将复杂的查询分解为更小的、可执行的单元。
*   **全局查询计划（Global Query Plan）**：生成一个跨多个站点的执行计划，包括数据传输和本地操作。

**用例：全局查询优化**

假设有关系R1在Site1，R2在Site2。用户在Site1执行查询：
`SELECT * FROM R1, R2 WHERE R1.a = R2.b;`

一个可能的全局查询优化计划（基于成本估算）可能是：

1.  将R2从Site2发送到Site1，得到R'。
2.  在Site1执行本地连接操作：
    `SELECT * FROM R1, R' WHERE R1.a = R'.b;`

这个计划的目标是减少网络传输的数据量，或者将数据移动到计算发生的地方，以最小化总成本。

## 5. DDBS中的恢复机制（Recovery Mechanism）

DDBS的恢复机制基本原理与集中式DBMS相同，但需要处理分布式事务的原子性问题。

### 5.1 核心挑战

*   **分布式事务（Distributed Transactions）**：关键在于如何确保所有子事务要么同时提交，要么同时中止。
*   **通信不可靠性（Communication is not reliable）**：子事务之间的协调依赖于通信，而网络通信可能出现故障。

### 5.2 关键协议

*   **两阶段提交协议（Two-Phase Commitment Protocol, 2PC）**：这是实现分布式事务原子性的标准协议。
    *   **阶段一：投票阶段（Voting Phase）**：协调者向所有参与者发送准备提交请求。参与者执行预备操作，并向协调者投票（同意或中止）。
    *   **阶段二：提交/中止阶段（Commit/Abort Phase）**：协调者根据所有参与者的投票结果决定最终操作。如果所有参与者都同意，则发送提交命令；否则，发送中止命令。参与者执行最终操作并向协调者发送确认。
*   **故障组合（Combination of failures）**：需要考虑协调者故障、参与者故障、网络故障等多种故障情况及其组合。

## 6. DDBS中的并发控制（Concurrency Control）

DDBS的并发控制基本原理与集中式DBMS相同，即确保并发事务的调度是可串行化的。

### 6.1 核心挑战

*   **多副本（Multi copies）**：由于数据存在多个副本，需要实现全局锁定，确保对同一逻辑数据的所有副本操作的一致性。
*   **通信开销（Communication overhead）**：分布式锁管理和协调会引入显著的网络通信开销。
*   **全局死锁（Global deadlock）**：由于事务跨越多个站点，可能发生涉及多个站点的死锁，检测和解决比集中式死锁更复杂。

**重点提示：**

*   **2PC协议**是分布式事务原子性的**核心**。
*   **查询优化目标**是**最小化网络传输成本**。
*   **数据分片**（水平、垂直、混合）是实现数据分布的**关键技术**。
*   **联邦数据库**与**通用DDB**的主要区别在于**自治性**和**无全局模式**。
*   DDBS的**复杂性**和**高可用性**是其最显著的优缺点。