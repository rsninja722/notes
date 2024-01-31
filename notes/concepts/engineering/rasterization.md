
# rasterization

## line rasterization

### naive implementation

using $y=mx+b, m=\frac{y_1-y_0}{x_1-x_0}, c = \frac{x_1 y_0 - x_0 y_1}{x_1-x_0}$, iterate from $x_0$ to $x_1$, computing y

```c++
for(int x=x0; x<=x0; x++) {
    int y = round(m*x+c);
    pixels[y][x] = true;
}
```

### Digital Differential Analyzer (DDA)

```c++
int rX = x1-x0; int rY = y1-y0; // range
int numSteps = max(abs(rX), abs(rY));
float dX = rX / numSteps; float dY = rY / numSteps;
float x = x0; float y = y0;
for(int i=0; i<=numSteps; i++) {
    pixels[round(y)][round(x)] = true;
    x += dX; y += dY;
}
```

### midpoint algorithm (incremental implementation)

```c++
float f = (y0-y1)*(x0-x1) + (x1-x0)*(y0+0.5) + x0*y1-x1*y0;
for (int x = x0, y = y0; x <= x1; x++) {
    pixels[y][x] = true; // diag if line above previous middle
    if(f < 0) { y += 1; f += (x1-x0) + (y0-y1);} // diag inc
    else {f += (y0-y1);} // horizontal increment
}
```

### bresenham algorithm 

```c++
int dx = x1-x0, dy = y1-y0;
int D = 2*dy-dx; pixels[y0][yx] = true;
for (int x = x0+1, y = y0; x <= x1; x++) {
    if(D > 0) { y += 1; D += 2*(dy-dx);} // diag inc
    else {D += 2*dy;} // horizontal increment
    pixels[y][x] = true; 
}
```

## triangle rasterization

- use barycentric coordinates to describe the triangle
- iterate through all pixels within the bounding box for the triangle, and calculate weather the pixel is within the triangle or not

- **shared edges** - same edge used by multiple triangles - need to determine which triangle is responsible for drawing the edge
    - policy: each pixel should be drawn exactly once

## attribute interpolation and perspective projection

- when projecting a 3d object onto a 2d plane using perspective projection, interpolation of textures on a shape is not linear5
