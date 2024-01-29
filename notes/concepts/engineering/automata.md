# automata

- **automata** - plural of **automaton** - an abstract model of machines that perform computations on an input by moving through a series of states or configurations

through automata theory, we can understand how machines compute function and solve problems, as well as what it means for a function to be [computable](?note=notes/concepts/engineering/computation.md) <!-- [](/notes/concepts/engineering/computation.md) --> and for a question to be decidable

## definitions

- **alphabet** - an arbitrary (usually finite) set of elements often denoted by the symbol $\Sigma$
- **sequence** - see [sequences](?note=notes/concepts/engineering/sequences.md) <!-- [](/notes/concepts/engineering/sequences.md) -->, in automata theory, a sequence consists of elements from a given alphabet $\sigma$

## $\Sigma^{*}$

- $$\Sigma^*$$ - set of all sequences built from the elements of $\Sigma$
    - example $\\{a, b\\}^* = \\{ \epsilon, a,b,aa,bb,ab,ba,aaa, ... \\}$
    - $\varnothing^* = \\{ \epsilon \\}$
    - $|\Sigma^*| = \infin$ if $\Sigma$ is not empty
- **language** - any subset of $\Sigma^*$

# types of automata

## state machines

a **state machine** is a model of computation defined with the following components:

- $Q$ - set of states
    - whether $Q$ is infinite or finite determines if a state machine is infinite or finite
- $\Sigma$ represents a set of "actions" (finite)
    - an "action"  is an abstract concept that lets the machine move between states
- $\delta$ - a transition function ($\delta: Q \times \Sigma \to Q$)
    - example: $\delta(s_1,a) = s_2$ means from state $s_1$, action $a$ leads to state $s_2$
    - $\hat\delta$ - transition function for a string ($\hat\delta: Q \times \Sigma^* \to Q$)
        - $\hat\delta(s_1,xa) = \delta(\hat\delta(s_1,x),a)$
        - $\hat\delta(s_1,\epsilon) = s_1$
- $s_0$ - initial state ($s_0 \in Q$)
- $F$ - final states - ($F \subseteq Q$)
    - may be empty

### deterministic finite state machine

to be considered deterministic and finite, a state machine must have finite $Q$, and at least one final state

defined as: $M = (\Sigma, Q, \delta, s_0, F)$

### language accepted by a state machine

$L(M) = \\{x | \hat\delta(s_0,x) \in F\\}$ (the language of state machine $M$ is all sequences that result in a final state)

### representing state machines
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="200" width="200"><g id="back"><line x1="30" y1="50" x2="10" y2="50" stroke="var(--text)"></line><line x1="70" y1="43" x2="130" y2="43" stroke="var(--text)"></line><polygon points="130,43 123,50 123,36" fill="var(--text)"></polygon><line x1="57" y1="70" x2="57" y2="130" stroke="var(--text)"></line><polygon points="57,130 50,123 64,123" fill="var(--text)"></polygon><line x1="157" y1="70" x2="157" y2="130" stroke="var(--text)"></line><polygon points="157,130 150,123 164,123" fill="var(--text)"></polygon><circle cx="160" cy="60" r="16" fill="none" stroke="var(--text)"></circle><line x1="59" y1="131" x2="131" y2="59" stroke="var(--text)"></line><polygon points="131,59 131,69 121,59" fill="var(--text)"></polygon><line x1="70" y1="143" x2="130" y2="143" stroke="var(--text)"></line><polygon points="130,143 123,150 123,136" fill="var(--text)"></polygon><line x1="130" y1="157" x2="70" y2="157" stroke="var(--text)"></line><polygon points="70,157 77,150 77,164" fill="var(--text)"></polygon><line x1="143" y1="130" x2="143" y2="70" stroke="var(--text)"></line><polygon points="143,70 150,77 136,77" fill="var(--text)"></polygon></g><g id="front"><polygon points="30,50 25,45 25,55" fill="var(--text)"></polygon><circle cx="50" cy="50" r="20" fill="var(--back)" stroke="var(--text)"></circle><circle cx="150" cy="50" r="20" fill="var(--back)" stroke="var(--text)"></circle><circle cx="50" cy="150" r="20" fill="var(--back)" stroke="var(--text)"></circle><circle cx="150" cy="150" r="20" fill="var(--back)" stroke="var(--text)"></circle></g><g id="top"><text x="50" y="50" text-anchor="middle" dominant-baseline="middle" fill="var(--text)">s0</text><text x="150" y="50" text-anchor="middle" dominant-baseline="middle" fill="var(--text)">s1</text><circle cx="50" cy="150" r="16" fill="none" stroke="var(--text)"></circle><text x="50" y="150" text-anchor="middle" dominant-baseline="middle" fill="var(--text)">s2</text><circle cx="150" cy="150" r="16" fill="none" stroke="var(--text)"></circle><text x="150" y="150" text-anchor="middle" dominant-baseline="middle" fill="var(--text)">s3</text><text x="100" y="43" text-anchor="middle" dominant-baseline="middle" paint-order="stroke" stroke-width="2px" stroke="var(--back)" fill="var(--text)">a</text><text x="57" y="100" text-anchor="middle" dominant-baseline="middle" paint-order="stroke" stroke-width="2px" stroke="var(--back)" fill="var(--text)">b</text><text x="157" y="100" text-anchor="middle" dominant-baseline="middle" paint-order="stroke" stroke-width="2px" stroke="var(--back)" fill="var(--text)">a</text><text x="170" y="70" text-anchor="middle" dominant-baseline="middle" paint-order="stroke" stroke-width="2px" stroke="var(--back)" fill="var(--text)">b</text><text x="95" y="95" text-anchor="middle" dominant-baseline="middle" paint-order="stroke" stroke-width="2px" stroke="var(--back)" fill="var(--text)">a</text><text x="100" y="143" text-anchor="middle" dominant-baseline="middle" paint-order="stroke" stroke-width="2px" stroke="var(--back)" fill="var(--text)">b</text><text x="100" y="157" text-anchor="middle" dominant-baseline="middle" paint-order="stroke" stroke-width="2px" stroke="var(--back)" fill="var(--text)">a</text><text x="143" y="100" text-anchor="middle" dominant-baseline="middle" paint-order="stroke" stroke-width="2px" stroke="var(--back)" fill="var(--text)">b</text></g></svg>

### non-determinism
