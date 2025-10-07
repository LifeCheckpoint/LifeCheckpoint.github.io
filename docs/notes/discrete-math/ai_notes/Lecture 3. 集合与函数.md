---
title: 02. 集合与函数
authors: [Life_Checkpoint]
tags: [note]
sidebar_position: 2
---


## 1. 集合的基本概念

### 1.1 定义与表示
- **集合 (Set)**：一个无序的对象集合。集合中的对象称为**元素 (element)** 或**成员 (member)**。
- **集合相等**：两个集合 $A$ 和 $B$ 相等，当且仅当它们拥有完全相同的元素，记为 $A = B \iff \forall x (x \in A \leftrightarrow x \in B)$。
- **集合的表示方法**：
    - **列举法**：$S = \{2, 3, 5, 7\}$
    - **省略号法**：$A = \{1, 2, 3, ..., 100\}$
    - **构造法 (Set builder)**：$\{ x \mid P(x) \}$，表示所有具有性质 $P$ 的元素 $x$ 的集合。

### 1.2 重要集合
| 名称 | 符号 | 描述 |
| :--- | :--- | :--- |
| 自然数集 | $\mathbb{N}$ | $\{ 0, 1, 2, 3, ... \}$ |
| 整数集 | $\mathbb{Z}$ | $\{ ..., -2, -1, 0, 1, 2, ... \}$ |
| 正整数集 | $\mathbb{Z}^+$ | $\{ 1, 2, 3, ... \}$ |
| 有理数集 | $\mathbb{Q}$ | $\{ p/q \mid p, q \in \mathbb{Z}, q \neq 0 \}$ |
| 实数集 | $\mathbb{R}$ | |
| 复数集 | $\mathbb{C}$ | $\{ a + bi \mid a, b \in \mathbb{R} \}$ |

### 1.3 特殊集合与子集
- **全集 (Universal set)**: 在特定上下文中，所有讨论对象构成的集合，记为 $U$。
- **空集 (Empty set)**: 不包含任何元素的集合，记为 $\emptyset$ 或 $\{ \}$。
    - **<u>常考易混点</u>**：空集本身是一个集合，而包含空集的集合不是空集。即 $\emptyset \neq \{\emptyset\}$，因为后者包含一个元素：$\emptyset$。
- **子集 (Subset)**: 如果集合 $A$ 的每个元素都是集合 $B$ 的元素，则称 $A$ 是 $B$ 的子集，记为 $A \subseteq B$。
    - 形式化定义：$A \subseteq B \iff \forall x (x \in A \to x \in B)$。
- **真子集 (Proper subset)**: 如果 $A$ 是 $B$ 的子集，且 $A \neq B$，则称 $A$ 是 $B$ 的真子集，记为 $A \subset B$。
    - 形式化定义：$A \subset B \iff \forall x (x \in A \to x \in B) \land \exists x (x \in B \land x \notin A)$。
- **重要结论**：
    - 对于任意集合 $S$，都有 $\emptyset \subseteq S$。
    - 对于任意集合 $S$，都有 $S \subseteq S$。
    - $A = B \iff (A \subseteq B \land B \subseteq A)$。

## 2. 集合运算与恒等式

### 2.1 基本运算
| 运算 | 符号 | 定义 | 逻辑关联 |
| :--- | :--- | :--- | :--- |
| **并集 (Union)** | $A \cup B$ | $\{ x \mid x \in A \lor x \in B \}$ | 逻辑或 `∨` |
| **交集 (Intersection)** | $A \cap B$ | $\{ x \mid x \in A \land x \in B \}$ | 逻辑与 `∧` |
| **差集 (Difference)** | $A - B$ | $\{ x \mid x \in A \land x \notin B \}$ | `∧` 与 `¬` |
| **补集 (Complement)** | $\bar{A}$ | $\{ x \in U \mid x \notin A \}$ | 逻辑非 `¬` |

- **不交集 (Disjoint)**: 如果两个集合的交集为空集，即 $A \cap B = \emptyset$，则称它们是不交的或**互斥 (disjoint)**。

### 2.2 集合恒等式 (Set Identities)
集合恒等式与逻辑等价式有很强的对应关系。

