# propositional calculus

propositional calculus uses [boolean operators](?note=notes/concepts/engineering/boolean_logic_and_logic_gates.md) <!-- [](/notes/concepts/engineering/boolean_logic_and_logic_gates.md) -->

- **calculus** - method of reasoning by calculation with symbols 
- **propositional calculus** - method of calculating with boolean expressions that involve propositional variables
    - aka **equational logic $E$** 
    - consists of **axioms** - boolean expressions that define basic manipulative properties
        - example: axiom for $\lor$: $p \lor q \equiv q \lor p$ - this indicates $\lor$ is symmetric
    - also consists of three inference rules
        - **Leibnitz** - $\frac{X \equiv Y}{E[z \coloneqq X] \equiv E[z \coloneqq Y]}$
        - **transitivity** - $\frac{X = Y, Y = Z}{X = Z}$
        - **substitution** -  $\frac{E}{E[v \coloneqq  F]}$

- **theorem** (of propositional calculus) is either:
    1. an axiom
    2. the conclusion of an interference rule whose premises are theorems
    3. a boolean expression using the interferences rules that is proved equal to an axiom or a previously proved theorem

the goal is to define theorems and build more on top of previously defined theorems

## $\equiv$

number | name | definition | description
---|---|---|---
3.1 | Axiom, Associativity of $\equiv$  | $((p \equiv  q) \equiv  r) \equiv  (p \equiv  (q \equiv  r))$ | $\equiv$ is associative
3.2 | Axiom, Symmetry of $\equiv$ | $p \equiv  q \equiv  q \equiv  p$ |
3.3 | Axiom, Identity of $\equiv$ | $true \equiv  q \equiv  q$ |
3.4 | theorem | $true$ |
3.5 | theorem, Reflexivity of $\equiv$ | $p \equiv p$ |
3.7 | Metatheorem. Any two theorems are equivalent. |


## $\lnot$, $\not\equiv$

number | name | definition | description
---|---|---|---
3.8 | Axiom, Definition of $false$ | $false \equiv  \lnot true$ |
3.9 | Axiom, Distributivity of $\lnot$ over $\equiv$ | $\lnot (p \equiv  q) \equiv \lnot p \equiv q$ |
3.10 | Axiom, Definition of $\not\equiv$ | $(p \not\equiv q)\equiv \lnot (p \equiv q)$ |
3.11 | | $\lnot p \equiv q \equiv p \equiv \lnot p$ |
3.12 | Double negation | $\lnot \lnot p \equiv p$ |
3.13 | Negation of false | $\lnot false \equiv true$ |
3.14 | | $(p \not\equiv q) \equiv \lnot p \equiv q$ |
3.15 | | $\lnot p \equiv  p \equiv false$ |
3.16 | Symmetry of $\not\equiv$ | $(p \not\equiv  q) \equiv  (q \not\equiv  p)$ |
3.17 | Associativity of $\not\equiv$ | $(p \not\equiv q)\not\equiv r) \equiv  (p\not\equiv (q\not\equiv r))$ |
3.18 | Mutual associativity | $((p \not\equiv  q) \equiv  r) \equiv  (p \equiv j. (q \equiv  r))$ |
3.19 | Mutual interchangeability| $p \not\equiv q \equiv r \equiv p \equiv q \not\equiv r$ |
3.20 | | $P0 \equiv P1 \equiv \dots \equiv Pn$ |


## $\lor$

number | name | definition | description
---|---|---|---
3.24 | Axiom, Symmetry of $\lor$| $p \lor q \equiv  q \lor p$ |
3.25 | Axiom, Associativity of $\lor$| $(p \lor q) \lor r \equiv  p \lor (q \lor r)$ |
3.26 | Axiom, ldempotency of $\lor$ | $p \lor p \equiv  p$ |
3.27 | Axiom, Distributivity of $\lor$ over $\equiv$  | $p \lor (q \equiv  r) \equiv p \lor q \equiv p \lor r$ |
3.28 | Axiom, Excluded Middle| $p \lor \lnot P$ |
3.29 | Zero of $\lor$| $p \lor true \equiv true$ |
3.30 | Identity of $\lor$| $p \lor false \equiv p$ |
3.31 | Distributivity of $\lor$ over $\lor$| $p \lor (q \lor r) \equiv (p \lor q) \lor (p \lor r)$ |
3.32 | | $p \lor q \equiv  p \lor \lnot q \equiv  p$ |


