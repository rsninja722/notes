# 2DO3 concepts

## important points

- take time to decide if order matters and if there is replacement


## review

[sets](?note=notes/concepts/engineering/sets.md) <!-- [](/notes/concepts/engineering/sets.md) -->

- sets - set builder notation, important sets
- set operations - union, intersection, and (relative) compliment operations

[tuples](?note=notes/concepts/engineering/tuples.md) <!-- [](/notes/concepts/engineering/tuples.md) -->

[permutations and combinations](?note=notes/concepts/engineering/permutations_and_combinations.md) <!-- [](/notes/concepts/engineering/permutations_and_combinations.md) -->

[sum product and series](?note=notes/concepts/engineering/sum_product_series.md) <!-- [](/notes/concepts/engineering/sum_product_series.md) -->

[proof by induction](?note=notes/concepts/engineering/proof_by_induction.md) <!-- [](/notes/concepts/engineering/proof_by_induction.md) -->

[calc 1 summary](?note=notes/concepts/engineering/calc_1_summary.md) <!-- [](/notes/concepts/engineering/calc_1_summary.md) -->

## chapter 1

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
- labels

[sample space infinitely many outcomes](?note=notes/concepts/engineering/sample_space_infinitely_many_outcomes.md) <!-- [](/notes/concepts/engineering/sample_space_infinitely_many_outcomes.md) -->

-

[probability random variables](?note=notes/concepts/engineering/probability_random_variables.md) <!-- [](/notes/concepts/engineering/probability_random_variables.md) -->

### questions types

#### arrange n items, in categories

- items - $n$
- categories - $K = (k_1,k_2,..., k_n)$ (all add to n)

= $\\#KP\\#K \times !k_1 \times !k_2 \times ... \times !k_n$


#### selecting subgroups

- items - $n$
- subgroups - $k_1,k_2...$

##### disjoint (members can only be in one subgroup)

= $nCk_1 \times (n-k_1)Ck_2 \times (n-k_1-k_2)Ck_3 ...$

##### members can be in multiple subgroups

= $nCk_1 \times nCk_2 \times nCk_3 ...$

#### selecting something where certain possibilities are disallowed

= #possibilities without restrictions - #restricted possibilities

#### intersection and union of events

- inclusion-exclusion principle 

## chapter 2 - conditional probability and independence

2.1-2.4

[conditional probability](?note=notes/concepts/engineering/conditional_probability.md) <!-- [](/notes/concepts/engineering/conditional_probability.md) -->

[bayes formula](?note=notes/concepts/engineering/bayes_formula.md) <!-- [](/notes/concepts/engineering/bayes_formula.md) -->

[independence](?note=notes/concepts/engineering/probability_independence.md) <!-- [](/notes/concepts/engineering/probability_independence.md) -->

## chapter 3 - random variables

[probability distributions](?note=notes/concepts/engineering/probability_distribution.md) <!-- [](/notes/concepts/engineering/probability_distribution.md) -->

[cumulative distribution](?note=notes/concepts/engineering/cumulative_distribution.md) <!-- [](/notes/concepts/engineering/cumulative _distribution.md) -->

[expectation](?note=notes/concepts/engineering/expectation_variance.md) <!-- [](/notes/concepts/engineering/expectation_variance.md) -->

[variance](?note=notes/concepts/engineering/probability_variance.md) <!-- [](/notes/concepts/engineering/probability_variance.md) -->

[gaussian distribution](?note=notes/concepts/engineering/gaussian_distribution.md) <!-- [](/notes/concepts/engineering/gaussian_distribution.md) -->

## chapter 4 - approximations of the binomial theorem

[normal approximation](?note=notes/concepts/engineering/normal_approximation.md) <!-- [](/notes/concepts/engineering/normal_approximation.md) -->

[law of large numbers](?note=notes/concepts/engineering/law_of_large_numbers.md) <!-- [](/notes/concepts/engineering/law_of_large_numbers.md) -->

[poisson approximation](?note=notes/concepts/engineering/poisson_approximation.md) <!-- [](/notes/concepts/engineering/poisson_approximation.md) -->

[poisson process](?note=notes/concepts/engineering/poisson_process.md) <!-- [](/notes/concepts/engineering/poisson_process.md) -->

[exponential distribution](?note=notes/concepts/engineering/exponential_distribution.md) <!-- [](/notes/concepts/engineering/exponential_distribution.md) -->

## chapter 5 - transforms and transformations

[moment generating function](?note=notes/concepts/engineering/moment_generating_function.md) <!-- [](/notes/concepts/engineering/moment_generating_function.md) -->

[distribution of function of random variable](?note=notes/concepts/engineering/distribution_of_function_of_random_variable.md) <!-- [](/notes/concepts/engineering/distribution_of_function_of_random_variable.md) -->

## chapter 6 - joint distribution of random variables

[joint distribution of random variables](?note=notes/concepts/engineering/joint_distribution_of_random_variables.md) <!-- [](/notes/concepts/engineering/joint_distribution_of_random_variables.md) -->

[jointly continuous random variables](?note=notes/concepts/engineering/jointly_continuous_random_variables.md) <!-- [](/notes/concepts/engineering/jointly_continuous_random_variables.md) -->

[joint distributions and independence](?note=notes/concepts/engineering/joint_distributions_and_independence.md) <!-- [](/notes/concepts/engineering/joint_distributions_and_independence.md) -->

## chapter 7 - sums and symmetry

[sums of independent variables](?note=notes/concepts/engineering/sums_of_independent_variables.md) <!-- [](/notes/concepts/engineering/sums_of_independent_variables.md) -->

[exchangeable random variables](?note=notes/concepts/engineering/exchangeable_random_variables.md) <!-- [](/notes/concepts/engineering/exchangeable_random_variables.md) -->

## chapter 8 - expectation and variance in the multivarient setting

[linearity of expectation](?note=notes/concepts/engineering/linearity_of_expectation.md) <!-- [](/notes/concepts/engineering/linearity_of_expectation.md) -->

[expectation and independence](?note=notes/concepts/engineering/expectation_and_independence.md) <!-- [](/notes/concepts/engineering/expectation_and_independence.md) -->

[sums and moment generating functions](?note=notes/concepts/engineering/sums_and_moment_generating_functions.md) <!-- [](/notes/concepts/engineering/sums_and_moment_generating_functions.md) -->

[covariance and correlation](?note=notes/concepts/engineering/covariance_and_correlation.md) <!-- [](/notes/concepts/engineering/covariance_and_correlation.md) -->

[bivariate normal distribution](?note=notes/concepts/engineering/bivariate_normal_distribution.md) <!-- [](/notes/concepts/engineering/bivariate_normal_distribution.md) -->

# flashcards

<embed tags="stats" mode="and"/>

## chapter 1

<embed tags="stats,chap1" mode="and"/>

## chapter 2

<embed tags="stats,chap2" mode="and"/>

## chapter 3

<embed tags="stats,chap3" mode="and"/>

## chapter 4

<embed tags="stats,chap4" mode="and"/>

## chapter 5

<embed tags="stats,chap5" mode="and"/>

## chapter 6

<embed tags="stats,chap6" mode="and"/>

## chapter 7

<embed tags="stats,chap7" mode="and"/>

## chapter 8

<embed tags="stats,chap8" mode="and"/>

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
