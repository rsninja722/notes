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

- **singly linked list** - linear collection of nodes
    - also just called a list
    - each node has a value and a pointer to the next node
    - **head** - starting node
    - **tail** - last node, points to null
    - traversable in only one direction

```
___________     ___________     ________
|4|pointer| ->  |2|pointer| ->  |7|NULL|
‾‾‾‾‾‾‾‾‾‾‾     ‾‾‾‾‾‾‾‾‾‾‾     ‾‾‾‾‾‾‾‾
```

- **doubly linked list** - linked list in which each node contains a pointer to its previous node in addition to the next node
    - traversible in both directions
    - example of spending a little memory for a large time save

```
_____________     _____________     _____________
|NULL|4|next| <-> |prev|2|next| <-> |prev|7|NULL|
‾‾‾‾‾‾‾‾‾‾‾‾‾     ‾‾‾‾‾‾‾‾‾‾‾‾‾     ‾‾‾‾‾‾‾‾‾‾‾‾‾
```

### linked list operations

- **Search** - search for a node with data value $k$
- **insert** - given a pointer to a node

TODO

### list searching

we linearly search a node with the data value k by traversing list L

- **traversing** - follow the node pointers form node to node in a list to accomplish some goal such as finding a specific element

```
listSearch(L,k)
    x = L.head
    while x != NIL and x.key != k
        x = x.next
    return x
```

### list insertion

inserts a new node $x$ t the head of the list L (prepends to the list)

```
listInsert(L,x)
    x.next = L.head
    if L.head != NIL
        L.head.prev = x
    L.head = x
    x.prev = NIL
```

L.head is the address of the first element of L

x, when assigned to something is the address of $X$

### list deletion

delete a node x from the list L

```
listDelete(L,x)
    if x.prev != NIL
        x.prev.next = x.next
    else 
        L.head = x.next
    if x.next != NIL
        x.next.prev = x.prev
```

*the algorithim assumes we have already found the node

### circular linked list

TODO

```
         \/--------------------------------------------
   _____________     _____________     _____________  |
-- |tail|4|next| <-> |prev|2|next| <-> |prev|7|head| --
|  ‾‾‾‾‾‾‾‾‾‾‾‾‾     ‾‾‾‾‾‾‾‾‾‾‾‾‾     ‾‾‾‾‾‾‾‾‾‾‾‾‾  
---------------------------------------------^
```

## linked lists vs arrays

TODO

## abstract data types

mathematical model for data type

(OO programming)

## application programming interface (API)

## bags stacks and queues
