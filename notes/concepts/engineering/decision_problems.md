# decision problems

- **decision problem** - a problem to determine the answer to a yes-or-no question about some input

- a **solution** to a decision problem is an **algorithm** that for each input, returns a correct output "yes" or "no"
    - this is a [computable](?note=notes/concepts/engineering/computation.md) <!-- [](/notes/concepts/engineering/computation.md) --> function

## decidability 

- a decision problem is **decidable** if there exists a computable function that solves it
- there exist undecidable decision problems such as the entscheidungsproblem and the halting problem

## how decision problems relate with automata

- a decision problem can be formalized as a decision problem of whether a [string](?note=notes/concepts/engineering/computation-strings_and_sets.md) <!-- [](/notes/concepts/engineering/computation-strings_and_sets.md) --> is the member of a particular set $S \subseteq \Sigma^*$ for some alphabet $\Sigma$
- a solution to the decision problem is then a computable function $f_s : \Sigma^* \to \\{yes,no\\}$ such that, for all $x\in \Sigma^*$, $f_s(x) = \text{yes iff } x \in S$
- you can use [automata](?note=notes/concepts/engineering/finite_automata_and_regular_sets.md) <!-- [](/notes/concepts/engineering/finite_automata_and_regular_sets.md) --> to model\solve such problems 