# dependency theory

using the example schema: `student(sid,name,age,birthdate,program,department)`

- notice: age can be derived from birthdate, department can be derived from program, and sid is a primary key

## functional dependency (over relation schema $R$)

$A \to B$

attribute A determines attribute B

formally: $(r_1[X] = r_2[X]) \implies (r_1[Y] = r_2[Y])$ (if x values for two rows are the same, the y values for the rows will also be he same)

### example

student(sid, name, age, birthdate, program, department)

sid $\to$ name, age, birthdate, program, department 

birthdate $\to$ age

program $\to$ department (attribute program determines department)

### proof of $BP \to AD$ (example)

assume we have rows $r_1,r_2 \in \mathbb{I}$ of instance $\mathbb{I}$ of student such that $r_1[BP] = r_2[BP]$

- by $r_1[BP] = r_2[AD]$ we have $r_1[B] = r_2[B]$ and $ $r_1[P] = r_2[P]$
- using $B \to A$ and $r_1[B] = r_2[B]$ we conclude $r_1[A] = r_2[A]$
- using $P \to D$ and $r_1[P] = r_2[P]$ we conclude $r_1[D] = r_2[D]$
- by $r_1[A] = r_2[A]$ and $r_1[D] = r_2[D]$ we have $r_1[AD] = r_2[AD]$

hence $r_1[AD] = r_2[AD]$ holds

## implication of dependencies

- $\mathfrak{S}$ - set of dependencies
- $D$ - a dependency (over relation schema $R$)
- $\mathfrak{S} \vDash D$ ($\mathfrak{S}$ implies $D$), when for all instances $I$ of the relation schema $R$, if $I$ satisfies $\mathfrak{S}$, then $I$ also satisfies $D$
    - informally - $\mathfrak{S} \vDash D$ if it can be proven that $D$ holds only using $\mathfrak{S}$

### example

since we have proved $BP \to AD$, we define $\mathfrak{S}$ and $D$ as such:

- $\mathfrak{S} = \\{b\to a,p\to d\\}$
- $D = bp \to ad$

and say $\mathfrak{S} \vDash D$

## inference rules

idea: we want to make rules that cover common proof steps, then prove correctness of these rules

a good set of inference rules must be:

- sound - every rule is correct
- complete - everything that holds can be derived from the rules
- independent - no rule can be taken away, every rule is needed

### armstrong's axioms for functional dependencies

name | axiom
---|---
reflexivity | if $Y\subseteq X$, then $X \to Y$ (example: $Y \subseteq YZ$, derive $YZ \to Y$) 
augmentation | if $X \to Y$ then $XZ \to YZ$ for any $Z$
transitivity | if $X \to Y$ and $Y \to Z$, then $X \to Z$

### attribute closure

- Closure($\mathfrak{S}, X$) - find all attributes that can be determined by X using the set of dependencies $\mathfrak{S}$
    1. closure := X
    2. while there exists $(A \to B) \in \mathfrak{S}$ with
        - $A \subseteq$ closure; and
        - $B \not\subseteq$ closure
    3. do closure := closure $\cup B$
    4. return closure

#### using closure

- if attribute $y \in$ Closure($\mathfrak{S}, X$) then $\mathfrak{S} \vDash X \to y$

- write Closure($\mathfrak{S}, X$ as $X^+$ if $\mathfrak{S}$ is clear from the context

### closure of functional dependency

- **Closure Of Functional Dependency** - the complete set of all possible attributes that can be functionally derived from given functional dependency using the inference rules known as Armstrong’s Rules

- $\mathfrak{S}^+ = \lbrace X \to Y | \mathfrak{S} \vDash X \to Y\rbrace$

#### example

$\mathfrak{S}^+$ for $\mathfrak{S} = \lbrace S \to NABPD, B\to A, P\to D\rbrace$

$$\mathfrak{S}^+ = \begin{matrix} \lbrace  X \to Y | Y \subseteq X \subseteq \lbrace S,N,A,B,P,D \rbrace  \rbrace  \cup \newline \lbrace  SX \to Y | X,Y \subseteq \lbrace S,N,A,B,P,D \rbrace  \rbrace  \cup \newline \lbrace  BX \to AY | Y \subseteq X \subseteq \lbrace S,N,A,B,P,D \rbrace  \rbrace  \cup \newline \lbrace  PX \to DY | Y \subseteq X \subseteq \lbrace S,N,A,B,P,D \rbrace  \rbrace  \cup \newline \lbrace  BPX \to ADY | Y \subseteq X \subseteq \lbrace S,N,A,B,P,D \rbrace  \rbrace  \end{matrix}$$

### minimal cover

- $S$ - minimal cover of $\mathfrak{S}$ such that
    - $\mathfrak{S}^+ = S^+$ ($\mathfrak{S}$ and $S$ describe the same function dependencies)
    - $|Y| = 1$ for all $X \to Y \in S$ (dependencies in S are minimalistic)
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
Transitivity | If $X \twoheadrightarrow Y$ and $Y \twoheadrightarrow Z$, then $X \twoheadrightarrow (Z - Y )$
Replication | If $X \to Y$ , then $X \twoheadrightarrow Y$
Coalescence | If $X \twoheadrightarrow Y$ and $V \to W$ such that $Y \cap V = \emptyset$ and $W \subseteq Y$, then $X \to W$

## inclusion dependencies over schemas $R_1$ and $R_2$

$R_1[X] \subseteq R_2[Y]$ - values for attribute X in R1 must also occur as values for attributes Y in R2

formally - for every instance $I_1$ of $R_1$ and every row $r_1 \in I$, there exists a row in instance $I_2$ of $R_2$ with $r_1[X] = r_2[Y]$