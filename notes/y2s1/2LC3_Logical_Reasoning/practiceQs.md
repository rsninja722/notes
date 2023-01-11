According to [the google doc](https://docs.google.com/document/d/1GuID3eJA1eOUTBcfjDlDWV40gO_YLXDvGTpJsMP8Oec/edit)
- 2.5 hours
- 18 questions
- 8.3 min per question
- 97 total marks
- no multiple choice

## Translating English the Predicate Logic
*several questions*
### (Practice) Question 9 from Assignment 1
Exercise 2.5
$r$ It's raining
$s$ I'm going swimming
$c$ It's raining cats
$d$ It's raining dogs
$h$ I'll eat my hat

(a) $(r \lor \lnot r) \Rightarrow s$

(b) $r \Rightarrow \lnot s$

(c) $c \land d$

(d) $c \lor d$

(e) $(c \land d) \Rightarrow (h \land \lnot s)$

(f) $( c \land d \land s) \Rightarrow h$

### (Practice) Question 10 from Assignment 1
Exercise 2.7

*names are intuitive unless explicitly defined*

(a) $xly \lor xey$

(b) $xly \lor xey \lor xgy$

(c) $(xgy \land ygz) \Rightarrow vew$

(d) $xly \land ylx \land vew$

(e) $\lnot((xly \land ylz) \lor (ylz \land vew) \lor (vew \land xly))$

(f) $\lnot xly \land \lnot ylx \land \lnot vew$

(g) $\lnot(xly \land ylx \land vew)$

(h) $(xly \Rightarrow ylx) \land (\lnot xly \Rightarrow vew)$

(i) $(xly \Rightarrow (ylz \equiv vew)) \land (\lnot xly \Rightarrow \lnot ygz) \land (vew \Rightarrow xly)$

$eply$ execution of $P$ is begun with $x <y$
$ty$ execution of $P$ terminates with $y=2^x$
(j) $eply \Rightarrow ty$

$epxl0$ execution of $P$ is begun with $x < 0$
$ept$ execution of $P$ terminates
(k) $epxl0 \Rightarrow \lnot(ept)$

### (Practice) Question 11 from Assignment 1
Exercise 2.9
$tb$ Bill takes the bus
$bl$ The bus is late
$ma$ Bill misses his appointment
$fd$ Bill feels a downcast
$gh$ Bill should go home
$gj$ Bill gets the job

1. $tb \Rightarrow (bl \Rightarrow ma)$
2. $(ma \land fd) \Rightarrow \lnot gh$
3. $\lnot gj \Rightarrow (fd \land \lnot gh)$
4. $tb \Rightarrow (bl \Rightarrow gj)$
5. $(ma \land gh) \Rightarrow gj$
6. $(bl \land fd \land gh) \Rightarrow \lnot tb$
7. $(bl \land \lnot gj) \Rightarrow \lnot tb$
8. $\lnot ma \Rightarrow (\lnot gh \land \lnot gj)$
9. $(bl \lor ma) \Rightarrow fd$
10. $(tb \land bl \land gh) \Rightarrow gj$
11. $(tb \land \lnot gj) \Rightarrow (\lnot bl  \lor \lnot gh)$

$((1) \land (2) \land (3)) \Rightarrow (11)$

### (Practice) Question 12 from Assignment 1
Exercise 2.10
$p$ the islander is telling the truth
$q$ the left-hand branch leads to the restaurant
| $p$ | $q$ | $p \equiv \dots$ |
| --- | --- | ---------------- |
| 0   | 0   | 0                |
| 0   | 1   | 1                |
| 1   | 0   | 0                |
| 1   | 1   | 1                 |

the statement can be
$p \equiv (q \equiv p)$

| $p$ | $q$ | $p \equiv (q \equiv p)$ |
| --- | --- | ---------------- |
| 0   | 0   | 0                |
| 0   | 1   | 1                |
| 1   | 0   | 0                |
| 1   | 1   | 1                 |

the question is : "does the left-hand branch lead to the restaurant if and only if you are telling the truth"

### (Practice) Question 31 from Assignment 1
Exercise 5.5

$g$ The gold casket has the dagger
$s$ The silver casket has the dagger
$l$ The lead casket has the dagger

(1) $(g \equiv s \equiv l) \land \lnot(g \land a \land l)$

(2) $gc = g$
(3) $sc \equiv \lnot s$
(4) $lc  \Rightarrow \lnot gc \land \lnot sc$
(5) $\lnot lc \Rightarrow gc \land sc$

pick one that *does not contain the dagger*

$true$
$\equiv$ < Axiom of Excluded Middle >
$lc \lor \lnot lc$
$\Rightarrow$ < Assumption (4) and (5) >
$(\lnot gc \land \lnot sc) \lor ( gc \land sc)$
$\equiv$ < Assumption (2) and (3) >
$(\lnot g \land s) \lor ( g \land \lnot s)$

$\therefore$ we select the lead casket since either the gold or silver casket has the dagger.

### (Practice) Question 32 from Assignment 1
Exercise 5.6

$b$: $B$ is a knight
$c$: $C$ is a knight
$d$: $D$ is a knight

(a)
$b \equiv b \Rightarrow h$
$\equiv$ < (3.60) Def of Implication >
$b \land h$
$\Rightarrow$ < (3.76) (b) Weakening >
$h$

(b)
$b \equiv c \Rightarrow \lnot b$
$\equiv$ < (3.61) Contrapositive >
$b \equiv b \Rightarrow \lnot c$
$\equiv$ < (3.60) Def if Implication >
$b \land \lnot c$

$\therefore$ $b$ is a knight and $c$ is a knave

(c)
$b \equiv (b \equiv g)$
$\equiv$ < Ax
$(b \equiv b) \equiv g$
$\equiv$ < (3.1) Assoc. of equality >
$true \equiv g$
$\equiv$ < (3.3) Identity of equality >
$g$

$\therefore$ We cannot determine if $b$ is a knight or a knave, but there is gold on the island

(d)
$c \equiv (b \equiv \lnot b)$
$d \equiv \lnot c$

$c \equiv (b \equiv \lnot b)$
$\equiv$  < (3.15) >
$c \equiv false$
$\equiv$ < (3.15) >
$\lnot c$

$d \equiv \lnot c$
$\equiv$ < We have already proved $\lnot c$ >
$d \equiv true$
$\equiv$ < (3.3) Identity of equality >
$d$

$\therefore$ $c$ is a knave and $d$ is a knight

(e)
$c \equiv (b \equiv c \equiv d) \land \lnot(b \land c \land d)$
$d \equiv \lnot c$

$c \equiv (b \equiv c \equiv d) \land \lnot(b \land c \land d)$
$\equiv$ < Assumption $d \equiv \lnot c$ >
$c \equiv (b \equiv c \equiv \lnot c) \land \lnot(b \land c \land \lnot c)$
$\equiv$ < (3.42) Contradiction >
$c \equiv (b \equiv c \equiv \lnot c) \land \lnot(b \land false)$
$\equiv$ < (3.40) Zero of $\land$ >
$c \equiv (b \equiv c \equiv \lnot c) \land \lnot(false)$
$\equiv$ < (3.8) Definition of false >
$c \equiv (b \equiv c \equiv \lnot c) \land true$
$\equiv$ < (3.39) Identity of $\land$ >
$c \equiv (b \equiv c \equiv \lnot c)$
$\equiv$ < (3.15) >
$c \equiv (b \equiv false)$
$\equiv$ < (3.15) >
$c \equiv \lnot b$

$d \equiv \lnot c$
$\equiv$ < (3.11) >
$\lnot d \equiv c$
$\equiv$ < We have proved $c \equiv \lnot b$ >
$\lnot d \equiv c \equiv \lnot b$

| $b$ | $c$ | $d$ | $\lnot d \equiv c$ | $\lnot d \equiv c \equiv \lnot b$ |
| --- | --- | --- | ------------------ | --------------------------------- |
| f   | f   | f   | f                  | f                                  |
| f   | f   | t   | t                  |  t                                 |
| f   | t   | f   | t                  |  t                                 |
| f   | t   | t   | f                  |  f                                 |
| t   | f   | f   | f                  |   t                                |
| t   | f   | t   | t                  |   f                                |
| t   | t   | f   | t                  |   f                                |
| t   | t   | t   | f                  |   t                                |
$\therefore$ we can say that either all of them are knight or only one of them is a knight and the rest are knaves

(f)
$c \equiv (b \equiv (b \equiv c \equiv d) \land \lnot (b \land c \land d))$
$d \equiv \lnot c$

$c \equiv (b \equiv (b \equiv c \equiv d) \land \lnot (b \land c \land d))$
$\equiv$ < We have already proved $(b \equiv c \equiv d) \land \lnot (b \land c \land d)) \equiv \lnot b$ under the same assumption in the previous question >
$c \equiv (b \equiv \lnot b)$
$\equiv$ < (3.15) >
$c \equiv false$
$\equiv$ < (3.15) >
$\lnot c$
$\equiv$ < Assumption $d \equiv \lnot c$ >
$d$

