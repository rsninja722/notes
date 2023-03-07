# 2AC3 concepts

- **goal** - understand the foundations of computation
- **fundamental questions**
    - what does it mean for a function to be computable?
    - are there any noncomputable functions?
    - how does computational power depend on programming constructs?

## 1. computation overview

[computation overview](?note=notes/concepts/engineering/computation_overview.md)

## 2. strings and sets

[computation - strings and sets](?note=notes/concepts/engineering/computation-strings_and_sets.md)

## 3 finite automata and regular sets

- **state** - instantaneous description of a system
- **transitions** - changes of state
- **finite state transition system** - 
- **deterministic finite automaton (DFA)** - $M = (Q, \Sigma, \delta, s, F)$
    - Q : set of states
    - $\Sigma$ - alphabet
    - $\delta$ : $Q\times \Sigma \to Q$: transition function "what will be the next state if we are in $q\in Q$ and consume some $a \in \Sigma$
    - $s \in Q$ : start state
    - $F \subseteq Q$ : set of accept states