# dependency theory

using the example schema: `student(sid,name,age,birthdate,program,department)`

- notice: age can be derived from birthdate, department can be derived from program, and sid is a primary key

## functional dependency

$A \to B$

attribute A determines attribute B

formally: $(r_1[X] = r_2[X]) \implies (r_1[Y] = r_2[Y])$ (if x values for two rows are the same, the y values for the rows will also be he same)

### example

student(sid, name, age, birthdate, program, department)

sid $\to$ name, age, birthdate, program, department 

birthdate $\to$ age

program $\to$ department (attribute program determines department)

## set of dependencies

- $\mathfrak{S}$ - set of dependencies
- $\mathfrak{S} \vDash D$ - $\mathfrak{S}$ implies D, only when for all instances $I$ of the relation schema $R$ (that D is a dependency over), if $I$ satisfies $\mathfrak{S}$ , then $I$ satisfies $D$
    - informally - $\mathfrak{S} \vDash D$ if it can be proven that $D$ holds only using $\mathfrak{S}$

## good set of inference rules

must be:

- sound - every rule is correct
- complete - everything that holds can be derived from the rules
- independent - no rule can be taken away, every rule is needed

## armstrong's axioms for functional dependencies

name | axiom
---|---
reflexivity | if $Y\subseteq X$, then $X \to Y$ (example: $Y \subseteq YZ$, derive $YZ \to Y$) 
augmentation | if $X \to Y$ then $XZ \to YZ$ for any $Z$
transitivity | if $X \to Y$ and $Y \to Z$, then $X \to Z$

## attribute closure

- Closure($\mathfrak{S}, X$) - find all attributes that can be determined by X using the set of dependencies $\mathfrak{S}$
    1. closure := X
    2. while there exists $(A \to B) \in \mathfrak{S}$ with
        - $A \subseteq$ closure; and
        - $B \not\subseteq$ closure
    3. do closure := closure $\cup B$
    4. return closure

### using closure

- if attribute $y \in$ Closure($\mathfrak{S}, X$) then $\mathfrak{S} \vDash X \to y$

- write Closure($\mathfrak{S}, X$ as $X^+$ if $\mathfrak{S}$ is clear from the context

## closure of functional dependency

- **Closure Of Functional Dependency** - the complete set of all possible attributes that can be functionally derived from given functional dependency using the inference rules known as Armstrong’s Rules

- $\mathfrak{S}^+ = \lbrace X \to Y | \mathfrak{S} \vDash X \to Y\rbrace$

### example

$\mathfrak{S}^+$ for $\mathfrak{S} = \lbrace S \to NABPD, B\to A, P\to D\rbrace$

$$\mathfrak{S}^+ = \begin{matrix} \lbrace  X \to Y | Y \subseteq X \subseteq \lbrace S,N,A,B,P,D \rbrace  \rbrace  \cup \newline \lbrace  SX \to Y | X,Y \subseteq \lbrace S,N,A,B,P,D \rbrace  \rbrace  \cup \newline \lbrace  BX \to AY | Y \subseteq X \subseteq \lbrace S,N,A,B,P,D \rbrace  \rbrace  \cup \newline \lbrace  PX \to DY | Y \subseteq X \subseteq \lbrace S,N,A,B,P,D \rbrace  \rbrace  \cup \newline \lbrace  BPX \to ADY | Y \subseteq X \subseteq \lbrace S,N,A,B,P,D \rbrace  \rbrace  \end{matrix}$$

### minimal cover

- $S$ - minimal cover of $\mathfrak{S}$ such that
    - $\mathfrak{S}^+ = S^+$ (same function dependency)
    - $|Y| = 1$ for all $X \to Y$ \in S (dependencies in S are minimalistic)
    - $R^+ \neq S^+$ for all $R \subset S$ (no dependency can be removed)

## other dependencies

### multivalued dependency

$X \twoheadrightarrow Y$

attribute Y and some attribute Z are independent for attribute X

formally: for every $I$ in $R$, for every pair of rows $r_1,r_2 \in I$ where $r_1[X] = r_2[X]$, there exists a row $r_3 \in I$ where  $r_1[XY] = r_3[XY]$ and  $r_2[XZ] = r_3[XZ]$

#### example

for the following table:

course | student | TA
---|---|---
Programming | Celeste | Alicia
Programming | Frieda | Alicia
Programming | Celeste | Dafni
Programming | Frieda | Dafni
Databases | Bo | Eva
Databases | Dafni | Eva
Databases | Bo | Alicia
Databases | Dafni | Alicia

- course $\twoheadrightarrow$ student
- course $\twoheadrightarrow$ TA

#### armstrong's axioms for multivalued dependencies

name | axiom
---|---
Complementation | If $X \twoheadrightarrow Y$ , then $X \twoheadrightarrow Z$ (with Z all attributes of R not in X and Y)
Augmentation | If $X \twoheadrightarrow Y$ and $V \subseteq W$ , then $XW \twoheadrightarrow YV$
Transitivity | If $X \twoheadrightarrow Y$ and $Y \twoheadrightarrow Z$, then $X \twoheadrightarrow (Z \ Y )$
Replication | If $X \to Y$ , then $X \twoheadrightarrow Y$
Coalescence | If $X \twoheadrightarrow Y$ and $V \to W$ such that $Y \cap V = \emptyset$ and $W \subseteq Y$, then $X \to W$