$\therefore$ $d$ is a knight and $c$ is a knave

(g)
$b \equiv \lnot b \land \lnot c \land \lnot d$
$c \equiv (b \equiv c \equiv d) \land \lnot (b \land c \land d))$

$c \equiv ((b \equiv c \equiv d) \land \lnot (b \land c \land d))$
$\equiv$ 
$c \equiv b \equiv c \equiv d$
$true \equiv b \equiv d$
$b \equiv d$

$c \equiv (d \equiv c \equiv d) \land \lnot (d \land c \land d))$
$c \equiv (c \land \lnot (d \land c))$
$c \equiv (c \land (\lnot d \lor \lnot c))$
$c \equiv (c \land \lnot d)$
$c \equiv \lnot d$
$c \equiv \lnot d \equiv \lnot b$

$\therefore$ $c$ is a knight and $b$ and $d$ are knaves


## Question 11 from Assignment 3
Exercise 12.42 (page 247 of the Gries-Schneider textbook), question (a).
*make sure you understand*

### (a)
$\{Q|n \ge 0\}$
$k,b,c := 0,1,0$
$\{invariant \; P: 0 \le k \le n \land b = F_{k-1} \land c = F_k\}$
**do** $k \not = n \rightarrow k,b,c := k+1, c,b+c$ **od**
$\{R : c = F_n\}$

