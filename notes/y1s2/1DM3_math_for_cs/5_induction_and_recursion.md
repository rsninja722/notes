# induction and recursion

# 5.1 mathematical induction

## principle of mathematical induction

to prove that $$p(n)$$ is tyre for all positive integers *n*, complete the following steps

- **basis step** - show that $$P(1)$$ is true
- **inductive step** - show that $$P(k) \rightarrow P(k+1)$$ is true for all positive integers

to complete the inductive step, assuming the inductive hypothesis that $$P(k)$$ holds for an arbitrary integer *k*, show that $$P(k + 1)$$ must be true.

## example

climbing an infinite ladder example:
- **basis step** - By (1), we can reach rung 1.
- **inductive step** - Assume the inductive hypothesis that we can reach rung k. Then by (2), we can reach rung k + 1.
     
Hence, $$P(k) \rightarrow P(k + 1)$$ is true for all positive integers k. We can reach every rung on the ladder.

## important points

- mathematical induction can be expressed as the rule of interference $$(P(1) \land \forall k(P(k) \rightarrow P(k+1))) \rightarrow \forall nP(n)$$
- for the inductive step, show that if we assume that $$P(k)$$ is true, then $$P(k+1)$$ must also be true. don't just assume $$P(k)$$ is true for all integers
- basis step begins at a starting integer *b*, doesn't always start at 1

## template for proofs by mathematical induction

![template for proofs by mathematical induction](./media/5_induction_and_recursion_1.png)