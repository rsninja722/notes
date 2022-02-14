# 11.3 integral test and estimates of sums 

## p-series
the p-series $$\sum_{n=1}^{\infin} \frac{1}{n^p}$$ is convergent if $$p > 1$$ and divergent if $$p \leq 1$$

## integral test
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

sum of the series is not equal to the sum of the integral

## estimating sums

### remainder estimate for integral test
suppose $$f(k) = a_k$$ where *f* is a continuous, positive, decreasing function for $$x \geq n$$ is convergent. if $$R_n = s - s$$ then 

$$\int_{n+1}^{\infin} f(x) \enspace dx \leq R_n \leq \int_{n}^{\infin} f(x) \enspace dx$$

<details>
<summary>example</summary>

![example](./media/11_3_integral_test_and_estimates_of_sums_1.png)
</details>

### sum estimate for integral test

$$s_n + \int_{n+1}^{\infin} f(x) \enspace dx \leq s \leq s_n + \int_{n}^{\infin} f(x) \enspace dx$$