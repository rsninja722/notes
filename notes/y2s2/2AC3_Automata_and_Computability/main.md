# 2AC3 Automata and Computability

- instructor email - zokaeiam@mcmaster.ca

## marks

- assignments - 30% (4 assignments)
- avenue quizzes - 10% (worst removed)
- midterm 1 - 15% (febuary 16th, during lecture)
- midterm 2 - 15% (march 16th , during lecture)
- exam - 30%

## textbook

“Automata and Computability” by Dexter Kozen

## history of computability

300 bce 

- eculid came up with algorithms for finding GCD
- one of the first computational problems - trisect an angle, aka create 3 equal angles (using compass and a straight edge)? - not possible 
- another question - create a cube with double the volume of the other (using compass and a straight edge)

800's ce 

- al-khawrazmi came up with algebra and arithmetic

1500's 

- cubic equation

1800's 

- abel-ruffini - proved that degree 5 polynomials dont generally have a solution that can be represented by radicals
- galois - $x^5-x-1 = 0$ has no radical solutions
    - peire wantzel showed that the angle and cube questions from 300 bce are impossible
- newtons principia mathematical - solving polynomial equations
- gauss - disquisitions arithmatica - FFT

1900's

- hilbert russell - formalist school - reduce math to formal manipulation of symbols    

- kurt godel - incompleteness theorem - no matter what system of number theory you take, there are statements that are "true" but cannot be proven

## models of computation

- finite state machines (memoryless/finite memory)
- finite state machines with unlimited stack memory
- turing machine

### languages

- regular languages
- context-free
- unrestricted



# studying various models of computation

- we have a function $f: A \to B$

```
x∈A  ____     y∈B
---> | f | --- > 
     |___|
```

- we want to "compute" f
- the computation involves a "finite" set of operations (chosen from a finite and predifined set of operations) that are "applied" to $x$, generating output $f(x)$
- the set of predefined operations and the way we give the input and take the output define our computational model
- we say $f$ is computable in out model if we can find a finite set of operations (a program) that gives the right output for $\forall x \in A$

___

# turing machines

say we have a machine:

*the scramble machine*

```
_____________
oooooooooooo  <---
_____________
oooooooooo
_____________
    ...
```

- the machine has an infinite number of rows. some of these rows may contain a finite number of balls
- there is a lever that points at a row
- we have some operations to manipulate the balls or the level
- the machine has 1 bit of memory (denoted MEM)

## operations
 
name | description
---|---
LOWER_LEVEL | move lever to row below
RAISE_LEVEL | move lever to row above
CHECK_EMPTY | check whether the row that the lever points to is empty, if so set MEM = true, else set MEM - false
RESET_BALLS | put all balls in first row
SCRAMBLE_DOWN | move balls in longest row down 1 row until all rows above lever <= row at lever. when done, MEM = if any balls moved
SCRAMBLE_UP | move balls in longest row up 1 row until all rows above lever <= their row above. when done, MEM = if any balls moved
RETURN_FALSE_IF_MEM_FALSE | terminate the program if the condition holds
RETURN_TRUE_IF_MEM_FALSE | terminate the program if the condition holds
RETURN_FALSE_IF_MEM_TRUE | terminate the program if the condition holds
RETURN_TRUE_IF_MEM_TRUE | terminate the program if the condition holds
LOOP | loops over the operations


## example

example: assume $x \in N$ and we ant to compute whether x is even or not 


$
f(x) = \begin{cases}
   True &\text{if } x \text{ is even} \\
   False &\text{if } x \text{ is odd}
\end{cases}
$

assume we put the same number of balls as x on the first row, and the lever also points to first row. write a program that computes $f$

LOWER_LEVER
SCRAMBLE_DOWN
SCRAMBLE_UP
RETURN_TRUE_IF_MEM_FALSE
RETURN_FALSE_IF_MEM_TRUE

___

write a program that determines if $x \in N$ is a prime number