# 2DO3 concepts

## review

[sets](?note=notes/concepts/engineering/sets.md) <!-- [](/notes/concepts/engineering/sets.md) -->

- sets - set builder notation, important sets
- set operations - union, intersection, and (relative) compliment operations

[tuples](?note=notes/concepts/engineering/tuples.md) <!-- [](/notes/concepts/engineering/tuples.md) -->

[sum product and series](?note=notes/concepts/engineering/sum_product_series.md) <!-- [](/notes/concepts/engineering/sum_product_series.md) -->

[proof by induction](?note=notes/concepts/engineering/proof_by_induction.md) <!-- [](/notes/concepts/engineering/proof_by_induction.md) -->

## chapter 1

1.1-1.5

[enumerative combinatorics](?note=notes/concepts/engineering/enumerative_combinatorics.md) <!-- [](/notes/concepts/engineering/enumerative_combinatorics.md) -->

[sample space and probability](?note=notes/concepts/engineering/sample_space_and_probability.md) <!-- [](/notes/concepts/engineering/sample_space_and_probability.md) -->

- probability space
    - axioms
- examples using probability space
- consequences of rules of probability
- finer points

[random sampling](?note=notes/concepts/engineering/random_sampling.md) <!-- [](/notes/concepts/engineering/random_sampling.md) -->

- sampling with replacement, order matters
- sampling without replacement, order matters
- sampling without replacement, order doesn't matter

[sample space infinitely many outcomes](?note=notes/concepts/engineering/sample_space_infinitely_many_outcomes.md) <!-- [](/notes/concepts/engineering/sample_space_infinitely_many_outcomes.md) -->

[probability random variables](?note=notes/concepts/engineering/probability_random_variables.md) <!-- [](/notes/concepts/engineering/probability_random_variables.md) -->

## chapter 2

2.1-2.4

[conditional probability](?note=notes/concepts/engineering/conditional_probability.md) <!-- [](/notes/concepts/engineering/conditional_probability.md) -->

[bayes formula](?note=notes/concepts/engineering/bayes_formula.md) <!-- [](/notes/concepts/engineering/bayes_formula.md) -->

[independence](?note=notes/concepts/engineering/probability_independence.md) <!-- [](/notes/concepts/engineering/probability_independence.md) -->

## chapter 3

3.1-3.4

[probability expectation](?note=notes/concepts/engineering/probability_expectation.md) <!-- [](/notes/concepts/engineering/probability_expectation.md) -->

[probability variance](?note=notes/concepts/engineering/probability_variance.md) <!-- [](/notes/concepts/engineering/probability_variance.md) -->

[gaussian distribution](?note=notes/concepts/engineering/gaussian_distribution.md) <!-- [](/notes/concepts/engineering/gaussian_distribution.md) -->

# tutorial 1 examples

office hours monday

boxes of same size, can use combination, not permutations though

## poker problem sheet

standard deck (52 cards, 13 cards per rank)

drawing 5 cards

possible hands = $c(52,5)$

1. straight flush - 5 consecutive cards from the same suit (Ace can serve as lowest or highest)

10 cards can be the start of the sequence (A-10)

=$\frac{4*10}{c(52,5)}$ (after one of the starting cards is chosen, there is only one way to complete the hand)


2. four of a kind

$\frac{13*12*c(4,4),c(4,1)}{c(52,5)}$

3. full house - 3 of a kind and 2 of a kind

for the 3 - can be 13 kinds

for the 2 - can be 12 kinds

suits for the 3 - c(4,3)

suits for the 2 - c(4,2)

$\frac{13*12*c(4,3),c(4,2)}{c(52,5)}$

4. flush - all cards the same suit

4 suits x 13 cards with 5 chosen - 40 straight flushes

$\frac{4*c(13,5) -40}{c(52,5)}$

5. strait - 5 consecutive numbers

10 cards can start the sequence, each card can be from any suit (4^5) - straight flushes

$\frac{10*4^5-40}{c(52,5)}$

6. three of a kind

3 of a kind and 2 cards of different numbers

13 kinds for 3 of a kind, 12 kinds left for 2 different numbers

suits: $c(4,3)*c(4,1)*c(4,1)$ - can be any suits, so c(4,3) is all the ways to pick 3 of the same number

$\frac{12*c(12,2)* c(4,3)*c(4,1)*c(4,1)}{c(52,5)}$

13x12x11 doesn't work because we don't care about order (13x12x11 = p(13,3))

c(13,3) doesn't work because the first selection use 3 cards, and the rest use 1

7. two pair

$\frac{c(13,2)*11*c(4,2)*c(4,2)*c(4,1)}{c(52,5)}$
