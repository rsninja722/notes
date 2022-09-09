# data structures

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