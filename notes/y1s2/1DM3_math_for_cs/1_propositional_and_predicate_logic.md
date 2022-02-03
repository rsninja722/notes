# Propositional Logic and Predicate Logic

# Propositional Logic

order of precedence

symbol  |  order
:---: | :---:
$$()$$ | 0
$$\forall, \exists$$ | 1
$$\lnot$$ | 2
$$\land$$ | 3
$$\lor$$ | 4
$$\implies$$ | 5
$$\leftrightarrow$$ | 6

## definitions

- **proposition** - a declarative sentence that is either true or false
- **consistent** - a list of propositions is consistent if it is possible to assign truth values to the proposition variables so that each proposition is true
- **tautology** - a proposition which is always true ex. $$ a \lor \lnot b $$
- **contradiction** - a proposition which is always false ex. $$ a \land \lnot b $$
- **contingency** - a proposition which is neither a tautology nor a contradiction, such as $$ a $$
- **logical equivalence** - two compound propositions a and b are logically equivalent if $$ a \leftrightarrow b $$ is a tautology. write as $$ a \iff b $$ or $$ a \equiv b $$, their truth tables have to have the same value

### negation / $$\lnot$$

<details>
<summary>truth table</summary>

$$a$$ | $$\neg a$$ |
:-: | :-: |
T | F |
F | T |
</details>


### conjunction / and / $$\land$$
<details>
<summary>truth table</summary>

$$a$$ | $$b$$ | $$a \land b$$ |
:-: | :-: | :-: |
T | T | T |
T | F | F |
F | T | F |
F | F | F |
</details>

### disjunction / or / $$\lor$$
<details>
<summary>truth table</summary>

$$a$$ | $$b$$ | $$a \lor b$$ |
:-: | :-: | :-: |
T | T | T |
T | F | T |
F | T | T |
F | F | F |
</details>

### exclusive disjunction / xor / $$\oplus$$
<details>
<summary>truth table</summary>

$$a$$ | $$b$$ | $$a \oplus b$$ |
:-: | :-: | :-: |
T | T | F |
T | F | T |
F | T | T |
F | F | F |
</details>

### implication / $$\rightarrow$$

can be written as 
- if A then B
- if A, B
- B unless ¬A
- B if A
- B whenever A
- B follows from A
- A implies B
- A only if B
- B when A
- A is sufficient for B 
- B is necessary for A 
- a necessary condition for A is B
- B is a necessary condition for A 
- a sufficient condition for B is A
- A is a sufficient condition for B 

<details>
<summary>truth table</summary>

$$a$$ | $$b$$ | $$a \rightarrow b$$ |
:-: | :-: | :-: |
T | T | T |
T | F | F |
F | T | T |
F | F | T |
</details>

### biconditional / $$\leftrightarrow$$ / $$\equiv$$

- if and only if
- a is necessary and sufficient for b
- if a then b, and conversely
- a iff b

<details>
<summary>truth table</summary>

$$a$$ | $$b$$ | $$a \leftrightarrow b$$ |
:-: | :-: | :-: |
T | T | T |
T | F | F |
F | T | F |
F | F | T |
</details>

## De Morgan's Laws

$$ \lnot (p \land q) \equiv \lnot p \lor \lnot q $$, and $$ \lnot (p \lor q) \equiv \lnot p \land \lnot q $$

$$\lnot \forall x P(x) \equiv \exist x \lnot P(x)$$

$$\lnot \exist x P(x) \equiv \forall x \lnot P(x)$$ 

## Key Logical Equivalences
- **Identity Laws** - $$p\land T\equiv p$$, and $$p\lor F\equiv p$$
- **Domination Laws** - $$p\lor T\equiv T$$, and $$p\land F\equiv F$$
- **Idempotent Laws** - $$p\lor p\equiv p$$, and $$p\land p\equiv p$$
- **Double Negation Law** - $$\neg (\neg p)\equiv p$$
- **Negation Laws** - $$p\lor \neg p\equiv T$$, and $$p\land \neg p\equiv F$$
- **Commutative Laws** - $$p\lor q\equiv q\lor p$$, and $$p\land q\equiv q\land p$$
- **Associative Laws** - $$(p\land q)\land r\equiv p\land (q\land r)$$, and $$(p\lor q)\lor r\equiv p\lor (q\lor r)$$
- **Distributive Laws** - $$(p\lor(q\land r))\equiv(p\lor q)\land (p\lor r)$$, and $$(p\land(q\lor r))\equiv(p\land q)\lor (p\land r)$$
- **Absorption Laws** - $$p\lor(p\land q)\equiv p$$, and $$p\land(p\lor q)\equiv p$$

## equivalence proofs

![proof](./media/1_propositional_logic_1.png)

## converse, contrapositive, and inverse

from $$ a \rightarrow b $$ we can form new conditional statements
- $$ b \rightarrow a $$ is the converse
- $$ \lnot b \rightarrow \lnot a $$  is the contrapositive
- $$ \lnot a \rightarrow \lnot b $$  is the inverse

# Predicate Logic

- **variables** - x,y,z
- **Predicates** - P(x), M(x)
- **Quantifiers** - symbols to express meaning of english words/statements
    - **universal quantifier** $$\forall$$ (\forall) - for all / for every ex. $$\forall x P(x)$$ asserts P(x) is true for *every* x in the domain
    - **existential quantifier** $$\exists$$ (\exists) - there exists ex. $$\exists x P(x)$$ asserts P(x) is true for *some* x in the domain
