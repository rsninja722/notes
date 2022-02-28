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
$$\rightarrow$$ | 5
$$\leftrightarrow$$ | 6

## definitions

- **proposition** - a declarative sentence that is either true or false
- **consistent** - a list of propositions is consistent if it is possible to assign truth values to the proposition variables so that each proposition is true
- **tautology** - a proposition which is always true ex. $$ a \lor \lnot b $$
- **contradiction** - a proposition which is always false ex. $$ a \land \lnot b $$
- **contingency** - a proposition which is neither a tautology nor a contradiction, such as $$ a $$
- **logical equivalence** - two compound propositions a and b are logically equivalent if $$ a \leftrightarrow b $$ is a tautology. write as $$ a \iff b $$ or $$ a \equiv b $$, their truth tables have to have the same value
- **connectives** logical operators

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

## converse, contrapositive, and inverse

from $$ a \rightarrow b $$ we can form new conditional statements
- $$ b \rightarrow a $$ is the converse
- $$ \lnot b \rightarrow \lnot a $$  is the contrapositive
- $$ \lnot a \rightarrow \lnot b $$  is the inverse

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

## logical equivalences involving conditional statements
- $$p \rightarrow q \equiv \lnot p \lor q$$
- $$p \rightarrow q \equiv \lnot q \rightarrow \lnot p$$
- $$p \lor q \equiv \lnot p \lor q$$
- $$p \land q \equiv \lnot (p \rightarrow \lnot q)$$
- $$\lnot (p \rightarrow q) \equiv p \land \lnot q$$
- $$(p \rightarrow q) \land (p \rightarrow r) \equiv p \rightarrow (q \land r)$$
- $$(p \rightarrow r) \land (q \rightarrow r) \equiv (p \lor q) \rightarrow r)$$
- $$(p \rightarrow q) \lor (p \rightarrow r) \equiv p \rightarrow (q \lor r)$$
- $$(p \rightarrow r) \lor (q \rightarrow r) \equiv (p \land q) \rightarrow r$$

## logical equivalences involving biconditional statements
- $$p \leftrightarrow q \equiv (p \rightarrow q) \land (q \rightarrow p)$$
- $$p \leftrightarrow q \equiv \lnot p \leftrightarrow \lnot q$$
- $$p \leftrightarrow q \equiv (p \land q) \lor (\lnot p \land \lnot q)$$
- $$\lnot (p \leftrightarrow q) \equiv p \leftrightarrow \lnot q$$


## constructing new logical equivalences

we can show that two expressions are logically equivalent by developing a series of logically equivalent statements.

To prove that $$A \equiv B$$ we produce a series of equivalences beginning with A and ending with B

$$A \equiv A_1$$

$$\ \ \vdots$$

$$A_n \equiv B$$

### equivalence proof example
show that $$\lnot (p \lor (\lnot p \land q ))$$ is logically equivalent to $$ \lnot p \land \lnot q$$

solution:
$$\lnot (p \lor (\lnot p \land q )) \equiv$$

[]() | []()
:--- | :---
$$\equiv \lnot p \land \lnot (\lnot p \land q)$$ | by the second de morgan law
$$\equiv \lnot p \land [\lnot (\lnot p) \lor q]$$ | by the first de morgan law
$$\equiv \lnot p \land (p \lor \lnot q)$$ | by the double negation law
$$\equiv (\lnot p \land p) \lor (\lnot p \land \lnot q)$$ | by the second distribution law
$$\equiv F \lor (\lnot p \land \lnot q)$$ | because $$(\lnot p \land p) \equiv F$$
$$\equiv (\lnot p \land \lnot q) \lor F$$ | by the commutative law for disjunction
$$\equiv (\lnot p \land \lnot q) $$ | by the identity law for $$F$$

# Predicate Logic

## definitions

- **variables** - x,y,z
- **predicates** - P(x), M(x)
- **propositional functions** - generalizations of propositions. contain variables and a predicate. variables can be replaced by elements from their domain
    - example: let "x + y = z" be donated by R(x,y,z). R(2,-1,5) is false, R(3,4,7) is true
