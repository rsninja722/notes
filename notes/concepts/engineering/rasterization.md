
# rasterization

## triangle rasterization

- use barycentric coordinates to describe the triangle
- iterate through all pixels within the bounding box for the triangle, and calculate weather the pixel is within the triangle or not

- **shared edges** - same edge used by multiple triangles - need to determine which triangle is responsible for drawing the edge
    - policy: each pixel should be drawn exactly once

## attribute interpolation and perspective projection

- when projecting a 3d object onto a 2d plane using perspective projection, interpolation of textures on a shape is not linear5
