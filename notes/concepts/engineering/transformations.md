# transformations

using right hand: thumb - y, pointer - x, middle - z

used for 
- manipulating 2d/3d objects
- projecting 3d objects to 2d images
- texture mapping
- animation
- camera movement

- affine transformations - preserve parallel lines
    - linear transformations - affine and origin remains in the same place
$$ \begin{bmatrix} 1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \end{bmatrix}$$

- note: a transformation and its inverse cancel only if one immediately follows the other

## identity 

does not change points

$f(p) = Ip$

## rotation (linear)

- all counter-clockwise
- since rotation matrices are orthogonal: $A^{-1} = A^T$

### 2D

$$f(p) \begin{bmatrix} \cos{\theta} & -\sin{\theta} \\\\ \sin{\theta} & \cos{\theta} \end{bmatrix} \begin{bmatrix} x \\\\ y \end{bmatrix} $$

### 3D

- around x $$f(p) = \begin{bmatrix} 1 & 0 & 0 \\\\ 0 & \cos{\theta} & -\sin{\theta} \\\\ 0 & \sin{\theta} & \cos{\theta} \end{bmatrix} p$$
- $$\begin{bmatrix} \cos{\theta} & 0 & \sin{\theta} \\\\ 0 & 1 & 0 \\\\ -\sin{\theta} & 1 & \cos{\theta} \end{bmatrix} p = f(p)$$ around y
- around z $$f(p) = \begin{bmatrix} \cos{\theta} & -\sin{\theta} & 0 \\\\ \sin{\theta} & \cos{\theta} & 0 \\\\ 0 & 0 & 1 \end{bmatrix} p$$

## reflection (linear)

- **2D** - around x: $I_{00} = -1$, around y: $I_{11} = -1$
- **3D** - around x: $I_{00} = -1$, around y: $I_{11} = -1$,  around z: $I_{22} = -1$

## scale (linear)

- **3D** - $$\begin{bmatrix} s_x & 0 & 0 \\\\ 0 & s_y & 0 \\\\ 0 & 0 & s_z \end{bmatrix}$$ for **2D**, trim into a 2x2 matrix

## shear (linear)

- **2D** - $$ \begin{bmatrix} 1 & s_x \\\\ s_y & 1 \end{bmatrix}$$ where $s_x$ is horizontal shear, $x_y$ is vertical, keep at 0 for no change
- **3D** - $$ \begin{bmatrix} 1 & s_{x1} & s_{x2} \\\\ s_{y1} & 1 & s_{y2} \\\\ s_{z1} & s_{z2} & 1 \end{bmatrix}$$ y1,z1 along zx-plane, x1,z2 along xz-plane, x2,y2 along xy plane

## homogeneous coordinates

- add an extra value to coordinates (usually 1), z for 2D, w for 3D
- for directions (eg. normal) use 0 as the value
- for perspective projection divide existing values by new one

## translation (affine)

- **2D** - $$f(p) = \begin{bmatrix} 1 & 0 & t_x \\\\ 0 & 1 & t_y \\\\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\\\ y \\\\ 1 \end{bmatrix}$$
- **3D** - $$f(p) = \begin{bmatrix} 1 & 0 & 0 & t_x \\\\ 0 & 1 & 0 & t_y \\\\ 0 & 0 & 1 & t_z \\\\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x \\\\ y \\\\ z \\\\ 1\end{bmatrix}$$
