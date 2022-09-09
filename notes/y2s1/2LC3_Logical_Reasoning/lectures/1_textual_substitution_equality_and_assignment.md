# introduction: textual substitution equality and assignment

## syntax and notation

syntax of conventional mathematical expressions:

- **constant** - unchanging value (ex. 1, 7456, 3.141592)
- **variable** - symbol representing a value that can change (ex. $x, y, E, \delta$)
- **name** - finite sequence of characters used to identify an object
- **operator** - a symbol representing a process in which a number, quantity, expression, etc., is altered or manipulated according to formal rules. there are 3 types of operations:
    - unary operations (ex. $-5$)
    - binary operations (ex. $1+2, 4\times 6 - 8$)
    - ternary operations (ex. $a ? b : c$)

notation is used to represent these parts of an expression. for example:

- $12$ is used to denote the concept of 12 things (constant)
- $x$ is used to denote the concept of a variable that has an assigned value

notation has tools to denote how an expression should be analyzed. example: **commas** to separate context. or **brackets** to define the order of analysis. The atomic expression $(E)$ denotes that we isolate expression $E$ for analysis no matter what is outside the brackets.

the expression $a \cdot (b + c) = a \cdot b + a \cdot c$ is only true if the definitions of the notation and syntax are defined in a certain way. if $\cdot$ represented a variable instead of multiplication, the expression would be false. We tend to only focus on the meaning of an expression, not the notation/syntax

- **expression** - a collection of notations that together express a quantity (ex. $E, (E), 1+2, (3 + x)^2$)

## evaluation

- **state** - a list of variables with associated values. (ex. in the state consisting of (x,5 and (y,6), variable x is associated with the value 5 and variable y is associated with the value 6)
- **evaluation** - the process of replacing all variables in an expression with their associated values, and evaluating the resulting expression. for example:
    - $x - y + 2$ &emsp; state: {(x, 5), (y, 6)}
    - $5 - 6 + 2$ &emsp; replace variables with values
    - $1$ &emsp; evaluate expression

## conventions of proofs

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

## examples of proofs

<details>
<summary>show/hide examples</summary>

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

<br/> <br/>

**Prove that $2 ∗ (5 ∗ x^2 −2 ∗ x + 6 ∗ x +X^2 −4) = 12 ∗ x^2 + 8(X −1)$**
<br/><br/>
$2 ∗ (5 ∗ x^2 − 2 ∗ x + 6 ∗ x + X^2 − 4)$

= &emsp; < Distributivity of * over + & calculus >

$10 ∗ x^2 − 4 ∗ x + 12 ∗ x + 2 ∗ X^2 − 8$

= &emsp; < Commutativity of + & calculus >

$12 ∗ X^2 + 8 ∗ x − 8$

= &emsp; < Distributivity of * over + >

$12 ∗ X^2 + 8 ∗ (x − 1)$
<br/><br/>
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

## textual substitution and equality

laws:

- **reflexivity** - $x = x$
- **symmetry** - $(x = y) = (y = z)$
- **transitivity** - $\frac{X = Y, Y = Z}{X = Z}$
- **Leibnitz** - $\frac{X = Y}{E[z \coloneqq X] = E[z \coloneqq Y]}$

<details>
<summary>Leibnitz example</summary>

Assume that $b + 3 = c + 5$ is a theorem. Then $d + b + 3  = d + c + 5$ is a theorem by Leibnitz with $X: b+3, Y: c+5, E : d +z$ and $z : z$

</details>

## assignment statement

$x \coloneqq E$ evaluates expression E and stores the result in variable x. reads "x becomes E

execution of an assignment statement changes the state

## preconditions, preconditions and hoare triples

- **precondition** - (of a statement) an assertion about the program variables in a state that a statement may execute in

- **postcondition** - (of a statement) an assertion about the sates in which it may terminate

- **hoare triple** - {precondition} statement {postcondition}
    - also denoted $\lbrace P \rbrace S \lbrace Q \rbrace$
    - example: $\lbrace x = 0 \rbrace x \coloneqq x + 1 \lbrace x > 0 \rbrace$

assignment as a hoare triple: $\lbrace R[x \coloneqq E] \rbrace x \coloneqq E \lbrace R \rbrace$

## multiple assignment

$x_1, x_2, \dots , x_n \coloneqq E_1, E_2, \dots , E_n$ - assign the value of the expressions to the variables, matching the order

note: all expressions are evaluated before any assignment

note: $(x,y \coloneqq x+y,x+y) \ne (x \coloneqq x+y; y \coloneqq x+y)$ 