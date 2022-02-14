# set theory

## definitions
- **set** - unordered collection of elements/members/other sets. a set is said to contains elements/members
- $$a \in A$$ - a is an element of A
- $$a \notin A$$ - a is not an element of A
- **tuple** - the ordered n-tuple $$(a_1,a_2,\dots ,a_n)$$ is the ordered collection with n elements
    - 2-tuples are called ordered pairs
    - to be equal they have to have the same elements in the same order

## describe a set
### roster method
$$S =  \lbrace a,b,c,d\rbrace $$ order doesn't matter, duplicates are ignored

$$S =  \lbrace a,b,c,d, ... ,z\rbrace $$ ellipses can be used to describe a set without listing every element when the pattern is clear

$$S =  \lbrace  ... ,-3,-2,-1\rbrace $$: set of all integers less than zero, ellipses can be used at the start or end

### set-builder notation
specify the property r properties that all members must satisfy

$$S =  \lbrace x | x \enspace is \enspace a \enspace positive \enspace integer \enspace less \enspace than \enspace 100\rbrace $$

$$O =  \lbrace x \in \mathbb{Z}^{+} | x \enspace is \enspace odd \enspace and \enspace x < 10 \rbrace$$

A predicate may be used: $$S =  \lbrace x|P(x)\rbrace$$

### interval notation

closed interval (inclusive): \[a,b\]
open interval (exclusive): (a,b)

$$[a,b] =  \lbrace x|a\leq x\leq b\rbrace $$
$$(a,b] =  \lbrace x|a\leq x\leq b\rbrace $$
$$[a,b) =  \lbrace x|a\leq x\leq b\rbrace $$
$$(a,b) =  \lbrace x|a\leq x\leq b\rbrace $$

## important sets
- $$\mathbb{N}$$ = natural numbers $$ \lbrace 0,1,2,3, ...\rbrace $$
- $$\mathbb{Z}$$ = integers $$ \lbrace  ... ,-3,-2,-1,0,1,2,3, ...\rbrace  $$
- $$\mathbb{Z}^{+}$$ = positive integers $$ \lbrace 1,2,3, ...\rbrace $$
- $$\mathbb{Q}$$ = ration numbers (fractions)
- $$\mathbb{R}$$ = real numbers (decimals)
- $$\mathbb{R}^{+}$$ = positive real numbers (decimals)
- $$\mathbb{C}$$ =  complex numbers

## universal set and empty set
- **universal set** - set $$U$$ contains everything under consideration
- **empty set** - $$\varnothing$$ or $$\lbrace \rbrace $$: set with no elements
    - $$\varnothing \ne \lbrace \varnothing\rbrace $$

## set equality
two sets are equal if and only if they have the same element, order does not matter

if A and B are sets, A = B if an only if $$\forall x(x \in A \leftrightarrow x \in B)$$

also equivalent to $$A \subseteq B \enspace and \enspace B \subseteq A$$ (found via logical equivalence)

## subsets $$\subseteq$$
the set A is a subset of B, if and only if every element of A is also an element of B. All sets are a subset of themselves

$$A \subseteq B$$ - A is a subset of B

if A and B are sets, $$A \subseteq B$$ holds if and only if $$\forall x(x \in A \rightarrow x \in B)$$ is true

## proper subsets $$\subset$$
if $$A \subseteq B$$, but $$A \ne B$$, then A us a proper subset of B, denoted by $$A \subset B$$.

if A and B are sets, $$A \subset B$$, then $$\forall x(x \in A \rightarrow x \in B) \land \exists x(x \in B \land x \notin A)$$ is true

## set cardinality $$|A|$$
the number of unique elements in a set if the amount is finite, otherwise, state that the set is infinite

examples:
- $$|\varnothing|$$ = 0
- $$|\lbrace \varnothing\rbrace |$$ = 0
- $$|\lbrace 1,3,2\rbrace |$$ = 3
- $$\mathbb{Z}$$ is infinite

## cartesian product
the cartesian product of two sets A and B,denoted by $$A \times B$$ is the set of ordered pairs (a,b) where $$a \in A$$ and $$b \in B$$

$$A\times B = \lbrace (a,b)|a \in A \land b \in B\rbrace $$

example:

$$A = \lbrace a,b\rbrace  \enspace B = \lbrace 1,2,3\rbrace $$

$$ A \times B = \lbrace (a,1),(a,2),(a,3),(b,1),(b,2),(b,3)\rbrace $$

## truth set of quantifiers
given a predicate P and a domain D, we define the truth set of P to be the set of elements in D for which P(x) is true. the truth set of P(x) is denoted by

$$\lbrace x \in D|P(x)\rbrace $$

example:

the truth set of P(x) where the domain is the integers and P(x) is "|x| = 1" is the set {-1,1}

<!---
proving set identity

### showing a set is or is not a subset of another set
- **show A is a Subset of B** - to show that $$A \subseteq B$$, show that if x belongs to A then x also belongs to B
- **show A is not a Subset of B** - to show that $$A \not\subseteq B$$, find an element $$x \in A$$ with $$x \notin B$$

show that 
$$\overline{A \cap B} \subseteq \bar{A} \cup \bar{B}$$
--->