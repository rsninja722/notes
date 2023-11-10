# pascal's triangle

- start with an infinite row ... ,0,0,1,0,0, ...
- each number next row is found by adding the number up and to the left with the number up and to the right

$$\begin{matrix}
&&&&&&&1&&&&&&\\\\
&&&&&&1&&1&&&&&\\\\
&&&&&1&&2&&1&&&&\\\\
&&&&1&&3&&3&&1&&&\\\\
&&&1&&4&&6&&4&&1&&\\\\
&&1&&5&&10&&10&&5&&1&\\\\
&1&&6&&15&&20&&15&&6&&1
\end{matrix}$$

## binomial theorem

$$(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^k b^{n-k}$$

### binomial expansion

to expand $(a,b)^n$ use the terms in pascals triangle at row n as coefficients, and set the exponents of a to n...0 and the exponents of b to 0...n

$(a,b)^0 = 1 a^0 b^0 = 1$

$(a,b)^1 = 1 a^1 b^0 + 1 a^1 b^0 = a + b$

$(a,b)^2 = 1 a^2 b^0 + 2 a^1 b^1 +1 a^0 b^2 = a^2 + 2ab + b^2$

## pascals triangle with combinations

$$\begin{matrix}
&&&&&&&\binom{0}{0}&&&&&&\\\\
&&&&&&\binom{1}{0}&&\binom{1}{1}&&&&&\\\\
&&&&&\binom{2}{0}&&\binom{2}{1}&&\binom{2}{2}&&&&\\\\
&&&&\binom{3}{0}&&\binom{3}{1}&&\binom{3}{2}&&\binom{3}{3}&&&\\\\
&&&\binom{4}{0}&&\binom{4}{1}&&\binom{4}{2}&&\binom{4}{3}&&\binom{4}{4}&&\\\\
&&\binom{5}{0}&&\binom{5}{1}&&\binom{5}{2}&&\binom{5}{3}&&\binom{5}{4}&&\binom{5}{4}&\\\\
&\binom{6}{0}&&\binom{6}{1}&&\binom{6}{2}&&\binom{6}{3}&&\binom{6}{4}&&\binom{6}{4}&&\binom{6}{5}
\end{matrix}$$