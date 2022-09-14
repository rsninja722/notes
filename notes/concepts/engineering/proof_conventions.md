# conventions of proofs

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