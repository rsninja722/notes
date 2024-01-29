# computation

**computation** - any type of arithmetic, or calculation that is well defined
    - example: mathematical equations, computer algorithms 
- **computability** - investigates what problems are solvable in principle by algorithms

- **complexity theory** - explores the resources required to solve computational theory

- approaches for confronting computationally hard problems
    - understand what aspects are at the root of the problem, then alter the problem so it becomes easier
    - settle for a less than perfect solution
    - ignore worst cases
    - consider alternative forms of computation

## rough history of computation

even before computers existed, many mathematicians and philosophers were trying to create various models of computation, many of which were computationally equivalent

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

## models

there are many models of computation with varying power (listed in increasing order)

1. **finite state machine** (finite memory)
    - example: finite automata, regular expressions
2. **finite state machine with unlimited stack**
    - examples: pushdown automata 
3. **unrestricted models**
    - examples: turing machines, lambda calculus, post systems, $\mu$-recursive functions, combinatory logic, or any sufficiently powerful programming language like c++ or java

## chomsky hierarchy

Noam Chomsky formalized the notion of *grammar* and *language* at the same time that computational models were being developed, creating 

- **chomsky hierarchy** - hierarchy of language classes defined by grammars of increasing complexity

1. **right-linear/regular grammars**
2. **context-free grammars** 
3. **unrestricted grammars**

each grammar type is equivalent in computational power to the model of the same number

- **context sensitive grammars** - fits in between 2 and 3, corresponds to a machine model called **linear bounded automata*
