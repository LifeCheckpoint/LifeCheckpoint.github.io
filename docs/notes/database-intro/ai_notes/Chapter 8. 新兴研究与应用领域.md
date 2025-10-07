---
title: 08. 新兴研究与应用领域
authors: [Life_Checkpoint]
tags: [note, db]
sidebar_position: 8
---
## 1. 数据仓库（Data Warehouse）与联机分析处理（OLAP）

### 1.1 决策支持系统的数据需求

在网络时代海量数据背景下，如何高效利用数据、从中发现有用信息成为关键。决策制定需要的数据与日常事务处理不同，主要体现在以下几个方面：

*   **汇总数据（Summarized Data）**：而非详细数据。
*   **历史数据（Historical Data）**：而非仅当前数据。
*   **多数据源（Multi Data Source）**：需要整合大量企业内部和外部数据。
*   **面向决策主题（Decision Subject Oriented）**：而非面向日常事务处理。
*   **非实时更新（Non-real-time Updating）**：主要用于读取和分析，更新频率较低。

### 1.2 数据仓库的定义与特征

数据仓库是一个从多个源收集信息的存储库，专为支持决策制定而设计。

*   **面向主题（Decision Subject Oriented）**：围绕特定的决策主题组织数据。
*   **集成性（Integrated）**：提供统一的数据视图，消除数据源之间的不一致。
*   **历史性（Historical）**：存储长期历史数据，支持趋势分析。
*   **非易失性（Non-volatile）**：数据一旦进入数据仓库，通常不进行修改或删除，只进行追加。
*   **主要用于检索（Mainly Retrieved）**：数据主要用于查询和分析，而非频繁更新。
*   **周期性加载（Periodically Downloaded）**：数据通常从联机事务处理（OLTP）系统周期性（如每晚）加载。
*   **不影响OLTP系统**：在数据仓库上运行大型查询，避免影响OLTP系统的性能。

### 1.3 数据库与数据仓库的对比

| 特性           | 联机事务处理（OLTP）数据库 | 联机分析处理（OLAP）数据仓库 |
| :------------- | :--------------------------- | :----------------------------- |
| **数据特点**   | 详细数据                     | 汇总数据                       |
| **数据描述**   | 当前数据                     | 当前及历史数据                 |
| **数据来源**   | 企业内部数据                 | 内部与外部数据；分布式；异构   |
| **数据组织**   | 围绕事务处理                 | 围绕决策主题                   |
| **数据更新**   | 即时更新                     | 周期性或按需更新               |
| **数据量**     | 单次操作涉及少量数据         | 单次操作涉及海量数据           |
| **操作特点**   | 简单、重复的短事务处理       | 复杂查询的长事务处理           |

### 1.4 数据仓库的挑战（Warehousing Issues）

*   **语义集成（Semantic Integration）**：处理来自不同源的数据时，消除不匹配（如不同货币、模式）。
*   **异构源（Heterogeneous Sources）**：访问各种格式和存储库的数据。
*   **加载、刷新、清除（Load, Refresh, Purge）**：数据加载、周期性刷新及清除过旧数据。
*   **元数据管理（Metadata Management）**：跟踪数据来源、加载时间等信息。

### 1.5 数据仓库的软件解决方案

*   **联机分析处理（OLAP）**：支持用户多维度、多层次分析数据。
*   **分析与查询报告解决方案（Analysis and Query Reporting Solutions）**：定制分析工具，使用数学模型生成交互式解决方案。
*   **数据挖掘（Data Mining）**：识别数据中的模式和关联，或创建预测模型。

### 1.6 多维数据模型（Multidimensional Data Model）

多维数据模型将数据组织成一个“立方体”（Cube），包含数值度量（Measures）和维度（Dimensions）。

*   **度量（Measures）**：通常是数值型数据，如销售额（Sales）。
*   **维度（Dimensions）**：描述度量的不同视角，如产品（Product）、地点（Location）、时间（Time）。

#### 1.6.1 维度层次（Dimension Hierarchies）

每个维度都可以组织成层次结构，支持从不同粒度进行分析，如时间维度可分为日、周、月、季度、年。

#### 1.6.2 MOLAP vs ROLAP

*   **MOLAP (Multidimensional OLAP)**：将多维数据物理存储为数组形式。
*   **ROLAP (Relational OLAP)**：将多维数据存储为关系表形式。

#### 1.6.3 事实表（Fact Table）与维度表（Dimension Table）

