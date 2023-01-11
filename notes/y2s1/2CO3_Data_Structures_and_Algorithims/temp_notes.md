# course goal

algorithmic thinking, being able to think in terms of run time, and being able to quickly analyze algorithms

$f(n) \leq c f(n)$

$n2^n+3n+2 \in O(2^n)$ is wrong because $2^n \leq n2^n$

should be $O(n2^n)$

proof: $n2^n+3n+2 \leq c2^n$

sub in $2c$ :  $2c2^{2c}+3(2c)+2 \leq c2^(2c)$

profit?

# lecture

## implementation for bag stack queue

how to implement a bag stack or queue?

fixed size - array
dynamic size - linked list, or resizing array

### array resizing

- double the size of the array through reallocation if the size exceeds the current allocated size
- if only 25% percent of the array is being used, cut the size in half

realloc


## stack using a static array

- with `N = stack.size()`

TODO

### stack operations using an static array

pop doesn't "remove" data, it just changes where the end of the array is, data will be overwritten

### stack operations using a linked list

### queue operations using an static array

wrap around

### queue operations using a linked list



implementation can be done anyway as long as the functionality stays the same from the perspective of the external programmer using the api


# analysis of algorithms

## measuring runtime

two ways to analyze the runtime of algorithms
- **empirical** - running specific test cases, may not be representative of all cases
- **theoretical** - analysis of the program structure itself

## runtime factors

two factors (D.E. Knuth)

- cost of executing each statement
- frequency of execution of each statement

goal is to derive a time function $T(n)$ - describes the amount of time it takes to execute a program based on the size of the input

- $n$ - size of the input

## analyzing swap

Swap ($\varnothing$) - swap takes no inputs

TODO

## analyzing linear search

c5 represents c4 and c5

TODO 


# lecture monday

in large $n$ in $n^2 + 2n + 1$, only the term $2^n$ is significant. Only the fastest growing term should be considered when analyzing how the runtime of an algorithm grows with the size of the input

![2n](./media/2n.png)

## tilde approximation

we write $\text{\textasciitilde} f(n)$ to represent any function for which 

$$\lim_{n\to \infin} \frac{\text{\textasciitilde} f(n)}{f(n)} = 1$$

example:

if $f(n) = (c_3+c_4+c_5)n^2 + c_2n +c_f$, then $\text{\textasciitilde} f(n) = (c_3+c_4+c_5)n^2$

## observations

TODO

## importance of big O

description | funciton
---|---
constant | $1$
logarithmic | $\log{n}$
linear | $n$
linearithmic | $n\log{n}$
quadratic | $n^2$
cubic | $n^3$
exponential | $2^n$

np - non polynomial - from exponential up to factorial

to get big O, collect terms and call it a constant:

```python
for i in n:
    stuff

for j in n:
    stuff2
```

$f(n) = i\cdot n + j\cdot n$

$ = (i+j)\cdot n$

$ = c\cdot n$

TODO

## big O more formally

$O(f(n))$ denotes a set of functions

$T(n) \in O(f(n))$ if given the existence of some constant $c$, some number of inputs $n_0$, for all $n \geq n_0$, if $T(n)$ is between $0$ and $c\cdot f(n)$, then $T(n) \in O(f(n))$

effectively, $O(f(n))$ is an upper bound of $T(n)$ past some arbitrarily selected $n_0$

![OnTo](./media/OnTn.png)

bounds should be as tight as possible for upper bounds

$T(n) \not\in O(n)$

$T(n) \in c\cdot O(n)$ for large enough $c$

## x

n will always be larger than c

## big-$\Omega$

$\Omega(f(n))$ denotes a set of functions

given the existence of some constant $c$, some number of inputs $n_0$, for all $n \geq n_0$, if $T(n)$ is greater than (or equal to) $c\cdot f(n)$, then $T(n) \in \Omega(f(n))$

effectively, $\Omega(f(n))$ is a lower bound of $T(n)$ past some arbitrarily selected $n_0$

example:

$T(n) = 32n^2 + 17n + 1$

$T(n) \in \Omega(1)$
$T(n) \in \Omega(n)$
$T(n) \in \Omega(n \log{n})$
$T(n) \in \Omega(n^2)$

## average runtime Big-$\Theta$

- $T_{avg}(n)$ - average runtime over all inputs of size n
    - hard to accurately prove
    - analysis tends to become mathematically intractable (hard to deal with)
    - the notion of "average input" frequently has no obvious meaning

use worse case as the principle measurement and average complexity whenever useful

$\Theta(f(n))$

given the existence of two constants $c_1 > 0$ and $c_2 > 0$, some number TODO

find the best worst case, and the worst best case, if they are the same you have a middle bound

## common errors

