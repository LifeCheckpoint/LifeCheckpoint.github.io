---
title: 01. 逻辑与证明
authors: [Life_Checkpoint]
tags: [note]
sidebar_position: 1
---


## 1. 命题逻辑 (Propositional Logic)

### 1.1 命题与逻辑联结词

*   **命题 (Proposition)**：一个可以判断真假的陈述句。
    *   真值 (Truth Value) 只能是 **真 (True, T)** 或 **假 (False, F)**。
    *   例如：`1 + 1 = 2` (T)，`深圳在夏天` (F)。
    *   疑问句、祈使句、或含有不确定变量的句子不是命题。

*   **复合命题 (Compound Proposition)**：由一个或多个简单命题通过逻辑联结词 (Logical Connectives) 组合而成。

*   **核心逻辑联结词**

| 名称 | 英文 | 符号 | 含义 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **非 (Negation)** | not | $¬p$ | “不是 p” | 将命题的真值取反。 |
| **与/合取 (Conjunction)** | and | $p \land q$ | “p 且 q” | 当且仅当 $p$ 和 $q$ **都为真**时，结果为真。 |
| **或/析取 (Disjunction)** | or | $p \lor q$ | “p 或 q” | 当 $p$ 和 $q$ **至少一个为真**时，结果为真。 |
| **异或 (Exclusive Or)** | xor | $p \oplus q$ | “要么 p 要么 q” | 当 $p$ 和 $q$ 的真值**正好一个为真**时，结果为真。 |
| **蕴含 (Implication)** | if... then | $p \to q$ | “如果 p，那么 q” | **仅在 $p$ 为真且 $q$ 为假时为假**，其余情况全为真。 |
| **双向蕴含 (Biconditional)** | if and only if | $p \leftrightarrow q$ | “p 当且仅当 q” | 当 $p$ 和 $q$ 的真值**相同时**，结果为真。 |

*   **联结词真值总表**

| $p$ | $q$ | $¬p$ | $p \land q$ | $p \lor q$ | $p \oplus q$ | $p \to q$ | $p \leftrightarrow q$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| T | T | F | T | T | F | T | T |
| T | F | F | F | T | T | **F** | F |
| F | T | T | F | T | T | T | F |
| F | F | T | F | F | F | T | T |

*   **运算符优先级**: $¬ > \land > \lor > \to > \leftrightarrow$

### 1.2 深入理解蕴含 ($p \to q$)

蕴含是逻辑中最关键也最易混淆的概念之一。

*   **定义**: $p \to q$ 为假，当且仅当**前提 $p$ 为真，结论 $q$ 为假**。
*   **核心思想**: 蕴含代表一种“承诺”。只有当“前提条件达到，但承诺未兑现”时，这个蕴含命题才是假的。
*   **用例**: “如果你期末考了 100 分 ($p$)，那么你的总成绩就是 A ($q$)。”
    *   你考了 100 分 (T)，但没拿到 A (F) $\implies$ 老师说谎了 ($p \to q$ 为 F)。
    *   你没考 100 分 (F)，无论你是否拿到 A (T/F) $\implies$ 老师没有违背承诺 ($p \to q$ 为 T)。这种情况称为**空虚的真 (Vacuously True)**。
*   **重要等价形式**: $\underline{p \to q \equiv \neg p \lor q}$。这个转换在证明中极为常用。

### 1.3 逆命题、否命题与逆否命题

对于一个蕴含式 $p \to q$：

| 类型 | 英文 | 形式 | 与原命题关系 |
| :--- | :--- | :--- | :--- |
| **原命题 (Implication)** | | $p \to q$ | - |
| **逆命题 (Converse)** | | $q \to p$ | 不等价 |
| **否命题 (Inverse)** | | $¬p \to ¬q$ | 不等价 |
| **<u>逆否命题 (Contrapositive)</u>** | | $\underline{¬q \to ¬p}$ | **<u>逻辑等价</u>** |

