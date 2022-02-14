# divergence tests

# ratio and root tests

## ratio test definition

looking at the ratio $$\lim_{n \to \infin} \big| \frac{a_{n+1}}{a_n} \big|$$ think about this as a growth rate for the series

if the limit is
- $$= L < 1$$ -> absolutely convergent
- $$= L > 1 \lor L = \infin$$ -> divergent
- $$= L = 1$$ -> no info

*technically we can use this with any series but it might not give any info*


### example

$$= \sum_{n=1}{\infin} \frac{(-3)^n}{(2n+1)!}$$

$$= \lim_{n \to \infin} \frac{a_{n+1}}{a_n} = \lim_{n \to \infin} \big| \frac{ \frac{(-3)^{n+1}}{(2(n+1)+1)!} }{ \frac{(-3)^n}{(2n+1)!}} \big|$$

$$= \lim_{n \to \infin} \big| \frac{(-3)^{n+1}}{(2n+3)!} \cdot \frac{(2n+1)!}{(-3)^n} \big|$$ `TODO fix`

$$= \lim_{n \to \infin} \big| \frac{(-3)^{n+1}}{(-3)^n} \cdot \frac{(2n+1)!}{(2n+3)!} \big|$$

$$= \lim_{n \to \infin} \big| (-3)^1 \cdot \frac{(2n+1)!}{(2n+3)!} \big|$$

fix

$$= \lim_{n \to \infin} \big|  \frac{-3}{(2n+3)(2n+2)} \big|$$

$$= \lim_{n \to \infin} \big|  \frac{3}{(2n+3)(2n+2)} \big|$$

$$= 0 < 1$$ -> series is absolutely convergent

## root test

look at the term is self as an absolute value rooted

$$ \lim_{n \to \infin} \sqrt[n]{|a_n|}$$ or $$ \lim_{n \to \infin} (|a_n|)^{\frac{1}{n}} $$

if the limit is 
- $$= L < 1$$ -> absolutely convergent
- $$= L > 1 \lor L = \infin$$ -> divergent
- $$= L = 1$$ -> no info

*again, this technically applies to any series, but it wont always give info*

### example

$$= \sum_{n=1}^{\infin} (\frac{-2n}{n+1})^{5n}$$

$$= \sum_{n=1}^{\infin} (-1)^{5n} (\frac{2n}{n+1})^{5n}$$

$$= \sum_{n=1}^{\infin} (-1)^{5n} (\frac{2n}{n+1})^{5n}$$

$$= \lim_{n \to \infin} |a_n|^{1}{n}$$

$$= \lim_{n \to \infin} \big| (-1)^{5n} (\frac{2n}{n+1})^{5n} \big|^{1}{n}$$

$$= \lim_{n \to \infin} \big| (\frac{2n}{n+1})^{5} \big|^{1}$$

$$= \lim_{n \to \infin} (\frac{2n}{n+1})^{5}$$

$$= \lim_{n \to \infin} (\frac{2}{1+\frac{1}{n}})^{5}$$

limit of 1/n goes to 0

$$= \lim_{n \to \infin} (\frac{2}{1})^{5}$$

$$= 2^5 = 32 > 1$$ <- series divergent

## summary

look at $$\sum_{n=1}^{\infin} a_n$$ and ask can I rearrange this into geometric or p-series?

if not, does the test for divergence allow us to say the series diverges? ($$\lim_{n \to \infin} a_n \not= 0 \lor ONE$$)

if not, pick a test
- integral test
    - good if $$\int{1}{\infin} f(x) \ dx$$ is easy to calculate, where  f(n) = an `TODO: fix`
- comparison test (direct and limit)
    - helpful if the series looks similar to a geometric or p-series
- alternating series test
    - helpful if we a have an alternating series
- ratio test
    - helpful if the terms in the series have factorial or some product of terms involving exponentials 
- root test
    - helpful if the terms in the series have a power of n

*sometimes multiple tests will be applicable*