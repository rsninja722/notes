# set theory

# 2.1 sets

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

# 2.2 set operations

## boolean algebra
propositional logic and set theory are both instances of an algebraic system called boolean algebra. There must always be a universal set U, all sets are assumed to be subsets of U

## operations

### union $$\cup$$ (inclusive or)
the elements in set A or set B

definition: $$\lbrace x|x \in A \lor x \in B \rbrace$$

venn diagram for $$A \cup B$$

![img](./media/2_sets_1.png)

### symmetric difference $$\oplus$$ (exclusive or)
the elements that are only in A or (inclusive) only in B

definition: $$A \oplus B = (A-B) \cup (B-A)$$

venn diagram for $$A \oplus B$$

![img](./media/2_sets_5.png)


### intersection $$\cap$$ (and)
the elements in both set A and set B    

definition: $$\lbrace x|x \in A \land x \in B \rbrace$$

venn diagram for $$A \cap B$$

![img](./media/2_sets_2.png)

### complement $$\bar{A}$$ (not)
the elements in U that are not in set A. The set $$U-A$$

definition: $$\bar{A} = \lbrace x \in U | x \notin A \rbrace$$

venn diagram for compliment

![img](./media/2_sets_3.png)

### differnce 
A-B is the set containing the elements of A that are not in B. AKA the complement of B with respect to A

definition: $$A-B = \lbrace x | x \in A \land x \notin B \rbrace = A \cap \bar{B}$$

venn diagram for $$A-B$$

![img](./media/2_sets_4.png)

## cardinality of the union of two sets
inclusion-exclusion

$$|A\cup B| = |A| + |B| - |A\cap B|$$

## set identities

- **Identity Laws** - $$A \cup \varnothing = A$$ and $$A \cap U = A$$
- **Domination Law** - $$A \cup U = U$$ and $$A \cap \varnothing = \varnothing$$
- **Idempotent Laws** - $$A \cup \varnothing = A$$ and $$A \cap U = A$$
- **Complementation Law** - $$\overline{(\bar{A})} = A$$
- **Commutative Laws** - $$A \cup B = B \cup A$$ and $$A \cap B = B \cap A$$
- **Associative Laws** - $$A \cup (B \cup C) = (A \cup B) \cup C$$ and $$A \cap (B \cap C) = (A \cap B) \cap C$$
- **Distributive Laws** - $$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$$ and $$A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$$
- **De Morgan's Laws** - $$\overline{A\cup B} = \bar{A} \cap \bar{B}$$ and $$\overline{A\cap B} = \bar{A} \cup \bar{B}$$
- **Absorption Laws** - $$A \cup (A\cap B) = A$$ and $$A\cap (A\cup B) = A$$
- **Complement Laws** - $$A \cup \bar{A} = U$$ and $$A \cap \bar{A} = \varnothing$$



## proving set identity
different ways to prove set identities
1. prove that each set (side of the identity) is a subset of the other
2. use set builder notation and propositional logic
3. membership table: verify that elements in the same combination of sets always either belong or do not belong to the same side of the identity.  Use 1 to indicate it is in the set and a 0 to indicate that it is not

proof examples in chapter 2 slides 40-43

## membership tables
shows all possible combinations of an element appearing or not appearing in the given sets

example:

A|B|C|$$B\cap C$$|$$A\cup (B\cap C)$$|$$A \cup B$$|$$A\cup C$$|$$(A\cup B) \cap (A\cup C)$$
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
union or intersection of a collection of sets $$A_1,A_2,\dots,A_n$$ is defined as:

$$\bigcup_{i=1}^{n} A_i = A_1 \cup A_2 \cup \dots \cup A_n$$

$$\bigcap_{i=1}^{n} A_i = A_1 \cap A_2 \cap \dots \cap A_n$$

for i=1,2,..., let $$A_i = \lbrace i,i+1,i+2,\dots\rbrace$$ then,

$$\bigcup_{i=1}^{n} A_i = \bigcup_{i=1}^{n} \lbrace i,i+1,i+2,\dots\rbrace = \lbrace 1,2,3,\dots \rbrace$$

$$\bigcap_{i=1}^{n} A_i = \bigcap_{i=1}^{n} \lbrace i,i+1,i+2,\dots\rbrace = \lbrace n,n+1.n+2,\dots \rbrace = A_n$$

# 2.3 functions
let A and B be nonempty sets. A function f from A to B is denoted $$f: A\to B$$. Write f(a) = b if *b* is the unique element of B assigned by the function f to the element *a* of A.

