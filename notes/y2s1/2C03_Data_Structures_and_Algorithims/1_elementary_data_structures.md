# elementary data structures

- **algorithm** - a procedure for solving problems, describing a finite, deterministic, and effective problem solving method suitable for implementation as a computer program
    - can be encoded in natural langue, pseudo-code, or computer language
    - "effective" meaning there is a computer on which the algorithm can be ran
    - space and time complexity are the most important aspects of algorithm design

- **big O notation** - a theoretical measure of how quickly the required space and time for an algorithm to run increase as the size of input increases
    - O stands for Order of growth/approximation

- **pseudocode** - middle ground between natural language and computer language where language specific details and syntax are omitted 

- **data structure** - scheme for organizing data that leaves them amenable to efficient processing by an algorithm
    - precisely: a data structure is a set of values and a set of operations on those values
    - algorithms require preconditions and data structures maintain those preconditions

## basic data structures

- **array** - linear data structure, containing a finite number of elements with a specified order, stored/retrieved using a numerical index
    - contiguous memory
    - static or dynamic size
    - all elements typically the same datatype
    - array indices start at 0, because the index number is added to the pointer address (to the start of the array) to get the desired element

```
_____________________
|4|2|3|7|2|9|4|7|0|2|
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 ^ ^ ^           ^ ^
 0 1 2 index   n-1 n
```