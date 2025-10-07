---
title: 03. 布尔函数的门级最小化
authors: [Life_Checkpoint]
tags: [note]
sidebar_position: 3
---


## 1. 布尔函数简化概述 (Overview of Boolean Function Simplification)

### 1.1 简化目标 (Simplification Goal)

*   布尔函数的真值表 (Truth Table) 表示是唯一的，但其代数表达式 (Algebraic Expression) 并非唯一。
*   数字电路的复杂性（门数量）与代数表达式的复杂性（文字数量，即变量及其补数的总数）成正比。
*   **目标**：找到最简的代数表达式，即包含最少项 (Product Term) 且每项中文字数量最少。这能降低电路成本和复杂性。
    *   例如：$F = x'y'z + x'yz + xy'$ (3 个与项，8 个文字) 可以简化为 $F = x'z + xy'$ (2 个与项，4 个文字)。

### 1.2 简化方法 (Simplification Methods)

1.  **代数法 (Algebraic Method)**：利用布尔代数 (Boolean Algebra) 定理进行化简。
2.  **卡诺图法 (Karnaugh Map, K-map)**：一种图形化方法，用于手动简化布尔函数。

## 2. 卡诺图法 (Karnaugh Map Method)

### 2.1 卡诺图基本概念 (Basic Concepts of K-map)

#### 2.1.1 定义 (Definition)

*   卡诺图是一个方格阵列，每个方格代表一个最小项 (Minterm)。
*   它将布尔函数的真值表以图形方式呈现，方便识别相邻最小项。
*   每个卡诺图定义一个唯一的布尔函数。

#### 2.1.2 最小项合并原理 (Principle of Minterm Merging)

