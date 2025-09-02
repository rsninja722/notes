# 3AC3 concepts

## review

2c03

analysis of algorithms

worst case analysis - trying to estimate the input that gives the largest possible running time

asymptotic worst case - analysis for very large inputs

average case analysis

amortized analysis

best case analysis

input size - number of atomic objects

upper and lower bound functions, tight bounds: theta for both upper and lower

transitivity of the bounds

proof of transitivity

$f(n) = O(g(n))$ $\exits n_0, c_1$  $f(n) \leq c_1, g(n)_2, \forall n \geq n_0$

$g(n) = O(g(n))$ $\exits n_0', c_2$  $f(n) \leq c_2, h(n)_2, \forall n \geq n_0'$


$f(n) \leq c_1,c_2,h(n)$ $\forall n \geq \text{max}(n_0,n_0')$

$f(n) = O(h(n))$

types of functions

polynomial: upper bounded by n to some (constant) exponent

- pseudo-polynomial: 
    - example: is prime: $\sqrt{n}$ operations, not polynomial because input size is $\text{log}_2 n$, $O(2^{\frac{\text{log}_2 n}{2}})$, exponential on the size of the input

efficient algorithms: any polynomial algorithms <- complexity class P

## topics