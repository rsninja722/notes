# 2AC3 concepts

- **fundamental questions**
    - what does it mean for a function to be computable?
    - are there any noncomputable functions?
    - how does computational power depend on programming constructs?

## review (chapter 0)

[sets](?note=notes/concepts/engineering/sets.md) <!-- [](/notes/concepts/engineering/sets.md) -->

[sequences](?note=notes/concepts/engineering/sequences.md) <!-- [](/notes/concepts/engineering/sequences.md) -->

[functions and relations](?note=notes/concepts/engineering/functions_and_relations.md) <!-- [](/notes/concepts/engineering/functions_and_relations.md) -->

[boolean logic](?note=notes/concepts/engineering/boolean_logic_and_logic_gates.md) <!-- [](/notes/concepts/engineering/boolean_logic_and_logic_gates.md) -->

[graphs](?note=notes/concepts/engineering/graphs.md) <!-- [](/notes/concepts/engineering/graphs.md) -->

[computation](?note=notes/concepts/engineering/computation.md) <!-- [](/notes/concepts/engineering/computation.md) -->

[modular arithmetic](?note=notes/concepts/engineering/modular_arithmetic.md) <!-- [](/notes/concepts/engineering/modular_arithmetic.md) -->

[decision problems](?note=notes/concepts/engineering/decision_problems.md) <!-- [](/notes/concepts/engineering/decision_problems.md) -->

[automata](?note=notes/concepts/engineering/automata.md) <!-- [](/notes/concepts/engineering/automata.md) -->

## 2. strings and sets

[computation - strings and sets](?note=notes/concepts/engineering/computation-strings_and_sets.md) <!-- [](/notes/concepts/engineering/computation-strings_and_sets.md) -->

## 3. finite automata and regular sets

[finite automata and regular sets](?note=notes/concepts/engineering/finite_automata_and_regular_sets.md) <!-- [](/notes/concepts/engineering/finite_automata_and_regular_sets.md) -->

## 4. regular expressions

[regular expressions](?note=notes/concepts/engineering/regular_expressions.md) <!-- [](/notes/concepts/engineering/regular_expressions.md) -->


# temp notes

- decidable - there exists a total turing machine that accepts it


hierarchy

if a language is accepted by something at layer n, it is also accepted by all layers above it

- regular sets
- L accepted by DPDA
- CFL
- recursive sets (accepts by total TM)
- recursively enumerable

## turing machine that accepts xaa | $x \in a,b$

example: abaa - accepted, aabababba - rejected

$M = (Q,\Sigma,\Gamma,\vdash,\_,\delta, s, t,r)$

- $\Sigma = \\{a,b\\}$
- $\Gamma = \\{a,b,\vdash,\_\\}$
- $Q = \\{s,t,r,q_1,q_2}$

Q\ $\Gamma$ | $\vdash$ | a | b | _
---|---|---|---|---
s | (s,$\vdash$,R) | (s,a,R) | (s,a,R) | ($q1$,_,L)
$q1$ | (r,$\vdash$,R) | ($q2$,a,L) | (r,-,-) | -
$q2$ | (r,$\vdash$,R) | (t,-,-) | (r,-,-) | -
t | (t,$\vdash$,R) | (t,-,-) | (t,-,-) | (t,-,-)
r | (r,$\vdash$,R) | (r,-,-) | (r,-,-) | (r,-,-)


## turing machine that checks for balanced parentheses

$M = (Q,\Sigma,\Gamma,\vdash,\_,\delta, s, t,r)$

- $\Sigma = \\{[,]\\}$
- $\Gamma = \\{[,],x,\vdash,\_\\}$
- $Q = \\{s,t,r,q_1,q_2\\}$

plan: move right until ], go left until [, until blank space, then go to left until start (see if all x)


Q\ $\Gamma$ | $\vdash$ | [ | ] | x | _
---|---|---|---|---|---
s | (s,$\vdash$,R) | (S,[,R) | (close,x,L) | (check,_,L) | (t,-,-)
open | (r,$\vdash$,R) | (open,[,R) | (close,x,L) | (open, _ ,R) | (check,_,L)
close | (r,$\vdash$,R) | (open,x,R) | (close,],L) | (close,x,L) | (r,-,-)
check | (t,$\vdash$,R) | (r,-,-) | (r,-,-) | (check,x,L) | (r,-,-)
t | (t,$\vdash$,R) | (t,-,-) | (t,-,-) | (t,-,-) | (t,-,-)
r | (r,$\vdash$,R) | (r,-,-) | (r,-,-) | (r,-,-) | (r,-,-)


example:

```
------------------
| ⊢ [ ] [ [ ] ] |
------------------

```

## $\lambda$-calculus

