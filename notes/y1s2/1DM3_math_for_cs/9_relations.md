# relations

# 9.1 relations and their properties

## binary relations

a binary relation $$R$$ from a set $$A$$ to a set $$B$$ is a subset $$R \subseteq A \times B$$

note: relations are more general than functions

### example
let A = {1,2,3} and B = {a,b}

{(0, a), (0, b), (1,a), (2, b)} is a relation from A to B

relations can be represented graphically or using a table

![binary relation](./media/9_relations_1.png)

## binary relation on a set

a binary relation $$R$$ on a set $$A$$ is a subset of $$A \times A$$ or a relation from $$A$$ to $$A$$.


### example

Let $$A = \lbrace 1, 2, 3, 4\rbrace$$. The ordered pairs in the relation $$R  = \lbrace(a,b) | a \text{divides} b\rbrace$$ are (1,1), (1, 2), (1,3), (1, 4), (2, 2), (2, 4), (3, 3), and  (4, 4).

### how many relations there are on a set

there are $$2^{|A|^2}$$ relations on a set A 

## reflexive relations

if every pair (x,x) is in the set

- **reflexive** - $$R$$ is reflexive iff $$(a,a) \in R$$ for every element $$a \in A$$. $$R$$ is reflexive if and only if $$ \forall x [(x,x) \in R]$$

## symmetric relations

- **symmetric** - R is symmetric iff $$(b,a) \in R$$ whenever $$(a,b) \in R$$ for all $$(a,b) \in A$$. $$R$$ is symmetric if and only if $$ \forall x \forall y [(x,y) \in R \rightarrow (y,x) \in R]$$

## antisymmetric relations

- **antisymmetric** - a relation $$R$$ on a set $$A$$ such that for all $$a,b \in A$$ if $$(a,b) \in R$$ and $$(b,a) \in R$$, then $$a = b$$ is called antisymmetric. $$R$$ is antisymmetric if and only if $$\forall x\forall y [(x,y) \in R \land (y,x) \in R \rightarrow x = y]$$

## transitive relations

- **transitive** - a relation $$R$$ on a set $$A$$ is called transitive if whenever $$(a,b) \in R$$ and $$(b,c) \in R$$, then $$(a,c) \in R$$, for all $$a,b,c \in A$$. $$R$$ is transitive if and only if $$\forall x\forall y\forall z [(x,y) \in R \land (y,z) \in R \rightarrow (x,z) \in R]$$

## combining relations

given two relations $$R_1$$ and $$R_2$$, we can combine them using basic set operations such as $$R_1 \cup R_2, R_1 \cap R_2, R_1 - R_2$$ 

## composition

suppose
- $$R_1$$ is a relation from a set $$A$$ to a set $$B$$
- $$R_2$$ is a relation from set $$B$$ to a set $$C$$

then the composition (or composite) of $$R_2$$ with $$R_1$$ is a relation from $$A$$ to $$C$$ where
- if $$(x,y)$$ is a member of $$R_1$$ and $$(y,z)$$ is a member of $$R_2$$, then $$(x,y)$$ is a member of $$R1 \circ R2$$

## powers of a relation 

Let R be a binary relation on A. Then the powers Rn of the relation R can be defined inductively by
- Basis Step: $$R1 = R$$
- Inductive Step:  $$R^{n+1} = R^n \circ R$$

the powers of a transitive relation are subsets of the relation. this is established by the following theorem:

### theorem 1

The relation R on a set A is transitive iff $$R^n \subseteq R for n = 1,2,3 \dots$$

# 9.5 equivalence relations
 
- **definition 1** - a relation on a set $$A$$ is called an equivalence relation if it is reflexive, symmetric, and transitive
- **definition 2** - two elements $$a$$, and $$b$$ that are related by an equivalence relation are called equivalent. the notation $$a ∼ b$$ (read as "a tilde b") is often used to denote that $$a$$ and $$b$$ are equivalent elements with respect to a particular equivalence relation
- **definition 3** - let *R* be an equivalence relation on a set *A*. the set of all elements that are related to an element a of *A* is called the equivalence class of *a*. The equivalence class of *a* with respect to *R* is denoted by $$[a]_R$$. <br><br> when only one relation is under consideration, we can write $$[a]$$, without the subscript *R*, for this equivalence class
    - note: $$[a]_R = \lbrace s | (a,s) \in R\rbrace$$ with $$a \in A \land s \in A$$

## theorem 1

let R be an equivalence relation on a set *A*. these statements for elements *a* and *b* of *A* are equivalent:

1. $$aRb$$ 
2. $$[a] = [b]$$ 
3. $$[a] \cap [b] \ne \varnothing$$

## partition of a set

a partition of a set *S* is a collection of disjoint nonempty subsets of *S* that have *S* as their union. In other words, the collection of subsets $$A_i$$, where $$i \in I$$ (where *I* is an index set), forms a partition of *S* if and only if

- $$A_i \ne \varnothing$$ for $$i \in I$$
- $$A_i \cap A_j = \varnothing$$ when $$i \ne j$$,
-and $$\bigcup_{i\in I} A_i = S$$