*   **事实表**：存储度量值和指向维度表的外键，通常是大型表。
*   **维度表**：存储维度的详细信息，通常是小型表。

#### 1.6.4 星型模式（Star Schema）与雪花模式（Snowflake Schema）

*   **星型模式**：一个事实表直接连接多个维度表，维度表之间不连接。结构简单，查询性能高。
*   **雪花模式**：维度表进一步规范化，形成多个子维度表，维度表之间存在连接。减少数据冗余，但查询可能更复杂。

#### 1.6.5 实例化视图（Materialized View）

由于聚合函数计算耗时，数据仓库中常将计算结果存储为**实例化视图**。这些视图是预先计算并存储的查询结果，可以显著提高查询性能。

**示例**：
假设有销售数据 Sales (PID, SID, DID, SaledMoney)，其中 PID (产品ID), SID (商店ID), DID (日期ID), SaledMoney (销售额)。

*   **PSD视图**：每天每个产品在每个商店的销售总额。
    ```sql
    CREATE VIEW PSD (PID, SID, DID, TotalSales) AS
    SELECT PID, SID, DID, SUM(SaledMoney) AS TotalSales
    FROM Sales
    GROUP BY PID, SID, DID;
    ```
*   **PS视图**：每个产品在每个商店的总销售额（所有时间）。
    ```sql
    CREATE VIEW PS (PID, SID, TotalSales) AS
    SELECT PID, SID, SUM(TotalSales) AS TotalSales
    FROM PSD
    GROUP BY PID, SID;
    ```
*   **P视图**：每个产品的总销售额（所有商店和所有时间）。
    ```sql
    CREATE VIEW P (PID, TotalSales) AS
    SELECT PID, SUM(TotalSales) AS TotalSales
    FROM PS
    GROUP BY PID;
    ```
*   **ALL视图**：所有产品、所有商店、所有时间的总销售额。
    ```sql
    CREATE VIEW ALL (TotalSales) AS
    SELECT SUM(TotalSales) AS TotalSales
    FROM P;
    ```
这些视图之间存在依赖关系，形成一个格状结构，支持不同粒度的聚合查询。

### 1.7 OLAP查询操作

OLAP查询支持用户从不同角度和粒度分析数据。

*   **钻取（Drill-down）**：从高层汇总数据深入到低层详细数据。例如，从按州销售额钻取到按城市销售额。
*   **上卷（Roll-up）**：从低层详细数据聚合到高层汇总数据。例如，从按城市销售额上卷到按州销售额。
*   **切片（Slice）**：在某个维度上选择一个特定值，生成一个子立方体。例如，只看2023年的销售数据。
*   **切块（Dice）**：在多个维度上选择特定范围或值，生成一个更小的子立方体。例如，只看2023年第一季度在华东地区的销售数据。
*   **旋转（Pivoting）**：重新排列维度的显示方向，改变数据视图。例如，将产品作为行，时间作为列。

#### 1.7.1 CUBE操作符

`CUBE` 操作符可以生成所有可能的维度组合的聚合结果。对于 $k$ 个维度，会生成 $2^k$ 种可能的 `GROUP BY` 查询。

**示例**：
`CUBE PID, SID, DID BY SUM Sales` 将生成关于产品、商店和日期所有 $2^3=8$ 种组合的销售额聚合。

#### 1.7.2 ROLLUP操作符

`ROLLUP` 操作符生成指定维度层次的聚合结果。

**示例**：
`GROUP BY PID, SID, DID ROLLUP` 将生成 (PID, SID, DID), (PID, SID), (PID), () 四种聚合结果。

### 1.8 位图索引（Bitmap Index）

位图索引是一种特殊的索引，适用于低基数（distinct values少）的列。它为列的每个唯一值创建一个位图，位图中的每个位对应一行数据，如果该行包含该值，则对应的位为1，否则为0。

**优点**：
*   **高效的布尔运算**：对于多个条件的AND/OR查询，可以直接对位图进行位运算，速度极快。
*   **节省存储空间**：对于低基数列，位图索引比B+树索引更紧凑。

**示例**：
查询“Class A”且“State NY”的商店数量：
将“Class A”的位图与“State NY”的位图进行AND位运算，结果位图中1的数量即为符合条件的商店数量。

### 1.9 数据仓库工程流程

