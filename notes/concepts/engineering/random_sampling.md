# random sampling

- **sampling** - randomly choosing objects from a set

## note about sample space 

- if each outcome $w$ in $\Omega$ has an equally likely outcome, then $P(w) = \frac{1}{\\#\Omega}$
- this fact and additivity imply that $P(A) = \frac{\\#A}{\\#\Omega}$
- can be noted as "chosen *uniformly* at random"

## sampling mechanisms

- $S$ is the set of possible choices
- $n = \\#S$
- $k$ is the amount of samples

sampling method | outcome | sample space | amount of outcomes | further points
---|---|---|---|---
**with replacement, order matters** | $(s_1,s_2, ... , s_k)$ | $\Omega = S^k$ - cartesian product of S repeated k times | $\\#\Omega = (n)^k$ |
**without replacement, order matters** | $(s_1,s_2, ... , s_k)$ each element is distinct | $\Omega = \\{(s_1,s_2, ... , s_k) : s_i \neq s_j \text{ if } i \neq j\\}$ | $\\#\Omega = n \cdot (n-1) \cdot ... \cdot (n-k+1)$ (called descending factorial)| $k \not\gt n$
**without replacement, order doesn't matter** | $\\{s_1,s_2, ... , s_k\\}$ | $\Omega = \\{ X \subset S : \\#X = k\\}$| $\\#\Omega = nCk$ | $P(X) = \frac{1}{nCk}$
**with replacement, order doesn't matter** | covered in chapter 6 | | |


