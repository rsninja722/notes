# 2AC3 Automata and Computability

- instructor email - zokaeiam@mcmaster.ca

## marks

- assignments - 30% (4 assignments)
- avenue quizzes - 10% (worst removed)
- midterm 1 - 15% (febuary 16th, during lecture)
- midterm 2 - 15% (march 16th , during lecture)
- exam - 30%

## textbook

“Automata and Computability” by Dexter Kozen

## models of computation

- finite state machines (memoryless/finite memory)
- finite state machines with unlimited stack memory
- turing machine

### languages

- regular languages
- context-free
- unrestricted



# studying various models of computation

- we have a function $f: A \to B$

```
x∈A  ____     y∈B
---> | f | --- > 
     |___|
```

- we want to "compute" f
- the computation involves a "finite" set of operations (chosen from a finite and predifined set of operations) that are "applied" to $x$, generating output $f(x)$
- the set of predefined operations and the way we give the input and take the output define our computational model
- we say $f$ is computable in out model if we can find a finite set of operations (a program) that gives the right output for $\forall x \in A$

___

# turing machines

say we have a machine:

*the scramble machine*

```
_____________
oooooooooooo  <---
_____________
oooooooooo
_____________
    ...
```

- the machine has an infinite number of rows. some of these rows may contain a finite number of balls
- there is a lever that points at a row
- we have some operations to manipulate the balls or the level
- the machine has 1 bit of memory (denoted MEM)

## operations
 
name | description
---|---
LOWER_LEVEL | move lever to row below
RAISE_LEVEL | move lever to row above
CHECK_EMPTY | check whether the row that the lever points to is empty, if so set MEM = true, else set MEM - false
RESET_BALLS | put all balls in first row
SCRAMBLE_DOWN | move balls in longest row down 1 row until all rows above lever <= row at lever. when done, MEM = if any balls moved
SCRAMBLE_UP | move balls in longest row up 1 row until all rows above lever <= their row above. when done, MEM = if any balls moved
RETURN_FALSE_IF_MEM_FALSE | terminate the program if the condition holds
RETURN_TRUE_IF_MEM_FALSE | terminate the program if the condition holds
RETURN_FALSE_IF_MEM_TRUE | terminate the program if the condition holds
RETURN_TRUE_IF_MEM_TRUE | terminate the program if the condition holds
LOOP | loops over the operations


## example

example: assume $x \in N$ and we ant to compute whether x is even or not 


$
f(x) = \begin{cases}
   True &\text{if } x \text{ is even} \\
   False &\text{if } x \text{ is odd}
\end{cases}
$

assume we put the same number of balls as x on the first row, and the lever also points to first row. write a program that computes $f$

LOWER_LEVER
SCRAMBLE_DOWN
SCRAMBLE_UP
RETURN_TRUE_IF_MEM_FALSE
RETURN_FALSE_IF_MEM_TRUE

___

write a program that determines if $x \in N$ is a prime number


https://rsninja.dev/theScrambleMachine/

```
LOWER_LEVER
LOWER_LEVER
SCRAMBLE_DOWN
SCRAMBLE_UP
CHECK_EMPTY
RETURN_TRUE_IF_MEM_TRUE
RESET_BALLS
RAISE_LEVER
SCRAMBLE_DOWN
SCRAMBLE_UP
RETURN_FALSE_IF_MEM_FALSE
RESET_BALLS
```

repeated infinitely


# notation

## decision problems

- is a given number odd
- is a given string a palindrom

focus on inputs in the form of a string

## variables

symbols | represents
---|---
a,b,c,d... | symbols/letters
u,v,w,x,y,z ... | strings
$\alpha,\beta,\gamma$... | patterns
A,B,C,D | for sets (of strings)

## notation

- **alphabet**, $\Sigma$: a finite string of symbols
    - example: $\Sigma$ = {1,0,a,b}
- **string** - a *finite* sequence of symbols
    - **null string** - $\epsilon$ - string of length 0
    - **string length** - $|abc| = 3, |\epsilon| = 0$
    - example: $x = abc$
- **powers of symbols** 
    - $a^0 \triangleq \epsilon$
    - $a^{n+1} \triangleq a \dots a$ (n+1 times)
- **set of all strings over alphabet $\Sigma$** - $\Sigma^*$
    - example: $abc \in \Sigma^* \text{ for } \Sigma = \lbrace a,b,c,d \rbrace$
    - $\emptyset^* = \lbrace \epsilon \rbrace$
- **concatenation**
- **occurrences** - $\\# a(x)$ - the total number of occorances of $a$ in string $x$
    - $\\#b(abcbb) = 3)$
- **powers of string** 
    - $x^0 \triangleq \epsilon$
    - $ x^{n+1} \triangleq x^nx$
