# 11.9 functions as power series

we can think about power series as functions

e.g. $$1+x+x^2+... = \sum_{n=0}^{\infin} x^n = \sum_{n=1}^{\infin} x^{n-1}$$ <- geometric series with a=1 and r=x

$$\sum_{n=0}^{\infin} x^n$$ converges to $$\frac{1}{1-x}$$ for $$-1 < x < 1$$

for $$-1 < x < 1$$ we can represent $$\frac{1}{1-x}$$ (function) as a series $$\sum_{n=0}^{\infin} x^n$$

## approximate $$\frac{1}{1-x}$$

approximate using partial sums

## find power series representation of other functions

### example

$$\frac{1}{1+x^2} = \frac{1}{1-(-x^2)}$$

plug $$(-x^2)$$ in as x

$$\frac{1}{1-x^2} = \sum_{n=0}^{\infin} (-x^2)^n$$

$$= \sum_{n=0}^{\infin} (-1)^n x^{2n}$$

### example

$$\frac{x^4}{x+3}$$

$$= x^4 (\frac{1}{x+3})$$

$$= x^4 (\frac{1}{3(\frac{x}{3}+1)})$$

$$= x^4 (\frac{1}{3})(\frac{1}{1+\frac{x}{3}})$$

$$= x^4 (\frac{1}{3})(\frac{1}{1-(-\frac{x}{3})})$$ right part looks like $$\frac{1}{1-x}$$ 

$$\frac{1}{1-(-\frac{x}{3})} = \sum_{n=0}{\infin} (\frac{-x}{3})^n$$

$$= \sum_{n=0}^{\infin} (-1)^n (\frac{x}{3})^n$$

$$= x^4 (\frac{1}{3}) \sum_{n=0}^{\infin} (-1)^n (\frac{x}{3})^n$$

$$= \sum_{n=0}^{\infin} x^4 (\frac{1}{3}) (-1)^n (\frac{x}{3})^n$$

$$= \sum_{n=0}^{\infin} x^4 (\frac{1}{3}) (-1)^n (\frac{x^n}{3^n})$$

$$= \sum_{n=0}^{\infin} (-1)^n  x^4 (\frac{1}{3^{n+1}})  x^{n+4}$$ power series representation for $$\frac{x^4}{x+3}$$