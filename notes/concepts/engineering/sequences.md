# sequences and summation

related: [sets](?note=notes/concepts/engineering/sets.md) <!-- [](/notes/concepts/engineering/sets.md) -->

# sequences

- **sequence** - ordered lists of elements 

## strings

- **string** - a finite sequence of characters from a finite set
    - **string\word** - finite sequence made if symbols
    - **empty sequence** - $\epsilon$ or $\lambda$ - sequence containing zero symbols
    - **prefix** - any number of leading symbols of a sequence
    - **suffix** - any number of trailing symbols of a sequence
        - note: any sequence is a prefix and suffix of itself
        - $\epsilon$ is always a prefix and suffix

## sequence operations

examples use sequence $x = abbc$ and $y = c$

- **cardinality\length** - number of elements composing the sequence
    - $|x| = 4$, $|y| = 1$, $|\epsilon| = 0$
- **concatenation** - joins two sequences, multiple notations
    - $x\circ y = abbcc$
    - $xy = abbcc$
    - $x\epsilon = \epsilon x = x$
    - associative ($x(yz) = (xy)z$)
- **power operation** - repeated concatenation
    - $x^0 = \epsilon, x^1 = x, x^2 = xx ...$
- **element access** - $x_n$ denotes the image of n (nth term of x)

## common sequences

### geometric progression
a sequence in the form $a,ar,ar^2,ar^3,\dots,ar^n,\dots$ r is called the common ratio

let a = 2 and r = 5

$\lbrace a_n\rbrace =\lbrace 2(5^n)\rbrace = \lbrace 2,10,50,250,1250\rbrace$

### arithmetic progression
a sequence in the form $a,a+d,a+2d,a+3d,\dots,a+nd,\dots$  d is called the common difference

### recurrence relations

recursively defined sequence with an initial condition (usually $a_0$ = some constant). A solution to a recurrence relation is a sequence with terms that satisfy the recurrence relation

example: $a_n = a_{n-1}*2 + 1, \enspace a_0 = 3$

#### fibonacci sequence
- initial condition: $f_0 = 0,f_1 = 1$
- recurrence relation: $f_n = f_{n-1} + f_{n-2}$

#### solving recurrence relations

- **solving the recurrence relation** - finding a formula for the nth term of the sequence
- **closed formula** - formula for a recurrence relation defined in terms of the nth term

solve by iteration, prove by induction

#### examples

##### working upwards, forwards substitution

let $\lbrace a_n \rbrace$ be a sequence that satisfies the recurrence relation $a_n = a_{n-1} + 3$ for $n=2,3,4$ and suppose that $a_1 = 2$.

$a_2 = 2+3$

$a_3 = (2+3) + 3 = 2 + 3\cdot 2$

$a_3 = ( 2 + 3\cdot 2) + 3 = 2 + 3\cdot 3$

$\vdots$

$a_n = a_{n-1} + 3 = (2+3)\cdot (n-2)) + 3 =2+3(n-1)$

##### working downwards, backwards substitution

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