
$f(n) \leq c f(n)$

$n2^n+3n+2 \in O(2^n)$ is wrong because $2^n \leq n2^n$

should be $O(n2^n)$

proof: $n2^n+3n+2 \leq c2^n$

sub in $2c$ :  $2c2^{2c}+3(2c)+2 \leq c2^(2c)$

profit?

# lecture

## implementation for bag stack queue

how to implement a bag stack or queue?

fixed size - array
dynamic size - linked list, or resizing array

### array resizing

- double the size of the array through reallocation if the size exceeds the current allocated size
- if only 25% percent of the array is being used, cut the size in half

realloc


## stack using a static array

- with `N = stack.size()`

TODO

### stack operations using an static array

pop doesn't "remove" data, it just changes where the end of the array is, data will be overwritten

### stack operations using a linked list

### queue operations using an static array

wrap around

### queue operations using a linked list



implementation can be done anyway as long as the functionality stays the same from the perspective of the external programmer using the api


# analysis of algorithms

## measuring runtime

two ways to analyze the runtime of algorithms
- **empirical** - running specific test cases, may not be representative of all cases
- **theoretical** - analysis of the program structure itself

## runtime factors

two factors (D.E. Knuth)

- cost of executing each statement
- frequency of execution of each statement

goal is to derive a time function $T(n)$ - describes the amount of time it takes to execute a program based on the size of the input

- $n$ - size of the input

## analyzing swap

Swap ($\varnothing$) - swap takes no inputs

TODO

## analyzing linear search

c5 represents c4 and c5

TODO 


# lecture monday

in large $n$ in $n^2 + 2n + 1$, only the term $2^n$ is significant. Only the fastest growing term should be considered when analyzing how the runtime of an algorithm grows with the size of the input

![2n](./media/2n.png)

## tilde approximation

we write $\text{\textasciitilde} f(n)$ to represent any function for which 

$$\lim_{n\to \infin} \frac{\text{\textasciitilde} f(n)}{f(n)} = 1$$

example:

if $f(n) = (c_3+c_4+c_5)n^2 + c_2n +c_f$, then $\text{\textasciitilde} f(n) = (c_3+c_4+c_5)n^2$

## observations

TODO

## importance of big O

description | funciton
---|---
constant | $1$
logarithmic | $\log{n}$
linear | $n$
linearithmic | $n\log{n}$
quadratic | $n^2$
cubic | $n^3$
exponential | $2^n$

np - non polynomial - from exponential up to factorial

to get big O, collect terms and call it a constant:

```python
for i in n:
    stuff

for j in n:
    stuff2
```

$f(n) = i\cdot n + j\cdot n$

$ = (i+j)\cdot n$

$ = c\cdot n$

TODO

## big O more formally

$O(f(n))$ denotes a set of functions

$T(n) \in O(f(n))$ if given the existence of some constant $c$, some number of inputs $n_0$, for all $n \geq n_0$, if $T(n)$ is between $0$ and $c\cdot f(n)$, then $T(n) \in O(f(n))$

effectively, $O(f(n))$ is an upper bound of $T(n)$ past some arbitrarily selected $n_0$

![OnTo](./media/OnTn.png)

bounds should be as tight as possible for upper bounds

$T(n) \not\in O(n)$

$T(n) \in c\cdot O(n)$ for large enough $c$

## demonstrate $T(n) \not\in O(f(n))$

$32n^2 + 17n + 1\not\in O(n)$

$32n^2 + 17n + 1 \leq c\cdot n$

$32n + 17 + \frac{1}{n} \leq c\cdot n$

n will always be larger than c

## big-$\Omega$

$\Omega(f(n))$ denotes a set of functions

given the existence of some constant $c$, some number of inputs $n_0$, for all $n \geq n_0$, if $T(n)$ is greater than (or equal to) $c\cdot f(n)$, then $T(n) \in \Omega(f(n))$

effectively, $\Omega(f(n))$ is a lower bound of $T(n)$ past some arbitrarily selected $n_0$

example:

$T(n) = 32n^2 + 17n + 1$

$T(n) \in \Omega(1)$
$T(n) \in \Omega(n)$
$T(n) \in \Omega(n \log{n})$
$T(n) \in \Omega(n^2)$

## average runtime Big-$\Theta$

- $T_{avg}(n)$ - average runtime over all inputs of size n
    - hard to accurately prove
    - analysis tends to become mathematically intractable (hard to deal with)
    - the notion of "average input" frequently has no obvious meaning

use worse case as the principle measurement and average complexity whenever useful

$\Theta(f(n))$

given the existence of two constants $c_1 > 0$ and $c_2 > 0$, some number TODO

find the best worst case, and the worst best case, if they are the same you have a middle bound

## common errors

- equal signs - often $T(n) = O(f(n))$ is written but is meant to mean $T(n) \in O(f(n))$
- domain - the domain of $f(n)$ is typically the set of natural numbers, but doesn't make set for most inputs
- nonnegative functions - when using Big-O TODO

## limits

taking the limit of two functions will tell us whether O, $\Omega$, or $\Theta$ are applicable

$$\lim_{n\to \infin} \frac{f(n)}{g(n)} = \infin \implies f(n) \in O(g(n))$$

$$\lim_{n\to \infin} \frac{f(n)}{g(n)} = 0 \implies f(n) \in \Omega(g(n))$$

$$\lim_{n\to \infin} \frac{f(n)}{g(n)} = {0,\infin} \implies f(n) \in \Theta(g(n))$$

## multiple variables

TODO

# tutorial
b hn1~
$O(n^5+n^4 \log{n}) \in O(n^5)$ true because

$n^5 +n^4\log{n} < cn^5$

$+ 1 + logn{}