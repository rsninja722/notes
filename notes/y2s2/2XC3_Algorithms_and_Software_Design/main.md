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

## python append

- worst case - O(n)
- worst amortized - O(1)