## $\land$

number | name | definition | description
---|---|---|---
3.35 | Axiom, Golden rule | $p \land  q \equiv  p \equiv  q \equiv  p \lor q$ |
3.36 | Symmetry of $\land$ | $p \land  q \equiv  q \land  p$ |
3.37 | Associativity of $\land$ | $(p \land  q) \land r \equiv  p \land  (q \land r)$ |
3.38 | ldempotency of $\land$ | $p \land p \equiv  p$ |
3.39 | Identity of $\land$ | $p \land  true \equiv  p$ |
3.40 | Zero of $\land$ | $p \land  false \equiv  false$ |
3.41 | Distributivity of $\land$ over $\land$ | $p \land  (q \land  r) \equiv  (p \land  q) \land  (p \land  r)$ |
3.42 | Contradiction| $p \land \lnot p \equiv  false$ |

### $\land$ and $\lor$

number | name | definition | description
---|---|---|---
3.43 | Absorption| **(a)** $p \land  (p\lor q) \equiv p$ <br> **(b)** $p\lor (p \land  q) \equiv p$ |
3.44 | Absorption | **(a)** $p \land  (\lnot p\lor q) \equiv  p \land  q$ <br> **(b)** $p\lor (\lnot P \land  q) \equiv  p\lor q$ |
3.45 | Distributivity of $\lor$ over $\land$  | $p\lor (q \land r) \equiv  (p\lor q) \land  (p\lor r)$ |
3.46 | Distributivity of $\land$  over $\lor$ | $p \land  (q\lor r) \equiv  (p \land  q)\lor (p \land  r)$ |
3.47 | De Morgan| **(a)** $\lnot (p \land q) \equiv \lnot P\lor \lnot q$ <br> **(b)** $\lnot (p\lor q) \equiv \lnot p \land \lnot q$ |

### $\land$ and $\equiv$

number | name | definition | description
---|---|---|---
3.48 | | $p \land  q \equiv  p \land  \lnot q \equiv  \lnot p$ |
3.49 | | $p \land  (q \equiv  r) \equiv  p \land  q \equiv  p \land  r \equiv p$ |
3.50 | | $p \land (q \equiv p) \equiv  p \land q$ |
3.51 | Replacement| $(p \equiv  q) \land  (r \equiv  p) \equiv  (p \equiv  q) \land  (r \equiv  q)$ |

## alternate definition of $\equiv$ and $\not\equiv$

number | name | definition | description
---|---|---|---
3.52 | Definition of $\equiv$ | $p \equiv  q \equiv  (p \land  q)\lor (\lnot p \land  \lnot q)$ |
3.53 | Exclusive or | $p \not\equiv q \equiv  ( \lnot p \land  q)\lor (p \land  \lnot q)$ |

## structuring proofs using lemmas

number | name | definition | description
---|---|---|---
3.55 || $(p \land  q) \land  r \equiv p \equiv  q \equiv  r \equiv p\lor q \equiv q\lor r \equiv  r\lor p \equiv p\lor q\lor r$ |

## $\implies$ and $\impliedby$

