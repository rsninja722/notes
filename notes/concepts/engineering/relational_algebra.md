# relational algebra

## definitions

algebra | meaning
---|---
$e := T$ | (with T a relation name (“table”))
$\sigma_c (e)$  | selection (c is a condition)
$\pi_D (e)$  | projection (D is a list of columns)
$\rho_R (e)$  | rename (with R a rename specification)
$e \cup e $ | union
$e \cap e $ | intersection
$e \ e $ | difference
$e \times e $ | cross product (Cartesian product)
$e \bowtie_c e$ | join (with c a condition)
$e \bowtie e $ | natural join

- $T$ is a table in instance $I$ of the database $D$ 

## selection $\sigma$

does what WHERE does in sql

$\sigma_{(cid \leq 1) \lor (\text{title} = \text{'Databases'})} (\text{courses})$

=

```sql
SELECT * FROM courses WHERE cid <= 1 OR title = 'Databases';
```

## projection $\pi$

does what SELECT does in sql

$\pi_{\text{title}} (\text{courses})$

= 

```sql
SELECT title FROM courses;
```
___

$\pi_{\text{title,cid}} (\text{courses})$

= 

```sql
SELECT title,cid FROM courses;
```

### expressing computation

$\pi_{\text{sid}+\text{year} \mapsto X,\text{name}} (\text{students})$

=

```sql
SELECT sid+y AS X, name FROM students;
```

## renaming $\rho$

$\pi_{\text{title}} (\rho_{\text{name}\mapsto \text{title}}(instructors))$

=

```sql
SELECT name AS title FROM instructors;
```

### shorthand syntax

$\rho_{R(D_1, \dots, D_n)} (e) \equiv \rho_{C_1 \mapsto D_1, \dots, C_n\mapsto D_n} (\rho_R (e))$

## $\cup,\cap,\setminus$

$\cup,\cap,\setminus$ correspond to SQL `UNION, INTERSECT, EXCEPT`

## cross product $\times$

$courses \times instructors$

=

```sql
SELECT * FROM courses CROSS JOIN instructors
```

## name conflicts

if two tables have the same name say: cid, write courses.cid and instructors.cid


$\sigma_{\text{courses.cid} =\text{instructors.cid}}(courses \times instructors)$

```sql
SELECT * FROM courses CROSS JOIN instructors WHERE courses.cid = instructors.cid;
```

## some examples

$\sigma_{\text{C.cid} =\text{I.cid}}(\rho_C(courses) \times \rho_I(instructors))$

=

```sql
SELECT * FROM courses AS C CROSS JOIN instructors AS I WHERE C.cid = I.cid;
```

$\pi_{\text{C.title,I.name}} (\sigma_{\text{C.cid} =\text{I.cid}}(\rho_C(courses) \times \rho_I(instructors)))$

=

```sql
SELECT C.title,I.name FROM courses AS C CROSS JOIN instructors AS I WHERE C.cid = I.cid;
```

## conditional join $\bowtie_c$ and natural join $\bowtie$

- $\pi_{\text{C.title,I.name}} (\sigma_{\text{C.cid} =\text{I.cid}}(\rho_C(courses) \times \rho_I(instructors)))$
- $\equiv \pi_{\text{C.title,I.name}}(\rho_C(courses) \bowtie_{\text{C.cid} =\text{I.cid}} \rho_I(instructors))$
- $\equiv \pi_{\text{C.title,I.name}}(\rho_C(courses) \bowtie \rho_I(instructors))$

### shorthand

$e_1 \bowtie_c e_2 \equiv \sigma_c(e_1 \times e_2)$

## left and right conditional join

$\rtimes_C$ like conditional join, but only checks the condition for elements in the right expression

$\ltimes_C$ like conditional join, but only checks the condition for elements in the left expression

## variables

example of using variables:

$X := \rho_C(\text{courses}) \times \rho_I(\text{instructors})$

$Y := \sigma_{\text{C.cid} =\text{I.cid}}(X)$

$\pi_{\text{C.title,I.name}}(Y)$

## optimization

example query

![](./media/2DB3_9.JPG)


analysis of efficiency

![](./media/2DB3_10.JPG)

improved execution plan

![](./media/2DB3_11.JPG)

### tips

- Basic always-valid rewrite rules: “push down selection” (& “push down projection”).
- Reordering joins: influences by guesstimates of input and output sizes.
- Choosing specific algorithms and indices: Huge impact on joins. E.g., materializing intermediate tables versus pipeline design.

## query sizes

Let $T, U$ be tables with $|T| = m$ and $|U | = n$.

- Exact estimates
    - $|T| = m$
    - $|\rho_R (T)| = m$
    - $|T \times U | = m \cdot n$
- Estimates
    - $0 \leq |\sigma_C (T )| \leq m$
    - $0 \leq |\pi_D (T )| \leq m$
    - $\text{max}(m, n) \leq |T \cup U | \leq m + n$
    - $0 \leq |T \cap U | \leq \text{min}(m, n)$
    - $\text{max}(m − n, 0) \leq |T \setminus U | \leq m$
    - $0 \leq |T \bowtie_C U | \leq m \cdot n$