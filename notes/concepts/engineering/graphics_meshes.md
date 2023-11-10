# graphics meshes

- **surface** - the boundary/shell of an object


## simple representations

- verbal description

## implicit representation

- points are not listed, they must satisfy an equation
- surface function $f(x,y,z)$ for points where $f(x,y,z) = 0$ the point is on the surface

- pros:
    - easy to test if points are inside or outside of the mesh (f > 0 or f < 0)
- cons:
    - hard to guess what the surface will be from an equation
    - expensive to find all points
    - hard to sample points on the surface

## explicit representation

- parametric surface function
    - $f(u,v)$ outputs a point on the surface
    - pros:
        - no need to evaluate irrelevant points
    - cons:
        - cannot easily tell if a point is inside or outside the surface
- point cloud
    - set of points $(x,y,z)$
    - each point can have attributes such as color
    - no connectivity
- mesh
    - list of vertices and edges
    - can use shapes such as
        - triangles
        - polygons (quads)

## considerations

when choosing how to represent a mesh consider:

- storage used / bandwidth needed to send
- efficient access to adjacency information
- possibility / efficiency of mesh operations such as subdivision

## manifold

constraints / topological assumption of a mesh

- **manifold** 
    - every edge is shared by exactly two triangles
    - every vertex has a single complete loop of triangles around it
    - alternate definition: water tight / can be flattened into a plane

### use

- better control of neighboring topology (can access faces/edges/vertices next to a face/edge/vertex)

### triangle orientation

- all triangles should have the same:
    - forwards/backwards orientation
    - clockwise/counter clockwise orientation

TODO

## euler's formula

TODO


# storing meshes

## separate triangles

## indexed triangle mesh

### triangle fans

### triangle strips

## structures for mesh connectivity

queries that need to be efficient:

- given triangle, what are the 3 vertices?
- given edge, what are the 2 vertices, and 2 triangles?
- given point, what are the shared edges and shared triangles?

could use 2 graphs, but this is bad memory use

### triangle-neighbor structure

- each triangle has:
    - reference to 3 vertices
        - in order (ccw or cw)
    - reference to 3 triangles
        - TODO
- each vertex has:
    - reference to any triangle
    - position

#### traversal

traverse all triangles sharing a vertex

```c
trianglesOfVertex(v) {
    t = v.t // gets a random triangle connected to v
    do {
        find i such that (t.v[i] == v) // 
        t = t.neighbor[i]
    } while (t != v.t)
}
```

#### storage


- triangles: $F \cdot (3+3) \cdot 4 = 24F$
- vertex: $V \cdot (1+3) \cdot 4 = 16F$

- total for single triangle: TODO

### winged-edge structure

each vertex and face references any connecting edge

#### traversal

#### storage

### half-edge structure

# mesh editing

## mesh quality


## local operations

### edge flip

### edge split

### edge collapse

## triangulation

## global operations

## upsampling - subdivision

### loop subdivision

### linear subdivision

### Catmull-Clark subdivision

## downsampling - quadratic error simplification


## resampling - resampling

### edge flip

### vertex averaging

## blendshapes


