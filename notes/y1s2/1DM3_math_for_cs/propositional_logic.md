# Propositional Logic

a proposition is a declarative sentence that is either true or false

### negation / $$\lnot$$

$$a$$ | $$\neg a$$ |
:-: | :-: |
T | F |
F | T |

### conjunction / and / $$\land$$

$$a$$ | $$b$$ | $$a \land b$$ |
:-: | :-: | :-: |
T | T | T |
T | F | F |
F | T | F |
F | F | F |

### disjunction / or / $$\lor$$

$$a$$ | $$b$$ | $$a \lor b$$ |
:-: | :-: | :-: |
T | T | T |
T | F | T |
F | T | T |
F | F | F |

### exclusive disjunction / xor / $$\oplus$$

$$a$$ | $$b$$ | $$a \oplus b$$ |
:-: | :-: | :-: |
T | T | F |
T | F | T |
F | T | T |
F | F | F |

### implication / $$\rightarrow$$

can be written as 
- if a then b
- if a, b
- b unless ¬a
- b if a
- b whenever a
- b follows from a
- a implies b
- a only if b
- b when a

$$a$$ | $$b$$ | $$a \rightarrow b$$ |
:-: | :-: | :-: |
T | T | T |
T | F | F |
F | T | T |
F | F | T |

### biconditional / $$\iff$$ / $$\equiv$$

if and only if
a is necessary and sufficient for b
if a then b, and conversely
a iff b

$$a$$ | $$b$$ | $$a \iff b$$ |
:-: | :-: | :-: |
T | T | T |
T | F | F |
F | T | F |
F | F | T |


## converse, contrapositive, and inverse

for a → b
- b → a is the converse
- ¬b → ¬a is the contrapositive
- ¬a → ¬b is the inverse



## Nested quantifiers

every real number has an inverse:
$$\forall x \exists y (x + y = 0)$$

### nested loops
to see if $$\forall x \forall y P (x,y)$$ is true, loop through all values of y, in inner loop go through all values of x

if the domain of the variables are infinite, this process can not be carried out

## order of quantifiers
example
 let $$ P(x,y)$$ be the statement $$x + y = y + x$$. Assume that U is the real numbers. Then  $$\forall x \forall y P (x,y)$$ and  $$\forall y \forall x P (x,y)$$ have the same truth value

`TODO: fix`
let $$ Q(x,y)$$ be the statement $x + y = o$$. Then $$\forall x \exists y Q (x,y)$$ is true, $$\exists y \forall x Q (x,y)$$ is true

let U be the real numbers
Define $$P(x,y): x \cdot y = 0$$
- $$\forall x \forall y P (x,y)$$ = False
- $$\forall x \exists y P (x,y)$$ = True
- $$\exists x \forall y P (x,y)$$ = True
- $$\exists x \exists y P (x,y)$$ = True

Define $$P(x,y): \frac{x}{y} = 1$$
- $$\forall x \forall y P (x,y)$$ = False
- $$\forall x \exists y P (x,y)$$ = False x = 0
- $$\exists x \forall y P (x,y)$$ = False y != 0
- $$\exists x \exists y P (x,y)$$ = True

english
- $$\forall x \forall y P (x,y)$$ 
- $$\forall x \forall y P (x,y)$$ P(x,y) is true for every pair x,y

- $$\exists x \forall y P (x,y)$$ For every x there is a y for which P(x,y) is true
- $$\forall x \exists y P (x,y)$$ There is an x for which P(x,y) is true for every y

- $$\exists x \exists y P (x,y)$$ 
- $$\exists y \exists x P (x,y)$$ There is a pair x,y for which P(x,y) is true
