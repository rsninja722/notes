# decomposition and normal forms

- **decomposition** - a decomposition of a relational schema R consists of replacing R by multiple relational schemas, each over a subset of the attributes of R.
    - is an example of schema refinement
## normal forms

## good decompositions

- **lossless-join** - the join of the decomposed parts is always the original instance
    - $R = R_1 \bowtie ... \bowtie R_n$
    - *rational* - the decomposition must represent exactly the original data
- **dependency-preserving** - all constraints in $R$ can be maintained using only constraints on the individual relational schemas $R_1, ... , R_n$


more restrictive as you go down

- **First Normal Form** (1NF)
- **Second Normal Form** (2NF) - functional dependencies
- **Third Normal Form** (3NF) - functional dependencies
- **Boyce-Codd Normal Form** (BCNF) - functional dependencies
- **Fourth Normal Form** (4NF) - multivalued dependencies
- **Fifth Normal Form** (5NF) - join dependencies


### First Normal Form (1NF)