(a) $P$ is $true$ before execution of loop

Proof using method (10.2).

Assume $Q$, then
$P[k,b,c := 0,1,0]$
$\equiv$ < Definition of $P$; Textual Substitution >
$0 \le 0 \le n \land 1 = F_{0-1} \land 0 = F_0$
$\equiv$ < Arithmetic >
$0 \le 0 \le n \land 1 = F_{-1} \land 0 = F_0$
$\equiv$ < Definition of Fibonacci numbers (12.14) >
$0 \le 0 \le n \land 1 = 1 \land 0 = 0$
$\equiv$ < Assumption $Q$ >
$true \land 1 = 1 \land 0 = 0$
$\equiv$ < Identity of $\equiv$ >
$true \land true \land true$
$\equiv$ < Identity of $\land$ -- twice >
$true$

(b) $P$ is loop invariant
$\{P \land B\} \; S \; \{P\}$

Proof using method (10.2).

Assume $P \land B$ then
$P[k,b,c := k+1, c,b+c]$
$\equiv$ < Definition of $P$; Textual substitution >
$0 \le k + 1 \le n \land c = F_{k-1+1} \land b + c = F_{k+1}$
$\equiv$ < Arithmetic >
$0 \le k + 1 \le n \land c = F_{k} \land b + c = F_{k+1}$
$\equiv$ < Assumption $B \land P \Rightarrow k \not = n \land 0 \le k \le  n \equiv 0 \le k <  n$ >
$true \land c = F_k \land b + c = F_{k+1}$
$\equiv$ < Assumption $P \Rightarrow b = F_{k-1} \land c = F_k$ >
$true \land true \land F_{k-1} + F_k = F_{k+1}$
$\equiv$ < Definition of Fibonacci number >
$true \land true \land true$
$\equiv$ < Identity of $\land$ -- twice >
$true$

(c) Execution of loop terminates

$P$ grantees that $0 \le k \le n$, and the loop increments $k$ by $1$ each time. Therefore it is guaranteed that eventually $k$ will increment until $k = n$ at which point the loop will terminate.

(d) $R$ holds upon termination
$P \land \lnot B \Rightarrow R$

Assume $P \land \lnot B$, then
$c = F_n$
$\equiv$ < Assumption $\lnot B \equiv \lnot(k \not = n) \equiv k = n$ >
$c = F_k$
$\equiv$ < Assumption $P$ >
$true$

### (b)
#todo continue more subproblems if you have time...


## Exercise 7.2 from Tutorial 5
*make sure you understand*

(a) *any sequence of the form $aMbIc$ where $a,b,c$ denote finite sequence of $0$ or more $o$'s*
1. $oMoIo$
2. $MoIo$
3. $MIo$
4. $MI$
5. $MoooI$

(b)
1. 
$ooMooIoooo$
$\Rightarrow$ < Inf Rule 1 >
$ooooMooIoooooooo$

2. 
$ooMooIoooo$
$\Rightarrow$ < Inf Rule 2 >
$ooooMoIoooo$

3. 
$ooMooIoooo$
$\Rightarrow$ < Inf Rule 1 >
$ooooMooIoooooooo$
$\Rightarrow$ < Inf Rule 1 >
$ooooooooMooIoooooooooooooooo$

4. 
$ooMooIoooo$
$\Rightarrow$ < Inf Rule 2 >
$ooooMoIoooo$
$\Rightarrow$ < Inf Rule 1 >
$ooooooooMoIoooooooo$

