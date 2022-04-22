# calc 1 summary 

- `[a,b] inclusive`
- `(a,b) exclusive`


# simplifying/manipulating expressions

## exponents

- $$a^x \times a^y = a^{x+y}$$
- $$a^x \div a^y = a^{x-y}$$
- $$a^{x^y} = a^{xy}$$
- $$a^0 = 1$$
- $$a^{-x} = \frac{1}{a^x}$$
- $$a^{\frac{1}{x}} = \sqrt[x]{a}$$
- $$\frac{a}{b}^x = \frac{a^x}{b^x}$$
- $$a^{\frac{x}{y}} = \sqrt[y]{a^x} = (\sqrt[y]{a})^x$$
- $$\sqrt[x]{ab} = \sqrt[x]{a}\sqrt[x]{b}$$

## logarithms

- $$\log_{b}{xy} = \log_{b}{x} + \log_{b}{y}$$
- $$\log_{b}{\frac{x}{y}} = \log_{b}{x} - \log_{b}{y}$$
- $$\log_{b}{x^r} = r\log_{b}{x}$$
- $$\log_{b}{\frac{1}{x}} = -\log_{b}{x}$$
- $$\frac{\log_{a}{x}}{\log_{a}{y}} = \log_{y}{x}$$

### natural logs

- $$e = 2.718281828459\dots$$
- $$\ln{x} = \log[e]{x}$$
- $$\ln{e^x} = x$$
- $$e^{\ln{x}} = x$$
- $$\ln{xy} = \ln{x} + \ln{y}$$
- $$\ln{\frac{x}{y}} = \ln{x}-\ln{y}$$
- $$\ln{x^y} = y\ln{x}$$
- $$x^y = e^{y\ln{x}}$$

## rationals

$$\frac{ax}{bx} = \frac{a}{b}$$

to add:

$$\frac{a}{b} + \frac{c}{d} \to \frac{ad}{bd} + \frac{cb}{bd} \to \frac{ad + cb}{bd}$$

to multiply:

$$\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd}$$

to divide:

$$\frac{a}{b} \div \frac{c}{d} = \frac{ad}{bc}$$ (flip and multiply)

rationalize bottom:

$$\frac{2}{\sqrt{3}} \to \frac{2}{\sqrt{3}} \times \frac{\sqrt{3}}{\sqrt{3}} = \frac{2\sqrt{3}}{3}$$    

## factoring

### grouping

$$ax^2 + bx^2 = (a+b)x^2$$

### greatest common factor (GFC)

$$ax + bx = x(a+b)$$

### factoring identities

- $$x^2 - y^2 = (x+y)(x-y)$$
- $$(x+y)^2 = x^2 + 2xy + y^2$$
- $$(x-y)^2 = x^2 - 2xy + y^2$$

# trig

[]() | []()
---|---
$$\sin{\theta} = \frac{opp}{hyp}$$ | $$\csc{\theta} = \frac{hyp}{opp}$$
$$\cos{\theta} = \frac{adj}{hyp}$$ | $$\sec{\theta} = \frac{hyp}{adj}$$
$$\tan{\theta} = \frac{opp}{adj}$$ | $$\cot{\theta} = \frac{adj}{opp}$$

<img src="https://www.sfu.ca/math-coursenotes/Math%20157%20Course%20Notes/images/trig4.svg" style="filter: invert(1);">

## inverse trig

- $$\sin^{-1}{(\sin{x})} = x$$
- $$\sin{(\sin^{-1}{x})} = x$$
- $$\sin{x} = y \leftrightarrow \sin^{-1}{y} = x$$
- $$\sin^{-1}{x} = \arcsin{x}$$

# derivatives

## common functions

function | derivative
---|---
$$c$$	| $$0$$
$$x$$	| $$1$$
$$ax$$	| $$a$$
$$x^2$$	| $$2x$$
$$\sqrt{x}$$	| $$\frac{1}{2}x^{-\frac{1}{2}}$$
$$e^x$$	| $$e^x$$
$$a^x$$	| $$\ln{(a)} a^x$$
$$\ln{x}$$ |	$$\frac{1}{x}$$
$$\log_{a}{x}$$	| $$\frac{1} {x \ln{a}}$$
$$\sin{x}$$ |	$$\cos{x}$$
$$\cos{x}$$ |	$$−\sin{x}$$
$$\tan{x}$$ |	$$\sec^2{x}$$
$$\sin^{-1}{x}$$ |	$$\frac{1}{\sqrt{1-x^2}}$$
$$\cos^{-1}{x}$$ |	$$\frac{-1}{\sqrt{1-x^2}}$$
$$\tan^{-1}{x}$$ |	$$\frac{1}{1+x^2}$$

## derivative rules