**考点**: 证明 $p \to q$ 等价于证明它的逆否命题 $¬q \to ¬p$。

## 2. 逻辑等价 (Logical Equivalence)

*   **恒真式 (Tautology)**: 无论其包含的命题变量取何值，永远为真的复合命题 (例如 $p \lor \neg p$)。
*   **矛盾式 (Contradiction)**: 永远为假的复合命题 (例如 $p \land \neg p$)。
*   **逻辑等价 (Logically Equivalent)**: 如果 $p \leftrightarrow q$ 是一个恒真式，那么称 $p$ 和 $q$ 是逻辑等价的，记为 $p \equiv q$ 或 $p \Leftrightarrow q$。

### 2.1 核心逻辑等价定律

以下定律是进行逻辑推导和电路简化的基础，**必须熟记**。

| 定律名称 | 合取形式 | 析取形式 |
| :--- | :--- | :--- |
| **同一律 (Identity)** | $p \land T \equiv p$ | $p \lor F \equiv p$ |
| **支配律 (Domination)** | $p \land F \equiv F$ | $p \lor T \equiv T$ |
| **幂等律 (Idempotent)** | $p \land p \equiv p$ | $p \lor p \equiv p$ |
| **双重否定律 (Double Negation)** | $¬(¬p) \equiv p$ |
| **交换律 (Commutative)** | $p \land q \equiv q \land p$ | $p \lor q \equiv q \lor p$ |
| **结合律 (Associative)** | $(p \land q) \land r \equiv p \land (q \land r)$ | $(p \lor q) \lor r \equiv p \lor (q \lor r)$ |
| **分配律 (Distributive)** | $p \land (q \lor r) \equiv (p \land q) \lor (p \land r)$ | $p \lor (q \land r) \equiv (p \lor q) \land (p \lor r)$ |
| **<u>德摩根定律 (De Morgan's)</u>** | $\underline{¬(p \land q) \equiv ¬p \lor ¬q}$ | $\underline{¬(p \lor q) \equiv ¬p \land ¬q}$ |
| **吸收律 (Absorption)** | $p \land (p \lor q) \equiv p$ | $p \lor (p \land q) \equiv p$ |
| **否定律 (Negation)** | $p \land ¬p \equiv F$ | $p \lor ¬p \equiv T$ |

### 2.2 使用等价定律进行证明

可以通过一系列等价替换来证明一个命题是恒真式。

*   **用例**: 证明 $(p \land q) \to p$ 是一个恒真式。
    $$
    \begin{align*}
    (p \land q) \to p & \equiv \neg(p \land q) \lor p & & \text{(蕴含等价律/Useful Law)} \\
    & \equiv (\neg p \lor \neg q) \lor p & & \text{(德摩根定律)} \\
    & \equiv (\neg q \lor \neg p) \lor p & & \text{(交换律)} \\
    & \equiv \neg q \lor (\neg p \lor p) & & \text{(结合律)} \\
    & \equiv \neg q \lor T & & \text{(否定律)} \\
    & \equiv T & & \text{(支配律)}
    \end{align*}
    $$

## 3. 谓词逻辑 (Predicate Logic)

### 3.1 谓词与量词

命题逻辑无法表达“所有”、“存在”等概念，谓词逻辑通过引入变量和量词解决了这个问题。

*   **谓词 (Predicate)**: 一个带变量的陈述，当变量被具体值替换后，变成一个命题。记为 $P(x), Q(x, y)$ 等。
    *   **论域 (Universe of Discourse)**: 变量可以取值的集合。
*   **量词 (Quantifier)**: 用来描述变量范围的符号。

| 名称 | 英文 | 符号 | 含义 | 如何为真 | 如何为假 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **全称量词 (Universal)** | For all | $∀$ | “对于所有/任意” | 论域中**所有** $x$ 都使 $P(x)$ 为真。 | **存在一个** $x$ 使 $P(x)$ 为假。 |
| **存在量词 (Existential)** | There exists | $∃$ | “存在/有些” | 论域中**至少有一个** $x$ 使 $P(x)$ 为真。 | 论域中**所有** $x$ 都使 $P(x)$ 为假。 |

### 3.2 自然语言翻译 (重点)

将自然语言翻译成谓词逻辑表达式是常考题型，需注意蕴含和合取的正确使用。

*   **“所有 P 都是 Q”**: 应翻译为 $∀x(P(x) \to Q(x))$。
    *   **用例**: “所有学生都很聪明。” (论域：所有人)
        *   正确: $∀x(\text{Student}(x) \to \text{Smart}(x))$ (如果一个人是学生，那么他很聪明)
        *   **错误**: $∀x(\text{Student}(x) \land \text{Smart}(x))$ (这意味着所有人既是学生又很聪明)
*   **“有些 P 是 Q”**: 应翻译为 $∃x(P(x) \land Q(x))$。
    *   **用例**: “有些学生很聪明。” (论域：所有人)
        *   正确: $∃x(\text{Student}(x) \land \text{Smart}(x))$ (存在一个人，他既是学生又很聪明)
        *   **错误**: $∃x(\text{Student}(x) \to \text{Smart}(x))$ (这个命题的意义很弱，只要存在一个不是学生的人，它就为真)

### 3.3 量词的否定 (德摩根定律)

对量化命题的否定是另一个**高频考点**。

*   $¬∀x P(x) \equiv ∃x ¬P(x)$
    *   “并非所有人都聪明” $\equiv$ “存在不聪明的人”
*   $¬∃x P(x) \equiv ∀x ¬P(x)$
    *   “不存在完美的人” $\equiv$ “所有人都不完美”

### 3.4 嵌套量词

当多个量词同时出现时，它们的顺序非常重要。

*   **同类量词**: 顺序可交换。
    *   $∀x∀y P(x, y) \equiv ∀y∀x P(x, y)$
*   **不同类量词**: 顺序**不可**交换，含义截然不同。
    *   **用例**: 论域为所有人，$L(x, y)$ 表示 "$x$ 爱 $y$"。
        *   $∀x∃y L(x, y)$: **每个人都爱着某个人**。(爱慕对象可以不同)
        *   $∃y∀x L(x, y)$: **存在一个人，被所有人爱着**。(万人迷)

## 4. 证明 (Proofs)

### 4.1 证明的术语与推理规则

*   **公理 (Axiom)**: 不证自明的基本命题。
*   **定理 (Theorem)**: 可以被证明为真的命题。
*   **证明 (Proof)**: 建立一个定理为真的有效论证过程。
*   **推理规则 (Rules of Inference)**: 从一组真前提推导出真结论的有效逻辑步骤。

| 规则名称 | 英文 | 形式 | 含义 |
| :--- | :--- | :--- | :--- |
| **假言推理 (Modus Ponens)** | Affirming the antecedent | $\frac{p \to q, \ p}{\therefore q}$ | 如果 $p$ 蕴含 $q$，且 $p$ 为真，则 $q$ 为真。 |
| **拒取式 (Modus Tollens)** | Denying the consequent | $\frac{p \to q, \ \neg q}{\therefore \neg p}$ | 如果 $p$ 蕴含 $q$，且 $q$ 为假，则 $p$ 为假。 |
| **假言三段论 (Hypothetical Syllogism)** | | $\frac{p \to q, \ q \to r}{\therefore p \to r}$ | 蕴含关系具有传递性。 |
| **析取三段论 (Disjunctive Syllogism)** | | $\frac{p \lor q, \ \neg p}{\therefore q}$ | 如果 $p$ 或 $q$ 为真，且 $p$ 为假，则 $q$ 必为真。 |
| **简化律 (Simplification)** | | $\frac{p \land q}{\therefore p}$ | 如果 $p$ 和 $q$ 都为真，则 $p$ 为真。 |
| **合取律 (Conjunction)** | | $\frac{p, \ q}{\therefore p \land q}$ | 如果 $p$ 和 $q$ 分别为真，则它们的合取也为真。 |
| **附加律 (Addition)** | | $\frac{p}{\therefore p \lor q}$ | 如果 $p$ 为真，则 $p$ 或任何其他命题 $q$ 都为真。 |

### 4.2 核心证明方法

以下是非形式化证明中常用的策略，是解决证明题的关键。

1.  **直接证明 (Direct Proof)**
    *   **策略**: 证明 $p \to q$。从假设 $p$ 为真开始，通过一系列逻辑推导，最终得出 $q$ 为真。
    *   **用例**: 证明“如果 $n$ 是奇数，那么 $n^2$ 也是奇数”。
        *   **证明**: 假设 $n$ 是奇数，则 $n = 2k + 1$ (其中 $k$ 为整数)。
        *   那么 $n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2+2k) + 1$。
        *   由于 $2k^2+2k$ 是整数，所以 $n^2$ 的形式是 $2 \times (\text{整数}) + 1$，因此 $n^2$ 是奇数。