5. 
$ooMooIoooo$
$\Rightarrow$ < Inf Rule 1 >
$ooooMooIoooooooo$
$\Rightarrow$ < Inf Rule 1 >
$ooooooooMooIoooooooooooooooo$
$\Rightarrow$ < Inf Rule 1 >
$ooooooooooooooooMooIoooooooooooooooooooooooooooooooo$

(c)
Let any formula
$aMbIc \succ \#a \times \#b = \#c$
where $\#x$ denote the number of $o$s in the sequence

An interpretation is a model for a logic iff every theorem is mapped to true by the interpretation.

Axioms
$ooMooIoooo \succ 2 \times 2 = 4$ which is true!

$\frac{aMbIc}{aaMbIcc} \succ \frac{a \times b = c}{2a \times b = 2c}$ which is true!

$\frac{aMbbIcc}{aaMbIcc} \succ \frac{a \times 2b \times 2c}{2a \times b \times 2c}$ which is true!

(d)
A formula that is true in our interpretation is
$oMI \succ 1 \times 0 = 0$
however this cannot be true in our interpretation because our single axiom has $2$ $o$s in between $MI$ and there exist no inference rules which reduce the number of $o$s between $MI$ to $0$. Therefore, we cannot prove $1 \times 0 = 0$ is a theorem in this logic.


## Writing Postconditions for Programs

### (Practice) Question 20 from Assignment 2
Exercise 10.6 (page 192 of the Gries-Schneider text), questions (g), (i) and (k).

### (Practice) Question 21 from Assignment 2
Exercise 10.7 (page 192 of the Gries-Schneider textbook), questions (f) and (h).

### (Practice) Question 22 from Assignment 2
Exercise 10.10 (page 193 of the Gries-Schneider textbook).

### (Practice) Question 23 from Assignment 2
Exercise 10.14 (page 194 of the Gries-Schneider textbook).

### (Practice) Question 24 from Assignment 2

### (Practice) Question 25 from Assignment 2

### (Practice) Question 26 from Assignment 2

## Induction Proof over Natural Numbers

### (Practice) Question 12.4 covered in Tutorial 8

### (Practice) Question 12.5 covered in Tutorial 8

### (Practice) Question 12.6 covered in Tutorial 8

### (Practice) Question 12.10 covered in Tutorial 8

### (Practice) Question 12.7 covered in Tutorial 8

### (Practice) Question 12.23 covered in Tutorial 8


## Proof of Properties of Set Difference
*One of the following proofs will be on the exam*

### (11.49) Proof
$S - T = S \cap \sim T$

We will use proof method (11.11)(b)

Let $v$ be an arbitrary element in $S-T$ such that
$v \in S-T$
$\equiv$ < (11.22) Axiom, Difference >
$v \in S \land v \not \in T$ 
$\equiv$ < (3.39) Identity of $\land$ >
$v \in S \land v \not \in T \land true$ 
$\equiv$ < $v \in U \equiv true$ for all $v$ where $U$ is the universe of elements >
$v \in S \land v \not \in T \land v \in U$ 
$\equiv$ < (11.17) Axiom, Complement >
$v \in S \land v \in \sim T$
$\equiv$ < (11.21) Axiom, Intersection >
$v \in S \cap \sim T$

$\therefore$ by (11.4) Extensionality $S - T = S \cap \sim T$

### (11.50) Proof
$S - T \subseteq S$

Let $v$ be an arbitrary element in $S-T$ such that
$v \in S-T$
$\equiv$ < (11.49) >
$v \in S \cap \sim T$
$\equiv$ < (11.21) Axiom, Intersection >
$v \in S \land v \in \sim T$
$\Rightarrow$ < (3.76) Weakening >
$v \in S$

since $v$ is arbitrary, we can conclude then...
$(\forall v|: v \in S -T \Rightarrow v \in S)$
$\equiv$ < (9.2) Axiom, Trading >
$(\forall v| v \in S -T : v \in S)$
$\equiv$ < (11.3) Axiom, Subset >
$S-T \subseteq S$

### (11.51) Proof
$S - \emptyset = S$

We will use proof method (11.11)(b)

Let $v$ be an arbitrary element in $S-\emptyset$ such that
$v \in S - \emptyset$
$\equiv$ < (11.49) >
$v \in S \cap \sim \emptyset$
$\equiv$ < (11.21) Axiom, Intersection >
$v \in S \land v \in \sim \emptyset$
$\equiv$ < (11.17) Axiom, Complement >
$v \in S \land v \not \in\emptyset$
$\equiv$ < $\emptyset$ contains no elements and $v \not \in \emptyset \equiv true$ >
$v \in S \land true$
$\equiv$ < (3.39) Identity of $\land$ >
$v \in S$

$\therefore$ by (11.4) Extensionality $S - \emptyset = S$