also called mappings or transformations

$$f: A \to B$$ can also be defined as a subset of AxB. This subset is restricted to be a relation where no two elements of the relation have the same first element

only one element pair (a,b) for every a in A

$$\forall x[x\in A \rightarrow \exists y [y \in B \land (x,y) \in f]]$$

and 

$$\forall x,y_1,y_2[[(x,y_1) \in f \land (x,y_2) \in f] \rightarrow y_1 = y_2$$

## definitions
for a given function $$f: A \to B$$
- f **maps** A to B or f is a **mapping** from A to B
- A is the **domain** of f
- B is the **codomain** of f
- f(a) = b,
    - then b is called the **image** of a under f
    - a is the **preimage** of b
- the **range** of f is the set of all images of points in A under f. denoted by f(A)
- **equal** - when two functions have the same domain and codomain, and map each element if the domain to the same element of the codomain

## injective, surjective and bijective

![img](./media/2_sets_6.png)

proofs on slides 57-58
 
### injective/one-to-one
a function is injective or one-to-one if and only if f(a) = f(b) implies that a=b for all a and b in the domain of f

every b can't have multiple a

ever b has at least one a

every a has one b

### surjection/onto
for ever element $$b\in B$$ there is an element $$a \in A$$ with f(a) = b. 

### bijection/one-to-one correspondence
both one-to-one and onto

every a has one b

every b has one a

## inverse functions
let f be a bijection, then the inverse of $$f$$ denoted $$f^{-1}$$ is the function from B to A defined as $$f^{-1}(y)=x \leftrightarrow f(x) = y$$

f must be a bitjection to have an inverse

## composition

the composition of f with g, denoted $$f \circ g(x)$$ is the function from A to C defined by f(g(x))

range of f must be a subset of the domain of g

## graphs of functions
the graph of function f is the set of ordered pairs $$\lbrace (a,b) | a \in A \enspace and \enspace f(a) = b}

![img](./media/2_sets_7.png)

## floor and ceiling functions
- **floor $$\lfloor x\rfloor$$** - the largest integer less than or equal to x
- **ceil $$\lceil x\rceil$$** - the smallest integer greater than or equal to x

### useful properties
n is and integer, x is a real number

- $$\lfloor x\rfloor = n$$ if and only if $$n \leq x < n + 1$$
- $$\lceil x\rceil = n$$ if and only if $$n -1 < x \leq n$$
- $$\lfloor x\rfloor = n$$ if and only if $$x-1 < n \leq x $$
- $$\lceil x\rceil = n$$ if and only if $$x \leq n < x + 1$$

- $$x-1 < \lfloor x\rfloor  \leq x \leq \lceil x\rceil < x+1$$

- $$\lfloor -x\rfloor = -\lceil x\rceil$$
- $$\lceil -x\rceil = -\lfloor x\rfloor$$

- $$\lfloor x + n\rfloor = \lfloor x\rfloor + n$$
- $$\lceil x + n\rceil = \lceil x\rceil + n$$

## factorial functions
$$f: \mathbb{N} \to \mathbb{Z}^{+}, \enspace f(n) = n!$$

f(n) = 1\*2\*...\*(n-1)\*n

f(0) = 1

### stirling's formulas
$$n! ~ \sqrt{2\pi n}(n/e)^n$$

$$f(n) ~ g(n) \doteq \lim_{n\to\infin} f(n)/g(n) = 1$$

# 2.4 sequences and summations

## sequences
ordered lists of elements 

a function from a subset of the integers to a set S (usually from the set {0,1,2,3,4...} or {1,2,3,4...})

$$a_n$$ denotes the image of n. $$a_n$$ is a *term*

## geometric progression
a sequence in the form $$a,ar,ar^2,ar^3,\dots,ar^n,\dots$$ r is called the common ratio

let a = 2 and r = 5

$$\lbrace a_n\rbrace =\lbrace 2(5^n)\rbrace = \lbrace 2,10,50,250,1250\rbrace$$

## arithmetic progression
a sequence in the form $$a,a+d,a+2d,a+3d,\dots,a+nd,\dots$$  d is called the common difference

## strings
a finite sequence of characters from a finite set (and alphabet)

empty string is represented by $$\lambda$$

## recurrence relations

recursively defined sequence with an initial condition (usually $$a_0$$ = some constant). A solution to a recurrence relation is a sequence with terms that satisfy the recurrence relation

example: $$a_n = a_{n-1}*2 + 1, \enspace a_0 = 3$$