rule | function | derivative
---|---|---
Multiplication by constant | $$cf$$ |	$$cf'$$
Power Rule |	$$x^n$$	 | $$nx^{n−1}$$
Sum Rule | $$f + g$$|$$f' + g'$$
Difference Rule	|$$f - g$$|	$$f' − g'$$
Product Rule |$$fg$$	| $$f g' + f' g$$
Quotient Rule |	$$\frac{f}{g}$$ | $$\frac{f' g − g’ f}{g^2}$$
Reciprocal Rule | $$\frac{1}{f}$$|$$\frac{−f'}{f^2}$$
Chain Rule |$$f(g(x))$$	|$$f'(g(x))g'(x)$$

# summations\integrals\limits

## limits

the limit as x approaches infinity, is the value the function tends towards. Some examples:

- $$\lim_{x\to \infin} \frac{1}{x} 3x \to 3$$
- $$\lim_{x\to \infin} \frac{1}{x^2} 3x \to 0$$
- $$\lim_{x\to \infin} \frac{1}{x} 3x^2 \to \infin$$


### l'Hospital's rule

if $$\lim_{x\to a}\frac{f(x)}{g(x)} = \frac{0}{0} \text{or} \frac{\infin}{\infin}$$

then you can try $$\frac{f(x)}{\frac{1}{g(x)}}$$ or $$\frac{g(x)}{\frac{1}{f(x)}}$$

## summation properties

- $$\sum_{i=m}^{n} ai = \sum_{i=m+k}^{n} a_{i-k} = \sum_{i=m-k}^{n} a_{i+k}$$   
- $$\sum_{i=1}^{n}  cai = c \sum_{i=1}^{n}  ai$$
- $$\sum_{i=1}^{n}  (ai+bi) = \sum_{i=1}^{n}  ai \sum_{i=1}^{n}  bi$$
- $$\sum_{i=1}^{n} c  = nc $$
- $$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$
- $$\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$$
- $$\sum_{i=1}^{n} i^3 = (\frac{n(n+1)}{2})^2$$

## integrals

$$\sum_{i=1}^{n} f(x_i) \Delta x = \int_{a}^{b} f(x) \enspace dx$$

### integral properties

- $$\int_{a}^{b} c \enspace dx = c(b-a)$$
- $$\int_{a}^{b} f(x)+g(x) \enspace dx = \int_{a}^{b} f(x) \enspace dx +  \int_{a}^{b} g(x) \enspace dx$$
- $$\int_{a}^{b} cf(x) \enspace dx = c \int_{a}^{b} f(x) \enspace dx$$
- $$\int_{a}^{b} f(x) \enspace dx = -\int_{b}^{a} f(x) \enspace dx$$
- $$\int_{a}^{a} f(x) \enspace dx = 0$$
- $$\int_{a}^{c} f(x) \enspace dx + \int_{c}^{b} f(x) \enspace dx = \int_{a}^{b} f(x) \enspace dx$$
- $$\int x^n \enspace dx = \frac{1}{n+1} x^{n+1}$$

### solving integrals

find the anti derivative and use that to calculate the area:

$$\int_{3}^{5} f(x) \enspace dx$$

$$= F(x) \big|_3^5$$

$$ = F(5) - F(3)$$

common anti derivatives:

function | anti derivative
---|---
$$f(x)$$ | $$F(x)$$
$$x^n\enspace (x \ne 0)$$ | $$\frac{1}{n+1}(x^{n+1})+C$$
$$\frac{1}{x}$$ | $$\ln |x|+C$$
$$e^x$$ | $$e^x+C$$
$$a^x \enspace (a > 0)$$ | $$\frac{a^x}{\ln{a}}+C$$
$$\cos{x}$$ | $$\sin{x}+C$$
$$\sin{x}$$ | $$-\cos{x}+C$$
$$\sec^2{x}$$ | $$\tan{x}+C$$
$$\sec{x}\tan{x}$$ | $$\sec{x}+C$$
$$\frac{1}{\sqrt{1-x^2}}$$ | $$\sin^{-1}{x}+C$$
$$\frac{1}{1+x^2}$$ | $$\tan^{-1}{x}+C$$

<details>
<summary>bigger list</summary>
<img src="https://calculusreviewbm.weebly.com/uploads/2/0/9/9/20998012/591737_orig.png">

</details>

#### integration by substitution

[link](https://www.mathsisfun.com/calculus/integration-by-substitution.html)

#### integration by parts


[]()|[]()
---|---
$$u$$ - going to differentiate | $$dv$$ - going to integrate
$$du$$ - $$u\enspace dx$$ | $$v$$ - $$\int dv dx$$

then put into $$uv - \int v du$$, solve the integral and simplify

remember to add $$+C$$

[link](https://www.mathsisfun.com/calculus/integration-by-parts.html)