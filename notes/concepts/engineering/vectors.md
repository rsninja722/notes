# vectors

the word vector is used to refer to different things in different areas of study

- physics - value with a direction and magnitude
- c++ - resizable arrays
- graphics programming/game engines - points in space/ forces
- math - list of $n$ values

this note focuses on mathematical/graphics programming vectors

## definition

- describes direction with a length
- no origin defined 
- defined as a list of coordinates 
    - example: $(x,y, ... ,n)$

## terms

- **colinear** - vectors that lie along the same line (parallel)
- **linearly independent** - set of vectors, each vector cannot be written as a linear combination of the others
- **perpendicular** - two vectors with a right angle between them

## vector operations

### addition

$a + b = (x_a+x_b,y_a+y_b, ... ,n_a+n_b)$

### subtraction

$a - b = (x_a-x_b,y_a-y_b, ... ,n_a-n_b)$

### negation

$-a = (-x_a,-y_a, ... ,-n_a)$

### vector scale

only changes length, not direction

$s a = (s x_a,s y_a, ... ,s n_a)$

### dot product

aka scalar product


$a \cdot b = x_a x_b + y_a y_b + ... + n_a n_b$

or

$a \cdot b = ||a|| ||b|| \cos{\theta}$

### cross product

$a \times b = (y_a z_b - z_a y_b, z_a x_b - x_a z_b, x_a y_b - y_a x_b)$

or

$a \times b = ||a|| ||b|| \sin{\theta} n$

- direction is perpendicular to a,b (normal to the plane containing them)

-  $|| a\times b|| = ||a|| ||b||$

- anticommutative: swapping order of the arguments results in an inverse (negative) result 

### normalize vector

makes the magnitude of the vector equal 1, or the unit length

$n = \frac{a}{||a||}$

### vector basis

for $\mathbb{R}^n$, a set of $n$ linearly independent vectors, all vectors in $\mathbb{R}^n$ can be made as a linear combination of these vectors

### constructing 3D basis from two vectors

from any two vectors a and b $\to (w,u,v)$ (w is colinear with a, v is coplanar with w, u, w, and v are perpendicular)

$w = \frac{a}{||a||}$ normalize a

$u = \frac{b \times w}{||b \times w||}$ create vector perpendicular to w and b, normalize

$v = w \times u$ create vector perpendicular to w and u, normalize

#### constructing 3D basis from a single vector

- randomly pick a second vector that isn't colinear to a, then follow steps above

### normal from 3 points

$n = (b-a) \times (c - a)$