*   在卡诺图中，任意两个水平或垂直相邻的方格所代表的最小项，只在一个变量上互补 (Complementary)，其他变量都相同。
*   将这些相邻的最小项进行逻辑或 (OR) 运算时，那个互补的变量会被消除，从而简化表达式。
    *   例如：$m_1 = x'y'z$ 和 $m_3 = x'yz$ 在卡诺图中相邻。
    *   $x'y'z + x'yz = x'z(y' + y) = x'z \cdot 1 = x'z$。变量 $y$ 被消除了。

### 2.2 卡诺图的构造与表示 (Construction and Representation of K-map)

*   卡诺图中的最小项排列遵循格雷码 (Gray Code) 序列，确保相邻方格仅有一个变量不同。
*   **边界连通性 (Boundary Connectivity)**：卡诺图的左右边界和上下边界被视为是相邻的。

#### 2.2.1 两变量卡诺图 (Two-Variable K-map)

*   包含 $2^2 = 4$ 个最小项。
*   例如：
    $$
    \begin{array}{|c|c|c|}
    \hline
    A \backslash B & 0 (B') & 1 (B) \\
    \hline
    0 (A') & m_0 (A'B') & m_1 (A'B) \\
    \hline
    1 (A) & m_2 (AB') & m_3 (AB) \\
    \hline
    \end{array}
    $$

#### 2.2.2 三变量卡诺图 (Three-Variable K-map)

*   包含 $2^3 = 8$ 个最小项。
*   变量排列遵循格雷码，例如 $BC$ 序列为 $00, 01, 11, 10$。
*   例如：
    $$
    \begin{array}{|c|c|c|c|c|}
    \hline
    A \backslash BC & 00 (B'C') & 01 (B'C) & 11 (BC) & 10 (BC') \\
    \hline
    0 (A') & m_0 & m_1 & m_3 & m_2 \\
    \hline
    1 (A) & m_4 & m_5 & m_7 & m_6 \\
    \hline
    \end{array}
    $$
*   **示例**：$m_5 + m_7 = AB'C + ABC = AC(B' + B) = AC$。

#### 2.2.3 四变量卡诺图 (Four-Variable K-map)

*   包含 $2^4 = 16$ 个最小项。
*   行和列的变量组合都遵循格雷码序列。
*   例如：
    $$
    \begin{array}{|c|c|c|c|c|}
    \hline
    AB \backslash CD & 00 & 01 & 11 & 10 \\
    \hline
    00 & m_0 & m_1 & m_3 & m_2 \\
    \hline
    01 & m_4 & m_5 & m_7 & m_6 \\
    \hline
    11 & m_{12} & m_{13} & m_{15} & m_{14} \\
    \hline
    10 & m_8 & m_9 & m_{11} & m_{10} \\
    \hline
    \end{array}
    $$

#### 2.2.4 高变量卡诺图 (High-Variable K-map)

*   五变量及以上卡诺图变得复杂，通常通过将多个四变量卡诺图叠加来表示。

### 2.3 蕴含项与质蕴含项 (Implicants and Prime Implicants)

*   <u>**易混淆点**</u>：理解蕴含项、质蕴含项和基本质蕴含项的区别是卡诺图简化的关键。

#### 2.3.1 蕴含项 (Implicant)

*   **定义**：任何能使函数输出为真的乘积项 (Product Term)。
*   在卡诺图中，任何由 $2^k$ 个 '1' 组成的矩形或正方形区域都代表一个蕴含项。
    *   例如：对于函数 $F = \sum(1, 3, 4, 5)$，最小项 $m_1$ (即 $x'y'z$) 是一个蕴含项。将 $m_1$ 和 $m_3$ 合并得到的 $x'z$ 也是一个蕴含项。

#### 2.3.2 质蕴含项 (Prime Implicant, PI)

*   **定义**：通过合并卡诺图中尽可能多的相邻 '1' 所得到的乘积项。它是一个不能再被任何其他蕴含项所包含的蕴含项。
*   **识别**：在卡诺图中，找到所有最大可能的 $2^k$ 个 '1' 的矩形或正方形区域。

#### 2.3.3 基本质蕴含项 (Essential Prime Implicant, EPI)

*   **定义**：如果卡诺图中的某个 '1' 只能被一个质蕴含项覆盖，那么这个质蕴含项就是基本质蕴含项。
*   **识别**：
    1.  找出所有的质蕴含项 (PI)。
    2.  检查每个 '1' 最小项。如果一个 '1' 最小项只被一个 PI 覆盖，那么这个 PI 就是 EPI。
*   **重要性**：**所有 EPI 必须包含在最终的简化表达式中。**

*   **示例**：简化 $F = x'y'z + x'yz + xy'$。
    *   真值表：$F = \sum(1, 3, 4, 5)$。
    *   卡诺图：
        $$
        \begin{array}{|c|c|c|c|c|}
        \hline
        x \backslash yz & 00 & 01 & 11 & 10 \\
        \hline
        0 & 0 & \underline{\mathbf{1}} (m_1) & \underline{\mathbf{1}} (m_3) & 0 \\
        \hline
        1 & \underline{\mathbf{1}} (m_4) & \underline{\mathbf{1}} (m_5) & 0 & 0 \\
        \hline
        \end{array}
        $$
    *   **质蕴含项 (PI)**：
        1.  绿色圈：覆盖 $m_1, m_3$，得到 $x'z$。
        2.  红色圈：覆盖 $m_4, m_5$，得到 $xy'$。
        *   这两个都是质蕴含项，因为它们不能再扩大。
    *   **基本质蕴含项 (EPI)**：
        1.  最小项 $m_1$ (001) 只被 $x'z$ 覆盖。所以 $x'z$ 是 EPI。
        2.  最小项 $m_4$ (100) 只被 $xy'$ 覆盖。所以 $xy'$ 是 EPI。
        *   因此，最终的简化表达式为 $F = x'z + xy'$。

### 2.4 卡诺图简化步骤与技巧 (K-map Simplification Steps and Techniques)

#### 2.4.1 简化步骤 (Simplification Steps)

1.  **识别所有基本质蕴含项 (EPI)**：首先找到所有只被一个 PI 覆盖的 '1' 最小项，并确定对应的 EPI。
2.  **覆盖剩余最小项**：对于尚未被 EPI 覆盖的 '1' 最小项，选择最少的其他质蕴含项来覆盖它们。
3.  **逻辑求和**：将所有选定的 EPI 和其他质蕴含项进行逻辑或运算，得到最终的简化表达式。

#### 2.4.2 简化技巧 (Simplification Techniques)

1.  **相邻覆盖 (Adjacent Coverage)**：圈出相邻的 '1'，确保每个圈尽可能大（即包含 $2^k$ 个 '1'）。
2.  **最少圈数 (Minimal Loops)**：使用最少的圈来覆盖所有的 '1'。
3.  **避免冗余 (Avoid Redundancy)**：确保每个圈至少覆盖一个未被其他圈覆盖的 '1'。
4.  **边界连通 (Boundary Connectivity)**：将卡诺图的左右边界和上下边界视为相邻。
5.  **幂次优先 (Power-of-Two Priority)**：优先圈出 $2^k$ 个 '1' 的组（例如，8 个、4 个、2 个、1 个），以实现最大程度的简化。

#### 2.5 卡诺图简化示例 (K-map Simplification Examples)

*   **示例**：简化布尔函数 $F = A'C + A'B + AB'C + BC$。
    *   首先将表达式转换为最小项之和形式：
        $F = A'C(B+B') + A'B(C+C') + AB'C + (A+A')BC$
        $= A'BC + A'B'C + A'BC + A'BC' + AB'C + ABC + A'BC$
        $= A'B'C + A'BC' + A'BC + AB'C + ABC$ (重复项只保留一次)
        $= \sum(1, 2, 3, 5, 7)$
    *   卡诺图：
        $$
        \begin{array}{|c|c|c|c|c|}
        \hline
        A \backslash BC & 00 & 01 & 11 & 10 \\
        \hline
        0 & 0 & \underline{\mathbf{1}} (m_1) & \underline{\mathbf{1}} (m_3) & \underline{\mathbf{1}} (m_2) \\
        \hline
        1 & 0 & \underline{\mathbf{1}} (m_5) & \underline{\mathbf{1}} (m_7) & 0 \\
        \hline
        \end{array}
        $$
    *   **质蕴含项 (PI)**：
        1.  覆盖 $m_1, m_3, m_5, m_7$ 的组：$C$ (一个 4 个 1 的组)。
        2.  覆盖 $m_2, m_3$ 的组：$A'B$ (一个 2 个 1 的组)。
    *   **基本质蕴含项 (EPI)**：
        1.  $m_1$ 只被 $C$ 覆盖，所以 $C$ 是 EPI。
        2.  $m_2$ 只被 $A'B$ 覆盖，所以 $A'B$ 是 EPI。
    *   最终简化表达式：$F = C + A'B$。

