# statement logic

- a system concerning statements as well as logical operators from which we can form compound statements
- system used to study formal validity -  what conclusions must follow from some set of statements

## definitions

- A **statement** is a sentence (or part of a sentence) that expresses something true or false
– One statement is a **component** of another if substituting it within the original by any other statement still yields a meaningful statement
– A **compound** statement is any statement that contains one or more component statements
– A **simple** statement is any statement that has no components

### components example

if yesterday was monday then today is tuesday

- $a$ - yesterday was monday 
- $b$ - today is tuesday

$a \implies b$

- "today is tuesday" can be replaced by any other statement and the expression is still meaningful

- b is a component of the larger statement
- b is a simple statement

## statement operators

- **statement operator** - a word or phrase which operates on a statement or statements to form a compound statement
    - **unary operator** - operates on one statement 
    - **binary operator** - operates on two statements

## truth

- truth values - all statements express something true or false, all abstract statements also have truth values (represented by T and F)

the idea of "truth" is abstract, in a formal system, truth is only held in correspondence with the designation T, truth itself remains undefined

- **truth functional operator** - an operator that forms a compound statement whose value is a function of the truth values of the component statements

## functions

- **function** - something that takes an input, and produces some output
- **truth functions** - takes truth-values as inputs, and generates a single truth value as output

## truth tables

[truth tables](?note=notes/concepts/engineering/boolean_logic_and_logic_gates.md)

## other statement logic symbols

symbol | meaning
---|---
$\therefore$ | therefore
$p,q,r\dots$ | statement variables


## truth functions

- non-truth functional
    - example - "anne believes that today is monday"
- truth functional
    - example - "today is monday and anne believes it's monday"

## formation rules

- 1 - a statement with a unary operator is also a statement 
- 2 - two statements with a binary operator is also a statement 
- 3 - outer brackets can be dropped (outer groupers) 

## proof derivation example

$(A \land C) \implies B, B \implies \lnot D, A \land C \therefore \lnot D$

- 1. $(A \land C) \implies B$ &emsp;premise
- 2. $B \implies \lnot D$ &emsp;&emsp;&emsp;premise
- 3. $A\land C$&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;premise
- 4. $B$&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;1,3 MP
- 5. $\lnot D$&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2,4 MP