### (11.52) Proof
$S \cap (T-S) = \emptyset$

$S \cap (T-S)$
$\equiv$ < (11.49) >
$S \cap (T \cap \sim S)$
$\equiv$ < (11.33) Symmetry of $\cap$ >
$S \cap (\sim S \cap T)$
$\equiv$ < (11.34) Associativity of $\cap$ >
$(S \cap \sim S) \cap T$
$\equiv$ < (11.39) Contradiction >
$\emptyset \cap T$
$\equiv$ < (11.36) Zero of $\cap$ >
$\emptyset$

### (11.53) Proof (Question 2 from Assignment 3)
$S \cup (T-S) = S \cup T$

$S \cup (T-S)$
$\equiv$ < (11.49) >
$S \cup (T \cap \sim S)$
$\equiv$ < (11.40) Distributivity of $\cap$ over $\cup$ >
$(S \cup T) \cap (S \cup \sim S)$
$\equiv$ < (11.36) Excluded Middle where $U$ is the universe of elements >
$(S \cup T) \cap U$
$\equiv$ < (11.37) Identity of $\cap$ >
$S \cup T$

### (11.54) Proof
$S - (T \cup U) = (S-T) \cap (S-U)$

$(S-T) \cap (S-U)$
$\equiv$ < (11.49) >
$(S \cap \sim T) \cap (S\cap \sim U)$
$\equiv$ < (11.34) Associativity of $\cap$ ; (11.33) Symmetry of $\cap$ ; (11.34) Associativity of $\cap$ ;>
$(S \cap S) \cap (\sim T \cap \sim U)$
$\equiv$ < (11.35) Idempotency of $\cap$ >
$S \cap (\sim T \cap \sim U)$
$\equiv$ < (11.42) DeMorgan (a) >
$S \cap \sim( T \cup U)$
$\equiv$ < (11.22) Axiom, Difference >
$S -( T \cup U)$

### (11.55) Proof
$S-(T \cap U) = (S-T) \cup (S-U)$

$(S-T) \cup (S-U)$
$\equiv$ < (11.49) >
$(S \cap \sim T) \cup (S\cap \sim U)$

Construct $E_p$ from $E_s = ((S \cap \sim T) \cup (S\cap \sim U))$ according to (11.24)
$E_p = (s \land \lnot t) \lor (s \land \lnot u)$
$\equiv$ < (3.46) Distributivity of $\land$ over $\lor$ >
$s \land (\lnot t  \lor \lnot u)$
Reconstructing our result $F_p$ to $F_s$ creates $S \cap (\sim T \cup \sim U)$, therefore by (11.25)

$(S \cap \sim T) \cup (S\cap \sim U) \equiv S \cap (\sim T \cup \sim U)$
$\equiv$ < (11.42) De Morgan (b) >
$(S \cap \sim T) \cup (S\cap \sim U) \equiv S \cap \sim (T \cap U)$
$\equiv$ < (11.49) >
$(S - T) \cup (S- U) \equiv S - (T \cap U)$

## Proof Using Propositional/Predicate Logic

