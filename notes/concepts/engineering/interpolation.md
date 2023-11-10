# interpolation

$p$ is a point with values $(x,y,...)$

## linear interpolation

for two values $v_0,v_1$ we find the value in between: $v_t = (1-t) v_0 + t v_1$ for t = \[0,1\]

$t$ can be found from $p_t$: $t = \frac{x_t - x_0}{x_1 - x_0}$

## bilinear interpolation

to find the value for a point between 4 points on a grid, find the 2 values between 2 sets of points, then the value between those

$t_x = \frac{x_m - x_0}{x_1 - x_0}$

$t_y = \frac{y_m - y_0}{y_1 - y_0}$

$v_{m0} = (1-t_x) v_{00} + t_x v_{10}$

$v_{m1} = (1-t_x) v_{01} + t_x v_{11}$

$v_m = (1-t_y) v_{m0} + t_y v_{m1}$

## trilinear interpolation

extend the concept of bilinear interpolation to a 3D cube 

## barycentric interpolation

for a triangle defined by three points $a,b,c$ a point $p$ within the triangle can be defined as the area of the three smaller triangles $A_a = CBP, A_b = CAP, A_c = BAP$ divide each area by the area of the full triangle to get the barycentric coordinate $(\alpha,\beta,\gamma )$, note: $\alpha + \beta + \gamma = 1$

with $p = (x,y,z)$ we can calculate:

$\beta = \frac{(y_a - y_c)x + (x_c - x_a) y +x_a y_c - x_c y_a}{(y_a - y_c)x_b + (x_c - x_a) y_b +x_a y_c - x_c y_a}$

$\gamma = \frac{(y_a - y_b) x + (x_b - x_a) y +x_a y_b - x_b y_a}{(y_a - y_b)x_c + (x_b - x_a) y_c +x_a y_b - x_b y_a}$

$\alpha = 1 - \beta - \gamma$

- interpolate by: $p(\alpha,\beta,\gamma) = \alpha a + \beta b + \gamma c$
- $p$ inside the triangle for $0 < \alpha, \beta, \gamma < 1$
- $p$ on edge if $\alpha,\beta,\gamma$ has one zero
- $p$ on vertex if $\alpha,\beta,\gamma$ has two zeros

### in 3D

- $n_a = (c-b) \times (p-b)$
- $n_b = (a-c) \times (p-c)$
- $n_c = (b-a) \times (p-a)$
- $n = (b-a) \times (c-a)$
- $\alpha = \frac{n\cdot n_a}{||n||^2}$ 
- $\beta = \frac{n\cdot n_b}{||n||^2}$ 
- $\gamma = \frac{n\cdot n_c}{||n||^2}$ 