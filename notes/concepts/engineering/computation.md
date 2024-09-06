# computation

**computation** - any type of arithmetic, or calculation that is well defined
    - example: mathematical equations, computer algorithms 
- **computability** - investigates what problems are solvable in principle by algorithms

- **theory of computation** - study of the foundations of computation, concerned with the following questions
    - what does it mean for a function to be computable?
    - what can and cannot be computed?
    - how does computational power depend on computational mechanisms?
    - how do we classify computable functions?

- approaches for confronting computationally hard problems
    - understand what aspects are at the root of the problem, then alter the problem so it becomes easier
    - settle for a less than perfect solution
    - ignore worst cases
    - consider alternative forms of computation

## rough history of computation

[history of computation](?note=notes/concepts/engineering/history_of_computation.md) <!-- [](/notes/concepts/engineering/history_of_computation.md) -->

## models

there are many models of computation with varying power (listed in increasing order)

1. **finite automata** (finite memory)
    - example: regular expressions
2. **pushdown automata** (finite automata with unlimited stack)
3. **unrestricted models** (turing machines)
    - examples: lambda calculus, post systems, $\mu$-recursive functions, combinatory logic, or any sufficiently powerful programming language like c++ or java

## chomsky hierarchy

Noam Chomsky formalized the notion of *grammar* and *language* at the same time that computational models were being developed, creating 

- **chomsky hierarchy** - hierarchy of language classes defined by grammars of increasing complexity

1. **right-linear/regular grammars**
2. **context-free grammars** 
3. **unrestricted grammars**

each grammar type is equivalent in computational power to the model of the same number

- **context sensitive grammars** - fits in between 2 and 3, corresponds to a machine model called **linear bounded automata*