- **prefix** - we say $x$ is a prefix of $y$ if $x$ is an initial segment of $y$
    - ab is a prefix of abc
    - abc is a prefix of abc
    - $\epsilon$ is a prefix of any string
- **proper prefix** - prefix that is not the string itself
- **suffix** - trivial
- **proper suffix** - trivial

## operations on sets of strings

defined over an alphabet

$A \subseteq \Sigma^*,B \subseteq \Sigma^*$

A - for all strings that start with a, for alphabet $\Sigma = \lbrace a,b\rbrace$

- **complement** - $\text{\textasciitilde} A = \Sigma^* \ A = \lbrace x \in \Sigma^*, x \notin A\rbrace$

$AB = \lbrace xy: x\in A, y \in B\rbrace$

$A = \lbrace aa, b \rbrace, B = \lbrace b,c\rbrace$

$AB = \lbrace aab,bb,aac,bc \rbrace$

powers of sets 

$A^0 \triangleq \epsilon$

$A^{n+1} \triangleq A^nA$

$A^1 = A$ 

usual set operations - $A \cup B$, $A \cap B$

___

we say a binary operation is associative if for all A,B and C, $(A \otimes B) \otimes C$ is equal to $A \otimes (B \otimes C)$

we say a binary operation $\otimes$ is *commutative* if for all A and B, $A\otimes B$ is equal to $B\otimes A$


operation | associative | commutative | identity
---|---|---|---
union | T | T | $\emptyset$
intersection | T | T | $\Sigma^*$
concatenation | T | F | $\lbrace \epsilon \rbrace$

"A" is an identity element for binary operation $\otimes$ if $A \otimes B$ and $B \otimes A$ are both equal to $B$ for all $B$

note $\emptyset \neq \epsilon \neq \lbrace \epsilon \rbrace$

# finite state automata

a finite state machine (automaton) has a finite number of states. the machine is initialized in a certain state, and "consumes" a sequence of characters one-by-one. the state gets updated after consuming each symbol base on the current state and the consumed symbol. once the whole input string is consumed, the machine terminates and accepts/rejects the string based on the final state

$a \lbrace x \in \lbrace a,b \rbrace^* | \\# a(x) = 1 \rbrace$

```
  b __      b __     b __
   \/ |  a   \/ |  a  \/ |
-> q0 -----> q1 -----> q2
```

- $q_0,q_1,q_2$ : states
- initial states : $q_0$
- $q_1$ : we have consumed one a
- accepts states $\lbrace a_1 \rbrace$
- input: abbabb
    - $q_0 \to^a q_1 \to^b q_1 \to^b q_1 \to^a q_2 \to^b q_2 \to^b q_2 \not\in \lbrace q_1 \rbrace \implies$ x is rejected
    - $q_2% is not an accept state, so the input is rejected


## deterministic finite automaton (DFA)

a DFA is a structure $M = (Q, \Sigma, \delta, s , F)$

where :

- Q : set of states
- $\Sigma$ - alphabet
- $\delta$ : $Q\times \Sigma \to Q$: transition function "what will be the next state if we are in $q\in Q$ and consume some $a \in \Sigma$
- $s \in Q$ : start state
- $F \subseteq Q$ : set of accept states

informally: M accepts string x if the final state after consuming x is a accept state 

### book notation for DFA diagrams


book notation 
```
  b __      b __     b __
   \/ |  a   \/ |  a  \/ |
-> o -----> o -----> o
```

Q \ $\Sigma$ | a | b
---|---|---
$\to q_0$ | $q_1$ | $q_0$
$q_1$ | $q_2$ | $q_1$
$q_2$ | $q_2$ | $q_2$

### example

```
  b __      b __  
   \/ |  a   \/ |  
-> o -----> o 
   ^--------|
        a
```

says if there is an odd or even amount of a's in the input string

$a \lbrace x \in \lbrace a,b \rbrace^* | \\# a(x) \text{ is odd} \rbrace$


## formal definition of what is accepted by M

multi-step transition function $\hat\delta : Q \times \Sigma^* \to Q$

where $\hat\delta$ is defined by: 

a|a
---|---
$\forall q \in Q$ | $\hat\delta (q, \Sigma) \triangleq q$
$\forall x \in \Sigma *$ <br> $\forall q \in \Sigma$ <br> $\forall q \in Q$ | $\hat\delta (q, xa) \triangleq S ( \hat\delta  (q, x) , a)$

$\hat\delta $ tell us what will be the state we end up with if we start at some state and consume a string x

$M = (Q, \Sigma, \delta, s, F)$ iff $\hat\delta  (s,x) \in F$

language corresponding to M:

$L(M) = \lbrace x \in \Sigma ^* | \hat\delta (s,x) \in F \rbrace$ 

___