1.  **需求分析（Requirements Analysis）**：确定业务需求和目标。
2.  **数据仓库架构设计（Data Warehouse Architecture Design）**：规划整体架构，包括数据源、ETL、存储、访问等。
3.  **环境构建（Environments Construction）**：搭建硬件和软件环境。
4.  **数据仓库模式设计（Data Warehouse Schema Design）**：设计星型或雪花模式。
5.  **ETL处理（ETL Processing）**：
    *   **抽取（Extract）**：从源系统获取数据。
    *   **转换（Transform）**：清洗、转换、整合数据。
    *   **加载（Load）**：将数据加载到数据仓库。
6.  **元数据管理（Meta Data Management）**：管理数据仓库中数据的元数据。
7.  **前端应用设计与实现（Front Applications Design & Implementation）**：开发报表、OLAP工具、数据挖掘工具等。
8.  **测试（Testing）**：验证数据质量和系统性能。
9.  **运行与维护（Running & Maintaining）**：日常运营和维护。

#### 1.9.1 数据仓库架构设计模式

*   **自顶向下（Top Down）**：先构建企业数据仓库（EDW），再从EDW中抽取数据构建部门数据市集（Data Marts）。
    *   **优点**：数据一致性高，冗余少，支持全局数据探索。
    *   **缺点**：初期投入大，建设周期长。
*   **自底向上（Bottom Up）**：先构建部门数据市集，再逐步整合形成企业数据仓库。
    *   **优点**：快速满足局部业务需求，部门自治。
    *   **缺点**：可能存在数据冗余和不一致，整合困难。
*   **混合方法（Mixed Method）**：结合两种方法的优点。

## 2. 数据挖掘（Data Mining）

### 2.1 定义

数据挖掘是从大量数据中探索和分析，以发现**有效（Valid）**、**新颖（Novel）**、**潜在有用（Potentially Useful）**且**最终可理解（Ultimately Understandable）**的模式的过程。

*   **有效**：模式普遍适用。
*   **新颖**：模式是事先未知的。
*   **潜在有用**：模式可用于指导行动。
*   **可理解**：模式可被解释和理解。

### 2.2 为什么使用数据挖掘

*   **数据量巨大**：人工分析能力不足以处理海量、高维度、高增长率的数据。
*   **技术成熟**：数据、存储、计算能力、现成软件和专业知识的可用性。
*   **商业竞争压力**：通过发现独特模式获得竞争优势。

### 2.3 知识发现过程（Knowledge Discovery Process）

1.  **识别业务问题（Identify business problem）**
2.  **数据挖掘（Data mining）**
    *   **数据预处理（Data preprocessing）**：
        *   **数据选择（Data selection）**：识别目标数据集和相关字段。
        *   **数据清洗（Data cleaning）**：移除噪声和异常值。
        *   **数据转换（Data transformation）**：统一单位，生成新字段。
    *   **数据挖掘模型构建（Data mining model construction）**
    *   **模型评估（Model evaluation）**
3.  **行动（Action）**
4.  **评估与度量（Evaluation and measurement）**
5.  **部署与集成（Deployment and integration into businesses processes）**

### 2.4 数据挖掘的应用与操作

| 应用（Applications） | 操作（Operations）         | 技术（Techniques）         |
| :------------------- | :------------------------- | :------------------------- |
| 数据库营销           | 分类与预测                 | 聚类分析                   |
| 客户细分             | 聚类                       | 最近邻算法                 |
| 客户留存             | 关联分析                   | 神经网络                   |
| 欺诈检测             | 预测                       | 朴素贝叶斯                 |
| 信用检查             |                            | 决策树                     |
| 网站分析             |                            |                            |

### 2.5 数据挖掘的类型（Types of Data Mining Operations）

每种操作反映了在复杂数据集中区分模式或趋势的不同方式。

#### 2.5.1 分类与预测（Classification and Prediction）

*   **分类（Classification）**：根据已知结果对数据集进行细分。例如，将客户分为“高”或“低”信用风险。
*   **预测（Prediction）**：预测连续值，如根据个人信息预测收入。

**技术**：决策树、神经网络、最近邻算法。
**训练（Training）**：模型在历史数据上进行训练，并使用独立的测试数据集进行验证，以避免**过拟合（Overfitting）**。

#### 2.5.2 聚类（Clustering）

*   **聚类**是一种**无监督（Unsupervised）**操作，无需训练数据。
*   它用于在数据集中寻找相似记录的分组，而无需预设相似性标准。
*   常用于识别客户群中的有趣分组，作为进一步数据挖掘（如分类）的探索性步骤。

