# permutations and combinations

- "possible ways of doing x or y" - add possibilities
- "possible ways of doing x and y" - multiply possibilities

- permutations
    - ordered
    - you divide out the choices you don't make 
- combinations
    - unordered
    - you divide out the choices you don't make 
    - and you divide out the ways to arrange the items you choose

$$\binom{n}{n} = 1$$

$$\binom{n}{1} = n$$

$$\binom{n}{0}= 1$$


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