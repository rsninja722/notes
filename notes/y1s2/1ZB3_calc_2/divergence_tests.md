# divergence tests

## for geometric series

for $$\sum_{n=1}{\infin} ar^{n-1}$$

does this converge? write as a partial sum

for $$\sum_{n=1}{\infin} ar^{n-1} = \lim_{k \to \infin} \sum_{n=1}{k} ar^{n-1} $$

formula/expression for the $$k^{th}$$ partial sum: $$\frac{a(1-r^k)}{1-r}, \ r \not= 1$$

$$\vert r\vert < 1$$ | $$\vert r\vert \geq 1$$ 
:---: | :---: 
then $$r^k \to 0 \enspace as \enspace k \to \infin$$ | then $$r^k \to \infin \enspace as \enspace k \to \infin$$ 
$$\lim_{k \to \infin} \frac{a(1-r^k)}{1-r} = \frac{a}{1-r}$$ | $$\lim_{k \to \infin} \frac{a(1-r^k)}{1-r} = \pm \infin$$ 
series converges | series diverges


easier way to check if a series diverges 

for $$\sum_{n=1}{\infin} a_n$$, if $$lim_{k \to \infin} a_n \not= 0 \enspace or \enspace DNE$$, then the series diverges, doesn't say anything about convergence

# integral test

used when we can't find an expression for the partial sums 

$$\sum_{n=1}{\infin} a_n \cdot w$$ w = rectangle witdth

$$\sum_{n=1}{\infin} a_n \geq \int_{1}^{\infin} f(x) dx$$ | $$\sum_{n=2}{\infin} a_n \leq \int_{1}^{\infin} f(x) dx$$
:---: | :---: 
if the integral diverges, then the series diverges too | if the integral converges, then the series converges too 

as a nice rule:

the integral test: for the function f(x) where $$f(n) = a_n, \enspace n=1,2,3$$
- if $$\int_{1}^{\infin} f(x) dx$$ converges, then $$\sum_{n=2}{\infin} a_n$$ converges
- if $$\int_{1}^{\infin} f(x) dx$$ diverges, then $$\sum_{n=2}{\infin} a_n$$ diverges
works when f(x) is continuos, positive, and decreasing

# comparison tests (11.4)

## direct comparison test

for $$\sum_{n=1}^{\infin} a_n$$ 

if we can find another series $$\sum_{n=1}^{\infin} b_n$$ which converges and if $$a_n \leq b_n$$ for large n

then $$\sum_{n=1}^{\infin} a_n$$ converges

opposite:

if we can find another series $$\sum_{n=1}^{\infin} b_n$$ which diverges and if $$a_n \geq b_n$$ for large n

then $$\sum_{n=1}^{\infin} a_n$$ diverges 

**important** this only works if terms in both series are positive, $$a_n \geq \land b_n \geq 0 $$ for all n 


how do we find a series  $$\sum_{n=1}^{\infin} b_n$$ to compare to

main types of series we use for comparison test:
- geometric series  $$\sum_{n=1}^{\infin} ar^{n-1}$$ converges if $$|r| <> 1$$ and diverges if $$|r| \geq 1$$
- p-series  $$\sum_{n=1}^{\infin} \frac{1}{n^p}$$ converges if $$p > 1$$ and diverges if $$p \leq 1$$

### example
for $$\sum_{n=1}^{\infin} \frac{n \sin^2(n)}{1+n^3}$$

what happens for large n?
- $$\sin^2(n)$$ -> $$0\leq \sin^2(n)\leq 1$$ for all n
- $$\frac{n}{1+n^3}$$ -> $$\frac{n}{1+n^3} \div n$$ = $$\frac{1}{\frac{1}{n}+n^2}$$ -> 0 as n gets large
    - for large n, $$\frac{n}{1+n^3} $$ will behave like $$\frac{1}{n^2} $$

try comparing to 1 $$\sum_{n=1}^{\infin} \frac{1}{n^2}$$

both for $$\sum_{n=1}^{\infin} \frac{n \sin^2(n)}{1+n^3}$$ and $$\sum_{n=1}^{\infin} \frac{1}{n^2}$$
have positive terms, so we can apply the comparison test

$$\sum_{n=1}^{\infin} \frac{1}{n^2}$$ -> p-series with $$p=2 > 1$$ so this series converges

how do the terms in our series compare 

$$\frac{n \sin^2(n)}{1+n^3}$$ = $$\frac{\sin^2(n)} {\frac{1}{n}+n^2} \leq \frac{\sin^2(n)}{n^2} \leq \frac{1}{n^2}$$ 

=> $$\frac{n\sin^2(n)}{1+n^3} \leq \frac{1}{n^2}$$

by the comparison test, $$\sum_{n=1}^{\infin} \frac{n \sin^2(n)}{1+n^3}$$ converges

## limit comparison test

$$\sum_{n=1}^{\infin} a_n$$ 
- if we can find another series $$\sum_{n=1}^{\infin} b_n$$ which converges and $$\lim_{n \to \infin} \frac{a_n}{b_n} = c > 0$$ (constant) then $$\sum_{n=1}^{\infin} a_n$$ converges
- if we can find another series $$\sum_{n=1}^{\infin} b_n$$ which diverges and $$\lim_{n \to \infin} \frac{a_n}{b_n} = c > 0$$ (constant) then $$\sum_{n=1}^{\infin} a_n$$ diverges

**important** this only works if the terms in both series are positive: $$a_n > 0$$ and $$b_n \geq 0$$ for all n  

### example 
is $$\sum_{n=1}^{\infin} \frac{n+3^n}{n+2^n}$$ convergent or divergent

what happens for large n?
- numerator will be dominated by $$3^n$$
- denominator will be dominated by $$2^n$$

so for large n, we expect the terms to behave like $$\frac{3^n}{2^n}$$ = $$(\frac{3}{2})^n$$

so lets compare to $$\sum_{n=1}^{\infin} (\frac{3}{2})^n$$

$$= \sum_{n=1}^{\infin} \frac{3}{2} (\frac{3}{2})^n-1$$

geometric series $$\frac{3}{2}  = a$$ and $$(\frac{3}{2})^n-1 = r^{n-1}$$ with $$|r| = \frac{3}{2} \geq 1$$ so this series diverges

check the $$\lim_{n \to \infin} \frac{a_n}{b_n}$$:

$$= \lim_{n \to \infin} \frac{\frac{n+3^n}{n+2^n}}{(\frac{3}{2})^2}$$ 
 
$$= \lim_{n \to \infin} \frac{n+3^n}{n+2^n} (\frac{2^n}{3^n})$$

$$= \lim_{n \to \infin} \frac{n+3^n}{3^2} (\frac{2^n}{n+2^n})$$

$$= \lim_{n \to \infin} (\frac{n}{3^n} + 1) (\frac{2^n}{2^n(\frac{n}{2^n} + 1)}$$

$$= \lim_{n \to \infin} (\frac{n}{3^n} + 1 ) (\frac{1}{\frac{n}{2^n} + 1}$$

$$= \lim_{n \to \infin} (0 + 1) (\frac{1}{0 + 1}$$

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