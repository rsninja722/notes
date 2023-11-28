# sample space and probability

## probability space

- **probability space** - $(\Omega,\mathscr{F}, \mathbb{P})$

### sample space

$\Omega = \\{ \text{set of all possible outcomes} \\}$

elements of $\Omega$ are **sample points**

### events

"the collection of events in Omega"

$\mathscr{F}$ is the sigma-algabra. it is the set of (some) subsets of $\Omega$ elements of $\mathscr{F}$ are called events

when $\Omega$ is finite we will choose $\mathscr{F}$ to be the set of all subsets of $\Omega$ (the power set of $\Omega$)

### probability measure

(probability distribution)

$\mathbb{P}$ is the probability measure. it is a function $\mathbb{P}: \mathscr{F} \to [0,1]$

$\mathbb{P}$ takes events (elements of $\mathscr{F}$) as input and it outputs their probability of happening

## probability measure axioms

Each event $A$ has a probability $P(A)$ and $P$ satisfies Kolmogorov’s axioms:

- $0 \leq P(A) \leq 1$ for each event $A$
- axiom of certainty - $\mathbb{P}(\Omega) = 1$
- axiom of additivity - if $A_1,A_2,A_3,...$ is a sequence of [pairwise disjoint](?note=notes/concepts/engineering/sets.md#pairwisedisjoint) events then $$P(\bigcup_{i=1}^{\infin} A_i ) = \sum_{i=1}^{\infin} P(A_i)$$

## useful rules

- probability of compliment - $P(A^c) = 1 - P(A)$
- probability of empty set - $\mathbb{P}(\varnothing) = 0$
- union law (inclusion-exclusion) - $P(A\cup B) = P(A) + P(B) - P(A \cap B)$
    - extended - $P(A\cup B \cup C)=P(A)+P(B)+P(C)−P(A \cap B)−P(A \cap C)−P(B\cap C)+P(A\cap B\cap C)$
- subset - if $B \subseteq A$ then $P\\{ B \\} \leq P\\{ A\\}$
- $P(B) = P(A\cap B) + P(A^c \cap B)$
- monotonicity of probability - if $A \subseteq B$ then $P(A) \leq P(A)$

## example: die

a 6-sided die has a probability space of $ \Omega = \\{  1,2,3,4,5,6\\} $

probability of rolling even: $P\\{  2,4,6 \\}  = P\\{  2 \\}  + P\\{  4 \\}  +P\\{  6 \\}  = \frac{1}{2}$

note the notation $P(\\{  1 \\} ) = P\\{  1 \\}  = P(1)$