- equal signs - often $T(n) = O(f(n))$ is written but is meant to mean $T(n) \in O(f(n))$
- domain - the domain of $f(n)$ is typically the set of natural numbers, but doesn't make set for most inputs
- nonnegative functions - when using Big-O TODO

## limits

taking the limit of two functions will tell us whether O, $\Omega$, or $\Theta$ are applicable

$$\lim_{n\to \infin} \frac{f(n)}{g(n)} = \infin \implies f(n) \in O(g(n))$$

$$\lim_{n\to \infin} \frac{f(n)}{g(n)} = 0 \implies f(n) \in \Omega(g(n))$$

$$\lim_{n\to \infin} \frac{f(n)}{g(n)} = {0,\infin} \implies f(n) \in \Theta(g(n))$$

## multiple variables

TODO

# case study: union-find

- good algorithms make unsolvable problems solvable
- good algorithms can be as simple as bad ones
- **iterative refinement** can lead to more efficient algorithms

- **connected component** - set of nodes which are mutually connected, an node with no connections is a connected component with itself

![nodes](./media/connectedNodes.png)

connected components: { 0 } { 1 4 5 } { 2 3 6 7 }

## algorithim operations

given a network, we may be interested in the following

- *connected* - given two arbitrary nodes, are the connected by edges of the network (are they in the same connected component)?
- *union* - how might we add connections to merge components?
- *find* - given a node, what component is it a part of?
- *count* - how many components does the network have?

## network using set theory

- **network** - set of nodes, tupled with a connection relation

$N = (S,C)$ &emsp; $C \subseteq S \times S$

if for all $s,t \in S$ a pair of sites $(s,t) \in C$, then the connection "exists". $C$ is an equivalence relation, so it is:

- **reflexive** - $\forall s \in S \cdot (s,s) \in C$ (all nodes are connected to themselves)
- **symmetric** - $\forall s,t \in S\cdot (s,t) \in C \implies (t,s) \in C$ (connections are bidirectional)
- **transitive** - $\forall s,t,u \in S\cdot (s,t) \in C \land (t,u) \in C \implies (s,u) \in C$ (nodes can be connected via a "middleman")

## union

count is the amount of times union has ran subtracted from the original count

TODO/


## sorting algorithms

- **sorting** - a process of rearranging a sequence of objects so as to put them in some logical order
    - sorting ascending vs. descending, change comparator
    - for ascending order, the following property holds after sorting $n < m \implies \text{array}(n) \leq \text{array}(n)$ 

in place sort requires no additional memory

### notable sorting algorithms
- selection sort
- insertion sort
- shellsort
- heapsort
- timsort
- mergesort
- quicksort
- priority queue
- bubblesort
- library sort

### selection sort 

- complexity: $\Theta(N^2)$
- in place
- number of operations is invariant

repeat until sorted
- find minimum element
- swap minimum element with the first element of the array
- examine a sub-array of n-1 elements excluding the swapped element

tiny advantage - performs the minimal number of write operations

```java

public static void exchange(Comparable[] a, int i, int j) {
    int temp = a[min];
    a[min] = a[i];
    a[i] = temp;
}

public static void sort(Comparable[] a) {
    int N = a.length;
    for (int i=0; i<N; i++) {
        int min = i;
        for (int j=i+1; j<N; j++) {
            if (a[j] < a[min]) {
                min = j;
            }
        }
        exchange(a, i, min);
    }
}

```

### insertion sort

- complexity: $\Omega(N)$, $O(n^2)$
- in place
- number of operations depends on the degree of disorder

similar to selection sort

minimizes the amount of examinations that do not lead to a swapping operation

- unsorted is compared to the largest element in the sorted array
- if unsorted element is smaller than the element it has been compared to, the two elements are swapped, compare to the next largest element and repeat this step until the unsorted is greater or equal to the element it has been compared to
- size of the sorted section of the array increases by one, examine the next unsorted element

```java
public static void sort(Comparable[] a) {
    int N = a.length;
    for (int i=1; 1<N; i++) {
        for (int j=i; j < 0 && a[j] < a[j-1]; j--) {
            exchange(a, j, j-1);
        }
    }
}
```

### shell sort

- $\omega(n^2)$
- $O(n \log{n})$

extract sub arrays, sort them, put them back

- sub arrays are formed by taking every $h^{th}$ element until the end of the array is reached
- sequence of h-values used varies by implementation 
    - One such sequence is (1, 4, 10, 23, 57, 132, 301, 701)
    - This order was experimentally derived. No equation has yet been discovered which can predict the next number in the sequence.
    - The worst case performance of this sequence is currently unknown.

- once sub-arrays established, perform insertion sort on each one of them, and then put the elements back into the original array
- once all the sub arrays have been sorted and replaced for one h-value, the array is h-sorted
- sorting smaller h-sortings do not disorder larger ones
- as long as the last h value is 1, the array is guaranteed to be sorted (insertion sort)

