## comparison tests (11.4)

### direct comparison test

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

#### example
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

### limit comparison test

$$\sum_{n=1}^{\infin} a_n$$ 
- if we can find another series $$\sum_{n=1}^{\infin} b_n$$ which converges and $$\lim_{n \to \infin} \frac{a_n}{b_n} = c > 0$$ (constant) then $$\sum_{n=1}^{\infin} a_n$$ converges
- if we can find another series $$\sum_{n=1}^{\infin} b_n$$ which diverges and $$\lim_{n \to \infin} \frac{a_n}{b_n} = c > 0$$ (constant) then $$\sum_{n=1}^{\infin} a_n$$ diverges

**important** this only works if the terms in both series are positive: $$a_n > 0$$ and $$b_n \geq 0$$ for all n  

#### example 
is $$\sum_{n=1}^{\infin} \frac{n+3^n}{n+2^n}$$ convergent or divergent

what happens for large n?
- numerator will be dominated by $$3^n$$
- denominator will be dominated by $$2^n$$

so for large n, we expect the terms to behave like $$\frac{3^n}{2^n}$$ = $$(\frac{3}{2})^n$$

so lets compare to $$\sum_{n=1}^{\infin} (\frac{3}{2})^n$$

= $$\sum_{n=1}^{\infin} \frac{3}{2} (\frac{3}{2})^n-1$$

geometric series $$\frac{3}{2}  = a$$ and $$(\frac{3}{2})^n-1 = r^{n-1}$$ with $$|r| = \frac{3}{2} \geq 1$$ so this series diverges

check the $$\lim_{n \to \infin} \frac{a_n}{b_n}$$:

 $$\lim_{n \to \infin} \frac{\frac{n+3^n}{n+2^n}}{(\frac{3}{2})^2}$$ 
 
 = $$\lim_{n \to \infin} \frac{n+3^n}{n+2^n} (\frac{2^n}{3^n})$$

= $$\lim_{n \to \infin} \frac{n+3^n}{3^2} (\frac{2^n}{n+2^n})$$

= $$\lim_{n \to \infin} (\frac{n}{3^n} + 1) (\frac{2^n}{2^n(\frac{n}{2^n} + 1)}$$

= $$\lim_{n \to \infin} (\frac{n}{3^n} + 1 ) (\frac{1}{\frac{n}{2^n} + 1}$$

= $$\lim_{n \to \infin} (0 + 1) (\frac{1}{0 + 1}$$