number | name | definition | description
---|---|---|---
3.57 | Axiom, Definition of Implication| $p \implies q \equiv p\lor q \equiv q$ |
3.58 | Axiom, Consequence| $p \impliedby q \equiv q \implies p$ |
3.59 | Definition of implication | $p \implies q \equiv p \lor \neg q$  |
3.60 | Definition of implication | $p \implies q \equiv p \land q \equiv p$ |
3.61 | Contrapositive | $p\implies q  \equiv \neg q \implies \neg p$ |
3.62 | | $p \implies (q \equiv r) \equiv p \land q \equiv p \land r$ |
3.63 | Distributivity of  $\implies$ over $\equiv$| $p \implies (q \equiv r) \equiv p \implies q \equiv p \implies r$ |
3.64 | | $p \implies (q \rightarrow r) \equiv (p \implies q) \implies (p \implies r)$ |
3.65 | Shunting | $p \land q \implies r \equiv p \implies (q \implies r)$ |
3.66 | | $p \land (p \implies q) \equiv p \land q$ |
3.67 | | $p \land (q \implies p) \equiv p$ |
3.68 | | $p \lor (p \implies q) \equiv true$ |
3.69 | | $p \lor (q \implies p) \equiv q \implies p$  |
3.70 | | $p \lor q \implies p \land q \equiv p \equiv q$  |
3.71 | Reflexivity $\implies$ | $p \implies p \equiv true$  |
3.72 | Right zero of $\implies$ | $p \implies true \equiv true$  |
3.73 | Left identity of $\implies$ | $true \implies p \equiv p$ |
3.74 | | $p \implies false \equiv \neg p$ |
3.75 | | $false \implies p \equiv true$ |
3.76 | Weakening/strengthening| **(a)** $ \implies p \lor q$ <br> **(b)** $p \land q \implies p$ <br> **(c)** $p \land q \implies p \lor q$ <br> **(d)** $p \lor (q \land r) \implies p \lor q$ <br> **(e)** $p \land q \implies p \land (q \lor r)$ |
3.77 | Modus ponens | $p \land (p \implies q) \implies q$ |
3.78 | | $(p \implies r) \land (q \implies r) \equiv (p \lor q \implies r)$ |
3.79 | | $(p \implies r) \land (\neg p \implies r) \equiv r$  |
3.80 | Mutual implication| $(p \implies q) \land (q\implies p) \equiv (p \equiv q)$ |
3.81 | Antisymmetry| $(p \implies q) \land (q \implies p) \implies (p \equiv q)$  |
3.82 | Transitivity | **(a)** $(p \implies q) \land (q \implies r) \implies (p \implies r)$ <br> **(b)** $(p \equiv q) \land (q \implies r) \implies (p \implies r)$ <br> **(c)** $(p \implies q) \land (q \equiv r) \implies (p \implies r)$ |


## Leibniz as an Axiom

number | name | definition | description
---|---|---|---
3.83 | Axiom, Leibniz | $(e = f) \implies (E^{z}_e = E^{z}_f)$ |

## Replacing variables by boolean constants

number | name | definition | description
---|---|---|---
3.84 | Substitution | **(a)** $(e = f) \land E^{z}_e \equiv (e = f)  \land E^{z}_f$ <br> **(b)** $(e = f) \implies E^{z}_e \equiv (e = f)  \implies E^{z}_f$ <br> **(c)** $q \land (e = f) \implies E^{z}_e \equiv q \land (e = f)  \implies E^{z}_f$ |
3.85 | Replace by $true$ | **(a)** $p \implies E_{p}^{z} \equiv p \implies E_{true}^{z}$ <br> **(b)** $q \land p \implies E_p^{z} \equiv q \land p \implies E_{true}^{z}$  |
3.86 | Replace by $false$ | **(a)** $E_p^{z} \implies p \equiv E_{false}^{z} \implies p$ <br> **(b)** $E_p^{z} \implies p \lor q \equiv E_{false}^{z} \implies p \lor q$ |
3.87 | Replace by $true$ | $p \land E_p^{z} \equiv p \land E_{true}^{z}$  |
3.88 | Replace by $false$ | $p \lor E_p^{z} \equiv p \lor E_{false}^{z}$ |
3.89 | Shannon| $E_p^{z} \equiv (p \land E_{true}^{z}) \lor (\neg p \land E_{false}^{z})$ |

## proofs

number | type | definition | description
---|---|---|---
3.6 | Proof method | To prove that $P \equiv Q$ is a theorem, transform P to Q or Q to P using Leibniz. |
3.21 | Heuristic | Identify applicable theorems by matching the structure of expressions or subexpressions. The operators that appear in a boolean expression and the shape of its subexpressions can focus the choice of theorems to be used in manipulating it. |
3.22 | Principle| Structure proofs to avoid repeating the same subexpression on many lines. |
3.23 | Heuristic of Definition Elimination| To prove a theorem concerning an operator o that is defined in terms of another, say * , expand the definition of o to arrive at a formula that contains * ; exploit properties of * to manipulate the formula; and then (possibly) reintroduce o using its definition. |
3.33 | Heuristic| To prove P = Q, transform the expression with the most structure (either P or Q ) into the other. |
3.34 | Principle| Structure proofs to minimize the number of rabbits pulled out of a hat -make each step seem obvious, based on the structure of the expression and the goal of the manipulation. |
3.54 | Principle| Lemmas can provide structure, bring to light interesting facts, and ultimately shorten a proof. |
3.56 | Heuristic| Exploit the ability to parse theorems like the Golden rule in many different ways. |