| 定律名称 | 形式一 (与 $\cup$ 相关) | 形式二 (与 $\cap$ 相关) |
| :--- | :--- | :--- |
| 恒等律 (Identity) | $A \cup \emptyset = A$ | $A \cap U = A$ |
| 支配律 (Domination) | $A \cup U = U$ | $A \cap \emptyset = \emptyset$ |
| 幂等律 (Idempotent) | $A \cup A = A$ | $A \cap A = A$ |
| 交换律 (Commutative) | $A \cup B = B \cup A$ | $A \cap B = B \cap A$ |
| 结合律 (Associative) | $(A \cup B) \cup C = A \cup (B \cup C)$ | $(A \cap B) \cap C = A \cap (B \cap C)$ |
| 分配律 (Distributive) | $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ | $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ |
| **<u>德摩根律 (De Morgan's)</u>** | $\overline{A \cup B} = \bar{A} \cap \bar{B}$ | $\overline{A \cap B} = \bar{A} \cup \bar{B}$ |
| 吸收律 (Absorption) | $A \cup (A \cap B) = A$ | $A \cap (A \cup B) = A$ |
| 补集律 (Complement) | $A \cup \bar{A} = U$ | $A \cap \bar{A} = \emptyset$ |
| 双重补集律 (Complementation) | $\bar{\bar{A}} = A$ | |

- **证明方法**：证明集合恒等式的主要方法是利用**构造法定义和逻辑等价式**。
- **用例：证明德摩根律 $\overline{A \cap B} = \bar{A} \cup \bar{B}$**
    $$
    \begin{align}
    \overline{A \cap B} & = \{ x \mid x \notin (A \cap B) \} && \text{补集定义} \\
    & = \{ x \mid \neg(x \in A \cap B) \} && \text{符号转换} \\
    & = \{ x \mid \neg(x \in A \land x \in B) \} && \text{交集定义} \\
    & = \{ x \mid \neg(x \in A) \lor \neg(x \in B) \} && \text{逻辑德摩根律} \\
    & = \{ x \mid x \in \bar{A} \lor x \in \bar{B} \} && \text{补集定义} \\
    & = \{ x \mid x \in (\bar{A} \cup \bar{B}) \} && \text{并集定义} \\
    & = \bar{A} \cup \bar{B}
    \end{align}
    $$

## 3. 集合的基数、笛卡尔积与幂集

- **基数 (Cardinality)**: 有限集合 $S$ 的基数是其元素的个数，记为 $|S|$。
    - $| \emptyset | = 0$。
- **<u>容斥原理 (Inclusion-Exclusion Principle)</u>**: 对于两个有限集合 $A, B$：
    $$
    |\boldsymbol{A \cup B}| = |\boldsymbol{A}| + |\boldsymbol{B}| - |\boldsymbol{A \cap B}|
    $$
    **解释**：直接将 $|A|$ 和 $|B|$ 相加时，$A \cap B$ 中的元素被计算了两次，因此需要减去一次。

- **n 元组 (n-tuple)**: 一个有序的元素集合 $(a_1, a_2, ..., a_n)$。**顺序很重要**。

- **笛卡尔积 (Cartesian Product)**: 集合 $A$ 和 $B$ 的笛卡尔积 $A \times B$ 是所有有序对 $(a, b)$ 的集合，其中 $a \in A, b \in B$。
    - $A \times B = \{ (a, b) \mid a \in A \land b \in B \}$
    - **<u>重要性质</u>**:
        - 笛卡尔积**不满足交换律**，即 $A \times B \neq B \times A$ (除非 $A=B$ 或 $A=\emptyset$ 或 $B=\emptyset$)。
        - 基数性质：$|A \times B| = |A| \times |B|$。

- **幂集 (Power Set)**: 集合 $S$ 的幂集是 $S$ 的**所有子集**构成的集合，记为 $\mathcal{P}(S)$。
    - **循循善诱的例子**:
        1.  如果 $S = \emptyset$，它的唯一子集是 $\emptyset$。所以 $\mathcal{P}(\emptyset) = \{\emptyset\}$。
        2.  如果 $S = \{1\}$，它的子集是 $\emptyset$ 和 $\{1\}$。所以 $\mathcal{P}(\{1\}) = \{\emptyset, \{1\}\}$。
        3.  如果 $S = \{1, 2\}$，它的子集是 $\emptyset, \{1\}, \{2\}, \{1, 2\}$。所以 $\mathcal{P}(\{1, 2\}) = \{\emptyset, \{1\}, \{2\}, \{1, 2\}\}$。
    - **<u>重要结论</u>**: 如果 $|S| = n$，那么 $|\mathcal{P}(S)| = 2^n$。
        - **解释**：构造 $S$ 的一个子集时，对于 $S$ 中的每一个元素，我们都有两种选择：“放入子集”或“不放入子集”。$n$ 个元素，每个都有 2 种选择，根据乘法法则，总共有 $2^n$ 种组合，即 $2^n$ 个不同的子集。

## 4. 函数 (Functions)

### 4.1 基本概念
- **函数 (Function)**: 一个从集合 $A$ 到集合 $B$ 的函数 $f: A \to B$ 是一个规则，它为 $A$ 中的**每一个**元素，都指定了 $B$ 中**唯一一个**对应的元素。
- **相关术语**:
    - **定义域 (Domain)**: 集合 $A$。
    - **陪域 (Codomain)**: 集合 $B$。
    - **像 (Image)**: 如果 $f(a) = b$，则 $b$ 是 $a$ 的像。
    - **原像 (Preimage)**: 如果 $f(a) = b$，则 $a$ 是 $b$ 的一个原像。
    - **值域 (Range)**: 定义域中所有元素的像构成的集合，记为 $f(A)$。值域是陪域的一个子集，即 $f(A) \subseteq B$。

### 4.2 函数的类型 (重点)
| 类型 | 中文名 | 定义 | 直观理解 |
| :--- | :--- | :--- | :--- |
| **Injective** | **单射 (one-to-one)** | $\forall x, y \in A, (f(x) = f(y) \to x = y)$ | 不同的输入必有不同的输出。没有“多对一”。 |
| **Surjective** | **满射 (onto)** | $\forall b \in B, \exists a \in A, f(a) = b$ | 陪域中的每个元素都被“击中”了。值域等于陪域。 |
| **Bijective** | **双射 (one-to-one correspondence)** | 既是单射又是满射 | 建立了一个完美的“一一对应”关系。 |

- **用例与判断**:
    - $f: \mathbb{Z} \to \mathbb{Z}, f(x) = x^2$。
        - **非单射**：因为 $f(1) = f(-1) = 1$，但 $1 \neq -1$。
        - **非满射**：因为陪域中没有一个整数的平方等于 $-1$。
    - $g: \mathbb{Z} \to \mathbb{Z}, g(x) = 2x$。
        - **是单射**：若 $2x = 2y$，则 $x=y$。
        - **非满射**：陪域中的奇数（如 3）没有原像。
    - $h: \mathbb{R} \to \mathbb{R}, h(x) = 2x-1$。
        - **是单射**：若 $2x-1 = 2y-1$，则 $x=y$。
        - **是满射**：对于任意实数 $y$，总能找到 $x = (y+1)/2$ 作为其原像。
        - **结论**：$h$ 是一个**双射**。

- **<u>重要定理</u>**:
    - 对于从**有限集** $A$ 到**有限集** $B$ 的函数 $f$，如果 $|\boldsymbol{A}| = |\boldsymbol{B}|$，那么：
    - $f$ 是**单射** $\iff$ $f$ 是**满射**。
    - **注意**：此定理对**无限集不成立**。例如，$g: \mathbb{Z}^+ \to \mathbb{Z}^+, g(x) = 2x$ 是单射但不是满射。

## 5. 函数的运算与特殊函数

### 5.1 逆函数与复合函数
- **逆函数 (Inverse Function)**:
    - **<u>核心条件</u>**: 一个函数 $f: A \to B$ **可逆 (invertible)** 当且仅当它是一个**双射 (bijection)**。
    - 逆函数记为 $f^{-1}: B \to A$，定义为 $f^{-1}(b) = a \iff f(a) = b$。
    - **为什么必须是双射？**
        - 如果**不是单射**（多对一），那么一个 $B$ 中的元素会对应多个 $A$ 中的原像，其逆不满足函数的“唯一”性定义。
        - 如果**不是满射**，那么 $B$ 中会有元素在 $A$ 中没有对应原像，其逆不满足函数的“每一个”定义域元素都有指定。

- **复合函数 (Composition of Functions)**:
    - 设 $g: A \to B$ 和 $f: B \to C$，则 $f$ 和 $g$ 的复合函数记为 $f \circ g$，定义为 $(f \circ g)(x) = f(g(x))$。
    - **注意**：函数复合的顺序是从右到左。
    - **<u>重要性质</u>**: 复合运算**不满足交换律**，即 $f \circ g \neq g \circ f$。

### 5.2 常用函数
- **向下取整 (Floor Function)**: $\lfloor x \rfloor$，表示不大于 $x$ 的最大整数。
- **向上取整 (Ceiling Function)**: $\lceil x \rceil$，表示不小于 $x$ 的最小整数。
- **阶乘 (Factorial Function)**: $n! = n \times (n-1) \times \dots \times 2 \times 1$。约定 $0! = 1$。

## 6. 数列与求和

- **数列 (Sequence)**: 一个从整数子集（通常是 $\mathbb{N}$ 或 $\mathbb{Z}^+$）到某个集合 $S$ 的函数。
- **等差数列 (Arithmetic Progression)**: 通项为 $a_n = a + nd$。
- **等比数列 (Geometric Progression)**: 通项为 $a_n = ar^n$。

- **求和 (Summation)**:
    - 记号: $\sum_{j=m}^{n} a_j = a_m + a_{m+1} + \dots + a_n$。
    - **重要求和公式**:
        - 等差数列求和: $\sum_{j=0}^{n} (a+jd) = (n+1)a + d \frac{n(n+1)}{2}$
        - **等比数列求和 (重点)**: $\sum_{j=0}^{n} ar^j = a \frac{r^{n+1}-1}{r-1}$ (当 $r \neq 1$)
        - **无穷几何级数 (重点)**: 当 $|x| < 1$ 时，
            $$
            \sum_{k=0}^{\infty} x^k = \frac{1}{1-x}
            $$

## 7. 无限集的基数 (难点)

### 7.1 可数集与不可数集
- **基数相等**: 两个集合 $A$ 和 $B$ (可以是无限的) 基数相等，记为 $|A|=|B|$，如果存在一个从 $A$ 到 $B$ 的**双射函数**。
- **可数集 (Countable Set)**: 一个集合是可数的，如果它是**有限的**，或者其基数与**正整数集 $\mathbb{Z}^+$** 相同。
    - **直观理解**: 可数集中的所有元素都可以被一一列出，形成一个（可能是无限的）列表。
- **不可数集 (Uncountable Set)**: 不是可数集的集合。
- **<u>重要结论</u>**:
    - 整数集 $\mathbb{Z}$ 是可数的。
    - 有理数集 $\mathbb{Q}$ 是可数的。
    - 任何有限字母表上的所有**有限长度字符串**的集合是可数的（因此所有 Java 程序的集合也是可数的）。

### 7.2 康托对角线论证 (Cantor's Diagonal Argument)
这是一个证明某个集合是**不可数**的经典方法。

- **定理**: **实数集 $\mathbb{R}$ 是不可数的。**
- **证明思路 (以区间 $[0, 1]$ 为例)**:
    1.  **反证法假设**: 假设 $[0, 1]$ 内的实数是**可数的**。这意味着我们可以将它们全部列在一个列表中：
        $$
        r_1 = 0.d_{11}d_{12}d_{13}... \\
        r_2 = 0.d_{21}d_{22}d_{23}... \\
        r_3 = 0.d_{31}d_{32}d_{33}... \\
        ...
        $$
    2.  **构造一个新数**: 我们构造一个新的实数 $r = 0.d_1d_2d_3...$，其构造规则如下：
        - 对于第 $i$ 位小数 $d_i$，我们让它不等于列表中第 $i$ 个数字的第 $i$ 位小数 $d_{ii}$。例如，可以取 $d_i = (d_{ii} + 1) \pmod{10}$。
    3.  **导出矛盾**:
        - 这个新构造的数 $r$ 也在 $[0, 1]$ 区间内。
        - 但是，$r$ 不可能等于列表中的任何一个数 $r_i$，因为它在第 $i$ 位小数上与 $r_i$ 不同 ($d_i \neq d_{ii}$)。
        - 这与“我们已经列出了**所有** $[0, 1]$ 内的实数”的假设相矛盾。
    4.  **结论**: 因此，最初的假设是错误的，$[0, 1]$ 区间（以及整个实数集 $\mathbb{R}$）是**不可数的**。

- **另一个应用**: 同样可以用对角线论证证明**自然数的幂集 $\mathcal{P}(\mathbb{N})$ 是不可数的**。
- **康托定理 (Cantor's Theorem)**: 对于任何集合 $S$，其幂集的基数严格大于其自身的基数，即 $|S| < |\mathcal{P}(S)|$。