- **propositional functions** - generalizations of propositions. contain variables and a predicate. variables can be replaced by elements from their domain
    - example: let "x + y = z" be donated by R(x,y,z). R(2,-1,5) is false, R(3,4,7) is true
- **compound expressions** - $$P(x) \land P(y)$$


## Nested quantifiers

every real number has an inverse:
$$\forall x \exists y (x + y = 0)$$

### nested loops
to see if $$\forall x \forall y P (x,y)$$ is true, loop through all values of y, in inner loop go through all values of x

if the domain of the variables are infinite, this process can not be carried out

## order of quantifiers
example
 let $$ P(x,y)$$ be the statement $$x + y = y + x$$. Assume that U is the real numbers. Then  $$\forall x \forall y P (x,y)$$ and  $$\forall y \forall x P (x,y)$$ have the same truth value

`TODO: fix`
let $$ Q(x,y)$$ be the statement $x + y = o$$. Then $$\forall x \exists y Q (x,y)$$ is true, $$\exists y \forall x Q (x,y)$$ is true

let U be the real numbers
Define $$P(x,y): x \cdot y = 0$$
- $$\forall x \forall y P (x,y)$$ = False
- $$\forall x \exists y P (x,y)$$ = True
- $$\exists x \forall y P (x,y)$$ = True
- $$\exists x \exists y P (x,y)$$ = True

Define $$P(x,y): \frac{x}{y} = 1$$
- $$\forall x \forall y P (x,y)$$ = False
- $$\forall x \exists y P (x,y)$$ = False x = 0
- $$\exists x \forall y P (x,y)$$ = False y != 0
- $$\exists x \exists y P (x,y)$$ = True

english
- $$\forall x \forall y P (x,y)$$ 
- $$\forall x \forall y P (x,y)$$ P(x,y) is true for every pair x,y

- $$\exists x \forall y P (x,y)$$ For every x there is a y for which P(x,y) is true
- $$\forall x \exists y P (x,y)$$ There is an x for which P(x,y) is true for every y

- $$\exists x \exists y P (x,y)$$ 
- $$\exists y \exists x P (x,y)$$ There is a pair x,y for which P(x,y) is true

# Proofs

## rules of interference

$$\exists x (C(x) \land \lnot B(x)$$ Premise
$$C(a) \land \lnot B(a)$$ E1 from (1) $$\frac{\exists x P(x)}{\therefore P(x) for some element c}$$
$$C(a)$$ simplification from (2) $$\frac{p \land q}{\therefore q}$$

## proof of mathematical statements

A proof is a valid argument that establishes the truth of a statement 
In math, CS, and other disciplines, informal proofs which are generally shorter are generally used

- theorem
- lemma
- corollary
- conjecture

## proving conditional statements: $$p \rightarrow q$$

- **trivial proof** - if we know q is true then then $$p \rightarrow q$$ is true as well
- **vacuous proof** - if we know p is false then $$p \rightarrow q$$ is true as well.
- **direct proof** - assume that p is true. use the rules of interference, axioms, and logical equivalence to show that q must also be true
- **proof by contraposition** - assume $$\lnot q$$ and show $$\lnot p$$ is true also. this is sometimes called an *indirect proof* method. if we give a direct proof of  $$ \lnot q \rightarrow \lnot p$$ then we have a proof of $$p \rightarrow q$$

## theorems that are biconditional statements 
to prove a theorem is a biconditional statement, that is, a statement in the form $$p \leftrightarrow q$$ we show that both $$p \rightarrow q$$ and $$q \rightarrow p$$ are both true

## proof by cases
to prove a conditional statement of the following form
$$(p_1 \lor p_2 \lor ... \lor p_n) \rightarrow q$$

use the tautology 

$$[(p_1 \lor p_2 \lor ... \lor p_n) \rightarrow q] \leftrightarrow [(p_1 \rightarrow q) \land (p_2 \rightarrow q) \land ... \land (p_n \rightarrow q)]$$

a complete proof must be shown for each case

## existence proof
proof of theorems of the form $$\exists xP(x)$$

constructive existence proof:
- find and explicit value of $$c$$ for which $$P(c)$$ is true
- then $$\exists xP(x)$$ is true by Existential Generalization (EG)

## nonconstructive existence proof
in a nonconstructive proof, we assume no $$c$$ exists which makes $$P(c)$$ true and derive a contradiction

example show that there exist irrational numbers x and y such that $$x^y$$ is rational.

$$\exists x \exists y \frac{}{}$$ `TODO fix

## counter example
recall that $$ \exist x \lnot P(x) \equiv \lnot \forall x P(x)$$

to establish that $$ \lnot \forall x P(x) $$ is true (or $$ \forall x P(x) $$ is false ) find a c such that $$\lnot P(c)$$ is true (or $$P(c)$$ is false)

in this case c is called a counterexample to the assertion $$\forall x P(x) $$  

## uniqueness proofs
some theorems assert the existence of a unique element with a particular property $$\exists !x \ P(x)$$ the two parts if a uniqueness proof are

- existence - we show that an element x with the property exists
- uniqueness - we show that if $$y \not= x$$ then y does not have the property 