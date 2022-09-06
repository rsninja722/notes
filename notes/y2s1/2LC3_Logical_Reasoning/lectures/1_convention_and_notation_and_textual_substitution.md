# introduction: textul substitution equality and assignment

calculational proof of $A \cup ( B \cap C) = ( A \cup B) \cap (A \cup C)$

$x \in A \cup (B \cap C)$ 

$\leftrightarrow$ &emsp; < definition of $\cup$ >

$x \in A  \lor x \int B \cap C$

$\leftrightarrow$ &emsp; < definition of $\cap$ >

$(x \in A) \lor (x \in B) \lor (x \in C)$ 

$\leftrightarrow$ &emsp; < distribution of $\lor$ over $\land$ >

$(x \in A \lor x \in B) \land (x \in A \lor x \in C)$

$\leftrightarrow$ &emsp; < Definition of $\cup$, twice >

$x \in (A \cup B) \land x \in (A \cup C)$

$\leftrightarrow$ &emsp; < Definition of $\cap$ >

$x \in (A \cup B) \cap (A \cup C)$

## conventions and notation

**proof convention**:

<pre>
    expression 0
operation 0     < hint 0 >
    expression 1
operation 1     < hint 1 >
    expression 2
operation 2     < hint 2 >

...

expression n
</pre>

where operation i is relational operator such as $=, \le, \ge, \leq, \geq, \sqsubseteq, \sqsupseteq$, as well as logical operators like $\leftarrow, \leftrightarrow$

### examples of proofs

<details>
<summary>show/hide examples</summary>

**Prove that $2 ∗ (5 ∗ x^2 −2 ∗ x + 6 ∗ x +X^2 −4) = 12 ∗ x^2 + 8(X −1)$**
<br/><br/>
$2 ∗ (5 ∗ x^2 − 2 ∗ x + 6 ∗ x + X^2 − 4)$

= &emsp; < Distributivity of * over + & calculus >

$10 ∗ x^2 − 4 ∗ x + 12 ∗ x + 2 ∗ X^2 − 8$

= &emsp; < Commutativity of + & calculus >

$12 ∗ X^2 + 8 ∗ x − 8$

= &emsp; < Distributivity of * over + >

$12 ∗ X^2 + 8 ∗ (x − 1)$
<br/>
**find x**
<br/><br/>
$3x + 3 = 0$

$\leftrightarrow$ &emsp; < Add −3 in the two sides of the equation & 3 − 3 = 0 & 0 is the neutral element for + > 

$3x = −3$

$\leftrightarrow$ &emsp; < $3 \ne 0$ & divide by 3 the two sides of the equation & $\frac{3}{3}$ = 1 >
$x = −1$

When appropriate, we adopt this calculational way to present
proofs.

</details>

### syntax

syntax of conventional mathmatical expressionsions:

- **constant** - unchanging value (ex. 1, 7456, 3.141592)
- **variable** - symbol representing a value that can change (ex. $x, y, E, \delta$)
- **operator** - a symbol representing a process in which a number, quantity, expression, etc., is altered or manipulated according to formal rules, such as those of addition, multiplication, and differentiation (ex. $+, \times, -$)

- **expression** - a collection of symbols that jointly express a quantity (ex. $E, (E), 1+2, (3 + x)^2$)
    - expressions can contain operators including unary prefix operators (ex. $-5$) and binary infix operators (ex. $1+2, 4\times 6 - 8$)
    - expressions can also include brackets to specify order of operations so both 1 + 2 and (1 + 2) are expressions

### evaluation

- **state** - a list of variables with associated values. (ex. in the state consisting of (x,5 and (y,6), variable x is associated with the value 5 and variable y is associated with the value 6)
- **evaluation** - the proccess of replacing all variables in an expression with their associated values, and evaluating the resulting expression. for example:
    - $x - y + 2$ &emsp; state: {(x, 5), (y, 6)}
    - $5 - 6 + 2$ &emsp; replace variables with values
    - $1$ &emsp; evaluaate expression

### textual substitution

- **textual substitution** - the act of replaccing all occurances of one expression with another

the notation $E[x := R]$ or $E_{R}^{x}$ donates an expression that is the same as E, but with all $x$'s replaced by $R$. (E and R are expressions, x is a variable)

example:

Expression | Result | Unnecessary parentheses removed
---|---|---
x | x | x
$x[x := z + 2]$ | (z + 2) | z+2
$(x+y)[x:=z+2]$ | ((z+2)+y) | z+2+y
$(x·y)[x := z + 2]$ | ((z+2)·y) | (z+2)·y 





