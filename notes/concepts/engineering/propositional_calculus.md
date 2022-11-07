# propositional calculus

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
(3.1) | Axiom, Associativity of = | ((p = q) = r) = (p = (q = r)) | = is associative
(3.2) Axiom, Symmetry of =: p = q = q = p
(3.3) Axiom, Identity of =: true= q = q
(3.4) theorem true
(3.5) theorem, Reflexivity of =: p = p
(3.7) Metatheorem. Any two theorems are equivalent.

(3.55) (p 1\ q) 1\ r p = q = r pVq ==. qVr ==. rVp ==. pVqVr

## $\lnot$, $\not\equiv$

number | name | definition | description
---|---|---|---
(3.8) Axiom, Definition of false: false= •true
(3.9) Axiom, Distributivity of ..., over =: •(p = q) = •p = q
(3.10) Axiom, Definition of ¢.: (p ¢. q)= •(p = q)
(3.12) Double negation: -.-.p:=p
(3.13) Negation of false : -.false= true
(3.14) (p =I= q)= -.p = q
(3.15) -.p = p =false
(3.16) Symmetry of =/=: (p =/= q) = (q =/= p)
(3.17) Associativity of =j.: ((p=f=q)=f=r)= (p=j.(q=j.r))
(3.18) Mutual associativity: ((p =I= q) = r) = (p =j. (q = r))
(3.19) Mutual interchangeability: p =j. q = r = p = q =j. r
(3.20) PO = P1 = · · · = Pn


## $\lor$

number | name | definition | description
---|---|---|---
(3.24) Axiom, Symmetry of V: p V q = q V p
(3.25) Axiom, Associativity of V: (p V q) V r = p V (q V r)
(3.26) Axiom, ldempotency of V : p V p = p
(3.27) Axiom, Distributivity of V over = : p V (q = r) = p V q = p V r
(3.28) Axiom, Excluded Middle: p V •P
(3.29) Zero 8 of V: p V true = true
(3.30) Identity of V: p V false = p
(3.31) Distributivity of V over V: p V (q V r)
(3.32) p v q = p v •q = p


## $\land$

number | name | definition | description
---|---|---|---
(3.35) Axiom, Golden rule : p 1\ q = p = q = p V q
(3.36) Symmetry of 1\: p 1\ q = q 1\ p
(3.37) Associativity of 1\: (p 1\ q) 1\ r = p 1\ (q 1\ r)
(3.38) ldempotency of 1\: p 1\ p = p
(3.39) Identity of 1\: p 1\ true = p
(3.40) Zero of 1\: p 1\ false = false
(3.41) Distributivity of 1\ over 1\: p 1\ (q 1\ r) = (p 1\ q) 1\ (p 1\ r)
(3.42) Contradiction: p 1\ •p = false

### $\land$ and $\lor$

number | name | definition | description
---|---|---|---
(3.43) Absorption: (a) p 1\ (p V q) :=p \\ (b) p v (p 1\ q) :=p
(3.44) Absorption: (a) p 1\ (•p V q) = p 1\ q \\ (b) p V (•P 1\ q) = p v q
(3.45) Distributivity of V over 1\ : p V (q 1\ r) = (p V q) 1\ (p V r)
(3.46) Distributivity of 1\ over V : p 1\ (q V r) = (p 1\ q) V (p 1\ r)
(3.47) De Morgan: (a) •(p 1\ q) •P V •q \\ (b) •(p v q) •p 1\ •q

### $\land$ and $\equiv$

number | name | definition | description
---|---|---|---
(3.48) p 1\ q = p 1\ •q = •p
(3.49) p 1\ (q = r) = p 1\ q = p 1\ r = p
(3.50) p 1\ (q = p) = p 1\ q
(3.51) Replacement: (p = q) 1\ (r = p) = (p = q) 1\ (r = q)

## alternate definition of $\equiv$ and $\not\equiv$

number | name | definition | description
---|---|---|---
(3.52) Definition of =: p = q = (p 1\ q) V (•p 1\ •q)
(3.53) Exclusive or: p ¢. q = ( •p 1\ q) V (p 1\ •q)

## $\implies$ and $\impliedby$

(3.57) Axiom, Definition of Implication: $p \implies q \equiv p V q \equiv q$
(3.58) Axiom, Consequence: $p \impliedby q \equiv q \implies p$

