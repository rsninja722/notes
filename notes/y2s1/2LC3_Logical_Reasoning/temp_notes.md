# temp notes

# propositional calculus

- **calculus** - method of reasoning by calculation with symbols 
- **propositional calculus** - method of calculating with boolean expressions that involve propositional variables
    - aka **equational logic $E$** 
    - consists of **axioms** - boolean expressions that define basic manipulative properties
        - example: axiom for $\lor$: $p \lor q \equiv q \lor p$
    - also consists of three inference rules
        - **Leibnitz** - $\frac{X \equiv Y}{E[z \coloneqq X] \equiv E[z \coloneqq Y]}$
        - **transitivity** - $\frac{X = Y, Y = Z}{X = Z}$
        - **substitution** -  $\frac{E}{E[v \coloneqq  F]}$

- **theorem** (of propositional calculus) is either:
    1. an axiom
    2. the conclusion of an interference rule whose premises are theorems
    3. a boolean expression using the interferences rules that is proved equal to an axiom or a previously proved theorem

to check if a theorem is valid, check each axiom with a truth table, and arguing for each inference rule that if its premises are valid then so is its conclusion

# equivalence axioms

- axiom, associativity of $\equiv$ - $((p \equiv q) \equiv r) \equiv (p \equiv (q \equiv r))$
- axiom, symmetry of $\equiv$ - $p \equiv q \equiv q \equiv p$, can be used as:
    - $(p \equiv q) \equiv (q \equiv p)$
    - $p \equiv (q \equiv q \equiv p)$
    - $(p \equiv q \equiv q) \equiv p$
- axiom, identity of $\equiv$ - $true \equiv q \equiv q$, can be used as 
    - $(true \equiv q) \equiv q$
    - $true \equiv (q \equiv q)$
- axiom, definition of $false$ - $false \equiv \lnot true$
- axiom, commutativity of $\lnot$ with $\equiv$ - $\lnot (p \equiv q) \equiv \lnot p \equiv q$, can be used as:
    - $\lnot (p \equiv q) = \lnot (p \equiv q)$
    - $(\lnot (p \equiv q) \equiv \lnot p) = q$
    - $(\lnot (p \equiv q) \equiv q) = \lnot p$
- axiom, definition of $\not\equiv$ - $(p \not\equiv q) \equiv \lnot(p\equiv q)$

# disjunction axioms

- axiom, symmetry of $\lor$ - $p \lor q \equiv q \lor p$
- axiom, associativity of $\lor$ - $(p \lor q) \lor r \equiv p \lor ( q\lor r)$
- axiom, idempotency of $\lor$ - $p \lor p \equiv p$
- axiom, distributivity of $\lor$ over $\equiv$ - $p \lor(q\equiv r) \equiv p \lor q \equiv p \lor r$
- axiom, excluded middle - $p \lor \lnot p$

# law of the excluded middle

"...there cannot be an intermediate between contradictories, but of one 
subject we must either affirm or deny any one predicate..." - Aristotle 

“Everything must either be or not be"

- axiom, excluded middle - $p \lor\lnot p \equiv true$

# disjunction axiom and theorems

- axiom, symmetry of $\lor$ - $p \lor q \equiv q \lor p$
- axiom, associativity of $\lor$ - $(p \lor q) \lor r \equiv p \lor (q\lor r)$
- axiom,. impotency of $\lor$ - $p\lor p \equiv p$
- axiom, distribution of $\lor$ over $\equiv$ - $p\lor(q \equiv r) \equiv p \lor q \equiv p\lor r$
- axiom, excluded middle - $p\lor \lnot q$

## theorems

- zero of $\lor$ - $p \lor true \equiv true$
- identity of \lor - $p \lor false \equiv p$
- distribution of $\lor$ over $\lor$ - $p \lor(q\lor r) \equiv (p 
\lor q) \lor (p \lor r)$
- this one - $p \lor q \equiv p \lor \lnot q \equiv p$

# heuristic of definition elimination

- **heuristic** - (strategies derived from previous experiences with similar problems) identify applicable theorems by matching the structure of expressions or subexpressions
- **principle** - structure proofs to avoid repeating the same subexpression on many lines
- **heuristic of definition elimination** - to prove a theorem concerning operator $x$ in therms of operator $y$, expand the definition of $x$ to arrive at a formula that contains $y$; exploit properties of $y$ to manipulate the formula; and then possibly reintroduce $x$ using its definition.

**unfold-fold strategy**
    - example:

prove symmetry of $\not\equiv$:

$p\not\equiv q$

= ⟨ definition of $\not\equiv$ ⟩ - unfold

