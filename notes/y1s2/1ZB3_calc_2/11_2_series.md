# 11.2 series 

if we add the terms of an infinite sequence $$\lbrace a_n \rbrace_{n=1}^{\infin} $$ we get an infinite sequence denoted by $$\sum_{n=1}^{\infin} a_n$$ or $$\sum a_n$$

## partial sums

given a series  $$\sum_{n=1}^{\infin} a_n = a_1 + a_2 + a_3 + \dots$$, let $$s_n$$ denote its *n*th partial sum:

$$s_n = \sum_{i=1}^{\infin} a_i = a_1 + a_2 + \dots + a_n$$

if the sequence $${\lbrace s_n \rbrace}$$ is convergent and $$\lim_{n\to\infin} s_n = s$$ exists as a real number, then the series $$\sum a_n$$ is called *convergent* and we write

$$a_1 + a_2 + \dots + a_n + \dots = s$$ or $$\sum_{n=1}^{\infin} a_n = s$$

the number *s* is called the sum of the series. if the sequence $${\lbrace s_n \rbrace}$$ is divergent, then the series is divergent

## geometric series
the geometric series $$\sum_{n=1}^{\infin} ar^{n-1} = a + ar + ar^2 + \dots + ar^{n-1} + \dots$$ is convergent if $$|r| < 1$$ and its sum is $$\sum_{n=1}^{\infin} ar^{n-1} = \frac{a}{1-r}$$

if $$|r| \geq 1$$, the geometric is divergent


### test for divergence for geometric series

for $$\sum_{n=1}^{\infin} ar^{n-1}$$

does this converge? write as a partial sum and check to first few terms first to see

for $$\sum_{n=1}^{\infin} ar^{n-1} = \lim_{k \to \infin} \sum_{n=1}^{k} ar^{n-1} $$

formula/expression for the $$k^{th}$$ partial sum: $$\frac{a(1-r^k)}{1-r}, \ r \ne 1$$

$$\vert r\vert < 1$$ | $$\vert r\vert \geq 1$$ 
:---: | :---: 
then $$r^k \to 0 \enspace as \enspace k \to \infin$$ | then $$r^k \to \infin \enspace as \enspace k \to \infin$$ 
$$\lim_{k \to \infin} \frac{a(1-r^k)}{1-r} = \frac{a}{1-r}$$ | $$\lim_{k \to \infin} \frac{a(1-r^k)}{1-r} = \pm \infin$$ 
series converges | series diverges

#### if a series converges
if $$\sum_{n=1}^{\infin} a_n$$ is convergent, then $$\lim_{n\to\infin}a_n = 0$$

#### quick way to check if a series diverges 
for $$\sum_{n=1}^{\infin} a_n$$, if $$lim_{k \to \infin} a_n \ne 0 \enspace or \enspace DNE$$, then the series diverges, doesn't say anything about convergence

## properties of convergent series
if $$\sum a_n$$ and $$\sum b_n$$ are convergent series

1. $$\sum_{n=1}^{\infin} ca_n = c \sum_{n=1}^{\infin} a_n$$ 
2. $$\sum_{n=1}^{\infin} (a_n + b_n) = \sum_{n=1}^{\infin} a_n + \sum_{n=1}^{\infin} b_n$$
3. $$\sum_{n=1}^{\infin} (a_n - b_n) = \sum_{n=1}^{\infin} a_n - \sum_{n=1}^{\infin} b_n$$