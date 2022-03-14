# counting

# 6.1 the basics of counting

## product rule

you can break a procedure down into a sequence of two task. if there are $$n_1$$ ways to do the first task and $$n_2$$ ways to do the second task, there are $$n_1 \cdot n_2$$ ways to do the procedure

example: how many license plates can be made with three letters followed by 3 digits? -> $$ 26 \cdot 26 \cdot 26 \cdot 10 \cdot 10 \cdot 10 = 17576000$$

### counting functions 

remember - a function means every element in the domain maps to one element in the co-domain

#### counting functions

given set A with *m* elements and set B with *n* elements, there are $$n^m$$ functions as each element in A can map to each element in B 

#### counting one-to-one functions

given set A with *m* elements and set B with *n* elements, and each element in the domain is $$a_1, a_2, \dots, a_m$$. since there are *n* ways to choose the value of $$a_1$$ and $$n-1$$ wats to choose $$a_2$$, etc. there are $$n(n-1) (n-2) \dots (n-m+1) = \frac{n!}{(n-m)!}$$

### counting subsets of a finite set

given set S, use product rule to find the number of different subsets. $$2^{|S|}$$. this is because there is a one to one correspondence between subsets of S and bit strings of length |S|

### number of elements in the cartesian product

$$|A_1 \times A_2 \times \dots \times A_m| = |A_1| \cdot |A_2| \cdot \dots \cdot |A_m|$$

## sum rule

if a task can be done in one of $$n_1$$ or $$n_2$$ ways, there are $$n_1 + n_2$$ ways to do the task. works when no way in $$n_1$$ is the same as any way in $$n_2$$

example: picking either a student or faculty member. if there are 37 faculty members and 83 students, there ar $$37+83 = 120$$ ways to pick

### sum rule in terms of sets

$$|A_1 \cup A_2 \cup \dots \cup A_m| = |A_1| + |A_2| + \dots + |A_m|$$ when $$A_i \cap A_j = \varnothing$$ for all i,j (when none of the sets share elements)

## combine sum and product rule

example: find the possible labels produced by either a single letter or a letter followed by a digit. $$26 + 26 \cdot 10 = 286

## subtraction rule

(principle of inclusion-exclusion)

if a task can be done in either one of $$n_1$$ or $$n_2$$ ways, the total number of ways to do the task is $$n_1 + n_2$$ minus the number of ways to do the task that are common to the two different ways

$$|A \cup B| = |A| + |B| - |A \cap B|$$

## division rule

there are n/d ways to do a task if it can be done using a procedure that can be carried out  in n ways, and for every way w, exactly d of the n ways correspond to way w

Restated in terms of sets: If the finite set A is the union of n pairwise disjoint subsets each with d elements, then n = |A|/d.

In terms of functions: If f is a function from A to B, where both are finite sets, and for every value y ∈ B there are exactly d values x ∈ A such that f(x) = y, then   |B| = |A|/d.


# 6.2 pigeon hole principle

if there are 20 pigeons in a set of 19 pigeonholes, one of the pigeon holes must have more than 1 pigeon

## corollary 1

a function *f* from a set with *k*+1 elements to a set with k elements is not one-to-one

## generalized pigeon hole principle

if N objects are placed into K boxes, then there is at least one box containing at least $$\lceil N/K \rceil$$

# 6.3 permutations and combinations

## permutations

- **permutation** - a set of distinct objects is an ordered arrangement of these objects. an ordered arrangement of r elements of a set is called an r-permutation
    - the number of r-permutations of a set with n elements is denoted by P(n,r)
    - $$P(n,r) = n(n-1)(n-2) \dots (n-r+1)$$
    - **corollary 1** - $$P(n,r) = \frac{n!}{(n-r)!}$$ if n and r are integers with $$q \leq r \leq n$$
    - n is how many elements you have
    - r is how many elements will be in each set

the 2-permutations of S = {1,2,3} are 1,2; 1,3; 2,1; 2,3; 3,1; 3,2. hence, P(3,2) = 6

## combinations

- **combination** - an r-combination of elements of a set is an *unordered* selection of r elements from the set. Thus, an r-combination is simply a subset of the set with r elements
    - the number of r-combination of a set with n distinct elements is denoted by C(n,r) or $$\begin{pmatrix} n \\ r \end{pmatrix}$$
    - $$C(n,r) = \frac{P(n,r)}{P(r,r)} = \frac{n!}{(n-r)! r!}$$ if n and r are integers with $$q \leq r \leq n$$
    - **corollary 2** - $$C(n,r) = C(n,n-r)$$

C(4,2) = 6 because the 2-combinations of {a,b,c,d} are the six subsets {a,b}, {a,c}, {a,d}, {b,c}, {b,d}, {c,d}. 

## combinatorial proofs

a combinatorial proof of an identity is a proof that uses one of the following methods
    - a double counting proof uses counting arguments to prove that both sides of an identity count the same objects, but in different ways.
    - a bijective proof  shows  that there is a bijection between the sets of objects counted by the two sides of the identity.