$\lnot(p \equiv q)

= ⟨ symmetry of $\equiv$⟩

$\lnot(q \equiv p)$

= ⟨ definition of $\not\equiv$⟩ - fold

$q\not\equiv p$





# tutorial

course: not dealing with numbers, dealing with expressions

E - expression

- textual substitution
    - left associative

$E = x +y$

$E[x \coloneqq \sqrt{x}]$ - x becomes root x


$E[x,y \coloneqq \sqrt{x},x]$ = $\sqrt{x} + x$

successive substitution:

$E[x,y \coloneqq \sqrt{x},y^2][x,y \coloneqq x^2,y]$ 

= $(E[x,y \coloneqq \sqrt{x},x])[x,y \coloneqq x^2,y]$ 

= $(\sqrt{x} + y^2)[x,y \coloneqq x^2,y]$ 

= $|x| + y^2$

## excersises

textual substitution:

$x+y \cdot x [x \coloneqq b+2] = x + y \cdot (b+2)$ (only apply the substitution to x)

$(x+y \cdot x) [x \coloneqq b+2] = ((b+2) + y \cdot (b+2))$

$x+y \cdot x [x,y \coloneqq b+2, x+2] = x + y \cdot (b+2)$

$x+yx [x,y \coloneqq b+2, x+2] = x + y \cdot (b+2)$

textual substitution has the highest priority, applies only to the expression to the left of it, not everything 

we assume $+$ and $\cdot$ are associative, but **not** commutative ($x + y = y + x$), and **not** distributive ($(x+y)\cdot 3 = x \cdot 3 + y \cdot 3$)

$(x + y \cdot 2)[x,y \coloneqq x\cdot y, x\cdot x] = x\cdot y  + x \cdot x \cdot 2$

sequential/consecutive substitutions

$(x + x \cdot 2)[x,y \coloneqq y,x][x \coloneqq z]$

= $(y + y \cdot 2)[x \coloneqq z]$

= $(y + y \cdot 2)$

______

$(x + x \cdot y + x \cdot y \cdot 3)[x,y \coloneqq y,x][y \coloneqq 2 \cdot y]$

= $(y + y \cdot x  + y \cdot x \cdot 3)[y \coloneqq 2 \cdot y]$

= $2\cdot y + 2\cdot y \cdot x + 2 \cdot y \cdot x \cdot 3$

leibneiz rule
- if you have any expression, you can replace a variable with expressions that are equal, and either substitution will result in the same thing (equal)
    - example:
        - $x^2 = x$, $X = x^2$, $ Y = x$, E = z -x
        - E[z := X] = x^2 -x
        - E[z := Y] = x - x
        - by libniz, x^2 - x = x-x = 0 

___

$$\frac{Z = X, Z =y}{E[z \coloneqq X] = E[z \coloneqq Y]}$$

prove that = is transitive <=> prove X = Y

$E = z$

$E[z \coloneqq X] = X, E[z \coloneqq Y] = Y$

<=> $X = Y$
    
___

$$\frac{z \cdot y+ 1 = 5}{x + (2\cdot y+1)\cdot w=?}$$

$X = z \cdot y + 1, Y = 5$

$E[z \coloneqq X] = x + (2\cdot y + 1) \cdot w = x + X \cdot w$

$E = x + z \cdot w$

$E[z \coloneqq Y] = x + 5 \cdot w$

___

$$\frac{ X = Y}{x+x=?}$$

$X = x, Y = y$

$E[z \coloneqq x] = x+x$

$E = z+z \text{ or }  E = x + 3 \text{ or }  E = 3 + x \text{ or }  E = x + x$

$E = x + z \cdot w$

$E[z \coloneqq Y] = x + 5 \cdot w$

$? = x + w$

___

$$\frac{?=?}{x+y+w+x=x+y \cdot w +x}$$

$x+y+w+x = E[z \coloneqq X] = x + y \cdot w + x = E[z \coloneqq Y]$

$ x + y + w + x$

$ x + y \cdot w + x$

$E = x + z + x$

$X = y+w, Y = y\cdot w$

___

x = y  an eq(x,y) -> either true or false

$f(x,y)$

must hold: 

$f(x,y)$ = True, $x \leftrightarrow y$ = True

$f(f(x,y),f(y,x))$ = True, $(x \leftrightarrow y) \leftrightarrow (y \leftrightarrow x) = True$

$\frac{f(x,y) \land f(y,z)}{f(x,z)}$ = True, $\frac{x \leftrightarrow y \land y \leftrightarrow z}{x \leftrightarrow z}$ = True

