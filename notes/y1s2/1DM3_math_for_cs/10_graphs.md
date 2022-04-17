# graphs

# 10.1 graphs and graph models


## definitions

a **graph** $$G = (V,E)$$ consists of 
- $$V$$ - a nonempty set of vertices (or nodes)
- $$E$$ - a set of edges
    - each edge has either one or two vertices associated with it (connects a node to itself or connects two nodes to each other)

### types of graphs

graph type | example
---|---
**simple graph** - each edge connects to different vertices, no two edges connect the same pair of vertices. | ![simple graph](./media/10_graphs_1.svg)
**multigraph** - a graph that may have multiple edges connecting the same two vertices. edges may or may not have their own identities. <br> when $$m$$ different edges (with their own identities) connect the the vertices $$u$$ and $$v$$, we say that $$\lbrace  u,v \rbrace $$ is an edge of *multiplicity* $$m$$ | ![multigraph](./media/10_graphs_2.svg)
**pseudograph** - a graph that may have loops as well as having multiple edges connecting the same two vertices. edges may or may not have their own identities. | ![pseudograph](./media/10_graphs_3.svg)


#### directed graphs

- **directed graph** - a graph where every edge has a direction (a graph that is not directed is called undirected). denoted by $$G = (V,E)$$ where
    - $$V$$ - a nonempty set of vertices (or nodes)
    - $$E$$ - a set of directed edges (or arcs), each edge denoted by $$(u,v)$$ where the edge is said to start at $$u$$ and end at $$v$$

types of directed graphs

graph type | example
---|---
**simple directed graph** - directed graph with no loops and no multiple edges | ![directed simple graph](./media/10_graphs_4.svg)
**directed multigraph** - directed graph that may have multiple directed edges | ![directed multigraph](./media/10_graphs_5.svg)

### graph terminology chart

type | edges | multiple edges allowed? | loops allowed?
---|---|---|---
simple graph | undirected | no | no
multigraph | undirected | yes | no
pseudograph | undirected | yes | yes
simple directed graph | directed | no | no
directed multigraph | directed | yes | yes
mixed graph | directed and undirected | yes | yes

# 10.2 graph terminology and special types of graphs

- **adjacent** - vertices $$u$$ and $$v$$ in an undirected graph $$G$$ are adjacent (or neighbors) if there is and edge $$e$$ between $$u$$ and $$v$$
    - $$e$$ is also called **incident** with $$u$$ and $$v$$
    - $$e$$ is also said to **connect** $$u$$ and $$v$$

- **neighborhood** - the set of all neighbors of a vertex **v** of $$G=(V,E)$$, denoted by $$N(v)$$.
    - if $$A$$ is a subset of $$V$$, we denote by $$N(A)$$ the set of all vertices in $$G$$ that are adjacent to at least one vertex in $$A$$. So, $$\bigcup_{v\in A} N(v)$$

- **degree of a vertex** - noted by $$deg(v)$$, it is the number of edges incident with it (in an undirected graph)
    - a loop at a vertex contributes 2 to the degree of that vertex

## degrees and neighborhoods example

![graph](./media/10_graphs_6.svg)

degrees

$$deg(a) = 2, deg(b) = deg(c) = deg(f ) = 4, deg(d ) = 1,  deg(e) = 3, deg(g) = 0$$

neighborhoods

$$N(a) = \lbrace b, f \rbrace , N(b) = \lbrace a, c, e, f \rbrace , N(c) = \lbrace b, d, e, f \rbrace , N(d) = \lbrace c\rbrace ,  N(e) = \lbrace b, c , f \rbrace , N(f) = \lbrace a, b, c, e\rbrace , N(g) = \varnothing$$ 

## hand shake theorem

if $$G=(V,E)$$ is an undirected graph with $$m$$ edges then $$2m = \sum_{v\in V} deg(v)$$

proof: each edge contributes twice to the degree count of all vertices. hence, both the left-hand and right-hand sides of this equation equal twice the number of edges.

## theorem 2

an undirected graph has an uneven number of vertices of odd degree.

## directed graph terms

for a directed graph $$G=(V,E)$$ with each directed edge defined as a pair of to vertices $$(u,v)$$,

$$u$$ is the **initial vertex** and is *adjacent* to $$v$$

$$v$$ is the **terminal vertex** (or end vertex) and *adjacent* to $$u$$

the initial and terminal vertices of a loop are the same

### in/out-degrees

- $$deg^{-}(v)$$ - in-degree of a vertex *v*, the number of edges which terminate at *v*
- $$deg^{+}(v)$$ - out-degree of a vertex *v*, the number of edges with v as their initial vertex

a loop counts as one for both the in and out degree of its vertex

### theorem 3

let $$G = (V,E) be a graph with directed edges

$$|E| = \sum_{v\in V} deg^{-}(v) = \sum_{v\in V} deg^{+}(v)$$

## special types of simple graphs

type|explanation|diagram
---|---|---
complete graphs | a graph that contains exactly one edge between each pair of distinct vertices. a complete graph on n vertices is denoted by $$K_n$$ | ![graph](./media/10_graphs_7.png)
cycles | a cycle $$C_n$$ for $$n \geq 3$$ consists of n vertices $$v_1,v_2, \dots ,v_n$$ and edges $$\lbrace v_1, v_2\rbrace , \lbrace v_2, v_3\rbrace  ,\dots , \lbrace v_{n-1}, v_n\rbrace , \lbrace v_n, v_1\rbrace .$$ | ![graph](./media/10_graphs_8.png)
wheels | a wheel $$W_n$$ is obtained by adding an additional vertex to a cycle $$C_n$$ for $$n \geq 3$$ and and connecting this new vertex to each of the n vertices in $$C_n$$ | ![graph](./media/10_graphs_9.png)
n-cubes | an n-dimensional hypercube, or n-cube, $$Q_n$$, is a graph with $$2^n$$ vertices representing all bit strings of length *n* where there is an edge between two vertices that differ in exactly one bit position. any two vertices have a path of at most *n* edges between them. | ![graph](./media/10_graphs_10.png)
bipartite | a simple graph is bipartite if $$V$$ can be partitioned into two disjoint subsets $$V_1$$ and $$V_2$$ such that no vertices are connected to another vertex in their subset | ![graph](./media/10_graphs_11.png)
complete bipartite | a bipartite graph where each vertex is connected to every vertex in the other subset, described by $$K_{m,n}$$ where *m* and *n* are the size of $$V_1$$ and $$V_2$$ | ![graph](./media/10_graphs_12.png)

# 10.3 representing graphs

## adjacency lists

only work for graphs with no multiple edges

for the following graphs:

![graph](./media/10_graphs_13.png)

the adjacency lists would be

**G**:

vertex|adjacent vertices
:---:|---
a | b,c,e
b | a
c | a,d,e
d | c,e
e | a,c,d

**H**:

initial vertex|terminal vertices
:---:|---
a | b,c,d,e
b | b,d
c | a,c,e
d | 
e | b,c,d

## adjacency matrices

for a graph $$G = (V,E)$$ where $$|V| = n$$, an n x n zero-one matrix can be made where 1 shows the (i,j)th entry has $$v_i$$ and $$v_j$$ adjacent and 0 shows they are not adjacent

the adjacency matrix for G would be:

$$
\begin{vmatrix}
   0 & 1 & 1 & 0 & 1 \newline
   1 & 0 & 0 & 0 & 0 \newline
   1 & 0 & 0 & 1 & 1 \newline
   0 & 0 & 1 & 0 & 1 \newline
   1 & 0 & 1 & 1 & 0
\end{vmatrix}
$$