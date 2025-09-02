# optimization

## linear regression

- take a set of points on a 2d plane
- define a **model** as a straight line
- define **parameters** as $w$ and $b$ in $f(x) = wx + b = y$
- define **cost function** (least squared fit) as the square of the vertical distance from each point to the line $\frac{1}{n} \sum_1^n (f(x)-y)^2$

![linear regression cost](./media/3ML3_1.JPG)

- determine $w$ and $b$ by minimizing the cost function

### finding w and b

set gradient to 0

$\nabla Q = 0$

$(\frac{\partial Q}{\partial w}, \frac{\partial Q}{\partial b}) = (0,0)$

TODO how to deriv

$b = \overline{y} - w \overline{x}$ ($\overline{x}$ =  average of all x)

$w = \frac{\sum_1^n (x_i y_i - \overline{y} x_i)}{\sum_1^n (x_i^2 - \overline{x} x_i)}$


## mathematical optimization for minimums/maximums

- **cost function** - $g(w) = w2$

- **zero order definition** - only the function itself is used in the definition (no derivatives)

### global minimum 

$g(\vec{w}^{*}) \leq g(\vec{w}) \forall \vec{w}$ (g(w*) for the minimum w* is less then or equal to g(w) for all possible values)

### global minimum 

$g(\vec{w}^{*}) \geq g(\vec{w}) \forall \vec{w}$

### local minimums/maximums

a point that is less/greater than all points nearby

# zero order global methods

- try an equal distribution of points
- try random points

## local optimization

- start from a point and walk towards a local min/max

- what should the sequences of test points be?

- problem: to get to a better point, one may have to go to worse places to get to better mins/maxs

### decent direction

at $\vec{w}_0$ decide on a decent direction $\vec{d}_0$

- then $\vec{w}_k = \vec{w}_{k+1} + \vec{w}_{k-1}$

### step length parameter

choice of $||\vec{d}_k||$ affects optimization

- too large - can always go past a min/max
- too small - no progress, can get stuck at small local mins/maxes

- better strategy - decrease step size with every step

### random search

- generate random directions, if a direction leads to a better max/min, go there
- if nothing better found, generate new points or stop
- usually normalize the random steps, and multiply by scalar $\alpha$ (the **learning rate**)

- scales poorly with dimension
    - chance of picking a increasing direction in dimension n is $\frac{1}{2} (\frac{\sqrt{3}}{2})^{n-7}$, for $n = 30$, chance is $<$ 1%
    - but with higher dimensions, chance of getting stuck in a local min/max is lower (not rigorous)
- may fail to converge
    - could reach a place where all directions lead to a worse spot

#### diminishing step length rules

- chose a way to decrease $\alpha$ each step
- example: $\alpha = \frac{1}{k}$

#### coordinate search

- only move in coordinate axis directions
    - scales better with higher dimensions ($2n$ directions to move in $n$ dimension )

#### coordinate descent

- generate all coordinate axis directions, evaluate one by one, once a better place is found, start heading in that direction
    - computationally more efficient than coordinate search

# first order optimization

depends on the first derivative/gradient

TODO

## gradient decent

TODO