- **compound expressions** - connectives from propositional logic can be used together wit propositional logic $$P(x) \land P(y)$$
- **quantifiers** - symbols to express meaning of english words/statements / used with propositional functions that contain variables to produce an expression
    - **universal quantifier** - $$\forall$$ (\forall) - for all / for every ex. $$\forall x P(x)$$ asserts P(x) is true for *every* x in the domain
    - **existential quantifier** - $$\exists$$ (\exists) - there exists ex. $$\exists x P(x)$$ asserts P(x) is true for *some* x in the domain
    - **uniqueness quantifier** - $$\exists !xP(x)$$ - P(x) is true for one and only one x/ there is a unique x such that P(x) / can be expressed as $$ \exists x (P(x) \land \forall y (P(y) \rightarrow y=x))$$

## equivalence in predicate logic
statements involving predicates and quantifiers are logically equivalent if and only if they have the same truth value 
- for every predicate substituted into these statements and 
- for every domain of discourse used for the variables in the expressions. 

## Negating quantified Expressions
Symbolically  $$\lnot \forall x P(x)$$ and $$\exists x \lnot P(x) are equivalent

Symbolically  $$\lnot \exists x P(x)$$ and $$\forall x \lnot P(x) are equivalent

## Nested quantifiers
Nested quantifiers are often necessary to express the meaning of sentences in English as well as important concepts in computer science and mathematics. 
Example: “Every real number has an inverse” is   

$$\forall x \exists y (x + y = 0)$$

where the domains of x and y are the real numbers.

We can also think of nested propositional functions:
$$\forall x \exists y (x + y = 0)$$ can be viewed as $$\forall x Q(x)$$ where Q(x) is $$\exists y P(x,y)$$ where P(x,y) is (x + y = 0)

### nested loops
to see if $$\forall x \forall y P (x,y)$$ is true, loop through all values of y, in inner loop go through all values of x

if the domain of the variables are infinite, this process can not be carried out

## order of quantifiers
order matters sometimes

example:
 let $$ P(x,y)$$ be the statement $$x + y = y + x$$. Assume that U is the real numbers. Then  $$\forall x \forall y P (x,y)$$ and  $$\forall y \forall x P (x,y)$$ have the same truth value

let $$ Q(x,y)$$ be the statement $x + y = o$$. Then $$\forall x \exists y Q (x,y)$$ is true, $$\exists y \forall x Q (x,y)$$ is false

example:
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

## negating nested quantifiers
$$\lnot \exists x \forall y P(x,y)$$

$$\equiv \forall x \lnot \forall y P(x,y)$$

$$\equiv \forall x \exists y \lnot P(x,y)$$

# Arguments and Rules of Inference

## definitions
- **argument** - sequence of propositions
- **premise** - step in an argument
- **conclusion** - last statement in an argument

## valid arguments

We will show how to construct valid arguments in two stages; first for propositional logic and then for predicate logic. The rules of inference are the essential building block in the construction of valid arguments. 
- Propositional Logic
    - Inference Rules
- Predicate Logic
    - Inference rules for propositional logic plus additional inference rules to handle variables and quantifiers.

A valid argument takes the following form:
S1
S2
.
.
.
Sn

$$\therefore$$ C 

## rules of inference

### Modus Ponens

![img](./notes/y1s2/1DM3_math_for_cs/Capture0.PNG)

Example:
Let p be “It is snowing.”
Let q be “I will study discrete math.”

“If it is snowing,  then I will study discrete math.”
“It is snowing.”

“Therefore , I will  study discrete math.”

### Modus Tollens

![img](./notes/y1s2/1DM3_math_for_cs/Capture.PNG)

Example:
Let p be “it is snowing.”
Let q be “I will study discrete math.”

“If it is snowing,  then I will study discrete math.”
“I will not study discrete math.”

“Therefore , it is not snowing.”

### Hypothetical Syllogism

![img](./notes/y1s2/1DM3_math_for_cs/Capture2.PNG)

Example:
Let p be “it snows.”
Let q be “I will study discrete math.”
Let r be “I will get an A.”

“If it snows,  then I will study discrete math.”
“If I study discrete math, I will get an A.”

“Therefore , If it snows, I will get an A.”

### Disjunctive Syllogism

![img](./notes/y1s2/1DM3_math_for_cs/Capture3.PNG)

Example:
Let p be “I will study discrete math.”
Let q be “I will study English literature.”

“I will study discrete math or I will study English literature.”
“I will not study discrete math.”

“Therefore , I will study English literature.”

### Addition

![img](./notes/y1s2/1DM3_math_for_cs/Capture4.PNG)

Example:
Let p be “I will study discrete math.”
Let q be “I will visit Las Vegas.”

