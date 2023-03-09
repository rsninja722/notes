# 2XC3 Algorithms and Software Design

- instructor email - macciov@mcmaster.ca
- office hours - ITB 129 after tuesday class

## grades 

Item | Weight | Comments
---|---|---
Graded Lab i | 10% | Sorting algorithms
Graded Lab ii | 10% | Graph algorithms
Graded Lab iii | 10% | Approximation/NPC problems/advanced data structures/dynamic programming
Midterm (March 10th) | 15% | Held during lecture.
Project | 30% | Software design, practical application
Exam (Exam week) | 15% | Cumulative.
Floating | 10% | Better midterm or exam grade

## labs

- groups of 2-3
- information will be posted the weekend before
- consists of
    - implementation
    - experimentation
    - analysis
    - documentation



## textbooks (optional)

- Introduction to Algorithms, Fourth Edition, Cormen et al. (CLRS)
    - good, somewhat high level
- Algorithm Design, Kleinberg and Tardos
    - hand wavey, good for greedy algorithms and dynamic programming
- Algorithms, Sedgewick
    - bad, some people like it

# midterm info

- no red black trees
- no shortest path
- everything up to MSTs and graph lab
    - list/dictionaries
        - python implementation, best/worst cases
        - amortizing
    - heaps/priority queues
        - implementations
            - swim
            - extract
            - increase/decrease key
    - algorithms
        - bubble, selection, insertion, merge, quick, heap
            - and insights
        - prim, kruskal
        - BFS, DFS
        - vertex/edge cover

5 questions (3 3 4 4 6)
    
50 minutes

## if else optimization

unoptimized
```python
r = rand(0,1)
if r < 0.2: # runs 100% of the time
    a()
elif r < 0.9: # runs 80% of the time
    b()
else:
    c()
```

optimized
```python
r = rand(0,1)
if r < 0.7: # runs 100% of the time
    b()
elif r < 0.9: # runs 30% of the time
    a()
else:
    c()
```

## recursion

usually slower than an iterative algorithm

## insertion sort optimization

instead of swapping after every comparison, just shift the elements up, only putting the value you are moving in once you find its place, leads to 1 swap per space instead of 2

## potential testing errors

- not resetting data for each test
    - example - not scrambling an array between sorting algorithm tests

<embed tags="test1" mode="or"/>

## python append

- append worst case - O(n)
- amortized append worst case - O(1)

- do $n$ appends, and distribute the total runtime across $n$ appends
    - most operations take O(1), but some operations take O(n)

### calculation for append

$nO(1) + 1 O(n)$

amortize 

$= \frac{O(n) + O(n)}{n} = O(1)$

### another calculation example

$nO(1) + \frac{n}{10} O(n)$

amortize 

$= \frac{O(n) + O(n^2)}{n} = O(n)$

## recursion

if implementing fibonacci sequence with recursion, the (un optimized) runtime will be $O(2^n)$

### fibonacci space complexity

space complexity = O(n) for fibonacci since the recursive calls look like a tree, and since only one side of `fib(n-1) + fib(n-2)` is calculated at once

## graphing problems

- traveling salesman

### vertex cover 
- set of nodes for which all edges are connected to at least one of the edges in such a set

#### check for cover

```
loop though edges
    if neither node is in the cover set
        return false
```


- edge cover
- independent set


## power sets

```python
p = lambda n:[[]]if n==0 else p(n-1)+[x+[n] for x in p(n-1)]
```

to get the powerset of a set with one more element then another powerset, the new powerset is the old one concatenated to the old one where every set has the new element appended to it

## how many graphs are there?

if $G_n$ is the set of all graphs with $n$ nodes 

what is the magnitude?

$|G_n| = ?$

$E$ = edges

if $n = 10$, $E \subseteq V \times V$, $|V \times V| = 100$, approximate: $\frac{100-10}{2} \approx 45$