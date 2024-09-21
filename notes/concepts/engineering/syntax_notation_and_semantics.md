# syntax, notation, and semantics

## syntax

- defining what symbols there are, and how they can be put together

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

## ways of defining a language

### constructive definition vs closure definition of languages

- **closure definition** - rules what what is valid in the language
- **constructive definition** - how to build something valid in the language

### example language "arith"

different ways of defining a language:

- **grammar** (constructive):
    - t is a meta-variable (represents another part of the language)

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

- **definition of terms by inference rules** (constructive)
    - axioms: $\text{true}\in T, \text{false}\in T,0\in T$
    - inference rules (if premise (top) holds, conclusion (bottom) is true) (these are rule schemes, to make a rule, substitute $t_n$ for an expression)
        - $\frac{t_1 \in T}{\text{succ } t_1 \in T}$
        - $\frac{t_1 \in T}{\text{pred } t_1 \in T}$
        - $\frac{t_1 \in T}{\text{iszero } t_1 \in T}$
        - $\frac{t_1 \in T, t_2 \in T, t_3 \in T}{\text{if } t_1 \text{then } t_2 \text{else } t_3 \in T}$
- **inductive definition of arith** (closure) - the set of terms is the smallest set $T$ such that
    1. {true,false,0} $\subseteq T$
    2. if $t_1 \in T$, then {succ $t_1$, iszero $t_1$} $\subseteq T$
    3. if $t_1 \in T, t_2 \in T, t_3 \in T$, then if $t_1$ then $t_2$ else $t_3 \in T$
- **concrete definition of terms** (closure) - for each natural number $t$, define a set $S_i$ as follows
    - $S_0 = \varnothing$
    - $s_{i+1}$ = {true,false,0} $\cup$ {succ $t_1$, pred $t_1$, iszero $t_1$ | $t_1 \in s_i$} $\cup$ {if $t_1$ then $t_2$ else $t_3$ | $t_1,t_2,t_3 \in S_i$}
    - finally, let $S = \bigcup_i S_i$ (the infinite union of all possible programs)
    - note: true false and 0 are included every time to allow unbalanced equations such as `if 0 then pred succ 1 else succ 0`, imagine constructing a program with a tree

#### programs

`if false than 0 else succ 0;` > succ 0

`iszero (pred (succ 0));` > true


#### inductive definitions of functions

- TODO consts, size, depth

##### structural induction

### proving language definitions are equal

- equality of sets - $S$ and $T$ are equal of $S \subseteq T \text{ and } T \subseteq S$
- A is the smallest set with property P if for every set X with property P, $A \subseteq X$

- nullary operations - recall that a set $A$ is closed under a nullary operation $c$ if and only if $c \in A$

- proving $S = T$
    - proving $S$ is closed under $F$
        - the set of terms $T$ is the smallest set $T$ such that $T$ is closed under $F = \\{true,false,0,succ,pred,iszero,\text{if then else}\\}$
        - `true,false,0` are immediate by the remark below ({true,false,0} $\subseteq S_1 \subseteq S$)
        - `succ,pred,iszero` will use weak induction over $\mathbb{N}$
            - proving $S$ is closed under successor if $t \in S$ then $\text{succ } t \in S$, let $t\ in S$, then $t \in S_i$ for some $i$, then $\text{succ } t \in S_{i+1}$, hence $\text{succ } t \in S$
        - `if then else` requires a lemma
            - for every $i \in \mathbb{N}$ and $S_i$, we have $S_i \subseteq S_{i+1}$
            - suppose that for every $j < i$ we have $S_j \subseteq S_{j+1}$
            - then  $S_i \subseteq S_{i+1}$
            - base case is $S_0 = \varnothing$, clearly $S_0 \subseteq S_1$
        - the sets are cumulative ($S_100$ contains $S_99,S_98,...$)

## semantics 

- the meaning of notation
    - how to interpret meaning from syntax

### types of semantics

- **operational semantics** - define an abstract machine for the language and analyze the behavior
- **denotational semantics** - interpreting a syntax in some other "mathematical domain"
- **axiomatic semantics** - start by defining axioms, and then the meaning of terms comes from what can be proven from the axioms