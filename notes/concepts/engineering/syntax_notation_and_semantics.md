# syntax, notation, and semantics

## syntax

syntax of conventional mathematical expressions:

- **constant** - unchanging value (ex. 1, 7456, 3.141592)
- **variable** - symbol representing a value that can change (ex. $x, y, E, \delta$)
- **name** - finite sequence of characters used to identify an object
- **operator** - a symbol representing a process in which a number, quantity, expression, etc., is altered or manipulated according to formal rules. there are 3 types of operations:
    - unary operations (ex. $-5$)
    - binary operations (ex. $1+2, 4\times 6 - 8$)
    - ternary operations (ex. $a ? b : c$)

## notation

notation is used to represent these parts of an expression. for example:

example:

- $12$ is used to denote the concept of 12 things (constant)
- $x$ is used to denote the concept of a variable that has an assigned value

notation has tools to denote how an expression should be analyzed. example: **commas** to separate context. or **brackets** to define the order of analysis. The atomic expression $(E)$ denotes that we isolate expression $E$ for analysis no matter what is outside the brackets.

the expression $a \cdot (b + c) = a \cdot b + a \cdot c$ is only true if the definitions of the notation and syntax are defined in a certain way. if $\cdot$ represented a variable instead of multiplication, the expression would be false. We tend to only focus on the meaning of an expression, not the notation/syntax

- **expression** - a collection of notations that together express a quantity (ex. $E, (E), 1+2, (3 + x)^2$)

## semantics 

- the meaning of notation

## example language "arith"

different ways of defining a language:

- **listing terms**:

```
t ::=                   terms
    true                constant true
    false               constant false
    if t then t else t  conditional
    0                   constant zero
    succ t              successor
    pred t              predecessor
    iszero t            zero test    
```

- t is a metavariable (represents another part of the language)

- **inductive definition of arith** - the set of terms is the smallest set $T$ such that
    1. {true,false,0} $\subseteq T$
    2. if $t_1 \in T$, then {succ $t_1$, iszero $t_1$} $\subseteq T$
    3. if $t_1 \in T, t_2 \in T, t_3 \in T$, then if $t_1$ then $t_2$ else $t_3 \in T$
- **definition of terms by inference rules**
    - axioms: $\text{true}\in T, \text{false}\in T,0\in T$
    - inference rules (if premise (top) holds, conclusion (bottom) is true) (these are rule schemes, to make a rule, substitute $t_n$ for an expression)
        - $\frac{t_1 \in T}{\text{succ } t_1 \in T}$
        - $\frac{t_1 \in T}{\text{pred } t_1 \in T}$
        - $\frac{t_1 \in T}{\text{iszero } t_1 \in T}$
        - $\frac{t_1 \in T, t_2 \in T, t_3 \in T}{\text{if } t_1 \text{then } t_2 \text{else } t_3 \in T}$
- **concrete definition of terms** - for each natural number $t$, define a set $S_i$ as follows
    - $S_0 = \varnothing$
    - $s_{i+1}$ = {true,false,0} $\cup$ {succ $t_1$, pred $t_1$, iszero $t_1$ | $t_1 \in s_i$} $\cup$ {if $t_1$ then $t_2$ else $t_3$ | $t_1,t_2,t_3 \in S_i$}
    - finally, let $S = \bigcup_i S_i$ (the infinite union of all possible programs)

### programs

`if false than 0 else succ 0;` > succ 0

`iszero (pred (succ 0));` > true