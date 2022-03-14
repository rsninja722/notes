# number theory

# 4.1 divisibility and modular arithmetic

- **integer division** - let *a,b* be integers where $$a \ne 0$$, if there exists a c such that $$b=ac$$, then a *divides* b.
    - **factor/divisor** - *a* is a factor of *b*
    - **multiple** - *b* is a multiple of *a*
    - **notation** - $$a\mid b$$ denotes a divides b. if $$a\mid b$$, then *b/a* is an integer. if *a* does not divide *b*, we write $$a \nmid b$$

## properties of divisibility

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

## arithmetic modulo m

let $$Z_m$$ be the set of nonegitive integers less than m: $$\lbrace 0,1,\dots,m-1 \rbrace$$

- **$${+}_m$$** - $$a {+}_m b = (a+b) mode m$$ addition modulo m
- **$${\cdot}_m$$** - $$a {\cdot}_m b = (a \cdot b) mode m$$ multiplication modulo m

