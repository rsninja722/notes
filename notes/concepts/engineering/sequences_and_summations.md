# sequences and summation

related: [sets](?note=notes/concepts/engineering/sets.md) <!-- [](/notes/concepts/engineering/sets.md) -->

## sequences
ordered lists of elements 

a function from a subset of the integers to a set S (usually from the set {0,1,2,3,4...} or {1,2,3,4...})

$a_n$ denotes the image of n. $a_n$ is a *term*

## geometric progression
a sequence in the form $a,ar,ar^2,ar^3,\dots,ar^n,\dots$ r is called the common ratio

let a = 2 and r = 5

$\lbrace a_n\rbrace =\lbrace 2(5^n)\rbrace = \lbrace 2,10,50,250,1250\rbrace$

## arithmetic progression
a sequence in the form $a,a+d,a+2d,a+3d,\dots,a+nd,\dots$  d is called the common difference

## strings
a finite sequence of characters from a finite set (and alphabet)

empty string is represented by $\lambda$

## recurrence relations

recursively defined sequence with an initial condition (usually $a_0$ = some constant). A solution to a recurrence relation is a sequence with terms that satisfy the recurrence relation

example: $a_n = a_{n-1}*2 + 1, \enspace a_0 = 3$

### fibonacci sequence
- initial condition: $f_0 = 0,f_1 = 1$
- recurrence relation: $f_n = f_{n-1} + f_{n-2}$

### solving recurrence relations

- **solving the recurrence relation** - finding a formula for the nth term of the sequence
- **closed formula** - formula for a recurrence relation defined in terms of the nth term

solve by iteration, prove by induction

### examples

#### working upwards, forwards substitution

let $\lbrace a_n \rbrace$ be a sequence that satisfies the recurrence relation $a_n = a_{n-1} + 3$ for $n=2,3,4$ and suppose that $a_1 = 2$.

$a_2 = 2+3$

$a_3 = (2+3) + 3 = 2 + 3\cdot 2$

$a_3 = ( 2 + 3\cdot 2) + 3 = 2 + 3\cdot 3$

$\vdots$

$a_n = a_{n-1} + 3 = (2+3)\cdot (n-2)) + 3 =2+3(n-1)$

#### working downwards, backwards substitution

let $\lbrace a_n \rbrace$ be a sequence that satisfies the recurrence relation $a_n = a_{n-1} + 3$ for $n=2,3,4$ and suppose that $a_1 = 2$.

$a_n = a_{n-1} + 3$

$ = (a_{n-2} + 3) + 3 = a_{n-2} + 3 \cdot 2$

$ = (a_{n-3} + 3) + 3 \cdot 2 = a_{n-3} + 3 \cdot 3$

$\vdots$

$a_2 + 3(n-2) = (a_1 + 3) + 3(n-2) = 2+3(n-1)$

## useful sequences

nth term | first 10 terms
:---: | :---
$n^2$ | 1,4,9,16,25,36,49,64,81,100,...
$n^3$ | 1,8,27,64,125,216,343,512,729,1000,...
$n^4$ | 1,16,81,256,625,1296,2401,4096,5461,10000,...
$2^n$ | 2,4,8,16,32,64,128,256,512,1024,...
$3^n$ | 3,9,27,81,243,729,2187,6561,19683,59029,...
$n!$ | 1,2,6,24,120,720,5040,40320,362880,3628800,...
$fn$ | 1,1,2,3,5,8,13,21,34,55,89,...

## summations

sum of the terms $a_m,a_{m+1},\dots ,a_n$ from the sequence

the notation $\sum_{j=m}^{n} a_j \text{or} \sum_{m\leq j\leq n} a_j $

represents $a_m + a_{m+1} + \dots + a_n$

- **index of summation** - j 
- **lower limit** - m
- **upper limit** - n

more generally for a set S $\sum_{j \in S} a_j$

example: $r^0 + r^1 + r^2 + r^3 + \dots + r^n = \sum_{0}^{n} r^j$

### geometric series

sums of terms of geometric progressions

$\sum_{j=1}^{n} ar^j = \bigg\lbrace_{(n+1)a r=1}^{\frac{ar^{n+1}-a}{r-1} r\ne 1}$

### useful summation formulas

sum | closed formula
:--- | :---
$\sum_{k=0}^{n} ar^k\enspace (r\ne 0)$ | $\frac{ar^{n+1}-1}{r-1},r\ne 1$
$\sum_{k=1}^{n} k$ | $\frac{n(n+1)}{2}$
$\sum_{k=1}^{n} k^2$ | $\frac{n(n+1)(2n+1)}{6}$
$\sum_{k=1}^{n} k^3$ | $\frac{n^2(n+1)^2}{4}$
$\sum_{k=1}^{\infin} x^k, \vert x\vert < 1$ | $\frac{1}{1-x}$
$\sum_{k=1}^{\infin} kx^{k-1},\vert x\vert < 1$ | $\frac{1}{(1-x)^2}$

# 2.5 cardinality of sets

notation - the cardinality of a set A is equal to the cardinality of a set B: $|A| = |B|$, if and only if there is a one-to-one correspondence (bijection) from A to B

if there is a one-to-one function (injection) from A to B the cardinality of A is less than or the same as B and we write $|A| \leq |B|$

when $|A| \leq |B|$ and A and B have different cardinality, we say the cardinality of A is less than B and we write $|A| < |B|$

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

