# 3MI3 concepts

## review

[sets](?note=notes/concepts/engineering/sets.md) <!-- [](/notes/concepts/engineering/sets.md) -->

## topics

- main questions
    - why is there more than one programming language?
    - why are programming languages crated how they are?

[history of computation](?note=notes/concepts/engineering/history_of_computation.md) <!-- [](/notes/concepts/engineering/history_of_computation.md) -->

[syntax and semantics](?note=notes/concepts/engineering/syntax_notation_and_semantics.md) <!-- [](/notes/concepts/engineering/syntax_notation_and_semantics.md) -->


# tut 1 question answers

## 1.

- $s_1$ = 0
- $s_2$ = succ 0
- $s_3$ = if succ 0 then true else false
- $s_4$ = iszero if succ 0 then true else false


## 2. 

$$T(n) = \begin{cases} 
    n = 0 & 1 \\\\
    n = 1 & 4 \\\\
    n > 1 & 3 + T(n-1) \cdot 3 + T(n-1)^3 \\\\
\end{cases}$$

base cases

for $S_0$  there is only the empty set

for $S_1$ there is the empty set, true, false, and 0

inductive step

$S_i$ includes the 3 constants true, false, and 0, as well as succ, pred, and iszero applied to all elements of $S_{i-1}$, and if then else can use any combination of the elements of $S_{i-1}$ 3 times

T(4) = 209997673399839

## 3.

## binary representation theorem

any $n \in \mathbb{N}$ can be written as a sum of distinct powers of two

- base case - $n = 1$: $1 = 2^0$  P(1) holds
- inductive step - show that p(1), P(2), ... , P(k) $\implies$ P(k+1)
    - assume $m$ is the maximum integer that satisfies $k+1 > 2^m$
    - $$ k+1 = \begin{cases}
        k+1 & 2^t  \text{ for } t\in \mathbb{N} \\\\
        k+1 & 2^m + r = 2^m + (2^{r_1} + 2^{r_2} + ... + 2^{r_p})
    \end{cases}$$
    - $r \leq k$ p(r) holds




```hs
data Nat = Zero | Succ Nat
  deriving(Show, Eq)
  
addNat :: Nat -> Nat -> Nat
addNat Zero x = x
addNat (Succ x) y = Succ (addNat x y)

natToInt :: Nat -> Int
natToInt Zero = 0
natToInt (Succ x) = 1 + (natToInt x)

nat1 = Succ(Succ(Succ Zero)) -- 3
nat2 = Succ(Succ Zero) -- 2

main :: IO()
main = do
  print (addNat nat1 nat2)
  print (natToInt (addNat nat1 nat2))
```

```hs
data Tree = Null | Node Int Tree Tree
  deriving(Show, Eq)
  
sumTree :: Tree -> Int
sumTree Null = 0
sumTree (Node val l r) = val + (sumTree l) + (sumTree r)

tree1 = Node 2 (Node 3 (Null) (Null)) (Node 4 (Null) (Null))

main :: IO()
main = do
  print(sumTree tree1)
``` 


# arith

```js
function T(n) {
    if(n == 1) {
        return ["true", "false", "0"];
    } else {
        let ret = [] 
        let prev = T(n-1);
        ret.concat(prev);
        ret.concat(prev.map(x => "succ " + x));
        ret.concat(prev.map(x => "pred " + x));
        ret.concat(prev.map(x => "iszero " + x));
        for(let i = 0; i < prev.length; i++) {
            for(let j = 0; j < prev.length; j++) {
                for(let k = 0; k < prev.length; k++) {
                   ret.concat(["if " + prev[i] + " then " + prev[j] + " else " + prev[k]]);
                }
            }
        }

        return ret;
    }
}
```