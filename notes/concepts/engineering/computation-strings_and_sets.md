 # computation - strings and sets

### variables

symbols | represents
---|---
a,b,c,d... | symbols/letters
u,v,w,x,y,z ... | strings
$\alpha,\beta,\gamma$... | patterns
A,B,C,D | for sets (of strings)

## decision problems

- **decision problem** - function with a one-bit output (example: "yes" or "no")

to specify a decision problem, you must specify:

- the set $A$ of possible inputs
- the subset $B \subseteq A$ of "yes" instances

### example

to specify a decision problem that decides if a given number is prime

- $A$ = set of all binary encodings of integers (0, 1, 10, 11, 100... or a, b, ba, bb, baa... ect.)
- $B$ = set of all elements of $A$ which are primes

## definitions

the set of possible inputs for a decision problem will always be - the set of finite-length strings that consist of letters from some fixed finite alphabet

- **alphabet** - any finite set, denoted as $\Sigma$
    - example - $\lbrace  0, 1, 2, \dots, 9\rbrace  $ when dealing with integers, or ASCII characters if dealing with text
- **letter/symbol** - element of an alphabet
- **string** - finite length sequence of elements of an alphabet $\Sigma$
    - also called a string over $\Sigma$
    - example - for $\Sigma = \lbrace  a,b\rbrace  $, $aabab$ is a string over $\Sigma$ of length five
- **null string** - string of length 0 that can be made from any alphabet
    - denoted as $\epsilon$ (epsilon)
- $\Sigma^*$ - set of all strings over alphabet $\Sigma$
    - for empty set - $\emptyset^* = \lbrace  \epsilon\rbrace$
    - for non empty sets - $\Sigma^*$ will be an infinite set of finite-length strings
    - example - $\lbrace  a,b\rbrace  ^* = \lbrace  \epsilon,a,b,aa,ab,ba,bb,aaa,aab,\dots \rbrace  $
    - example - $\lbrace  a\rbrace  ^* = \lbrace  \epsilon,a,aa,aaa,aaaa,\dots \rbrace   = \lbrace  a^n | n \geq 0 \rbrace  $

## string operations

- **concatenation** - denoted $xy$ for strings $x$ and $y$
    - concatenation is *associative* - $(xy)z = x(yz)$
- **length** - for a string $x = ababb$, $|x| = 5$ denotes the length of the string
    - $|\epsilon| = 0$
- **repetition** - for a string of x concatenated to itself n times, write $x^n$
    - for example: $a^5 = aaaaa$, $a^1 = a$, $a^0 = \epsilon$, $(aab)^3 = aabaabaab$
    - inductive definition: 
        - $x^0 = \epsilon$
        - $x^{n+1} = $x^n x$
- **occurrences** - $\\#a(x)$ is the number of a's in x
    - example - $\\#0(001101001000) = 8$
- **prefix** - a prefix of a $x$ an initial substring of $x$
    - formally, a string $y$ for which there exists a string $z$ such that $x = yz$
        - $y$ can be $\epsilon$
    - **proper prefix** - a prefix that is not the empty set and not the string itself

## monoid

- **monoid** - any algebraic structure consisting of 
    - a set
    - an associative binary operation for that set
    - an identity for that operation

- $\Sigma^*$, string concatenation, and the identity $\epsilon$ together are a monoid

## sets of strings operations

note: sets of strings are subsets of $\Sigma^*$

- **set union** - $A \cup B = \lbrace x | x \in A \lor x \in B \rbrace$
    - **identity** - $\emptyset$
        - $A \cup \emptyset = \emptyset \cup A = A$
- **set intersection** - $A \cup B = \lbrace x | x \in A \land x \in B \rbrace$
- **complement in** $\Sigma^*$ - $\text{\textasciitilde} A = \lbrace x \in \Sigma^* | x \not\in A \rbrace$
- **concatenation** - $AB = \lbrace xy | x \in A \land y \in B \rbrace$
    - example - $\lbrace a,ab\rbrace \lbrace b,ba\rbrace = \lbrace ab, aba, abb, abba \rbrace$
    - in general, $AB$ and $BA$ are different
    - **identity** - $\lbrace \epsilon \rbrace$
        - $A \lbrace \epsilon \rbrace = \lbrace \epsilon \rbrace A = A$
    - **annihilator** - $\emptyset$
        - $A \emptyset = \emptyset A = \emptyset$
- **powers** $A^n$ of a set $A$
    - inductive definition:
        - $A^0 = \lbrace \epsilon \rbrace$
        - $A^{n+1} = AA^n$
    - examples:
        - $\lbrace a,b \rbrace^0 = \lbrace \epsilon \rbrace$
        - $\lbrace a,b \rbrace^1 = \lbrace a, b \rbrace$
        - $\lbrace a,b \rbrace^2 = \lbrace aa, ab, ba, bb \rbrace$
        - $\lbrace a,b \rbrace^3 = \lbrace aaa, aba, baa, bba, aab, abb, bab, bbb \rbrace$
- **asterate** $A^*$ - the asterate of a set $A$ is the union of all finite powers of $A$
    - $$A^* = \bigcup_{n\geq 0} A^n = A^0 \cup A^1 \cup A^2 \cup \dots$$
    - $A^*$ for $n = 0$ is $\lbrace \epsilon \rbrace$
    - the definition of asterate is the same as $\Sigma^*$
    - **properties**
        - $A^* A^* = A^*$
        - $A^{\*\*} = A^*$
        - $A^* = \lbrace \epsilon \rbrace AA^* = \lbrace \epsilon \rbrace \cup A^* A$
        - $\emptyset^* = \lbrace \epsilon \rbrace$
    - **positive asterate** $A^{+}*$ - $$A^{+} = \bigcup_{n\geq 0} A^n = A^1 \cup A^2 \cup \dots = A^* - \\{\epsilon\\}$$

### set properties

operation | associative | commutative
---|---|---
union | T | T
intersection | T | T
concatenation | T | F

- **union** and **intersection** distribute over each other
    - $A \cup (B \cap C) = (A\cup B)\cap (A\cup C)$
    - $A \cap (B \cup C) = (A\cap B)\cup (A\cap C)$
- **concatenation** distributes over **union**
    - $A (B \cup C) = AB \cup AC$
    - $(A \cup B)C = AC \cup BC$
    - all works for any family of sets
        - $$A (\bigcup_{i\in I} B_i) = \bigcup_{i\in I} A B_i$$
        - $$(\bigcup_{i\in I} B_i)A = \bigcup_{i\in I} B_i A$$
- **concatenation** does *not* distribute over **intersection**
- **de morgan law** holds
    - $\text{\textasciitilde} (A \cup B) = \text{\textasciitilde} A \cap \text{\textasciitilde} B$
    - $\text{\textasciitilde} (A \cap B) = \text{\textasciitilde} A \cup \text{\textasciitilde} B$