- **regular sets** - a set $A \subseteq \Sigma^*$ is regular if there exists a DFA $M$ such that $L(M) = A$
    - $* \{ x\in \{ a,b\}^* \text{the second to the last symbol is b} \}$ - regular
    - $* \{ x\in \{ a,b\}^*  \\# a(x) = \\# b(x) \}$ - not regular

___

how to prove that $L(M) = A$?

example: $A = \{ x \in \{ a,b\}^* \\# a(x) \text{ mod } 2 = 1 \}$

$M = (\{ q_0, q_1 \}, \{ a,b\}, \delta, q_0, \{ q_1\} )$

```text
        a   
-> q0 ----> q1 
  ↻ ^------| ↻ 
 b       a    b
```

does $L(M) = A$?

proof: define $f(x) = \\# a(x) \text{ mod } 2$ it is enough to show that $\forall x \in \Sigma^*,x\in A \Leftrightarrow x \in L(M)$

observation: it is enough to show $\forall x\in \Sigma^*, \hat\delta (q_0,x) = q_{f(x)}$

$(x \in A \Leftrightarrow f(x) = 1 \Leftrightarrow \hat\delta (q_0,x)=q_1 \Leftrightarrow \hat\delta (q_0, x) \in F \Leftrightarrow x \in L(M))$

so the new goal: prove $\forall x \in \Sigma^*, \hat\delta (q_0, x) = q_{f(x)}$

we can prove this using induction on the length of x

- base case: $|x| = 0 \implies x = \Sigma$
    - $\hat\delta (q_0, x) = \hat\delta (q_0, \Sigma) = q_0 = q_{f(x)}$ 
- inductive step: for every $x \in \Sigma^*$ such that $|x| = n$ we have (1) $\hat\delta(q_0,x) = q_{f(x)}$ then: say $|z| = n+1. then write $z=xc$ where $c = {a,b} = \Sigma$

$\hat\delta (q_0, z) = \hat\delta (q_0, xc) = \hat\delta (\hat\delta (q_0, x), c) $  

(1) $= \delta (q_{f(x)}, c) =  \begin{cases} q_{[f(x) +1 \text{ mod} 2 ]} & c = q \\ q_{f(x)} & c \neq q\end{cases}$

$=\begin{cases} q_{f(xc)} & c = q \\ q_{f(xc)} & c \neq q\end{cases}$

$= q_{f(z)}$

(2): note that if $c \neq a$ then $f(xc) = f(x) = f(z)$, also: $f(x)+1 \text{ mod } 2 = f(xa)$ 

# closure properties of regular sets

$\backslash$ = set minus

- theorem - if $A$ is regular, then $\text{\textasciitilde} A = \Sigma^* \backslash A$ (complement of A) is also regular
- proof - $A$ is regular. so let $M=(Q, \Sigma, \delta, s, F)$ be a DFA such that $L(M) = A$. now consider $M' = (Q, \Sigma, \delta, s, Q\backslash F)$. we claim that $L(M') = \text{\textasciitilde} A$ and therefore $\text{\textasciitilde} A$ is regular. $x\in L(M') \Leftrightarrow \hat\delta (s,x) \in Q \backslash F \Leftrightarrow \hat\delta (s,x) \not\in F \Leftrightarrow x\not\in L(M) \Leftrightarrow x \in \text{\textasciitilde} A$ where we use the fact that $\hat\delta$ of the two machines is the same.

___

- theorem - if $A$ and $B$ are regular sets, then $A\cap B$ is also regular
    
## example:
- $A  = \{x\in \{a,b\}^* | \\# a(x) = 1\}$
- $B  = \{x\in \{a,b\}^* | \\# b(x) = 1\}$
- find a DFA for $A \cap B$?

$A \cap B = \{ab,ba\}$
```txt
       a       a
-> ◯ ---> ⦾ ---> ◯
   ↻b    ↻b     ↻b        L(M) = A
```

```plaintext
       b       b
-> ◯ ---> ⦾ ---> ◯
   ↻a,c  ↻a,c    ↻a,c     L(M) = B
```
circles go: $q_0,q_1,q_2$

## about the theorem

- note: $Q_1 \times Q_2 = \{(q_1,q_2): q_1 \in Q_1, q_2 \int Q_2\}$

- $A=L(M_1)$ where $M_1 (Q_1, \Sigma, \delta_1, s_1, F_1)$
- $B=L(M_2)$ where $M_2 (Q_2, \Sigma, \delta_2, s_2, F_2)$

let $M_3 = (Q_1 \times Q_2, \Sigma, \delta_3, (s_1,s_2), F_1 \times F_2)$ where $\delta_3((p,q),a) = (\delta_1(p,a), \delta_2 (q,a))$

claim that: $L(M_3) = $A \cap B$

___

back to example


```
   \/
 _______             _______             _______
/       \    b      /       \     b     /       \
|(q0,q0)|   --->    |(q0,q1)|    --->   |(q0,q2)|
\_______/           \_______/           \_______/
  a \/  ↻c            a \/  ↻c           a \/  ↻c,b
 _______             _______             _______
/       \    b      / final \     b     /       \
|(q1,q0)|   --->    |(q1,q1)|    --->   |(q1,q2)|
\_______/           \_______/           \_______/
  a \/ ↻c            a \/ ↻c            a \/  ↻c,b
 _______             _______             _______
/       \    b      /       \     b     /       \
|(q2,q0)|   --->    |(q2,q1)|    --->   |(q2,q2)|
\_______/           \_______/           \_______/
       ↻c,a               ↻c,a                ↻c,a,b
```

___

from quiz

if A and B are regular, then which one is regular?

- $A \cap B$
- $A \cup B$
    - $= \text{\textasciitilde}(\text{\textasciitilde} A \cap \text{\textasciitilde} B)$
- $A \backslash B$
    - $= A \cap (\text{\textasciitilde} B)$
- $\text{\textasciitilde} A$

___

$A = \{ w a w : w \in  \{a,b\}^* \}$

$B = \{ w_1 a w_2 : w_1. 2_2 \in \{a,b\}^* \}$

$A \notin B$, $A \subseteq B$

e.g., $baaab \in B$, $baaab \notin B$
___

back to the product construction for $A \cap B$

$M_1 = (Q_1, \Sigma, \delta_1, s_1, F_1), L(M_1) = A$

$M_2 = (Q_2, \Sigma, \delta_2, s_2, F_2), L(M_2) = B$


$M_3 = (Q_1 \times Q_2, \Sigma, \delta_3, (s_1,s_2), F_1 \times F_2)$ 

where $\delta_3((p,q),a) = (\delta_1(p,a), \delta_2 (q,a))$

$\forall a \in \Sigma, p \in Q_1, q \in Q_2$

claim: $L(M_3) = L(M_1) \cap L(M_2)$

observation:

$\forall p \in Q_1$

$\forall q \in Q_2$

$\forall x \in \Sigma^*$

$\hat\delta_3 ((p,q), x) = (\hat\delta_1 (p,x), \hat\delta_2 (q,x))$


exercise: prove the observation using induction on length of x

proof of the claim:

$x \in L(M_3) \Leftrightarrow \hat\delta_3 ((s_1, s_2), x) \in F_1 \times F_2 \Leftrightarrow (\hat\delta_1 (s_1, x), \hat\delta_2 (s_2, x)) \in F_1 \times F_2 \Leftrightarrow \hat\delta_1 (s_1,x) \in F_1 \text{ AND } \hat\delta_2 (s_2,x) \in F_2 \Leftrightarrow x \in L(M_1) \text{ AND } x\in L(M_2) \Leftrightarrow x\in A \cap B$

___

what will be the DFA for $A \cup B$

$M_3 = (Q_1 \times Q_2, \Sigma, \delta_3, (s_1,s_2), F_1 \times Q_2 \cup Q_1 \times F_2)$

$F_1 \times Q_2$ will accept anything in L(M)

___

more challenging:

if A and B are regular can we say AB is also regular?

$AB = \{xy: x\in A, y\in B\}$

___

example:

is the following language regular?

$A = \{x\in \{a,b\}^* \big| |x| \geq 5, \text{ and the 5th symbol of x from the right is "a"}\}$

$abbaababb \in A$

$aaabbbabab \not\in A$

you need to remember the last 5 symbols that it has consumed, so need $\geq 32 = 2^5$

__

non-deterministic finite automaton (NFA)

we want to make our computational model stronger. so we relax some rules in DFAs:

- multiple start states
- in each state, given an input symbol, the next state is chosen from a set of states. (can be of size 0,1,2,ect)
- therefore, there could be more than one "computational path" (way of processing for the string)
- NFA accepts a string if at least one computational path ends up in an accept state

___

example


```txt
       a      a,b     a,b     a,b     a,b    
-> ◯ ---> ◯ ---> ◯ ---> ◯ ---> ◯ ---> ⦾
   ↻a,b    
```

circles go $q_1, q_2, q_3, q_4, q_5, q_6$

# midterm 2 answers

1. assume $A\subseteq {a,b}*$ and $B \subseteq {a,b}*$ are regular sets



2. design a cfg for

$A = {x \in {a,b,c}^* | #a(x) + #b(x) = #c(x)}$

1 $S \to SaScS | SbScS | ScSaS | ScSbS | c $

2 $S \to cSa | aSc | cSb | bSc$

3 $S \to acS | aSc | Sac | bcS | bSc | sBc | caS | cSa | Sca | caS | cSb | cbS | \epsilon$