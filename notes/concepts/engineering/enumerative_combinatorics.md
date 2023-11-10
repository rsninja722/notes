# enumerative combinatorics

- **combinatorics** - mathematics concerned with counting
- **enumerative combinatorics** - area of combinatorics that deals with counting the number of ways certain patterns can be formed

## general multiplication principle

- to find the total number of possible outcomes for a situation, multiply the number of possible choices at each step
    - $\text{possible outcomes} = \text{choices}_1 \cdot \text{choices}_2 \cdot ... \cdot \text{choices}_n$ 
- if there are restrictions on choices then: $\text{possible outcomes} = \text{all outcomes} - \text{outcomes with restricted choice(s)}$

this principle is used to derive various counting formulas

### multiplication principle applied to cartesian products

the cardinality of the result of a [cartesian product](?note=notes/concepts/engineering/sets.md#cartesianproduct) can be found by multiplying the cardinality of each set (the choices of elements)

$\\# (A_1 \times A_2 \times ... \times A_n) = \prod_{i=1}^{n} \\#A_i$

### power sets

a power set of $A$ (denoted $P(A)$) is the set of all subsets of $A$

in other word: the power set contains all combinations of including, or not including each element of a set

we can encode these choices using the cartesian product of $n$ choices where $n$ is the size of the set.

$\prod_{i=1}^{n} \\{ \text{include, exclude} \\}$

we know the cardinality of this set is $\prod_{i=1}^{n} \\#A_i = \prod_{i=1}^{n} 2 = 2^n$

#### example: power set of {a,b,c}

$\prod_{i=1}^{n} \\{ \text{include, exclude} \\}$ = {exclude, exclude, exclude}, {include, exclude, exclude}, {exclude, include, exclude}, {exclude, exclude, include}, {include, include, exclude}, {exclude, include, include}, {include, exclude, include}, {include, include, include}

$P( \\{ a,b,c \\} )$ = $\\{\\{\\},\\{a\\},\\{b\\},\\{c\\},\\{a,b\\},\\{b,c\\},\\{a,c\\},\\{a,b,c\\}\\}$

## permutations and combinations

[permutations and combinations](?note=notes/concepts/engineering/permutations_and_combinations.md) <!-- [](/notes/concepts/engineering/permutations_and_combinations.md) -->


## general strategies for problems

- "possible ways of doing x or y" - add possibilities
- "possible ways of doing x and y" - multiply possibilities
- "selecting" - combinations and permutations
- limitations on what patterns can be formed - multiply/add possibilities, or: find all subsets, and subtract disallowed sets
