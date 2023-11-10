# sum, product, and series

## summation

- repeated addition
- represented with capital sigma ($\Sigma$)
- identity = 0
    - this means $\sum_{k=0}^{0} a = 0$

$$\sum_{k=1}^{n} a_k = a_1 + a_2 + ... + a_n$$

```c++
int sum = 0;
for(int k=1; k <= n; k++) {
    sum += a(k);
}
```

## product

- repeated multiplication
- represented with capital Pi ($\Pi$)
- identity = 1
    - this means $\prod_{k=0}^{0} a = 1$
    - this is why $0! = 1$ (because $n! = \prod_{k=1}^{n} k$ )

$$\prod_{k=1}^{n} a_k = a_1 \cdot a_2 \cdot ... \cdot a_n$$

```c++
int prod = 1;
for(int k=1; k <= n; k++) {
    prod *= a(k);
}
```

## infinite series

- **infinite series** - sum of indefinite terms
    - $$\sum_{k=1}^{\infin} a_k = a_1 + a_2 + a_3 + ...$$
    - there is no $k_{\infin}$ term
- **limit** - to get the value of an infinite series, you need to see what value the series approaches
    - $$\lim_{n \to \infin} \sum_{k=1}^{\infin} a_k $$ - "the limit of the infinite serries as n approaches infinity"

## important series

### geometric series

$$\sum_{n=0}^{\infin} ax^n = \frac{a}{1-x}$$ for any $|x| < 1$

### exponential function (e)

$$e = \sum_{k=0}^{\infin} \frac{x^k}{k!}$$ for any $x \in \mathbb{R}$

#### summation identities

$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$$

$$\sum_{k=a}^{b} k = (b-a+1) \frac{a+b}{2}$$

$$\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$$

$$\sum_{k=1}^{n} k^3 = \frac{n^2(n+1)^2}{4}$$

#### binomial theorem

[binomial theorem](?note=notes/concepts/engineering/pascals_triangle.md#binomialtheorem) <!-- [](/notes/concepts/engineering/pascals_triangle.md) -->


## order

multiple summations can be reordered

$$\sum_{i} \sum_{j} a_{i,j} = \sum_{j} \sum_{i} a_{i,j}$$

$$\sum_{i=1}^{N} \sum_{j=1}^{i} a_{i,j} = \sum_{j=1}^{N} \sum_{i=j}^{N} a_{i,j}$$

