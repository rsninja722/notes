# multisets

a multiset (or multibag) is a set that can have multiple instances of an element

example: $\\{ a, a, b \\}$ 

- **multiplicity** - the number of instances of an element, in the case of $a$: 2
- order does not matter
- **cardinality** - defined as the sum of the multiplicities of all the elements

## notation

- **multiplicity** - $m(s)$ - instances of element $s$ in the multiset

a set $S$ can be used define a multiset $M$ as follows

$\sum_{s \in S} m(s)s$

### example

$S = \\{ a,b,c,d \\}$

$M = 3a + b + 4d$

- $m(a) = 3$
- $m(b) = 1$
- $m(c) = 0$
- $m(d) = 4$

## operations

$m_r$ represents multiset result

### membership

$s \in m_1 \leftrightarrow m(s) \neq 0$ 

### addition

$m_1 + m_2 = m_r$

is defined as:

$m_1(s) + m_2(s) = m_r(s)$ for all s

($m_x(s)$ is the multiplicity function for multiset $m_x$)

### scalar multiplication

$x + m_1 = m_r$

is defined as:

$x * m_1(s) = m_r(s)$ for all s

### element-wise comparison

$m_1 \_ m_2 = \text{true or false}$

is defined as 

$\forall s \in S : m_1(s) \_ m_2(s)$

where _ can be any comparison operator

### cardinality

$\sum_{s \in S} m_1(s)s$

### subtraction

only can be done if $m_1 \geq m_m$

$m_1 - m_2 = m_r$

is defined as:

$m_1(s) - m_2(s) = m_r(s)$ for all s