(3.59) Def.: $p \implies q \equiv p \lor \neg q$ 
(3.60) Def.: $p \implies q \equiv p \land q \equiv p$
(3.61) Cntra$+_{ve}$.: $p\implies q  \equiv \neg q \implies \neg p$
(3.62) $p \implies (q \equiv r) \equiv p \land q \equiv p \land r$
(3.63) Dist. $\implies \equiv$: $p \implies (q \equiv r) \equiv p \implies q \equiv p \implies r$
(3.64) $p \implies (q \rightarrow r) \equiv (p \implies q) \implies (p \implies r)$
(3.65) Shunting $p \land q \implies r \equiv p \implies (q \implies r)$
(3.66) $ p \land (p \implies q) \equiv p \land q$
(3.67) $p \land (q \implies p) \equiv p$
(3.68) $p \lor (p \implies q) \equiv T$
(3.69) $p \lor (q \implies p) \equiv q \implies p$ 
(3.70) $p \lor q \implies p \land q \equiv p \equiv q$ 
(3.71) Rfx.: $p \implies p \equiv T$ 
(3.72) Rt 0: $p \implies T \equiv T$ 
(3.73) Lt. ID $T \implies p \equiv p$
(3.74) $p \implies F \equiv \neg p$
(3.75) $F \implies p \equiv T$
(3.76) Weak/Strength: (a) $ \implies p \lor q$ (b) $p \land q \implies p$ (c) $p \land q \implies p \lor q$ (d) $p \lor (q \land r) \implies p \lor q$ (e) $p \land q \implies p \land (q \lor r)$
(3.77) MdsPos: $p \land (p \implies q) \implies q$
(3.78) $(p \implies r) \land (q \implies r) \equiv (p \lor q \implies r)$
(3.79) $(p \implies r) \land (\neg p \implies r) \equiv r$ 
(3.80) Mtl.: $(p \implies q) \land (q\implies p) \equiv (p \equiv q)$
(3.81) Anti-sym.: $(p \implies q) \land (q \implies p) \implies (p \equiv q)$ 
(3.82) Trnsvty.: (a) $(p \implies q) \land (q \implies r) \implies (p \implies r)$ (b) $(p \equiv q) \land (q \implies r) \implies (p \implies r)$ (c) $(p \implies q) \land (q \equiv r) \implies (p \implies r)$


## Leibniz as an Axiom
(3.83) A, Leibniz: $e = f \implies E^{z}_e = E^{z}_f$ \\

## Replacing variables by boolean constants

(3.84) Sub.: (a) $(e = f) \land E^{z}_e \equiv (e = f)  \land E^{z}_f$ (b) $(e = f) \implies E^{z}_e \equiv (e = f)  \implies E^{z}_f$ (c) $q \land (e = f) \implies E^{z}_e \equiv q \land (e = f)  \implies E^{z}_f$
(3.85) Rplce T: (a) $p \implies E^{z}_p \equiv p \implies E^{z}_T$ (b) $q \land p \implies E^{z}_p \equiv q \land p \implies E^{z}_T$ 
(3.86) Rplce F: (a) $E^{z}_p \implies p \equiv E^{z}_F \implies p $ (b) $E^{z}_p \implies p \lor q \equiv E^{z}_F \implies p \lor q$
(3.87) Rplce T: $p \land E^{z}_p \equiv p \land E^{z}_T$ 
(3.88) Rplce F: $p \lor E^{z}_p \equiv p \lor E^{z}_F$
(3.89) Shannon: $E^{z}_p \equiv (p \land E^{z}_T) \lor (\neg p \land E^{z}_F)$

## proofs

(3.6) Proof method. To prove that P = Q is a theorem, transform P to Q or Q to P using Leibniz.
(3.21) Heuristic. Identify applicable theorems by matching the structure of expressions or subexpressions. The operators that appear in a boolean expression and the shape of its subexpressions can focus the choice of theorems to be used in manipulating it.
(3.22) Principle: Structure proofs to avoid repeating the same subexpression on many lines.
(3.23) Heuristic of Definition Elimination: To prove a theorem concerning an operator o that is defined in terms of another, say * , expand the definition of o to arrive at a formula that contains * ; exploit properties of * to manipulate the formula; and then (possibly) reintroduce o using its definition.
(3.33) Heuristic: To prove P = Q, transform the expression with the most structure (either P or Q ) into the other.
(3.34) Principle: Structure proofs to minimize the number of rabbits pulled out of a hat -make each step seem obvious, based on the structure of the expression and the goal of the manipulation.
(3.54) Principle: Lemmas can provide structure, bring to light interesting facts, and ultimately shorten a proof.
(3.56) Heuristic: Exploit the ability to parse theorems like the Golden rule in many different ways.