# entity-relationship model

- **data model** - the rules by which real-world data can be represented and structured
- **relational data model** - data model in which data is a collection of tables
    - versatile, widely used, centered around combining data (via queries), complex enough for real world data, simple enough for user-friendly access
- **scheme** - how the table looks/ describing how the stored data is structured
    - conceptual schema - in terms of the data model
    - physical schema - in terms of layout on disk
- **instance** - actual data which adheres to some schema



relational data model

```   
     columns (attributes) and their domains
             ______|______
            /             \
_____________________________
table name (key, atr1,  atr2)
_____________________________
            87   asd    sdad   \
            57   sd     fgwf   |__ instance
            3    dd     kems   |
            16   aaa    dgew   /
```

## requirement analysis

when storing data, consider if a DBMS is the right choice, which DBMS to use, and how to structure data within that DBMS

- for requirement analysis, consider:
    - what data can the application
    - what data the application needs
    - what the application does with the data
- for agile development, consider:
    - how missing data will be added in the future
    - how data could be restructured to improve performance

### entity-relationship model

- when planning how to structure data with an entity-relationship model keep in mind:
    - its a **semantic** data model - specify meaning, not representation
    - it can model high level **concepts** (entites, relationships, attributes)
    - can be represented as tabels 
    - can be shown as an ER-diagram which create useful visuals

# ER diagrams

## entities

![entity](./media/2DB3_5.JPG)

- **entity** - an object in the real world

## attributes

![attribute](./media/2DB3_4.JPG)

- attributes are used to describe entities and relationships
    - have a domain/type (e.g., text, number, date).
- **Key** - set of attributes that identify an entity, usually contains <ins>id</ins> in the name
    - All keys are **candidate keys**.
    - One is chosen as the **primary key**.

## relationships

![relationship](./media/2DB3_6.JPG)

- relates two or more entities

## entity sets and instances

- An entity set: collection of similar entities.
- An instance: snapshot of the entities ("data").

## types of relationships

### self relationship

![](./media/2DB3_7.JPG)

### binary relationships

#### many-to-many

$R \subseteq A \times B$, no restrictions

![](./media/2DB3_1.JPG)

example implementation of this model

![](./media/2DB3_2.JPG)

#### one-to-many

$R \subseteq A \times B$, where each $a \in A$ is related to at most **one** $b \in B$


#### one-to-one

$R \subseteq A \times B$ where each $A$ is related to at most one $B$

- if A has total participation: R is an **injection**,
    - each $a \in A$ is related to exactly-one-and-unique $b \in B$
- If B has total participation: R is an **surjection**,
    - each $b \in B$ is related to exactly-one-and-unique $a \in A$
- If A, B have total participation: R is a **bijection**,
    - there is a one-to-one mapping between all $a \in A$s and $b \in B$s

![](./media/2DB3_8.JPG)


### ternary relationship

![](./media/2DB3_3.JPG)


## constraints on relationships

### at most one

pointy arrow

### every

thick line

## weak entities

- a weak entity is owned by another identity
    - example: a course code (2DB3) is a weak entity that can only be identified with a program prefix (COMPSCI 2DB3, SFWRENG 2DB3)

## ISA 


## good design