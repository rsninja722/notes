# discrete probability

# 7.1 introduction to discrete probability

## probability of an event

- **experiment** - a procedure that yields one of a given set of possible outcomes
- **sample space** - set of possible outcomes of the experiment
- **event** - a subset of the sample space

pierre simon laplace's definition of the probability of an event:

if $$S$$ is a finite sample space of equally likely outcomes, and $$E$$ is an event, that is, a subset of $$S$$, then the probability of $$E$$ is $$p(E) = \frac{|E|}{|S|}$$ where $$0 \leq p(E) \leq 1$$

## probability of complements and unions of events

### complements

let $$E$$ be an event in sample space $$S$$. $$\bar{E} = S - E$$

complementary event of E is given by $$p(\bar{E}) = 1 - p(E)$$

can also be used like $$p(E) = 1 - p(\bar{E})$$

### unions

let $$E_1$$ and $$E_2$$ be events in the sample space $$S$$

$$p(E_1 \cup E_2) = p(E_1) + p(E_2) - p(E_1 \cap E_2)$$

# 7.2 probability theory

## assigning probabilities 

let $$S$$ be a sample space of an experiment with a finite number of outcomes. we assign a probability $$p(s)$$ to each outcome $$s$$, so that:
1. $$0 \leq p(s) \leq 1$$ for each $$s \in S$$
2. $$\sum_{s\in S} p(s) = 1$$

### example
if you had a biased coin that landed on heads twice as often as tails, you can calculate the probabilities:

$$p(H) = 2p(T)$$

because $$p(H) + p(T) = 1$$, it follows that

$$2p(T) + p(T) = 3p(T) = 1$$

hence, $$p(T) = \frac{1}{3}$$ and $$p(H) = \frac{2}{3}$$ 

## uniform distribution

Suppose that $$S$$ is a set with $$n$$ elements. The uniform distribution assigns the probability $$\frac{1}{n}$$ to each element of $$S$$.

## probability of an event 

the probability of the event $$E$$ is the sum of the probabilities of the outcomes in $$E$$

$$p(E) = \sum_{s\in E} p(s)$$ note: no assumption is made about distribution

## probabilities of complements and unions of events

- compliments:  $$p(\bar{E}) = 1 - p(E)$$ still holds
    - $$\sum_{s\in E} p(s) = 1 = p(E) + p(\bar{E})$$
- unions: $$p(E_1 \cup E_2) = p(E_1) + p(E_2) - p(E_1 \cap E_2)$$ also holds under the new definition

## combinations of events

### disjoin events

if $$E_1,E_2,\dots$$ is a sequence of pairwise disjoint events in a sample space $$S$$, then

$$p(\bigcup_{i} E_i) = \sum_{i} p(E_i)$$

### conditional probability

let $$E$$ and $$F$$ be events with $$p(F) > 0$$. the conditional probability of $$E$$ given $$F$$, denoted by $$P(E|F)$$, is defined as:

$$p(E|F) = \frac{p(E\cap F)}{p(F)}$$

### independence

the events $$E$$ and $$F$$ are independent if and only if $$p(E\cap F) = p(E)p(F) $$

### pairwise and mutual independence

the events $$E_1, E_2, \dots, E_n$$ are pairwise independent if and only if $$p(E_i \cap E_j) = p(E_i) p(E_j)$$ for all pairs i and j with $$i \leq j \leq n$$

the events are mutually independent if $$p(E_i1 \cap E_i2 \cap E_i3 \cap \dots \cap E_im) = p(E_i1)p(E_i2)\dots p(E_im)$$ whenever $$i_j,j = 1,2,\dots,m$$ are integers with $$1\leq i_1 < i_2 < \dots < i_m \leq n$$ and $$m \geq 2$$

## bernoulli trails

suppose an experiment can have only two possible outcomes, e.g., the flipping of a coin or the random generation of a bit.
- each performance of the experiment is called a Bernoulli trial
- one outcome is called a success and the other a failure
- if p is the probability of success and q the probability of failure, then p + q = 1

## probability of k successes in n independent bernoulli trials

the probability of exactly $$k$$ successes in $$n$$ independent Bernoulli trials, with probability of success $$p$$ and probability of failure $$q = 1 − p$$, is:

$$C(n,k) p^k q^{n-k}$$

as a function of k: $$b(k:n,p) = C(n,k) p^k q^{n-k}$$

# 7.3 bayes' theorem

suppose that E and F are events from a sample space S such that $$p(E)\ne 0$$ and $$p(F) \ne 0$$. then:

