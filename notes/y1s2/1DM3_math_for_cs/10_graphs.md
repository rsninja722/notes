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

