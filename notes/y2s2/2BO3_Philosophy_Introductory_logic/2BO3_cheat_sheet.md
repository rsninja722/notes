# cheat sheet

$\bot$ - contradiction
    - a 0-ary logical operator which is truth functionally always *false*

## inference rules

name | short form |rule
---|---|---
modus ponens | MP | $p \implies q, p$ infer $q$
modus tollens | MT | $p \implies q, \lnot q$ infer $\lnot p$
double negation | DN | $p \equiv \lnot \lnot q$ <br> $\lnot \lnot p \equiv q$
simplification | Simp | $p \land q$ infer $p$ <br> $p \land q$ infer $q$
conjunction | Conj | $p,q$ infer $p \land q$
conjunctive syllogism | CS | $\lnot (p \land q), p$ infer $\lnot q$ <br> $\lnot (p \land q), q$ infer $\lnot p$
disjunction | Disj | $p$ infer $p \lor q$
disjunctive syllogism | DS | $p \lor q, \lnot p$ infer $q$ <br> $p \lor q, \lnot q$ infer $p$ 
de morgan's law | DM | $\lnot (p \land q) \equiv \lnot p \lor \lnot q$ <br> $\lnot (p \lor q) \equiv \lnot p \land \lnot q$
material implication | MI | $p \implies q \equiv \lnot p \lor q$
conditional proof | CP | Suppose (Supp) $p$ <br> derive $q$ <br> infer $p \implies q$
hypothetical syllogism | HS | $p \implies q$, $q \implies r$ infer $p \implies r$
transposition | TR | $p \implies q \equiv \lnot q \implies \lnot p$
reiteration | R | from $p$, infer $p$
biconditional equivalence | BE | $p \Leftrightarrow q \equiv (p \implies q) \land (q \implies p)$
dilemma | DL | $p \lor q$, $p \implies r$, $q \implies r$, infer $r$
reductio ad absurdum | RA | from a derivation of $\bot$ (example: $a \land \lnot a$), from a supposition $p$, infer $\lnot p$
universal instantiation | UI | $\forall x \phi x$ derive $\phi a$ where a is the name of an individual name in domain (UD - Universe of discourse)
universal generalization | UG | $\phi u$ derive $\forall x \phi x$ only if **1.** $\phi u$ is not and doesn't depend on undischarged suppositions involving u **2.** $\phi u$ does not contain a name introduced by an application of EI to a formula involving u
existential generalization | EG | $\phi a$ derive $\exists x \phi x$
existential instantiation | EI | $\exists x \phi x$ derive $\phi i$
quantifier negation | QN | $\lnot \forall x \phi x$ derive $\exists x \lnot \phi x$ <br> $\lnot \exists x \phi x$ derive $\forall x \lnot \phi x$