**技术**：聚类分析、神经网络。
**原理**：通过度量数据点之间的相似性（通常是距离）来分组，使得同一簇内的数据点相似度高，不同簇之间相似度低。

#### 2.5.3 关联分析（Association Analysis）

*   **关联规则（Association Rule）**：寻找数据集中记录之间的联系，最常见的是“购物篮分析”，发现哪些商品经常一起购买。
*   **时间序列（Time Sequential）**：寻找购买行为之间的时间关联。

**核心概念**：
*   **支持度（Support）**：衡量项集在总事务中出现的频率。
    $$Support(A \Rightarrow B) = P(A \cup B) = \frac{Number\ of\ transactions\ containing\ A\ and\ B}{Total\ number\ of\ transactions}$$
*   **置信度（Confidence）**：衡量购买A的顾客同时购买B的概率。
    $$Confidence(A \Rightarrow B) = P(B|A) = \frac{Number\ of\ transactions\ containing\ A\ and\ B}{Number\ of\ transactions\ containing\ A}$$
*   **提升度（Lift）**：衡量关联规则的强度，即购买A后购买B的概率与随机购买B的概率之比。
    $$Lift(A \Rightarrow B) = \frac{Confidence(A \Rightarrow B)}{P(B)} = \frac{P(A \cup B)}{P(A)P(B)}$$
    *   Lift > 1：A和B之间存在正关联。
    *   Lift = 1：A和B之间相互独立。
    *   Lift < 1：A和B之间存在负关联。

**示例**：尿布和啤酒的例子
*   50万笔交易，2万笔含尿布 (4%)，3万笔含啤酒 (6%)，1万笔同时含尿布和啤酒 (2%)。
*   支持度 (尿布 $\Rightarrow$ 啤酒) = 2%
*   置信度 (尿布 $\Rightarrow$ 啤酒) = 1万/2万 = 50%
*   提升度 (尿布 $\Rightarrow$ 啤酒) = 50% / 6% = 8.33

**技术**：Apriori算法（用于发现频繁项集和生成关联规则）。

#### 2.5.4 预测（Forecasting）

*   预测连续值，如股票市场水平。
*   技术包括统计时间序列分析和神经网络。

### 2.6 数据挖掘技术

*   **聚类分析（Cluster Analysis）**：通过相似性识别项之间的关系。
*   **关联规则算法（Association Rules Algorithm）**：如Apriori算法，发现频繁项集和关联规则。
*   **时间序列算法（Time Sequence Algorithm）**：如AprioriALL算法，发现序列模式。
*   **分类算法（Classification Algorithm）**：如决策树生成和维护算法。
    *   **决策树（Decision Trees）**：通过递归地将数据集划分为子集来构建树状模型。
    *   **Gini系数（Gini Index）**：用于评估分裂的纯度，选择最小Gini系数的分裂条件。
        $$Gini(S) = 1 - \sum_{j=1}^{n} p_j^2$$
        $$Gini_{split}(S) = \frac{N_1}{N} \cdot Gini(S_1) + \frac{N_2}{N} \cdot Gini(S_2)$$

## 3. 信息检索（Information Retrieval, IR）

### 3.1 IR与DBMS的对比

| 特性           | 信息检索（IR）系统 | 数据库管理系统（DBMS） |
| :------------- | :----------------- | :--------------------- |
| **语义**       | 不精确语义         | 精确语义               |
| **查询方式**   | 关键词搜索         | SQL                    |
| **数据格式**   | 非结构化数据       | 结构化数据             |
| **更新频率**   | 读多写少，偶尔添加文档 | 期望合理数量的更新     |
| **结果呈现**   | 翻页显示前k个结果  | 生成完整答案           |

### 3.2 IR的“词袋”模型（Bag of Words Model）

*   将每个文档视为一个词（term）的集合（多集）。
*   **停用词（Stop Words）**：移除常见且无意义的词（如“的”、“是”）。
*   **词干提取（Stemming）**：将词还原为基本形式（如“surfing”、“surfed”还原为“surf”）。

### 3.3 布尔文本搜索（Boolean Text Search）

*   查找匹配布尔表达式的文档，如“Windows” AND (“Glass” OR “Door”) AND NOT “Microsoft”。
*   查询词也经过过滤和词干提取。

