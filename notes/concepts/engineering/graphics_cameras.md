
# camera


## camera space

camera space:
- camera coordinate origin (0,0,0), x axis (1,0,0), y-axis (0,1,0), z-axis (0,0,1)

world space: 
- camera coordinate origin is $e (x_e,y_e,z_e)$ 
    - $x (x_u,y_u,z_u) u\hat$
    - $y (x_v,y_v,z_v) v\hat$
    - $z (x_w,y_w,z_w) w\hat$
- find matris
    - $M_{2wc}$
        - world space -> camera space
    - $M_{c2w}$
        - camera space -> world space

(translation x rotation)
$$M_{c2w} = \begin{matrix}
1 & 0 & 0 & x_e\\\\
0 & 1 & 0 & y_e\\\\
0 & 0 & 1 & z_e\\\\
0 & 0 & 0 & 1
\end{matrix} \begin{matrix}
x_u & x_v & x_w & 0\\\\
y_u & y_v & y_w & 0\\\\
z_u & z_v & z_w & 0\\\\
0 & 0 & 0 & 1
\end{matrix}
$$

camera space

$$
\begin{matrix}
1 & 0 & 0 \\\\
0 & 1 & 0 \\\\
0 & 0 & 1 \\\\
1 & 1 & 1 
\end{matrix}
$$

$M_{w2c} = M^{\dashv}_{c2w} - (TR)^{\dashv} = R^{\dashv} T^{\dashv}$


## orthographic projection

range projection is from box to canonical range
