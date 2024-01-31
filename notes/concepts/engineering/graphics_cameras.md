
# camera

in general when viewing an object in a 3d scene with a virtual "camera":

1. start with model in local space
2. put model at world coordinate in world space
3. $M_{cam}$ view model in camera space
4. $M_{proj}$ project camera space volume to canonical/clip space (a square with dimensions -1 to 1)
5. $M_{vp}$ transform canonical space to screen space

## Mcam

1. calculate camera coordinate frame

![camera coordinate frame](./media/3GC3_1.JPG)

$w = -\frac{g}{||g||}$, $u = \frac{t\times w}{||t\times w||}$, $v = w \times u$

2. $$M_{cam} = ((translate) (rotate))^{-1} = \begin{bmatrix} x_u & y_u & z_u & 0 \\\\ x_v & y_v & z_v & 0 \\\\ x_w & y_w & z_w & 0 \\\\ 0 & 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 & -x_e \\\\ 0 & 1 & 0 & -y_e \\\\ 0 & 0 & 1 & -z_e \\\\ 0 & 0 & 0 & 1 \end{bmatrix}$$

## Mproj

### orthographic projection

$$M_{orth} = \begin{bmatrix} \frac{2}{r-l} & 0 & 0 & -\frac{r+l}{r-l} \\\\ 0 & \frac{2}{t-b} & 0 & -\frac{t+b}{t-b} \\\\ 0 & 0 & \frac{2}{n-f} & -\frac{n+f}{n-f} \\\\ 0 & 0 & 0 & 1 \end{bmatrix}$$

### perspective projection

multiply Mproj by matrix P (P transforms frustum to orthographic box)

$$M_{per} = \begin{bmatrix} \frac{2n}{r-l} & 0 & \frac{l+r}{l-r} & 0 \\\\ 0 & \frac{2n}{t-b} & \frac{b+t}{b-t} & 0 \\\\ 0 & 0 & \frac{f+n}{n-f} & -\frac{2fn}{f-n} \\\\ 0 & 0 & 1 & 0 \end{bmatrix}$$

## Mvp

translate center, then scale $$M_{vp} = \begin{bmatrix} \frac{n_x}{2} & 0 & 0 & \frac{n_x - 1}{2} \\\\ 0 & \frac{n_y}{2} & 0 & \frac{n_y-1}{1} \\\\ 0 & 0 & 1 & 0 \\\\ 0 & 0 & 0 & 1 \end{bmatrix}$$