### 3.4 文本索引（Text “Indexes”）

*   IR中的“文本索引”通常指逻辑模式（表）和物理模式（索引）的组合。
*   **倒排文件/倒排索引（Inverted File/Inverted Index）**：
    *   存储 `InvertedFile(term string, docURL string)`。
    *   在 `term` 上构建B+树或哈希索引。
    *   映射从词到文档。

**处理布尔逻辑**：
*   **OR**：文档URL集合的并集。
*   **AND**：文档URL集合的交集。
*   **AND NOT**：集合减法。
*   **OR NOT**：通常不允许，因为“NOT term”集合太大。

### 3.5 SQL中的布尔搜索

```sql
(SELECT docURL FROM InvertedFile WHERE word = “windows”
INTERSECT
SELECT docURL FROM InvertedFile WHERE word = “glass” OR word = “door”)
EXCEPT
SELECT docURL FROM InvertedFile WHERE word = “Microsoft”
ORDER BY relevance() -- 这里的relevance()是搜索引擎的“秘密武器”
```

### 3.6 计算相关性（Computing Relevance）

*   相关性计算涉及搜索词在文档中出现的频率以及在整个文档集合中出现的频率。
*   文档中搜索词出现越多，相关性越高。
*   稀有词的重要性更高。
*   在传统SQL引擎中高效计算相关性较难，因为需要为每个文档中的每个词调用函数，并对结果进行排序。

### 3.7 短语和“近邻”搜索（Phrases and “Near”）

*   对于短语（如“Happy Days”），需要扩展 `InvertedFile` 模式，增加 `position` 字段：`InvertedFile(term string, count int, position int, DocURL string)`。
*   通过查找词语并检查它们的位置关系来处理短语和“近邻”查询。

### 3.8 更新与文本搜索

*   文本搜索引擎通常设计为**读多写少**。
*   删除和修改很少发生，更新可以延迟（批处理）。
*   通常通过重建索引来处理更新，或使用双索引机制实现不停机更新。
*   这导致文本搜索引擎和DBMS通常是独立的产品。

### 3.9 IR与DBMS的再次对比

| 特性           | DBMS                               | IR系统                               |
| :------------- | :--------------------------------- | :----------------------------------- |
| **语义保证**   | 事务语义，并发更新正确处理         | 无事务语义，更新可延迟，无并发控制模型 |
| **数据建模与查询** | 支持任意模式和查询，复杂查询语言   | 只支持一种模式和查询，查询语言简单   |
| **性能目标**   | 支持通用SELECT、INSERT、UPDATE、DELETE，通用引擎 | 专注于一种风格的SELECT，延迟INSERT，无UPDATE，特殊用途，超高速 |

## 4. 半结构化数据（Semistructured Data）与XML

### 4.1 Web的演变与XML

*   **HTML文档**：主要用于人类阅读，缺乏应用间的互操作性。
*   **XML (eXtensible Markup Language)**：W3C推荐的标准，旨在成为通用的数据交换格式。
    *   XML是数据，由应用程序生成和消费。
    *   易于跨平台、跨组织访问。
*   **范式转变**：从文档（HTML）到数据（XML），从信息检索到数据管理。

### 4.2 半结构化数据模型（Semistructured Data Model）

*   **起源**：异构数据源的集成、结构不固定的数据（如生物数据、Web数据）。
*   **特点**：
    *   **自描述（Self-describing）**：数据本身包含结构信息。
    *   **不规则（Irregular）**：可能存在缺失或额外的属性。
    *   **异构集合（Heterogeneous collections）**：同一集合中的对象可能具有不同类型和结构。
    *   **无预设结构（No a priori structure）**：没有严格的模式定义。
*   **表示**：通常用**图（Graph）**模型表示，节点代表对象，边代表属性或关系。

**示例**：
```
Bib: &o1{ paper: &o12{ ... },
book:  &o24{ ... },
paper: &o29
{ author: &o52“Abiteboul”,
author: &o96{ firstname: &243“Victor”,
lastname: &o206“Vianu”},
title: &o93“Regular path queries with constraints”,
references: &o12,
references: &o24,
pages: &o25{ first: &o64122, last: &o92133}
}
}
```
观察：嵌套元组、集合值、对象ID (OIDs)。

### 4.3 XML的特性