$$p(F|E) = \frac{p(E|F)p(F)}{p(E|F)p(F)+p(E|\bar{F})p(\bar{F})}$$

$$p(E|F) = \frac{p(E\cap F)}{p(F)}$$

## generalized bayes' theorem

suppose that E is an event from a sample space S and that $$F_1,F_2,\dots ,F_n$$ are mutually exclusive events such that $$\bigcup_{i}^{n} F_i = S$$

assume that $$p(E) \ne 0$$ for $$i=1,2,\dots ,n$$ then:

$$p(F_j|E) = \frac{E|F_jp(F_j)}{\sum_{i=1}^{n} p(E|F_i) p(F_i)}$$

## bayesian spam filters

- $$B$$ - spam messages
- $$G$$ - non spam messages
- $$w$$ - particular word
- $$p(w) = \frac{n_B(w)}{|B|}$$ - probability a spam message contains w
- $$q(w) = \frac{n_G(w)}{|G|}$$ - probability a message contains w

$$r(w) = \frac{p(w)}{p(w)+q(w)}$$ - probability the message is spam

# 7.4 expected value and variance

## expected value

the expected value of a random variable $$X(s)$$ on the sample space $$S$$ is equal to 

$$E(X) = \sum_{x\in S} p(s) X(s)$$

### dice example

$$E(X) = \frac{1}{6} \cdot 1 + \frac{1}{6} \cdot 2 +\frac{1}{6} \cdot 3 +\frac{1}{6} \cdot 4 +\frac{1}{6} \cdot 5 +\frac{1}{6} \cdot 6 =  \frac{21}{6} = \frac{7}{2}$$

### theorem 1

if X is a random variable and $$p(X=r)$$ is the probability that $$X = r$$

$$p(X = r) = \sum_{s\in S,X(s)=r} p(s)$$

$$E(X) = \sum_{r\in X(s)} p(X = r)r$$

### theorem 2

the expected number of successes when $$n$$ mutually independent Bernoulli trials are performed, where the probability of success on each trial $$p = np$$

## linearity of expectations

### theorem 3

expected values are linear. for example, the expected value of the sum of random variables is the sum of their expected values 

If $$X_i, i = 1, 2,\dots ,n$$ with $$n$$ a positive integer, are random variables on $$S$$, and if $$a$$ and $$b$$ are real numbers, then 
1. $$E(X_1 + X_2 + \dots + X_n) = E(X_1)+ E(X_2) + \dots + E(X_n)$$
2. $$E(aX + b) = aE(X) + b$$

## average-case computational complexity

the average-case computational complexity of an algorithm can be found by computing the expected value of a random variable

Let the sample space of an experiment be the set of possible inputs $$a_j, j = 1, 2,\dots ,n$$, and let the random variable $$X$$ be the assignment to $$a_j$$ of the number of operations used by the algorithm when given $$a_j$$ as input.

Assign a probability $$p(aj)$$ to each possible input value $$a_j$$.

The expected value of $$X$$ is the average-case computational complexity of the algorithm.

$$E(X) = \sum_{j=1}^{n} p(a_j)X(a_j)$$

## variance

- **deviation** - the deviation of $$X$$ at $$s\in S$$ is $$X(s) - E(X)$$, the difference between the value of $$X$$ and the mean of $$X$$

### definition 4

let $$X$$ be a random variable on the sample space $$S$$. the variance if $$X$$, denoted by $$V(X)$$ is

$$V(S) = \sum_{s\in S} (X(s) - E(X))^2 p(s)$$

that is V(X) is the weighted average of the square of the deviation of X. the standard deviation of X, denoted by σ(X) is defined to be $$\sqrt{V(X)}$$

### theorem 6

if $$X$$ is a random variable on a sample space $$S$$, then

$$V(X) = E(X^2) - E(X)^2$$

### corollary 1

if $$X$$ is a random variable on a sample space $$S$$ and $$E(X) = \mu$$, then

$$V(X) = E((X-\mu)^2)$$

### bienaymé's formula

If $$X$$ and $$Y$$ are two independent random variables on a sample space $$S$$, then $$V(X + Y) = V(X) + V(Y)$$. Furthermore, if $$X_i, i = 1,2,\dots ,n$$, with $$n$$ a positive integer, are pairwise independent random variables on $$S$$, then

$$V(X_1 + X_2 + \dots + X_n) = V(X_1) + V(X_2) + \dots + V(X_n)$$

### chebyshev’s Inequality

Let $$X$$ be a random variable on a sample space $$S$$ with probability function $$p$$. If $$r$$ is a positive real number, then

$$p(|X(s) −  E(X)| \geq r ) \leq V(X)/r^2$$

