# set operations

## related

- [sets](?note=notes/concepts/engineering/sets.md) <!-- [](/notes/concepts/engineering/sets.md) -->
- [boolean operators](?note=notes/concepts/engineering/boolean_logic_and_logic_gates.md) <!-- [](/notes/concepts/engineering/boolean_logic_and_logic_gates.md) -->

## boolean algebra
propositional logic and set theory are both instances of an algebraic system called boolean algebra. There must always be a universal set U, all sets are assumed to be subsets of U

## operations

### union $\cup$ (inclusive or)
the elements in set A or set B

definition: $\lbrace x|x \in A \lor x \in B \rbrace$

venn diagram for $A \cup B$

![img](./media/2_sets_1.png)

### symmetric difference $\oplus$ (exclusive or)
the elements that are only in A or (inclusive) only in B

definition: $A \oplus B = (A-B) \cup (B-A)$

venn diagram for $A \oplus B$

![img](./media/2_sets_5.png)


### intersection $\cap$ (and)
the elements in both set A and set B    

definition: $\lbrace x|x \in A \land x \in B \rbrace$

venn diagram for $A \cap B$

![img](./media/2_sets_2.png)

### complement $\bar{A}$ (not)
the elements in U that are not in set A. The set $U-A$

definition: $\bar{A} = \lbrace x \in U | x \notin A \rbrace$

venn diagram for compliment

![img](./media/2_sets_3.png)

### differnce 
A-B is the set containing the elements of A that are not in B. AKA the complement of B with respect to A

definition: $A-B = \lbrace x | x \in A \land x \notin B \rbrace = A \cap \bar{B}$

venn diagram for $A-B$

![img](./media/2_sets_4.png)

## cardinality of the union of two sets
inclusion-exclusion

$|A\cup B| = |A| + |B| - |A\cap B|$

## set identities

- **Identity Laws** - $A \cup \varnothing = A$ and $A \cap U = A$
- **Domination Law** - $A \cup U = U$ and $A \cap \varnothing = \varnothing$
- **Idempotent Laws** - $A \cup \varnothing = A$ and $A \cap U = A$
- **Complementation Law** - $\overline{(\bar{A})} = A$
- **Commutative Laws** - $A \cup B = B \cup A$ and $A \cap B = B \cap A$
- **Associative Laws** - $A \cup (B \cup C) = (A \cup B) \cup C$ and $A \cap (B \cap C) = (A \cap B) \cap C$
- **Distributive Laws** - $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ and $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
- **De Morgan's Laws** - $\overline{A\cup B} = \bar{A} \cap \bar{B}$ and $\overline{A\cap B} = \bar{A} \cup \bar{B}$
- **Absorption Laws** - $A \cup (A\cap B) = A$ and $A\cap (A\cup B) = A$
- **Complement Laws** - $A \cup \bar{A} = U$ and $A \cap \bar{A} = \varnothing$



## proving set identity
different ways to prove set identities
1. prove that each set (side of the identity) is a subset of the other
2. use set builder notation and propositional logic
3. membership table: verify that elements in the same combination of sets always either belong or do not belong to the same side of the identity.  Use 1 to indicate it is in the set and a 0 to indicate that it is not

proof examples in chapter 2 slides 40-43

## membership tables
shows all possible combinations of an element appearing or not appearing in the given sets

example:

A|B|C|$B\cap C$|$A\cup (B\cap C)$|$A \cup B$|$A\cup C$|$(A\cup B) \cap (A\cup C)$
:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:
1|1|1|1|1|1|1|1
1|1|0|0|1|1|1|1
1|0|1|0|1|1|1|1
1|0|0|0|1|1|1|1
0|1|1|1|1|1|1|1
0|1|0|0|0|1|0|0
0|0|1|0|0|0|1|0
0|0|0|0|0|0|0|0

## generalized unions and intersections
union or intersection of a collection of sets $A_1,A_2,\dots,A_n$ is defined as:

$\bigcup_{i=1}^{n} A_i = A_1 \cup A_2 \cup \dots \cup A_n$

$\bigcap_{i=1}^{n} A_i = A_1 \cap A_2 \cap \dots \cap A_n$

for i=1,2,..., let $A_i = \lbrace i,i+1,i+2,\dots\rbrace$ then,

$\bigcup_{i=1}^{n} A_i = \bigcup_{i=1}^{n} \lbrace i,i+1,i+2,\dots\rbrace = \lbrace 1,2,3,\dots \rbrace$

$\bigcap_{i=1}^{n} A_i = \bigcap_{i=1}^{n} \lbrace i,i+1,i+2,\dots\rbrace = \lbrace n,n+1.n+2,\dots \rbrace = A_n$