```java
public static void sort(Comparable[] a) {
    int N = a.length;

    int h = 1;

    while (h < N/3>) {
        h = 3*h + 1; // generates h-gap sequence (can be any sequence)
    }

    while (h >= 1) {
        for (int i=h; i<N; i++) {
            for (int j=i; j >= h; && a[j] < a[j-h]; j -= h) {
                exchange(a, j, j-h);
            }
        }

        h = h/3; // set next h-gap
    }
}
```

## recursion

- **recurence relation** - question that defines a sequence based on a rule that gives the next term as a function of the previous terms
- **recurence tree** - tree used to visualize what happens when an equation is iterated, the number of recursive calls, and how much work is done each step 

- **complete binary tree** - a binary tree where every level except the last is completely filled


## quick sort

intelligent decision about the partitions lead to greater efficiency

partitions may be different sizes

general idea:
- shuffle array to eliminate dependence on input
- select first element of array as the *pivot*
- create two sub arrays from remaining elements via in-place swapping
    - one container has all less than the pivot, other has all greater than

## merge sort approaches

bottom up

```java
public static 
```

top down

# priority queue

- **collection** - data type that stores a group of items
- **priority queue** - collection of objects which can be compared
    - supports insertion, and removing the smallest or largest item

- applications
    - customers in a line
    - reducing round off error
    - scheduling
    - dijkstra's algorithm

## implementation trade offs

implementation | insert | delmax
---|---|---
unorderd | 1 | n
ordered | n | 1
goal | log n | log n

# binary queue


# binary heap

binary tree with additional properties

positions of children in array are related to positions of parents in array by a mathematical property


## binary MAX heap ordered tree

a complete binary tree where
- the keys are in nodes
- every parent's key $\geq$ children's keys (Max. heap property)

does not care about order of children

TODO


# symbol tables

AKA maps, dictionaries, associative arrays

a data structure for key-value pairs that supports:

- insertion into the set
- search for a value with using a key

## usage

- dns lookup
- dictionary
- compiler

## ordered vs unordered

in unordered symbol table, search must be linear

if an inequality operator is defined, a symbol table can be ordered, but keys must be mono typed

## unordered implementation

linked list where each node contains a key and value

# binary search tree

a binary tree where each node has a key

do not need to be complete

each key is:

- larger than keys to the left
- smaller than keys to the right

a BST node contains

- key
- value
- left node
- right node

worst case structure: every element is added in order leading to a $n$ deep BST where the $n$ is the amount of nodes


## min and max

follow the left branch as far as you can to get the minimum, do the same with the right for the maximum


# directed graphs




## searching in directed graph


### depth first search
depth-first search in digraphs: same method as for undirected graphs
- every undirected graph is a diagraph (with edges in both directions)
- DFS is a digraph algorithm

dfs for undirected graphs

```java
private void dfs(Graph G, int v) {
    marked[v] = true;
    for (int w : G.adjacent(v)) {
        if (!marked[w]) {
            edgeTo[w] = v;
            dfs(G, w);
        }
    }
}
```

dfs for directed graphs

```java
private void dfs(Graph G, int v) {
    marked[v] = true;
    for (int w : G.adjacent(v)) {
        if (!marked[w]) {
            dfs(G, w);
        }
    }
}
```

### breadth first search

TODO


## multiple source shortest paths 

given a directed graph and a set of vertices S, find shortest path from any vertex in the set to each other vertex

implement by using BFS, but initialize by enqueuing all source vertices

# precedence-constrained scheduling

- precedence-constrained scheduling problem - given a set of jobs to be completed, with precedence constraints that specify that certain jobs have to be completed before certain jobs are begun, how can we schedule the jobs such that they are all completed while still respecting the constraints?

for any such problem, a digraph model is useful, where **vertex = task** and **edge = precedence constraints**

however, if job x bust be completed before job y, job y before job z, and job z before job x, clearly these constraints cannot be satisfied; that is, a digraph with cycles will not have a feasible solution

- directed acyclic graph (DAG) - a digraph with no directed cycles

## topological sort

given a digraph, put the vertices in order such that all its directed edges point from a vertex earlier in the order to a vertex later in the order (or report that doing so is not possible)

linear ordering of its vertices such that for each directed edge $u,v$ from vertex $u$ to vertex $v,u$ comes before $v$ in the ordering

can be multiple correct graphs

### DFS

idea - depth-first search visits each vertex exactly once. if we save the vertex given as arguments to the recursive dfs() in a data structure, then iterate through that data structure (as queue or stack), we see all the graph vertices, in an order determined by the nature of the data structure and by wether we can do the save before or after the recursive calls.

three vertex orderings are of interest in typical applications

- preorder - put the vertex on a queue before the recursive calls
- postorder - put the vertex on a queue after the recursive calls
- reverse postorder - put the vertex on a stack after the recursive calls

