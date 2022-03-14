# modelling population growth (continued)

what happens if we don't assume there are ideal conditions? if there are limited resources so there's a maximum # of individuals our environment can sustain?

## rate of change of population

$$\frac{dP}{dt} = rp(1- \frac{P}{K})$$ <- called **logistic growth**, is a 1st order ODE

rp = exponential growth
K = carrying capacity/ max population the environment can sustain

$$(1- \frac{P}{K}) $$ -> as P grows towards K, this term shrinks meaning the population grows slower

### what is this saying?

- **equilibrium solutions** - if $$P=0$$ or $$P=K$$ then $$\frac{dP}{dt} = 0$$ -> P(t) isn't changing (constant solutions)
- **population is growing** - if $$P<K$$ then $$1-\frac{P}{K} > 0$$
- **population is shrinking** - if $$P>$$ then $$1-\frac{P}{K} < 0$$

### sketching
its harder to guess a solution, but we can still use this info to sketch a picture.

![alt](./media/popgrowth.png)

## separable ODE (9.3)

we've been solving one class of ODE already: $$Y^' =f(x)$$ (using integrations)

here we'll talk about separable ODES which look different

$$\frac{dy}{dx} = f(x) g(y)$$ -> 1st-order ODE

right hand side can be separated into some function just of x and some function just of y 

### how can we solve?

we'll separate the variables to different sides of the equations:

$$\frac{dy}{dx} = f(x) g(y)$$

$$\int \frac{1}{g(y)} dy = \int f(x) dx$$

integrate with respect to y on right, integrate with respect to x on left

#### example

solve $$\frac{dy}{dx} = \frac{x^2}{y^2}$$

$$\frac{dy}{dx} = (x^2) (\frac{1}{y^2})$$ -> separable ODE

separate variables and integrate

$$\int y^2 dy = \int x^2 dx$$

$$=\frac{1}{3} y^3 + c_2$$ and $$=\frac{1}{3} x^3 + c_1$$

$$\frac{1}{3} y^3 + c_2 = \frac{1}{3} x^3 + c_1$$

$$\frac{1}{3} y^3 = \frac{1}{3} x^3 + c_1 - c_2 $$ can rename c1-c2 as c3

$$y^3 = x^3 + 3c_3$$ can rename 3c3 as c

$$y(x) = (x^3 + c)^{\frac{1}{3}}$$

## some applications

example: logistic growth model

$$\frac{dP}{dt} = rp(1- \frac{P}{K})$$

think of it as $$\frac{dP}{dt} = g(P) (1)$$ where $$rp(1- \frac{P}{K})$$ is g(P) and f(t) is (1)

separate variables and integrate

$$\int \frac{1}{rp(1- \frac{P}{K})} dp = \int 1 dt$$ right side is t+c

$$\int (\frac{1}{rp} \frac{1/rk}{(1- \frac{P}{K})}) dp$$ partial fractions

$$\frac{1}{r} \int \frac{1}{p} dp + \frac{1}{rk} \int \frac{1}{(1- \frac{P}{K})} dp$$

$$\frac{1}{r} ln(P)  + \frac{1}{rk} ln(\frac{1}{1- \frac{P}{K}}) (-k)$$

$$\frac{1}{r}( ln(P) - ln(1- \frac{P}{K}))$$

TODO complete