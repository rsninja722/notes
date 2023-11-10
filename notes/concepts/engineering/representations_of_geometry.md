# representations of geometry

## curves and surfaces

### implicit representation

for implicit representations, you can tell where a point lies on a shape:

$$
x = \begin{cases}
   \text{point on shape} &\text{if } f = 0\\\\
   \text{point on one side} &\text{if } f > 0\\\\
   \text{point on other side} &\text{if } f < 0
\end{cases}
$$

#### curve 

$f(x, y) = 0$

input: point, output: scalar value

#### surface

$f(x, y, z) = 0$

input: point, output: scalar value

#### specific implicit equations

- **line** - $f(x,y) = Ax + By + C$ or $y = mx+b$
   - point distance to line - $d = \frac{f(x,y)}{\sqrt{}A^2 + B^2}$
-  **circle** - centered on $(x_c,y_c)$ with radius $r$: $f(x,y) = (x-x_c)^2 + (y-y_c)^2 - r^2$
- **quadratic curve** - $f(x,y) = Ax^2 + Bxy + Cy^2 + Dx + Ey + F$
- **plane** - $f(x,y,z) = Ax + By + Cz + D$ or for normal vector $n$ and point on plane $a$: $f(p) = (p-a) \cdot n$
- **sphere** - centered on $c(x_c, y_c, z_c)$ with radius $r$: $f(x,y,z) = (x - x_c)^2 + (y-y_c)^2 + (z-z_c)^2 - r^2$ or in vector form: $f(p) = (p- c)^2 - r^2$
- **ellipsoid** - radii (a,b,c) from center along the (x,y,z) axis respectively $f(x,y,z) = \frac{(x - x_c)^2}{a^2} + \frac{(y-y_c)^2}{b^2} + \frac{(z-z_c)^2}{c^2} - 1$ 

### parametric representation

- $\mathbb{R}^2$: $p = f(t)$
- $\mathbb{R}^3$: $p = f(u,v)$

- $t$ and $u,v$ are scalars
- $p$ is a point position (x,y) or (x,y,z) 

the shape is found by sampling different scalars $t$ or $u,v$ and recording the resulting points

```
   t = mid _____. t = end
      __._/
.____/
t = start
```

#### specific parametric equations

- **line** - for two points $p_0,p_1$ on a line: $f(t) = p_0 + t(p_1-p_0)$
   - line - $t \in (-\infin, +\infin)$
   - ray - $t \in [0, +\infin)$
   - segment - $t \in [0, 1)$
   - or: for start point $o$ and direction $d$: $f(t) = o + td$
- **curve example** - $f(t) = (\cos{t}, \sin{t}, t)$ produces a upwards spiral
- **sphere** - $f(\theta, \phi) = ( r \cos{\phi} \sin{\theta},r \sin{\phi} \sin{\theta},r \cos{\theta} )$