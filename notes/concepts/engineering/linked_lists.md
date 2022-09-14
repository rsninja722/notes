# linked lists

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

## linked list operations

- **Search** - search for a node with data value $k$
- **insert** - given a pointer to a node

TODO

## list searching

we linearly search a node with the data value k by traversing list L

- **traversing** - follow the node pointers form node to node in a list to accomplish some goal such as finding a specific element

```
listSearch(L,k)
    x = L.head
    while x != NIL and x.key != k
        x = x.next
    return x
```

## list insertion

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

## list deletion

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

## circular linked list

TODO

```
         \/--------------------------------------------
   _____________     _____________     _____________  |
-- |tail|4|next| <-> |prev|2|next| <-> |prev|7|head| --
|  ‾‾‾‾‾‾‾‾‾‾‾‾‾     ‾‾‾‾‾‾‾‾‾‾‾‾‾     ‾‾‾‾‾‾‾‾‾‾‾‾‾  
---------------------------------------------^
```

