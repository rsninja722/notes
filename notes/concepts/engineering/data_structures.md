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

## linked lists

[linked lists](?note=notes\concepts\engineering\linked_lists.md)

## linked lists vs arrays

linked lists | arrays
---|---
better for dynamic data sets | better for static data sets
traverse nodes for indexing $O(n)$ | calculate a memory offset for indexing $O(1)$ 
expansion requires allocating new nodes | expansing may require copying array to a new chunk in memory
deletion and insertion are faster, only needs pointer reassignment | deletion and insertion are more expensive, need to shift data  

## abstract data types

mathematical model for data type

(OO programming)

TODO

## application programming interface (API)

- **API** - application programming interface (API), interface between differnet parts of a computer program 
    - simplifies the implrementation and maintinence of software 
    - used to specify the behaviour of an abstract data type

## bags stacks and queues

data structure involving a collection of objects, that control the means for accessing the data

TODO add pictures

### bags

- **bag** - collection of items with the following properties
    - *add* - adds an item to the bag
    - *iterate* - iterate through collected items (order not specified, could be random or arbitrary but deterministic)
    - *isEmpty* - returns true if the bag has no items, false otherwise
    - *size* - counts the number of items in the bag
    - unordered
    - no removal

### queue

- **FIFI queue** - collection where elements are drawn in the same order they were added with the following properties
    - *enqueue* - adds an item to a queue
    - *dequeue* - removes the next item from the queue
    - *isEmpty* - boolean function which returns true of the queue is empty 
    - *size* - number of items in the queue

### stack

- **stack/pushdown stack** - a last in first out queue, the most recently added items are retrieved, contains the following properties
    - push - adds an item on the top of the stack
    - pop -removes an item from the top of the stack
    - isEmpty - returns tgrue if the stack is empty
    - size - number of items in the stack

### implementation