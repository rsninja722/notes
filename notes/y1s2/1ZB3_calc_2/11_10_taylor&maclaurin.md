# 11.10 taylor and mclaurin series

how do we represent other functions as a power series?

$$f(x) = \sum_{n=0}^{\infin} c_n (x-a)^n$$
- $$c_n$$ - finding these coeffeints is key
- $$a$$ - center point (can pick what we want)

find the coefficients by looking at what happens when $$x = a$$

- $$f(x) = c_0 + c_1 (x-a)+ c_2 (x-a)^2+ c_3 (x-a)^3 + \dots$$
    - $$f(a) = c_0$$
- $$f(x) = c_1 + 2c_2 (x-a)+ 3c_3 (x-a)^2 + \dots$$
    - $$f'(a) = c_1$$
- $$f(x) = 2c_2 +(3\cdot 2) c_3 (x-a) + (4\cdot 3) c_4 (x-a)^2 + \dots$$
    - $$f''(a) = 2c_2$$
    - $$\frac{1}{2}f''(a) = c_2$$
- $$f(x) = (3\cdot 2) c_3  + (4\cdot 3 \cdot 2) c_4 (x-a) + \dots$$
    - $$f'''(a) = (3\cdot 2) c_3$$
    - $$\frac{1}{3!} f'''(a) = c_3$$

in general, $$c_n = \frac{f^{(n)} (a)}{n!}$$ (for $$f^{(n)}$$, differentiate f(x) n times)

## taylor series

taylor series of $$f$$ around $$a$$: $$f(x) = \sum_{n=0}^{\infin} \frac{f^{(n)} (a)}{n!} (x-a)^n$$

## mclaurin series

a taylor series of a function centered at $$a = 0$$ is called a maclaurin series $$f(x) = \sum_{n=0}^{\infin} \frac{f^{(n)} (0)}{n!}$$

## examaple

what is the power series rep of $$f(x) = e^x)$$ centered at $$a=0$$?

$$c_n = \frac{f^{(n)} (0)}{n!} = \frac{1}{n!}$$

$$f^{(n)} (x) = e^x$$

$$f^{(n)} (0) = e^0 = 1$$

so $$f(x) = e^x = \sum_{n=0}^{\infin} \frac{1}{n!} x^n$$

use limit test to find where it converges

## examaple

find maclaurin series for $$f(x) = \sin{x})$$ 

$$f(0) = \sin{0} = 0$$
$$f'(0) = \cos{0} = 1$$
$$f''(0) = -\sin{0} = 0$$
$$f'''(0) = -\cos{0} = -1$$
$$f''''(0) = \sin{0} = 0$$

so $$f(x) = \sin{x} = \sum_{n=0}^{\infin} \frac{(-1)^n}{(2n+1)!} x^{2n+1}$$

use limit test to find where it converges