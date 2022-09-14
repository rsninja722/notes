# substitution

## textual substitution

- **textual substitution** - the act of replacing all occurrences of one expression with another

the notation $E[x \coloneqq  R]$ or $E_{R}^{x}$ donates an expression that is the same as E, but with all $x$'s replaced by $R$. (E and R are expressions, x is a variable)

example:

Expression | Result | Unnecessary parentheses removed
---|---|---
x | x | x
$x[x \coloneqq  z + 2]$ | (z + 2) | z+2
$(x+y)[x\coloneqq z+2]$ | ((z+2)+y) | z+2+y
$(x·y)[x \coloneqq  z + 2]$ | ((z+2)·y) | (z+2)·y 

## inference rule substitution

in general an inference rule is shown as $\frac{P_1, \dots, P_k}{C}$ where $P_i$ is a premises/hypotheses, anc $C$ is a conclusion

- inference rule assets: if the premises are theorems, then the conclusion is a theorem

inference rule substitution: 

$$\frac{E}{E[v \coloneqq  F]}$$

- E - expression
- v - list of variables
- F - list of expressions

<details>
<summary>examples</summary>

$$\frac{2 \cdot x/2 = x}{(2 \cdot x/2 = x)[x \coloneqq  j+5]}$$

$$\frac{2 \cdot x/2 = x}{2 \cdot (j+5)/2 = j+5}$$

</details>
