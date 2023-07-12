# entity-relationship model

- **data model** - the rules by which real-world data can be represented and structured
- **relational data model** - data model in which data is a collection of tables
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






## ER diagrams

### entities

![entity](./media/2DB3_5.JPG)

- **entity** - an object in the real world

### attributes

![attribute](./media/2DB3_4.JPG)

- attributes are used to describe entities and relationships
    - have a domain/type (e.g., text, number, date).
- **Key** - set of attributes that identify an entity, usually contains <ins>id</ins> in the name
    - All keys are **candidate keys**.
    - One is chosen as the **primary key**.

### relationships

![relationship](./media/2DB3_6.JPG)

- relates two or more entities

### entity sets and instances

- An entity set: collection of similar entities.
- An instance: snapshot of the entities ("data").

### types of relationships

#### many-to-many relationship

![](./media/2DB3_1.JPG)

example implementation of this model

![](./media/2DB3_2.JPG)

#### ternary relationship

![](./media/2DB3_3.JPG)

### example 

Faculty(fid, name, location, mail),
Course(cid, name, year, credits).
Teaches(fid, cid).
Entities
Relationship