### Question 5 from the Midterm
[Solution](https://docs.google.com/document/d/1GuID3eJA1eOUTBcfjDlDWV40gO_YLXDvGTpJsMP8Oec/edit)

Let 
$r$ = "an algorithm is reliable"
$o$ = "an algorithm is okay"

The argument in the inclusive sense is
$(r \Rightarrow o) \Rightarrow (o \lor \lnot r)$
$(r \Rightarrow o) \Rightarrow (\lnot r \lor o)$
$true$


The argument in the exclusive sense is
$(r \Rightarrow o) \Rightarrow (o \not \equiv \lnot r)$
$(r \Rightarrow o) \Rightarrow (\lnot o \equiv \lnot r)$
$(r \Rightarrow o) \Rightarrow (o \equiv r)$
$(r \Rightarrow o) \Rightarrow o \equiv (r \Rightarrow o) \Rightarrow  r$
$\lnot(\lnot r \lor o) \lor o \equiv \lnot (\lnot r \lor o) \lor  r$
$(r \land \lnot o) \lor o \equiv ( r \land \lnot o) \lor  r$
$(r \lor o) \land (\lnot o \lor o) \equiv ( r \lor r) \land (\lnot o \lor  r)$
$(r \lor o) \land true \equiv r \land (\lnot o \lor  r)$
$r \lor o \equiv r$
$r \lor \lnot o$
$o \Rightarrow r$

$\therefore$ it is neither true nor false?

### (9.10) Proof
$(\forall x | Q \lor R:P ) \Rightarrow (\forall x| Q:P)$

$(\forall x | Q \lor R:P )$
$\equiv$ < (8.18) Range split for idempotent $\star$ >
$(\forall x | Q:P ) \land (\forall x | R:P )$
$\Rightarrow$ < (3.76) Weakening (b) >
$(\forall x | Q:P )$


### (9.11) Proof
$(\forall x | R:P \land Q) \Rightarrow (\forall x |R:P)$

$(\forall x | R:P \land Q)$
$\equiv$ < (8.15) Axiom, Distributivity >
$(\forall x | R:P) \land (\forall x | R: Q)$
$\Rightarrow$ < (3.76) Weakening (b) >
$(\forall x | R:P)$

## Given a Binary Relation Use it to Prove a Theorem

### Slides 11-14 from Lecture 15
*Symmetric Difference*

Let $R$ be a non-empty binary relation on $B$. Define the relations $R^{ac}$, $\prec_1$ and $\prec_2$ on $B$ as follows:

(a) $bR^{ac}c \Leftrightarrow bRc \land (\lnot cR^+b)$, for all $b,c \in B$. In other words, $R^{ac}$ is $R$ after removing all cycles

(c) $b \prec_1 c \Leftrightarrow b R^+ c \land (\lnot c R^+ b)$ for all $b,c, \in B$ i.e. $\prec_1 = R^+ \cap (\sim R^+) = R^+ (B \times B \backslash R^+)$

(d) $b \preceq_2 c \Leftrightarrow b(R^{ac})^+c$

Prove that $\prec_1$ and $\prec_2$ are sharp partial orders and $\prec_2 \subseteq \prec_1$

According to (14.48) a relation is a sharp partial order if it is transitive and irreflexive.

##### $\prec_1$ is a sharp partial order

We must prove it is transitive $(\forall b,c,d|: b\rho c \land c \rho d \Rightarrow b \rho d)$

Let $b \prec_1 c$ and $c \prec_1 d$  for some $b,c,d \in B$, then
$b \prec_1 c \land c \prec_1 d$
$\equiv$ < Definition of $\prec_1$ >
$b R^+ c \land (\lnot c R^+ b) \land c R^+ d \land (\lnot cc R^+ d)$
$\equiv$ < Propositional Logic >
$b R^+ c \land c R^+ d \land (\lnot c R^+ b)  \land (\lnot cc R^+ d)$
$\Rightarrow$ < By definition $R^+$ is transitive, since it is the transitive closure of $R$ >
$b R^+ d \land (\lnot c R^+ b) \land (\lnot d R^+ c)$

What is left to prove is that $(\lnot c R^+ b) \land (\lnot d R^+ c) \Rightarrow (\lnot d R^+ b)$.
Assume $(\lnot c R^+ b) \land (\lnot d R^+ c)$ and suppose
$d R^+ b$
$\Rightarrow$ < Transitive property of $R$ and the assumption $b R^+ c$ >
$d R^+ c$
$\equiv$ < Under our assumption $(\lnot c R^+ b) \land (\lnot d R^+ c)$ >
$false$

this is a contradiction! This means that in fact $(\lnot c R^+ b) \land (\lnot d R^+ c) \Rightarrow (\lnot d R^+ b)$ and $\prec_1$ is transitive

and we must prove it is irreflexive $(\forall b|: \lnot(b \rho b))$

Let $b \prec_1 b$ for some element $b \in B$, then
$b R^+ b \land (\lnot b R^+ b)$
$\equiv$ < Contradiction $\land$ >
$false$

this is a contradiction! $\therefore$ for all $b \in B$, $b \not \prec_1 b$ and $\prec_1$ is irreflexive

##### $\prec_2$ is a sharp partial order

We must prove it is transitive $(\forall b,c,d|: b\rho c \land c \rho d \Rightarrow b \rho d)$

Let $b \prec_2 c$ and $c \prec_2 d$  for some $b,c,d \in B$, then
$b \prec_2 c \land c \prec_2 d$
$\equiv$ < By definition of $\prec_2$ >
$b(R^{ac})^+c \land c(R^{ac})^+d$
$\Rightarrow$ < $(R^{ac})^+$ is transitive by definition because it is a transitive closure >
$b(R^{ac})^+d$

and we must prove it is irreflexive $(\forall b|: \lnot(b \rho b))$

Let $b \prec_2 b$ for some element $b \in B$, then
$b \prec_2 b$
$\equiv$ < Definition of $\prec_2$ >
$b(R^{ac})^+b$
$\equiv$ < Composition Rules (2) Alternative definition >
$(\exists i|i = 0, \dots, \infty: bR^{ac^i} b)$

Let $i$ be the existing value for which $bR^{ac^i} b$ then
$\equiv$ < Definition of $R^{ac}$ >
$bR^ib \land (\lnot bR^+b)$
$\equiv$ < Contradiction $\land$ >
$false$

this is a contradiction! $\therefore$ for all $b \in B$, $b \not \prec_2 b$ and $\prec_2$ is irreflexive

##### $\prec_2 \subseteq \prec_1$

We will first prove $R^{ac} \subseteq \prec_1$ , Let $bR^{ac}c$ for some element $b,c \in B$, then
$bR^{ac}c$
$\equiv$ < Definition of $R^{ac}$ >
$bRc \land (\lnot c R^+b)$
$\Rightarrow$ < by Composition Rules (2) $bRc \equiv bR^0c \Rightarrow (\exists i| i = 0, ..., \infty: bR^ic)$ >
$bR^+c \land (\lnot c R^+b)$
$\equiv$ < Definition of $\prec_1$ >
$b \prec_1 c$

$\therefore R^{ac} \subseteq \prec_1$
$\Rightarrow$
$(R^{ac})^+ \subseteq \prec_1^+$
$\equiv$ < Definition of $\prec_2$ >
$\prec_2 \subseteq \prec_1^+$
$\equiv$ < Lemma if $R$ is transitive $\Rightarrow R^+ = R$ >
$\prec_2 \subseteq \prec_1$

$\therefore \prec_2 \subseteq \prec_1$

### Slide 15 from Lecture 15
*Prove Binary Relation by Induction*

To complete out proof from above we must prove the lemma if $R$ is transitive $\Rightarrow R^+ = R$

recall by composition rules $R^+ = (\cup i|0 <i: R^i)$
trivially, $R \subseteq R^+$

now we must prove $R^+ \subseteq R$ by induction
1. base case $R \subseteq R$
2. inductive step
assume $R^i \subset R$
consider $R^{i+1}$, let $bR^{i+1}c$
$bR^{i+1}c$
$\equiv$ < Transitive property of $R$ >
$(\exists d|d \in B: bR^id \land dRc)$
$\Rightarrow$ < Transitive property of $R$ >
$(\exists d|d \in B: bRd \land dRc)$
$\Rightarrow$ < Transitive property of $R$ >
$bRc$

$\therefore$ $R \subseteq R^+ \land R^+ \subseteq R \equiv R^+ = R$

## Prove Programs are Equivalent

### Slides 14-17 form Lecture 12
*Factorial and Hoare Logic*

$\{P_0\}$
$i,f:=1,1$
$\{P_1\}$
$\{P_2\}$
**while** $i < n$ **do**
**begin** $f:= f*i$, $i := i + 1$ **end**
**od**
$\{P_3\}$

Let $P_0 = (n > 0)$ and $P_3= (f = n!)$. There are *clear* pre and post conditions based on the purpose of our program. Based on the first line, we can conclude $P_1 =(i =1 \land f =1 \land n > 0)$. We will show $P_2=(f = i! \land i \le n)$ is loop invariant.

(a) $P_1$ is $true$ before execution of loop

Proof using method (10.2).

Assume $P_0$, then

$P_1[i,f:=1,1]$
$\equiv$ < Definition of $P_1$; textual substitution >
$1 =1 \land 1 =1 \land n > 0$
$\equiv$  < Assumption $P_0$ >
$1 =1 \land 1 =1 \land true$
$\equiv$ < Identity of equality >
$true \land true \land true$
$\equiv$ < Identity of $\land$ >
$true$

(b) $P_2$ is loop invariant
$\{P_2 \land B\} \; S \; \{P_2\}$

Proof using method (10.2).

Assume $P_2$ and $B$, then
$P_2[f := f*i][i:=i+1]$ *note the order of the sequence matters*!
$\equiv$ < Definition of $P_2$; textual substitution >
$f * (i+1) = (i+1)! \land i+1 \le n$
$\equiv$ < Assumption that $B \equiv i < n \Rightarrow i+1 \le n$ >
$f * (i+1) = (i+1)! \land true$
$\equiv$ < Assumption that $P_2 \Rightarrow f = i!$ >
$i! * (i+1) = (i+1)! \land true$
$\equiv$ < Arithmetic >
$true \land true$
$\equiv$ < Identity of $\land$ >
$true$

(c) Execution of loop terminates

Since $P_1$ guarantees $i =0$ and $n > 0$ and the loop increments $i := i+1$ at every iteration, it is guaranteed that eventually $i$ will surpass $n$ which is a constant value $>0$. At this point the condition $B \equiv i < n$ will no longer be satisfied and the loop will terminate.

(d) $P_3$ holds upon termination
$P_2 \land \lnot B \Rightarrow P_3$

Assume $P_2$ and $\lnot B$, then
$P_3$
$\equiv$ < Definition of $P_3$ >
$f = n!$
$\equiv$ < Assumption $P_2 \land \lnot B \Rightarrow i \ge n \land i \le n \equiv i = n$ >
$f = i!$
$\equiv$ < Assumption $P_2 \Rightarrow f = i!$ >
$true$

### Question 19 from Assignment 3
*Proof using Binary Associative Operator*

Show that $(S, \circ, 1)$ is a group if $\circ$ is a binary associative operation with left identity $1$ and every element has a left inverse.

First we will prove left-cancellation theorem i.e. $d \circ b \equiv d \circ c \equiv b=c$

$b=c$
$\equiv$ < Apply $d \; \circ$ to both sides >
$d \circ b=d \circ c$

By definition (18.17) A group is an algebra if

(a) $\circ$ is a binary, associative operation
*this is true by definition*

(b) $\circ$ has the identity $1$ in $S$
$1 \circ b = b$ is already proven by definition, now we must prove 

$b \circ 1 =b$
$\equiv$ < Apply $b^{-1} \circ$ to both sides >
$b^{-1} \circ b \circ 1 =b^{-1} \circ b$
$\equiv$ < Left inverse $b^{-1} \circ b = 1$ >
$1 \circ 1 =1$
$\equiv$ < Left identity $1 \circ 1$ >
$1 = 1$
$\equiv$ < Identity of $\equiv$ >
$true$

(c) Every element $b \in S$ has an inverse (which we write as $b^{-1}$)
$b^{-1} \circ b = 1$ is already proven by definition, now we must prove 

$b \circ b^{-1} =1$
$\equiv$ < Apply $b^{-1} \circ$ to both sides >
$b^{-1} \circ b \circ b^{-1} = b^{-1} \circ 1$
$\equiv$ < Left inverse $b^{-1} \circ b = 1$ >
$1 \circ b^{-1} = b^{-1} \circ 1$
$\equiv$ < Identity $1 \circ 1$ >
$b^{-1} = b^{-1}$
$\equiv$ < Identity of $\equiv$ >
$true$

## Prove an Algorithm is Correct Using Checklist
*Theorem (12.43)*

### (Practice) Question 11 from Assignment 3
Exercise 12.42 (page 247 of the Gries-Schneider textbook), question (a).

### (Practice) Question 12 from Assignment 3

### (Practice) Question 13 from Assignment 3


## Boolean Algebra
*Page 418 of the textbook, there will be a proof based on this page*

### Slides 23-25 from Lecture 15

Let $(S, \oplus, \otimes, \sim , 0, 1)$ be a Boolean algebra. Prove for all $b,c \in S$ we have 

(18.53) $b \oplus c = 1 \land c \otimes b = 0 \equiv c = \sim b$

First we prove $b \oplus c = 1 \land c \otimes b = 0 \Leftarrow c = \sim b$

Assume $c = \sim b$, then
$b \oplus c = 1 \land c \otimes b = 0$
$\equiv$ < Assumption $c \equiv \sim b$ >
$b \oplus \sim b = 1 \land \sim b \otimes b = 0$
$\equiv$ < (b) >
$b \oplus \sim b = 1 \land b \otimes \sim b = 0$
$\equiv$ < (d) >
$true \land true$
$\equiv$
$true$

Now we prove $b \oplus c = 1 \land c \otimes b = 0 \Rightarrow c = \sim b$

Assume $b \oplus c = 1 \land c \otimes b = 0$ then
$c = \sim b$
$\Rightarrow$ < (d) >
$b \oplus c = 1 \land b \otimes c = 0$
$\equiv$ < (b) >
$b \oplus c = 1 \land c \otimes b = 0$
$\equiv$ < Assumption $b \oplus c = 1 \land c \otimes b = 0$ >
$true$

$\therefore$  by mutual implication, $b \oplus c = 1 \land c \otimes b = 0 \equiv c = \sim b$

### (Practice) Question 20 from Assignment 3
Exercise 18.60 (page 420 of the Gries-Schneider textbook).

## Questions Covered Tutorial 10
*The first slide says "this is everything you will need for the exam"*

### (Practice) Proof of Membership (14.4)

### (Practice) Proof of (14.5)

### (Practice) Proof of (14.22)

### (Practice) Prove that $p^m \circ p^0 = p^m$ for $m \ge 0$

### (Practice) Proof of (14.27)

### (Practice) Question 14.35 From the Textbook

### (Practice) Proof of (18.6)

### (Practice) Question 18.12 From the Textbook

### (Practice) Question 18.17 From the Textbook

### (Practice) Question 18.18 From the Textbook

### (Practice) Proof of (18.63)

### (Practice) Proof of (18.61)

