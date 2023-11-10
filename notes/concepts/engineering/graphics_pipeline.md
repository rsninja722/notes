
# graphics pipeline

- command stream
    - specify vertex positions, color, camera, viewport, ...
- vertex processing / programmable vertex shader
- transformed geometry 
    - culling, clipping
- rasterization
- fragments
- fragment processing / programmable fragment shader
- blending
    - depth test, alpha blending

## application

setting up everything with the main program (CPU) before sending the information to the GPU

- describe geometry, camera, scene size, ect.


## vertex shader

## culling

determining the order of faces, removing hidden faces

### frustum culling

finding which geometries are visible to the camera to reduce render time

## clipping

trimming geometry outside of the view frustum

## rasterization

## fragment shader

## depth testing


### painter's algorithm

- cons
    - sorting depth is slow
    - for occlusion cycles - no correct order

### z-buffer algorithm

- two grids corresponding to screen size
    - color buffer
    - z buffer

```c++
zBuf[i][j] = infinity;

for (each primitive) {
    for (each fragment) {
        if (fragmentDepth < zBuf[i][j]) {
            colorBuf[i][j] = fragmentColor;
            zBuf[i][j] = fragmentDepth;
        }
    }
}
```

- pros
    - no sorting required - triangles can be drawn in any order
- cons
    - z-fighting
        - when two primitives share the same depth and are drawn over top of each other
        - glitchy appearance
        - caused by insufficient precision for depth value
        - amount of depth bins for $b$ bits: $2^b$ or a precision of $\frac{(Z_{far} - Z_{near})}{2^b}$
        - fixes:
            - move near and far planes closer
            - increase bits for depth values
            - don't put objects close in scene

### double buffering

render on a back buffer, then swap the front and back buffer when ready, the front buffer is shown to the user

## transparency & blending

- $\alpha$ with range \[0,1\] describes opacity
- 1 is opaque
- 0 is transparent

### over operation

for triangle1 color $C_1 (r_1, g_1, b_1, \alpha_1)$
for triangle2 color $C_2 (r_2, g_2, b_2, \alpha_2)$


#### post-multiplied alpha

triangle1 over triangle2

- $r = \alpha_1 r_1 + (1-\alpha_1) \alpha_2 r_2$
- $g = \alpha_1 g_1 + (1-\alpha_1) \alpha_2 g_2$
- $b = \alpha_1 b_1 + (1-\alpha_1) \alpha_2 b_2$
- $a = \alpha_1 + (1-\alpha_1) \alpha_2$

##### for z-buffer

incoming fragment color is src, color is already written in buffer as dest

`dest.rbg = src.rbg * src.a + dest.rbg * (1-src.a)`

#### pre-multiplied alpha

triangle1 over triangle2

$C_1' (\alpha_1 r_1, \alpha_1 g_1, \alpha_1 b_1, \alpha_1)$
$C_2' (\alpha_2 r_2, \alpha_2 g_2, \alpha_2 b_2, \alpha_2)$

$C = C_1' + (1-\alpha_1) C_2'$


##### for z-buffer

incoming fragment color is src, color is already written in buffer as dest

src.rbg is already multiplied with its src.a

`dest.rbg = src.rbg + dest.rbg * (1-src.a)`

### issues with depth testing and ordering

- z-buffer algorithm does not consider transparency
- fragments are not ordered

to fix:

- draw opaque objects with depth buffer
- sort transparent objects
- draw transparent objects from farthest to closest
