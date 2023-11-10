# matrices

- **matrix** - an $r$ by $c$ grid of values

## addition

$$A + B = C =  \begin{bmatrix} a_1 + a_2 & b_1 + b_2 \\\\ c_1 + c_2 & d_1 + d_2 \end{bmatrix}$$

## scalar multiplication

$$Ak = C = \begin{bmatrix} ak & bk \\\\ ck & dk \end{bmatrix}$$

## multiplication / dot product

uses [dot product of vectors](?note=notes/concepts/engineering/vectors.md#dotproduct)

- $A \cdot B = C$  A: $r_1 \text{ by } c_1$,  B: $r_2 \text{ by } c_2$,  C: $r_1 \text{ by } c_2$
- $r_2$ must equal $c_1$, order matters!

say A is 3 by x and B is x by 2

$$AB = \begin{bmatrix} \text{A row1}\cdot\text{B col1} & \text{A row1}\cdot\text{B col2} \\\\ \text{A row2}\cdot\text{B col1} & \text{A row2}\cdot\text{B col2} \\\\ \text{A row3}\cdot\text{B col1} & \text{A row3}\cdot\text{B col2} \end{bmatrix}$$

## identity

2x2 identity matrix $I$:

$$ \begin{bmatrix} 1 & 0 \\\\ 0 & 1 \end{bmatrix}$$

## inverse

$A^{-1}$ is the inverse of a matrix such that $A^{-1}A = A A^{-1} = I$

for a 2x2 matrix it can be calculated as such:

$$\begin{bmatrix} a & b \\\\ c & d \end{bmatrix}^{-1} = \frac{1}{ad-bc} \begin{bmatrix} d & -b \\\\ -c & a \end{bmatrix}$$

## transpose

$A^T$ is $A$ flipped along its main diagonal, or for each row, make it a column in the transpose matrix where left to right matches top to bottom,

$$A = \begin{bmatrix} a & b \\\\ c & d  \\\\ e & f \end{bmatrix}, A^T = \begin{bmatrix} a & c & e \\\\ b & d & f \end{bmatrix}$$