“I will study discrete math.”

“Therefore, I will  study discrete math or I will visit 
Las Vegas.”

### Simplification

![img](./notes/y1s2/1DM3_math_for_cs/Capture5.PNG)

Example:
Let p be “I will study discrete math.”
Let q be “I will study English literature.”

“I will study discrete math and English literature”

“Therefore, I will study discrete math.”

### Conjunction

![img](./notes/y1s2/1DM3_math_for_cs/Capture6.PNG)

Example:
Let p be “I will study discrete math.”
Let q be “I will study English literature.”

“I will study discrete math.”
“I will study  English literature.”

“Therefore, I will study discrete math and I will study English literature.”

### Resolution

![img](./notes/y1s2/1DM3_math_for_cs/Capture7.PNG)

Example:
Let p be “I will study discrete math.”
Let r be “I will study English literature.”
Let q be “I will study databases.”

“I will not study discrete math or I will study English literature.”
“I will study  discrete math or I will study databases.”

“Therefore, I will study databases or I will study English literature.”

## rules of inference for quantified statements

### Universal Instantiation (UI)

![img](./notes/y1s2/1DM3_math_for_cs/Capture8.PNG)

Example:

Our domain consists of all dogs and Fido is a dog.

“All dogs are cuddly.”

“Therefore,  Fido is cuddly.”

### Universal Generalization (UG)

![img](./notes/y1s2/1DM3_math_for_cs/Capture9.PNG)

Used often implicitly in Mathematical Proofs. 

### Existential Instantiation (EI)

![img](./notes/y1s2/1DM3_math_for_cs/Capture10.PNG)

Example:

“There is someone who got an A in the course.”
“Let’s call her a and say that a got an A”

### Existential Generalization (EG)

![img](./notes/y1s2/1DM3_math_for_cs/Capture11.PNG)

Example:

“Michelle got an A in the class.”
“Therefore,  someone got an A in the class.”

### Universal Modus Ponens

Universal Modus Ponens combines universal instantiation and modus ponens into one rule. 

![img](./notes/y1s2/1DM3_math_for_cs/Capture12.PNG)

# Proofs

## proof of mathematical statements

A proof is a valid argument that establishes the truth of a statement 
In math, CS, and other disciplines, informal proofs which are generally shorter are generally used

## definitions

- **theorem** - a statement that can be shown to be true using
    - definitions
    - other theorems
    - axioms (statements which are given as true) 
    - rules of inference
- **lemma** - a "helping theorem" or a result which is needed to prove a theorem.
- **corollary** - a result which follows directly from a theorem
- **conjecture** - a statement that is being proposed to be true. Once a proof of a conjecture is found, it becomes a theorem. It may turn out to be false

## proving theorems
- Many theorems have the form: $$\forall (P(x) \rightarrow Q(x))$$
- To prove them, we show that where c is an arbitrary element of the domain, $$P(c) \rightarrow Q(c)$$
- By universal generalization the truth of the original formula follows.
- So, we must prove something of the form:  $$p \rightarrow q$$

## even and odd integers
Definition:  The integer n is even if there exists an integer k such that n = 2k, and n is odd if there exists an integer k, such that n = 2k + 1. Note that every integer is either even or odd and no integer is both even and odd.

## proving conditional statements: $$p \rightarrow q$$

- **trivial proof** - if we know q is true then then $$p \rightarrow q$$ is true as well
- **vacuous proof** - if we know p is false then $$p \rightarrow q$$ is true as well.
- **direct proof** - assume that p is true. use the rules of inference, axioms, and logical equivalence to show that q must also be true
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


## strategy
- Choose a method.
    - First try a direct method of proof.  
    - If this does not work, try an indirect method (e.g., try to prove the contrapositive).
- For whichever method you are trying, choose a strategy.
    - First try forward reasoning.  Start with the axioms and known theorems and construct a sequence of steps that end in the conclusion.  Start with p and prove q, or start with ¬q and prove ¬p.
    - If this doesn’t work, try backward reasoning. When trying to prove q,  find a statement p that we can prove with the  property p → q.

## Universally Quantified Assertions

![img](./notes/y1s2/1DM3_math_for_cs/Capture13.PNG)
![img](./notes/y1s2/1DM3_math_for_cs/Capture14.PNG)
![img](./notes/y1s2/1DM3_math_for_cs/Capture15.PNG)
