# 11.1 sequences 

- **infinite sequence** -  list of terms $$\lbrace a_1,a_2,a_3,\dots,a_n,\dots\rbrace$$
    - also denoted by $$\lbrace a_n \rbrace$$ or $${\lbrace a_n \rbrace}_{n=1}^{\infin}$$
    - n starts at 1 unless specified otherwise

## limit of a sequence

- **limit** - the value a sequence approaches written as $$\lim_{n\to\infin} a_n = L$$ or $$a_n \to L \enspace as \enspace n \to \infin$$
- **convergent** - a sequence converges if it approaches a single number
- **divergent** - a sequence diverges if it does not approaches a single number

graphs that converge

![converging graphs](./media/11_1_sequences_1.png)

graphs that diverge

![converging graphs](./media/11_1_sequences_2.png)

### limit of $$f(x)$$ and $$a_n$$
if $$\lim_{x\to\infin} f(x) = L$$ and $$f(n) = a_n$$ when *n* is an integer, then $$\lim_{n\to\infin} a_n = L$$

### limit laws for sequences
suppose that  $$\lbrace a_n\rbrace$$ and $$\lbrace b_n\rbrace$$ are convergent sequences and *c* is a constant. then:

1. $$\lim_{n\to\infin} (a_n + b_n) = \lim_{n\to\infin} a_n + \lim_{n\to\infin} b_n$$ sum law
2. $$\lim_{n\to\infin} (a_n - b_n) = \lim_{n\to\infin} a_n - \lim_{n\to\infin} b_n$$ difference law
3. $$\lim_{n\to\infin} ca_n = c \lim_{n\to\infin} a_n$$ constant multiple law
4. $$\lim_{n\to\infin} (a_nb_n) = \lim_{n\to\infin} a_n \cdot \lim_{n\to\infin} b_n$$ product law
5. $$\lim_{n\to\infin} \frac{a_n}{b_n} = \frac{\lim_{n\to\infin} a_n}{\lim_{n\to\infin} b_n}$$ if $$\lim_{n\to\infin} b_n \ne 0$$ quotient law
6. $$\lim_{n\to\infin} a_n^p= \big[ \lim_{n\to\infin} a_n \big]^p$$ if $$ p > 0 \land a_n > 0$$ power law
6. $$\lim_{n\to\infin} |a_n| = 0$$, then $$\lim_{n\to\infin} a_n = 0$$ absolute law

### squeeze theorem for sequences
if $$a_n \leq b_n \leq c_n$$ for $$n \geq n_0$$ and $$\lim_{n\to\infin}a_n= \lim_{n\to\infin}c_n = L$$, then $$ \lim_{n\to\infin} b_n = L$$

### applying a continuos function to the terms of a convergent sequence will also converge
if $$\lim_{n\to\infin}a_n=L$$ and the function f is continuous at L, then $$\lim_{n\to\infin}f(a_n)=f(L)$$

## monotonic and bounded sequences
sequences in which terms that always increase of decrease
- **increasing** - $${\lbrace a_n \rbrace}$$ is increasing if $$a_n < a_{n+1}$$ for all $$n \geq 1$$
- **decreasing** - $${\lbrace a_n \rbrace}$$ is decreasing if $$a_n > a_{n+1}$$ for all $$n \geq 1$$
- **monotonic** - increasing or decreasing
- **bounded above** - $${\lbrace a_n \rbrace}$$ is bounced above if there is an *M* such that $$a_n \leq M$$ for all $$n \geq 1$$
- **bounded below** - $${\lbrace a_n \rbrace}$$ is bounced below if there is an *m* such that $$m \leq a_n$$ for all $$n \geq 1$$
- **bounded sequence** - above or below

### monotonic sequence theorem 
every bounded monotonic sequence is convergent (increasing and bounded above converges, and decreasing and bounded below converges)









## infinitely large regions of improper integral

either
- integral with infinite bounds $$\int_a^\infin f(x) \ dx$$, $$\int_{-\infin}^b f(x) \ dx$$, $$\int_{-\infin} ^\infin f(x) \ dx$$,
- integral of function with vertical asymptotes $$\int_a^b \frac{1}{x^2} \ dx$$

## improper integral with infinite bounds 
1. a finite limit exists - the improper integral **converges**
2. the limit doesn't exist (this includes the limit being equal to $$\pm \infin$$) - the improper integral **diverges**

## to determine if diverges on converges
0. if  $$\int_{-\infin} ^\infin$$ split integral into two pieces: $$\int_{-\infin} ^a$$ and $$\int_a^\infin$$ usually a = 0
1. write as a limit of a definite integral $$\int_1^{\infin} \frac{1}{x} \ dx = \lim_{t \to \infin} \int_1^t \frac{1}{x} \ dx$$
2. compute definite integral $$\lim_{t \to \infin} \int_1^t \frac{1}{x} \ dx =  \lim_{t \to \infin}[ \ln|x| ] \big|_1^t $$

$$= \lim_{t \to \infin}[ \ln(t) - \ln(1) ]$$

$$= \lim_{t \to \infin} \ln(t)$$

3. compute the limit

$$= \lim_{t \to \infin} \ln(t) = \infin$$ doesn't exist

$$\int_1^{\infin} \frac{1}{x} \ dx = \infin$$ diverges

## comparison theorem
when you can't find the value of an improper integral, but still want to find if i converges

e.g. $$\int_0^{\infin} e^{-x^2} \ dx$$

if we want $$\int_a^{\infin} g(x) \ dx$$ but can't integrate g(x), we can find another function f(x) that's greater than g(x) and we can integrate f(x) and we can show $$\int_a^{\infin} f(x) \ dx$$ converges, then $$\int_a^{\infin} g(x) \ dx$$ also converges

or we can find another function f(x) that's smaller than g(x) and we can integrate f(x) and we can show $$\int_a^{\infin} f(x) \ dx$$ diverges, then $$\int_a^{\infin} g(x) \ dx$$ also diverges

! only if f(x) and g(x) are continuous on $$[a,\infin)$$    

![img](./notes/y1s2/1ZB3_calc_2/Capture.PNG)
![img](./notes/y1s2/1ZB3_calc_2/Capture2.PNG)
![img](./notes/y1s2/1ZB3_calc_2/Capture3.PNG)

## mathmatical induction
![img](./notes/y1s2/1ZB3_calc_2/Capture4.PNG)

3. show that the property is true for all n

![img](./notes/y1s2/1ZB3_calc_2/Capture5.PNG)

