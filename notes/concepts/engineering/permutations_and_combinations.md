# permutations and combinations

## permutations

$$p(n,r) = \frac{n!}{(n-r)!}$$

- **permutations** - all ordered arrangements (size $r$) of a set (size $n$)
    - no repetitions
    - order matters
    
- you divide out the choices you don't make

### deriving permutations

[multiplication principal](?note=notes/concepts/engineering/enumerative_combinatorics.md#generalmultiplicationprinciple) <!-- [](/notes/concepts/engineering/enumerative_combinatorics.md) -->

## combinations

$$c(n,r) = \frac{n!}{r!(n-r)!}$$

- **combinations** - all unordered subsets (size $r$) of some set (size $n$)
    - no repetitions
    - order doesn't matter    
    
- you divide out the choices you don't make 
- and you divide out the ways to arrange the items you choose

### useful combinations

$$\binom{n}{n} = 1$$

$$\binom{n}{1} = n$$

$$\binom{n}{0}= 1$$

note: $0! = 1$

## pascal's identity

$$\binom{n+1}{k+1} = \binom{n}{k} + \binom{n}{k+1}$$

pascal's identity relates to [pascals triangle](?note=notes/concepts/engineering/pascals_triangle.md#pascalstrianglewithcombinations) <!-- [](/notes/concepts/engineering/pascals_triangle.md) -->

### proofs (example)

#### proof

$$\binom{n}{k} + \binom{n}{k+1} = \frac{n!}{(n-k)! k!} + \frac{n!}{(n-k-1)! (k+1)!}$$

$$= n! (\frac{1}{(n-k)!} \cdot \frac{k+1}{k!(k+1)} + \frac{n-k}{(n-k-1)! (n-k)} \cdot \frac{1}{(k+1)!})$$

$$= n! ( \frac{k+1}{(n-k)! (k+1)!} + \frac{n-k}{(n-k)!(k+1)!})$$

$$= n! \cdot \frac{n+1}{(n-k)! (k+1)!}$$

$$= \frac{(n+1)!}{(n+1 - (k+1))!(k+1)!}$$

$$= \binom{n+1}{k+1}$$


#### combinatorial proof

selecting a k+1 student committee from a class of n+1 students. there are two types of possible committees. committees with and without studentA.

a total of $$\binom{n+1}{k+1}$$ different committees are possible. there are $$\binom{n}{k+1} $$ committees without studentA without studentA. there are $$\binom{n}{k} $$ possible committees with studentA (studentA has already been chosen). then:  $$\binom{n+1}{k+1} = \binom{n}{k} + \binom{n}{k+1}  $$

## proof of $\binom{2n}{n} = n^2 + 2 \binom{n}{2}$ (example)

LHS

$\binom{2n}{2} = n^2 + 2 \binom{n}{2}$

$\binom{2n}{2} = \frac{(2n)!}{(2n-2)! 2!}$

$= \frac{(2n)(2n-1)(2n-2)!}{(2n-2)! 2!}$

$= \frac{(2n)(2n-1)}{ 2!}$

$= \frac{2(n)(2n-1)}{ 2}$

$=(n)(2n-1)$

$=2n^2-n$

___

RHS

$n^2 + 2 \binom{n}{2} = n^2 + 2\frac{n!}{(n-2)! 2!}$

$= n^2 + 2\frac{n(n-1)(n-2)!}{(n-2)! 2!}$

$= n^2 + 2\frac{n(n-1)}{ 2!}$

$= n^2 + n(n-1)$

$= n^2 + n^2-n$

$= 2n^2-n$

## ordered partitions

- $n$ objects
- $r$ partitions (groups)
- $k_1, k_2, ... , k_r$ partition sizes (adds up to $n$)

$$ \binom{n}{k_1, k_2, ... , k_r} = \frac{n!}{k_1! k_2! ... k_r!} $$

- also can be though of as assigning **specific** labels to the elements of the set
### example

how many words can be made from the word "statistics"?

- word length : 10
- 3 s
- 3 t
- 2 i
- 1 a
- 1 c

$$ \binom{10}{3,3,2,1,1} = \frac{10!}{3! 3! 2! 1! 1!} = 50400$$

### non-specific labels

$$\frac{\binom{n}{k_1, k_2, ... , k_r}}{r!}$$

#### example

how many ways can 4 people be divide into 2 pairs?

$$\frac{\binom{4}{2,2}}{2!} = 3$$

ab cd

ac bd

ad bc