*   **标签（Tags）**：`<book>`、`<title>` 等。
*   **元素（Elements）**：由开始标签、内容和结束标签组成，可嵌套。
*   **XML文档**：有且只有一个根元素。
*   **格式良好（Well-formed）**：标签匹配。
*   **有效（Valid）**：符合某个模式（如DTD或XML Schema）。
*   **属性（Attributes）**：在开始标签中定义的键值对，提供元素的元数据。
*   **OIDs和引用**：XML中也可以通过属性模拟对象ID和引用。

### 4.4 文档类型定义（Document Type Definition, DTD）

*   继承自SGML标准，用于定义XML文档的结构和内容约束。
*   **缺点**：
    *   全局关联元素名和类型。
    *   不支持结构复用。
    *   不支持数据类型（只能是PCDATA）。
    *   对键和外键的支持有限。

### 4.5 XML Schema

*   XML Schema是XML格式的模式定义语言，克服了DTD的许多缺点。
*   **优点**：
    *   元素名和类型可局部关联。
    *   支持基本数据类型（整数、字符串、日期等）。
    *   支持基于值的约束（如整数 > 100）。
    *   支持用户自定义结构类型和继承。
    *   支持外键和元素类型引用约束。

### 4.6 XML数据模型（XML Data Model）

*   XML数据通常被建模为**树（Tree）**结构。
*   节点类型包括：文档节点、元素节点、值节点、属性节点等。
*   **元素节点**：由QNameValue（标签名）、属性集合和子节点列表组成。
*   **属性节点**：由QNameValue和值节点组成。
*   **值节点**：可以是字符串、布尔值、浮点数等。

### 4.7 XML与半结构化数据的对比

*   两者都最适合用图模型描述。
*   两者都是无模式、自描述的。
*   **XML是有序的，半结构化数据通常是无序的。**
*   XML可以混合文本和元素。
*   XML有更多特性（属性、实体、处理指令、注释）。

### 4.8 XQuery

XQuery是W3C推荐的XML查询语言，用于从XML文档中提取、转换和组合数据。

#### 4.8.1 FLWOR表达式

XQuery的核心是FLWOR表达式：
*   **FOR**：遍历序列中的每个项，并将变量绑定到每个项。
*   **LET**：将变量绑定到整个序列。
*   **WHERE**：过滤结果。
*   **ORDER BY**：对结果进行排序。
*   **RETURN**：构建最终结果。

**FOR vs LET**：
*   `FOR $x IN expr`：`$x` 绑定到 `expr` 列表中的每个值，产生多个结果。
*   `LET $x = expr`：`$x` 绑定到 `expr` 的整个列表，产生一个结果。

**路径表达式（Path Expressions）**：
用于导航XML树结构，类似于文件系统路径或XPath。
*   `/bib/paper[2]/author[1]`：选择第二个paper的第一个author。
*   `/bib//author`：选择bib下所有层级的author。
*   `paper[author/lastname="Vianu"]`：选择lastname为“Vianu”的paper。

**示例查询**：
*   **查找1995年之后出版的所有书籍标题**：
    ```xquery
    FOR $x IN document("bib.xml")/bib/book
    WHERE $x/year > 1995
    RETURN $x/title
    ```
*   **为Morgan Kaufmann出版社的每位作者列出她出版的所有书籍**：
    ```xquery
    FOR $a IN distinct(document("bib.xml")
    /bib/book[publisher="Morgan Kaufmann"]/author)
    RETURN <result>
      {$a},
      {FOR $t IN /bib/book[author=$a]/title
      RETURN $t}
    </result>
    ```

#### 4.8.2 其他XQuery特性

*   **聚合函数（Aggregate Functions）**：如 `count()`、`avg()`。
*   **排序（Sorting）**：`ORDER BY` 子句。
*   **条件表达式（Conditional Expressions）**：`IF-THEN-ELSE`。
*   **量词（Quantifiers）**：
    *   **存在量词（Existential Quantifiers）**：`SOME ... SATISFIES`。
    *   **全称量词（Universal Quantifiers）**：`EVERY ... SATISFIES`。
*   **分组（Group-By）**：XQuery标准中最初没有直接的 `GROUP BY`，但有提案支持。可以通过嵌套FLWOR表达式或 `distinct` 和 `LET` 的组合实现类似功能。

**注意**：XQuery中的集合可以是**有序**或**无序**的。表达式中的集合处理需要注意**原子化（Atomization）**和**值比较（Value Comparison）**与**通用比较（General Comparison）**的区别。