2.  **逆否证明 (Proof by Contrapositive)**
    *   **策略**: 证明 $p \to q$。通过证明其等价的逆否命题 $¬q \to ¬p$ 为真。
    *   **用例**: 证明“如果 $3n+2$ 是奇数，那么 $n$ 是奇数”。
        *   **证明**: 证明其逆否命题：“如果 $n$ 不是奇数（即偶数），那么 $3n+2$ 也不是奇数（即偶数）”。
        *   假设 $n$ 是偶数，则 $n = 2k$ (其中 $k$ 为整数)。
        *   那么 $3n+2 = 3(2k)+2 = 6k+2 = 2(3k+1)$。
        *   由于 $3k+1$ 是整数，所以 $3n+2$ 是偶数。逆否命题成立，故原命题成立。

3.  **反证法 (Proof by Contradiction)**
    *   **策略**: 证明命题 $p$。先假设 $¬p$ 为真，然后从这个假设出发，推导出一个矛盾（例如 $q \land ¬q$ 或与已知公理/定理相悖的结论）。这说明假设 $¬p$ 是错误的，因此 $p$ 必为真。
    *   **用例**: 证明“$\sqrt{2}$ 是无理数”。
        *   **证明**: 假设 $\sqrt{2}$ 是有理数。
        *   那么存在互质的整数 $m, n$ 使得 $\sqrt{2} = m/n$。
        *   平方得 $2 = m^2/n^2$，即 $m^2 = 2n^2$。这说明 $m^2$ 是偶数，从而 $m$ 也是偶数。
        *   设 $m = 2k$，代入得 $(2k)^2 = 2n^2 \implies 4k^2 = 2n^2 \implies n^2 = 2k^2$。这说明 $n^2$ 是偶数，从而 $n$ 也是偶数。
        *   $m$ 和 $n$ 都是偶数，这与它们互质的假设相**矛盾**。
        *   因此，最初的假设“$\sqrt{2}$ 是有理数”是错误的。故 $\sqrt{2}$ 是无理数。

4.  **分情况证明 (Proof by Cases)**
    *   **策略**: 证明 $(p_1 \lor p_2 \lor \dots \lor p_n) \to q$。分别证明 $p_1 \to q$, $p_2 \to q$, ..., $p_n \to q$。如果所有情况都能导出结论 $q$，则原命题成立。
    *   **用例**: 证明“对于任意实数 $x, y$，有 $|x||y| = |xy|$”。
        *   **证明**: 分四种情况讨论 $x, y$ 的符号：
            1.  $x \ge 0, y \ge 0$: $|x|=x, |y|=y, xy \ge 0 \implies |xy|=xy$。$xy = xy$ 成立。
            2.  $x \ge 0, y < 0$: $|x|=x, |y|=-y, xy \le 0 \implies |xy|=-(xy)$。$x(-y) = -xy$ 成立。
            3.  $x < 0, y \ge 0$: ...
            4.  $x < 0, y < 0$: ...
        *   所有情况均成立，故原命题得证。