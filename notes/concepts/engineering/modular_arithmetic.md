# modular arithmetic

- **modulo function** - $a$ mod $n$ returns the remainder after dividing $a$ by $n$
    - $\mathbb{Z}^{+} \times \mathbb{Z}^{+} \to \mathbb{N}$
    - **modulus** - $n$
    - also written as a congruence $a \equiv r mod n$ (r = remainder, n = modulus) (n divides a-r, and $a = nx + r$ for some x)
        - example: $73 \equiv 8 \text{ mod } 13$ (both 73 and 8 are equivalent when modulus 13)
        - the remainder r is not unique (infinite set of remainders)

modular arithmetic draws on the concept of divisibility

## divisibility

- **integer division** - let *a,b* be integers where $$a \ne 0$$, if there exists a c such that $$b=ac$$, then a *divides* b.
    - **factor/divisor** - *a* is a factor of *b*
    - **multiple** - *b* is a multiple of *a*
    - **notation** - $$a\mid b$$ denotes a divides b. if $$a\mid b$$, then *b/a* is an integer. if *a* does not divide *b*, we write $$a \nmid b$$

### properties of divisibility

let a,b, and c be integers, where $$a \ne 0$$

- if $$a \mid b$$ and $$b\mid c$$, then $$a\mid c$$
- if $$a \mid b$$ and $$a\mid c$$, then $$a\mid (b+c)$$
- if $$a \mid b$$ then $$a\mid bc$$ for all integers c

## division algorithm

quotient and remainder from division

if *a* is an integer and *d* is a positive integer, then there are unique integers *q* and *r*, with $$0 \leq r < d$$, such that $$ a=dq+r$$
- *d* - divisor
- *a* - dividend
- *q* - quotient
- *r* - remainder

### definitions of functions div and mod

*q = a* **div** *d*
*r = a* **mod** *d*

## congruence relation

let a,b be integers, let m be a positive integer

- **congruence** - $$a \equiv b (\text{mod} m)$$ or $$a \text{mod} m = b \text{mod} m$$ or a is congruent to b modulo m if m divides a-b
    - if a is not congruent to b module m, write $$a \not\equiv b (\text{mod} m)$$
    - check by seeing if m divides (a - b)

### congruence of sums and products

let m be a positive integer

if $$a \equiv b (\text{mod} m)$$ and $$c \equiv d (\text{mod} m)$$ then $$a+c \equiv b+b (\text{mod} m)$$ and $$ac \equiv bd (\text{mod} m)$$

### algebraic manipulation of congruences

can multiply both sides by an integer $$c\cdot a \equiv c\cdot b (\text{mod} m)$$ 

can add an integer to both sides $$c + a \equiv c + b (\text{mod} m)$$ 

dividing both sides does not always produce a valid congruence

### rules for modulo

$$ (a+b) (\text{mod} m) = ((a \text{mod} m) + (b\text{mod} m)) \text{mod} m$$

$$ ab \text{mod} m = ((a \text{mod} m)(b\text{mod} m)) \text{mod} m$$

## arithmetic modulo n

- let $n \in \mathbb{Z}^{+}$
- the integers module n is the set $\mathbb{Z}_n = \\{0, ... ,n-1\\}$
- $S_n$ - $S_n(a) = (a+1) \text{ mod } n$ (successor function)
- $+_n$ - $a +_n b = (a+b) \text{ mod } n$ (addition function)
- $*_n$ - $a *_n b = (ab) \text{ mod } n$ (multiplication function)

- **modular arithmetic** is arithmetic on $\mathbb{Z}_n$ for some $n \in \mathbb{Z}^{+}$
    - think of it as clock arithmetic
- **theorem** - when $n > 1$, $(\mathbb{Z}_n, 0, 1, +_n, *_n, -_n)$ is a commutative ring, when n is prime, $(\mathbb{Z}_n, 0, 1, +_n, *_n, -_n, \cdot_n^{-1})$ is also a field
    - closure: the result of the functions are always in $R$
    - associative
    - distributive
    - identity for addition: $a + 0 = a$
    - inverse for addition: $a + (-a) = a$
    - identity for multiplication: $a \times 1 = a$
    - inverse for multiplication: $ a\times a^{-1} = 1$ (may not exist)

### compute mod with inverse

- $\frac{a}{b} \text{ mod } n \equiv ab^{-1} \text{ mod } n$
- inverse ($b^{-1}$) of an integer ($b$) satisfies $bb^{-1} = 1 \text{ mod } n$
- example - $\frac{3/5} \text{ mod } 9$, find inverse $5^{-1} \equiv 2 \text{ mod } 9$, then compute $3 \cdot 2 \equiv 6 \text{ mod } 9$

- inverse $b^{-1}$ only exists if gcd(b,n) = 1
    - b and n are coprime

### modular reduction

- reduction at end - $7^5 = 16807 \equiv 11 \text{ mod } 13$
- reduction throughout - $7^5 - 7^2 \cdot 7^2 \cdot 7 \equiv 10 \cdot 10 \cdot 7 \equiv 11 \text{ mod } 13$