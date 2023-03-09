# finite automata and regular sets

## definitions

- **state** - instantaneous description of a system
- **transitions** - changes of state
- **finite state transition system** - a system with a finite amount of states and transitions
    - example: rubik's cube has $\frac{54!}{9!^6}$ states and 12 transitions (6 sides, 2 directions to turn for each)
- **deterministic finite automaton (DFA)** - a mathematical model of a finite state transition system
    - defined by machine $M = (Q, \Sigma, \delta, s, F)$ where:
        - Q : set of states
        - $\Sigma$ - alphabet
        - $\delta$ : $Q\times \Sigma \to Q$: transition function "what will be the next state if we are in $q\in Q$ and consume some $a \in \Sigma$
        - $s \in Q$ : start state
        - $F \subseteq Q$ : set of accept states

the formal description of how a DFA runs is as follows:

$\hat\delta : Q \times \Sigma^* \to Q$ (delta hat is a function that takes in a state in Q and a string, and returns a state in Q)

theorem (3.1) $\hat\delta (q, \epsilon) = q$

theorem (3.2) $\hat\delta (q,xa) = \delta (\hat\delta (q, x), a)$

basically means the $\hat\delta$ is runs $\delta$ for each character in a string for a DFA

- **accepted** - $\hat\delta (s,x) \in F$ 
    - a string results in machine $M$ ending up in state that is an accepted state
- **rejected** - $\hat\delta (s,x) \not\in F$
    - a string results in machine $M$ ending up in state that is not an accepted state
- $L(M)$ - set of all strings accepted by $M$
    - definition: $L(M) = \lbrace x \in \Sigma^* | \hat\delta (s,x) \in F \rbrace$
- **regular** - a subset $A \subseteq \Sigma^*$ is regular if $A = L(M)$ for a finite automata $m$

## DFA example

- $Q = \lbrace 0,1,2,3\rbrace$
- $\Sigma = \lbrace a,b\rbrace$
- $s = 0$
- $F = \lbrace 3\rbrace$
- $\delta (0,a) = 1$
- $\delta (1,a) = 2$
- $\delta (2,a) = \delta (3,a) = 3$
- $\delta (q,b) = q, q \in \lbrace 0,1,2,3 \rbrace$

to run a string say ababbaabba, start at the start state and scan the string left to right, do the transition of each character you encounter, if you end on state 3, the string is accepted

### shown as a table

note: arrow indicates start state, F indicates an accept (final) state

state |a|b
---|---|---
-> 0|1|0
1|2|1
2|3|2
3F|3|3

### shown as a transition diagram

note: arrow indicates start state, states don't need labels

![](./media/2ac3_1.png)

### shown as a transition matrix

$$\begin{bmatrix} \lbrace b \rbrace & \lbrace a \rbrace & \emptyset & \emptyset  \newline \emptyset & \lbrace b \rbrace & \lbrace a \rbrace  & \emptyset  \newline \emptyset & \emptyset  & \lbrace b \rbrace & \lbrace a \rbrace  \newline \emptyset & \emptyset & \emptyset & \lbrace a,b \rbrace \end{bmatrix}$$

## DFA example 2

the dfa represents the set:

$\lbrace x \in \lbrace 0, 1\rbrace^* | x \text{ represents a multiple of three in binary} \rbrace

example strings

string | number
---|---
$\epsilon$ | 0
0 | 0
1 | 1
10 | 2
11 | 3
100 | 4
101 | 5
110 | 6

- state 0 represents the number mod 3 = 0
- state 1 represents the number mod 3 = 1
- state 2 represents the number mod 3 = 2

note: 0 and 1 in table header are characters, not states like in te rest of the table

state | 0 | 1
---|---|---
-> 0F | 0 | 1
1     | 2 | 0
2     | 1 | 2

![](./media/2ac3_2.png)

## closure properties of regular sets

- if $A$ and $B$ are regular, so are:
    - $A \cup B$
    - $A \cap B$
    - $\text{\textasciitilde} A$
    - $AB$
    - $A^*$

see textbook for proofs (they are yucky)

## nondeterministic finite automata

- **nondeterminism** - when the next state of a computation is not uniquely determined by the current state
-  **nondeterministic finite automaton (NFA)** - a mathematical model of a finite state transition system where there are 0, 1, or multiple transitions out of each state for each symbol (compared to always 1 for DFAs)
    - may have multiple possible start states
    - the $\delta$ function no longer applies as there is no defined mechanism for deciding which transition will be taken
- definition of **accepted** for NFAs - string $x$ is accepted if it is possible to start at least one of the start states and reach an accept state
- definition of **rejected** for NFAs - there are no possible paths for $x$ to reach an accept state
- NFAs are *not* more powerful than DFAs (any NFA can be expressed as a DFA)

## NFA example

for the set $A = \lbrace x \in \lbrace 0,1\rbrace^* | \text{the fifth symbol from the right is 1}$

a nondeterministic automaton accepting A is:

![](./media/2ac3_3.png)

$11010010 \in A$ 
$11000010 \not\in A$

to express the same set as a DFA you would need $2^5 = 32$ states to essentially remember the last 5 symbols seen

## formal definition

$N = (Q, \Sigma, \Delta, S, F)$ where:
    - (same) Q : set of states
    - (same) $\Sigma$ : alphabet
    - $\Delta$ : $Q\times \Sigma \to 2^Q$, transition function where $2^Q$ denotes the power set of $Q$ (set of all subsets of Q): $2^Q = \lbrace A | A \subseteq Q \rbrace$
        - $\Delta$ (p,a) gives the set of all states N is allowed to move to from p in one step under input symbol a (can give $\emptyset$)
    - $S \in Q$ : set of start states
    - (same) $F \subseteq Q$ : set of accept states