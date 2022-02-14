# power series (11.8)

## intro
so far, dealing wit series of constants. but power series involve a variable.

example $$1+x+x^2+x^3+ ... = \sum_{n=0}^{\infin}x^n$$

in general, a power series has the form $$\sum_{n=0}^{\infin} c_n (x-a)^n$$ 
- $$c_n$$ = constants/coefficients
- $$x$$ = variable
- $$a$$ = "center point" of the series, we say that the series is centered at 
- $$n$$ = power of n

### example
$$\sum_{n=0}^{\infin} \frac{1}{n} (x-3)^n$$ centered at a=3

first question to ask: what can we say about the convergence? in general for power series, almost always use ratio test

apply ratio test:

$$\lim_{n \to \infin} \big| \frac{a_n+1}{a_n} \big|$$

$$= \lim_{n \to \infin} \big| \frac{c_{n+1} (x-a)^{n+1}}{c_{n+1} (x-a)^{n}} \big|$$

$$= \lim_{n \to \infin} \big| \frac{c_n+1}{c_n} (x-a) \big|$$

$$= \lim_{n \to \infin} \big| \frac{c_n+1}{c_n} \big| |x-a|$$

ratio test tells us the series test converges when limit is < 1:

$$= \lim_{n \to \infin} \big| \frac{c_n+1}{c_n} \big| |x-a| < 1$$

if $$x = a$$: $$\lim_{n \to \infin} \big| \frac{c_n+1}{c_n} \big| (0) $$ = $$ 0 < 1$$

series converges when $$x = a$$

if $$x \not= a$$: $$\lim_{n \to \infin} \big| \frac{c_n+1}{c_n} \big| |x-a| < 1$$ 

$$ |x-a|  < \frac{1}{\lim_{n \to \infin} \big|\frac{c_n+1}{c_n} \big|}$$ 

series converges for any values of x that satisfy this inequality

## interval/radius of convergence

think of things on the x-axis

```txt             
          for x values in here -> interval of convergence
          our series converges  
-∞          \/          \/               +∞
__________[________a_______]_____________ x              a_______]
  /\                             /\                          /\       
series            /\          series diverges         radius of convergence
diverges     center point 
              at x=a,series converges
                    
```

for any power series there are 3 possibilities

1. series converges only when x = a
    - radius of conv. : R=a
    - interval of conv. : x=a
2. series converges for some x values around a 
    - radius of conv. : R > 0
    - interval of conv. : (a-R, a+R)
3. series converges for all valeus fo x 
    - radius of conv. : R = ∞
    - interval of conv. : (-∞, ∞)

### example
find radius and interval of convergence of $$\sum_{n=1}^{\infin} \frac{n}{n+1} x^n$$

apply ratio test

$$\lim_{n \to \infin} \big| \frac{a_n+1}{a_n} \big|$$

$$= \lim_{n \to \infin} \big| \frac{\frac{n+1}{n+2} x^{n+1}}{\frac{n}{n+1} x^n} \big|$$

$$= \lim_{n \to \infin} \big| \frac{\frac{n+1}{n+2}}{\frac{n}{n+1}} \cdot \frac{x^{n+1}}{x^n} \big|$$

$$= \lim_{n \to \infin} \big| \frac{n+1}{n+2} \frac{n+1}{n} x \big|$$

$$= \lim_{n \to \infin} \big| \frac{n^2 + 2n + 1}{n^2 +2n} x \big|$$ 

$$= \lim_{n \to \infin} \big| \frac{1 + 2/n + 2/n^2}{1 + 2/n} x \big|$$ divided by n^2

$$= |x|$$

converges when this limit is < 1: |x| < 1
- radius of convergence: R=1
- interval of convergence: -1 < x < 1

**always check endpoints separately**

at x=1: $$\sum_{n=1}^{\infin} \frac{n}{n+1} 1^n$$

$$= \sum_{n=1}^{\infin} \frac{n}{n+1}$$

$$\lim_{n \to \infin} a_n = \lim_{n \to \infin} \frac{n}{n+1}$$

$$= \lim_{n \to \infin} \frac{1}{1+\frac{1}{n}}$$ divided by n

$$= 1 \not= 0$$

$$\therefore$$ by test for divergence, series diverges at x=1

at x=-1: $$\sum_{n=1}^{\infin} \frac{n}{n+1} (-1)^n$$

$$\vdots$$

the radius of convergence is 1 and the interval of convergence is (-1,1)