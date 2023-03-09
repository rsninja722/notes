# 2BO3 concepts

## logic applied to the world

[logic applied to the world](?note=notes/concepts/humanities/logic_applied_to_the_world.md)

## arguments

[arguments](?note=notes/concepts/humanities/logic_arguments.md)

## validity

[validity](?note=notes/concepts/humanities/logic_validity.md)

## statement logic

[statement logic](?note=notes/concepts/humanities/statement_logic.md)

# philosophical arguments

consider the following argument

ANNE and BILL are going to take a philosophy class. Whenever BILL takes a philosophy class, Anne takes NOTES. Anne HURT her writing hand over the summer. If Anne hurt her hand, she will need to get a SUBSTITUTE note taker. If she has a SUBSTITUTE note taker, Anne will not be taking notes.
Therefore, The Calgary Flames will WIN the Stanley Cup

$A \land B, B \implies N, H, H \implies S, S \implies \lnot N$

statement | theorem
---|---
1 $A \land B $ | Premise
2 $B \implies N $ | Premise
3 $H $ | Premise
4 $H \implies S $ | Premise
5 $S \implies \lnot N $ | Premise
6 $A $ | 1 simp
7 $B $ | 1 Simp
8 $N  $ | 2, 7 MP
9 $S  $ | 3, 4 MP
10 $\lnot N $ | 5, 9  MP
11 $N \lor W $ |  8 Disj
12 $W $ | 10, 11 DS ???!

## paradox and contradictions

### russell set

$R = \{x | x \not\in x\}$

### liars sentence

A: This sentence is false


## de morgan's laws

"not either" is equivalent to "neither"

$\lnot (P \lor Q) \equiv \lnot P \land \lnot Q$

"not both is equivalent to "either not one or not the other"

$\lnot (P \land Q) \equiv \lnot P \lor \lnot Q$

### example

prove $\lnot (P \lor Q) \therefore \lnot P$

statement | theorem
---|---
1 $\lnot (P \lor Q)$ | Premise
2 $\lnot P \land \lnot Q$ | 1 DM
3 $\lnot P$ | 2 Simp

## material implication

$p \implies q \equiv \lnot p \lor q$

## equivalence of logical operators

the sets of logical operators $\{\lnot, \land\}, \{\lnot, \lor\}, \{\lnot, \implies\}$ can express every logical statement. we can use material implication and de morgan's law to move between the truth functional connectives $\{\land , \lor, \implies\}$ 

this is called truth-functional completeness or, expressive completeness

# truth tables

rows = $2^n$ where $n$ is the number of components in the expression

## example

p | q | p & q
---|---|---
T | T | T
T | F | F
F | T | F
F | F | F


# validity

contra example

for $p \vdash q$ show that p is true and q is false to prove invalidity

for validity show the entire truth tables match up






# sequent vs entailment 

- sequent- p proves q
- entailment - q follows from p on the truth table 