## 3. 积之和形式的简化 (Product of Sums Simplification)

### 3.1 概念 (Concept)

*   之前的例子都是和之积 (Sum of Products, SOP) 形式的简化。
*   积之和 (Product of Sums, POS) 形式的简化，目标是得到最简的积之和表达式，例如 $F = (A+B)(B+C')$。

### 3.2 简化步骤 (Simplification Steps)

1.  **求补函数**：在卡诺图中，圈出所有 '0' 最小项 (0-minterms)，并按 SOP 形式简化得到函数的补数 $F'$。
2.  **应用德摩根定律 (De Morgan's Theorem)**：对 $F'$ 应用德摩根定律，即 $F = (F')'$，将 SOP 形式的 $F'$ 转换为 POS 形式的 $F$。
    *   **公式**：$(X+Y)' = X'Y'$，$(XY)' = X'+Y'$。

### 3.3 简化示例 (Simplification Example)

*   **示例**：将布尔函数 $F(A,B,C,D) = \sum(2, 3, 7, 10, 11, 15)$ 简化为积之和形式。
    *   **步骤 1：找到 $F'$**。
        *   $F$ 的 '1' 最小项是 $2, 3, 7, 10, 11, 15$。
        *   则 $F$ 的 '0' 最小项是 $0, 1, 4, 5, 6, 8, 9, 12, 13, 14$。
        *   在卡诺图中圈出这些 '0' 最小项来简化 $F'$：
            $$
            \begin{array}{|c|c|c|c|c|}
            \hline
            AB \backslash CD & 00 & 01 & 11 & 10 \\
            \hline
            00 & \underline{\mathbf{0}} (m_0) & \underline{\mathbf{0}} (m_1) & 1 (m_3) & \underline{\mathbf{1}} (m_2) \\
            \hline
            01 & \underline{\mathbf{0}} (m_4) & \underline{\mathbf{0}} (m_5) & 1 (m_7) & \underline{\mathbf{0}} (m_6) \\
            \hline
            11 & \underline{\mathbf{0}} (m_{12}) & \underline{\mathbf{0}} (m_{13}) & 1 (m_{15}) & \underline{\mathbf{0}} (m_{14}) \\
            \hline
            10 & \underline{\mathbf{0}} (m_8) & \underline{\mathbf{0}} (m_9) & 1 (m_{11}) & \underline{\mathbf{1}} (m_{10}) \\
            \hline
            \end{array}
            $$
        *   通过圈 '0' 得到 $F'$ 的 SOP 形式：
            *   一个 8 个 '0' 的组：$C'$ (覆盖 $m_0, m_1, m_4, m_5, m_8, m_9, m_{12}, m_{13}$)。
            *   一个 2 个 '0' 的组：$BD'$ (覆盖 $m_4, m_6, m_{12}, m_{14}$，但 $m_4, m_{12}$ 已被 $C'$ 覆盖，所以只需要 $m_6, m_{14}$ 组成的 $BD'$)。
            *   **注意**：这里原文的圈法是 $C'$ 和 $BD'$，但实际卡诺图上 $m_6$ 和 $m_{14}$ 组成的 $BD'$ 是一个 PI，且 $m_6$ 和 $m_{14}$ 未被 $C'$ 覆盖。
            *   所以 $F' = C' + BD'$。
    *   **步骤 2：应用德摩根定律得到 $F$**。
        $F = (F')' = (C' + BD')'$
        $F = C'' \cdot (BD')'$
        $F = C \cdot (B' + D'')$
        $F = C(B' + D)$
    *   最终简化表达式：$F = C(B' + D)$。

## 4. 无关项 (Don't Care Conditions)

### 4.1 定义 (Definition)

*   **不完全指定函数 (Incompletely Specified Functions)**：某些输入组合下，函数的输出是未定义的或不关心的。
*   **无关项 (Don't-care conditions)**：这些未指定的最小项用 'X' 表示。
*   **应用场景**：例如，在 4 位 BCD (Binary-Coded Decimal) 码中，从 $1010$ 到 $1111$ 的输入组合是无效的，其输出可以设置为无关项。

### 4.2 应用 (Application)

*   无关项 'X' 在卡诺图中可以被赋值为 '0' 或 '1'，以帮助进一步简化布尔表达式。
*   **原则**：
    *   如果将 'X' 视为 '1' 可以帮助形成更大的 '1' 组（从而消除更多变量），则将其视为 '1'。
    *   如果将 'X' 视为 '1' 并不能帮助形成更大的 '1' 组，或者它不覆盖任何 '1' 最小项，则将其视为 '0'。
    *   **注意**：无关项本身不需要被覆盖，它们只是作为辅助来覆盖 '1' 最小项。

### 4.3 简化示例 (Simplification Example)

*   **示例**：简化 $F(A, B, C, D) = \sum(1, 3, 7, 11, 15)$，无关项 $d(A, B, C, D) = \sum(0, 2, 5)$。
    *   卡诺图：
        $$
        \begin{array}{|c|c|c|c|c|}
        \hline
        AB \backslash CD & 00 & 01 & 11 & 10 \\
        \hline
        00 & \underline{\mathbf{X}} (d_0) & \underline{\mathbf{1}} (m_1) & \underline{\mathbf{1}} (m_3) & \underline{\mathbf{X}} (d_2) \\
        \hline
        01 & 0 & \underline{\mathbf{X}} (d_5) & \underline{\mathbf{1}} (m_7) & 0 \\
        \hline
        11 & 0 & 0 & \underline{\mathbf{1}} (m_{15}) & 0 \\
        \hline
        10 & 0 & 0 & \underline{\mathbf{1}} (m_{11}) & 0 \\
        \hline
        \end{array}
        $$
    *   **简化过程**：
        1.  **覆盖 $m_1, m_3$**：可以利用 $d_0, d_2$ 形成一个 4 个元素的组 $A'C'$ (覆盖 $d_0, m_1, d_2, m_3$)，得到 $A'C'$。
        2.  **覆盖 $m_7, m_{11}, m_{15}$**：可以利用 $d_5$ 形成一个 4 个元素的组 $CD$ (覆盖 $m_3, m_7, m_{11}, m_{15}$)。
        *   **注意**：$m_3$ 同时被 $A'C'$ 和 $CD$ 覆盖。
    *   **质蕴含项 (PI)**：
        1.  $A'C'$ (覆盖 $d_0, m_1, d_2, m_3$)
        2.  $CD$ (覆盖 $m_3, m_7, m_{11}, m_{15}$)
    *   **基本质蕴含项 (EPI)**：
        1.  $m_1$ 只被 $A'C'$ 覆盖，所以 $A'C'$ 是 EPI。
        2.  $m_7, m_{11}, m_{15}$ 只被 $CD$ 覆盖，所以 $CD$ 是 EPI。
    *   最终简化表达式：$F = A'C' + CD$。
    *   **另一种等效简化**：如果将 $d_0, d_2$ 视为 '0'，而将 $d_5$ 视为 '1'，则可以得到 $F = A'D + CD$。两种简化都是可接受的，因为它们都覆盖了所有 '1' 最小项，且使用了最简的项。

*   **考试复习提示**：在处理无关项时，要灵活运用 'X'，但切记其目的是帮助覆盖 '1'，而不是自身被覆盖。