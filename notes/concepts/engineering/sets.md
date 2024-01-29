# sets

- **set** - an **unordered** collection of things (elements / members / other sets) where **each element is unique**
    - a set is said to contains elements/members
    - usually denoted with curly brackets: $\lbrace \text{element 1}, \text{element 2}, ... , \text{element n} \rbrace$
    - **singleton** - set with one element
    - **unordered pair** - set with two elements
## sub topics

- [set operations](?note=notes/concepts/engineering/set_operations.md) <!-- [](/notes/concepts/engineering/set_operations.md) -->
- [set functions](?note=notes/concepts/engineering/set_functions.md) <!-- [](/notes/concepts/engineering/set_functions.md) -->
- [sequences](?note=notes/concepts/engineering/sequences.md) <!-- [](/notes/concepts/engineering/sequences.md) -->

## membership

- $a \in A$ - a is an element of A
- $a \notin A$ - a is not an element of A

## describing sets

sets can be described in different ways, the simplest being with normal language, for example: "the set of all letters in the english alphabet"

### roster method

use curly brackets and list elements

$S =  \lbrace a,b,c,d\rbrace $ "set of a,b,c,d" - order doesn't matter, duplicates are ignored

$S =  \lbrace a,b,c,d, ... ,z\rbrace $ "set of all letters" - ellipses can be used to describe a set without listing every element when the pattern is clear

$S =  \lbrace  ... ,-3,-2,-1\rbrace $ "set of all integers less than zero" - ellipses can be used at the start, end, or

### set-builder notation

- set of all things on the left
- specify the property(s) that members must satisfy on the right

$S =  \lbrace x | x \text{is a positive integer less than} 100\rbrace $ "all elements x such that x is a positive integer less than 100"

$O =  \lbrace x \in \mathbb{Z}^{+} | x \text{is odd and} x < 10 \rbrace$ "all positive odd integers less than 10"

A predicate may be used: $S =  \lbrace x|P(x)\rbrace$ "all elements for which P(x) is true"

### interval notation

specify a range from a to b

- closed interval (inclusive): \[a,b\]
- open interval (exclusive): (a,b)

- $[a,b] =  \lbrace x|a\leq x\leq b\rbrace $
- $(a,b] =  \lbrace x|a\leq x\leq b\rbrace $
- $[a,b) =  \lbrace x|a\leq x\leq b\rbrace $
- $(a,b) =  \lbrace x|a\leq x\leq b\rbrace $

## important sets
- $\mathbb{N}$ or sometimes $\mathbb{Z}^{*}$ = natural numbers $ \lbrace 0,1,2,3, ...\rbrace $
- $\mathbb{Z}$ = integers $ \lbrace  ... ,-3,-2,-1,0,1,2,3, ...\rbrace  $
- $\mathbb{Z}^{+}$ = positive integers $ \lbrace 1,2,3, ...\rbrace $
- $\mathbb{Q}$ = rational numbers (fractions)
- $\mathbb{R}$ = real numbers (decimals)
- $\mathbb{R}^{+}$ = positive real numbers (decimals)
- $\mathbb{C}$ =  complex numbers

## universal set and empty set
- **universal set** - set $U$ contains everything under consideration
- **empty set** - $\varnothing$ or $\lbrace \rbrace $: set with no elements
    - $\varnothing \ne \lbrace \varnothing\rbrace $

## set equality

two sets are equal if and only if they have the same element, order does not matter

if A and B are sets, A = B if an only if $\forall x(x \in A \leftrightarrow x \in B)$

also equivalent to $A \subseteq B \enspace and \enspace B \subseteq A$ (found via logical equivalence)

## subsets $\subseteq$

the set A is a subset of B, if and only if every element of A is also an element of B. All sets are a subset of themselves

$A \subseteq B$ - A is a subset of B

if A and B are sets, $A \subseteq B$ holds if and only if $\forall x(x \in A \rightarrow x \in B)$ is true

## proper subsets $\subset$

if $A \subseteq B$, but $A \ne B$, then A us a proper subset of B, denoted by $A \subset B$.

if A and B are sets, $A \subset B$, then $\forall x(x \in A \rightarrow x \in B) \land \exists x(x \in B \land x \notin A)$ is true

## set cardinality $|A|$

also denoted $\\#A$

the number of unique elements in a set if the amount is finite, otherwise, state that the set is infinite

examples:
- $|\varnothing|$ = 0
- $|\lbrace \varnothing\rbrace |$ = 1
- $|\lbrace 1,3,2\rbrace |$ = 3
- $\mathbb{Z}$ is infinite

## power set

- power set of A - $P(A)$ - all sets that are subsets A
- $|P(A)| = 2^{|A|}$

$P(\\{1\\}) = \\{\\{\varnothing\\},\\{1\\}\\}$

$P(\\{1,2\\}) = \\{\\{\varnothing\\},\\{1\\},\\{2\\},\\{1,2\\}\\}$

to make the next power set in a sequence, add the new element to each existing set, and add those

## cartesian product
the cartesian product of two sets A and B,denoted by $A \times B$ is the set of ordered pairs (a,b) where $a \in A$ and $b \in B$

$A\times B = \lbrace (a,b)|a \in A \land b \in B\rbrace $

### example

$A = \lbrace a,b\rbrace  \enspace B = \lbrace 1,2,3\rbrace $

$ A \times B = \lbrace (a,1),(a,2),(a,3),(b,1),(b,2),(b,3)\rbrace $

## truth sets

given a predicate $P$ and a domain $D$, the truth set of P to be the set of elements in D for which P(x) is true. 

- the truth set of $P(x)$ is denoted by $\lbrace x \in D|P(x)\rbrace $

### example

the truth set of $P(x)$ where the domain is the integers and P(x) is $|x| = 1$ is the set $\\{-1,1\\}$

## pairwise disjoint

- **pairwise disjoint** - for a set of sets: all $A_i \cap A_j = \emptyset$ for all $i \neq j$

## countability 

- **countable** - a set that is finite or has the same cardinality as the set of positive integers ($\mathbb{Z}^{+}$)
- **uncountable** - a set that is not countable, example: set of real numbers $\mathbb{R}$

- **$\aleph_{0}$** - cardinality of a countably infinite set

some countable sets:
- set of all positive integers
- set of all positive rational numbers

some uncountable sets:
- set of all real numbers

### show countability
show a set is countable by showing its elements can be indexed by the positive integers

a one-to-one correspondence **f** from the set of positive integers to a set **S** can be expressed as a sequence $a_1,a_2,\dots,a_n,\dots$ where $a_1 = f(1),a_2 = f(2),\dots,a_n = f(n),\dots$ 

so, find a bijection with a function f(x) that generates all members of the sets from the positive real integers

or show you can list the sequence