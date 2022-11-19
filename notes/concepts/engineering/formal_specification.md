# formal specification

if we can give a mathematical definition of the program it leaves no room for ambiguity

## from specification to implementations

specification - what it does |  implementation - how it does it
---|---
math/logic | code/computers
natural numbers, integers | -> int
real numbers | -> doubles, floats
strings | -> strings
sets | -> sets, collections, binary tree, heaps, red-black, graphs
sequences | -> lists, arrays, arraylists

## quantifiers

$(\forall i:\N | 0 < i < 5 : P(i))$


must be symmetric, associative, identity

- identity - if the range is false, default to the identity 
    - example - identity of $\land$ - $x \land true \equiv x$ - true

### example

$(+i | 0 \leq i \leq 5 : 2) = 12$

$\sum_{i=0}^{5} 2$ = 12


$(+i,j | 0 \leq i \leq 5 \land 0 \leq j \leq 5 : 2) = 72$ like a nested for loop


$(\exists i:\N | 0 \leq i < |L| : L[i] = x)$


$count(L:\N [], x:\N)$

$(+i:\N | 0 \leq i < |L| \land L[i] = x: 1)$

$sortedcopy(L:\N []) = L$

$(\forall i | 0\leq i \leq |L'|-1: L'[i] \leq L'[i+1]) \land |L| = |L'| \land (\forall i | 0\leq i \leq |L'|: L[i] \in L' \land count(L,L[i]) = count(L',L[i] ))$

or 

$(\forall i |0\leq i < |L'|-1: L'[i] \leq L'[i+1]) \land (\forall i |: count(L,i) = count(L',i))$

## notation

$contains(L:\N [], x:\N)$

- takes in L, a sequence of integers
- takes in x, a sequence of integers
- $L[i]$ - L is a sequence accessible by index i
- $x \in L$ -  x is in L
- $|L|$ is the size of the sequence (cardinality)

## user set example

User = (username: String, name: String)
u: User = ("user", "real name"
u.username -> user
u.name -> real name

myUserSet: User()

is a set valid?

$(\forall x,y:User |: x\in UserSet \land y \in UserSet, x\neq y \implies x.username \neq y.username)$

note:

$(\forall x |R:P(x)) \implies (\exists x|R:P(x))$ not equivalent to true because of the empty range (if $R\equiv false$, identity of $\land$ is true, identity of $\lor$ is false)

$(\forall x |R:P(x)) \implies (\exists x|R:P(x)) \equiv (\exists x |R:P(x))$

## valid group example

### types

- Student = Tuple(id: Sting, gender: String, discipline: String, section: $\mathbb{Z}$)
- Team = Student{}

### available variables

- Classlist: Student{}
- Teans: Team{}

### informal criteria

1. everyone in the teams is enrolled in the course
2. unique students in class list
3. each student enrolled in the course is a team
4. no student appears in two different teams: exactly one team
5. all teams have four to six students
6. 3-4 different disciplines in each teams
7. all students in a team should be in the same section
8. each team does not have a single female
9. max number of disciplines in a group

### formal specs

1. $(\forall t: Team | t \in Teams : (\forall s: Student | s \in t : s \in Classlist)) $
2. $|{s:Student | s\in Classlist: s}| = |Classlist|$
3. $(\forall s: Student | s \in Classlist : (\exists x: Team | x \in Teams : s \in x))$
4. $(\forall s:Student| s \in Classlist : 1 == (+ t:Team | t \in Teams \land s \in t: 1))$
5. $(\forall t: Team | t \in Teams : 4 \leq |t| \leq 6)$
6. $(\forall t: Team | t \in Teams : 3 \leq numOfDisc(t) \leq 4)$
7. $(\forall t : Team | t \in Teams : (\forall s_1,s_2 : Student | s_1,s_2 \in t : s_1.section = s_2,section)$
8. $(\forall t:Teams | t\in Teams : numOfWomen(t) \neq 1)$
9. $(\forall t:Team | t\in Teams : numOfDisc(t) \geq 3)$

### local functions

- numOfDisc(t): $Team \in \N$ =
    - $|\lbrace s:Student | s \in t : s.disc \rbrace|$
    - $|(\cup s:Student | s \in t : \lbrace s.disc\rbrace)|$
- numOfWOmen(t): $Team \in \N$ =
    - $(\sum s:Student | s \in t : s.gender = "f")$
- validTeams(teams): Team{} $\implies \mathbb{B}$ iff all formal criteria are met
- totalTeamDiversity(teams): Team{} $\implies \N$ 
    - $(\sum t:Team | t \in Teams : numOfDisc(t))$
- getBestTeams(): $\implies$ Team{} = $teams^*$ such that:
    - $(\forall ts:Team{} |validTeams(ts):totalDiscDiv(teams)\leq totalDiscDiv(teams*)) \land validTeams(teams^*)$