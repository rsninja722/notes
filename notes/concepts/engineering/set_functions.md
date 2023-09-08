# set functions

related: [sets](?note=notes/concepts/engineering/sets.md) <!-- [](/notes/concepts/engineering/sets.md) -->

let A and B be nonempty sets. A function f from A to B is denoted $f: A\to B$. Write f(a) = b if *b* is the unique element of B assigned by the function f to the element *a* of A.

also called mappings or transformations

$f: A \to B$ can also be defined as a subset of AxB. This subset is restricted to be a relation where no two elements of the relation have the same first element

only one element pair (a,b) for every a in A

$\forall x[x\in A \rightarrow \exists y [y \in B \land (x,y) \in f]]$

and 

$\forall x,y_1,y_2[[(x,y_1) \in f \land (x,y_2) \in f] \rightarrow y_1 = y_2$

## definitions
for a given function $f: A \to B$
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
for ever element $b\in B$ there is an element $a \in A$ with f(a) = b. 

### bijection/one-to-one correspondence
both one-to-one and onto

every a has one b

every b has one a

## inverse functions
let f be a bijection, then the inverse of $f$ denoted $f^{-1}$ is the function from B to A defined as $f^{-1}(y)=x \leftrightarrow f(x) = y$

f must be a bitjection to have an inverse

## composition

the composition of f with g, denoted $f \circ g(x)$ is the function from A to C defined by f(g(x))

range of f must be a subset of the domain of g

## graphs of functions
the graph of function f is the set of ordered pairs $\lbrace (a,b) | a \in A \enspace and \enspace f(a) = b \rbrace$

![img](./media/2_sets_7.png)

## floor and ceiling functions
- **floor $\lfloor x\rfloor$** - the largest integer less than or equal to x
- **ceil $\lceil x\rceil$** - the smallest integer greater than or equal to x

### useful properties
n is and integer, x is a real number

- $\lfloor x\rfloor = n$ if and only if $n \leq x < n + 1$
- $\lceil x\rceil = n$ if and only if $n -1 < x \leq n$
- $\lfloor x\rfloor = n$ if and only if $x-1 < n \leq x $
- $\lceil x\rceil = n$ if and only if $x \leq n < x + 1$

- $x-1 < \lfloor x\rfloor  \leq x \leq \lceil x\rceil < x+1$

- $\lfloor -x\rfloor = -\lceil x\rceil$
- $\lceil -x\rceil = -\lfloor x\rfloor$

- $\lfloor x + n\rfloor = \lfloor x\rfloor + n$
- $\lceil x + n\rceil = \lceil x\rceil + n$

## factorial functions
$f: \mathbb{N} \to \mathbb{Z}^{+}, \enspace f(n) = n!$

f(n) = 1\*2\*...\*(n-1)\*n

f(0) = 1

### stirling's formulas
$n! ~ \sqrt{2\pi n}(n/e)^n$

$f(n) ~ g(n) \doteq \lim_{n\to\infin} f(n)/g(n) = 1$
