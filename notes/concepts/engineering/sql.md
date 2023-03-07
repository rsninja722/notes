# SQL

SQL (structured query language) is a high-level programming language for interacting with relational databases where you specify *what* you want, not *how* to do it

## classes of statements

SQL can interact with the data of tables in a database as well as the structure of the tables

- **DML (Data Manipulation Language)** - SQL-data change statements that can create, modify, delete, and inspect data stored in tables
- **DDL (Data Definition Language)** - SQL-schema statements that can create, modify, delete, and inspect the structure of tables

## data manipulation 

for the following examples, we will refer to the *courses* table below

**courses**

cid | title | lecturer
---|---|---
1 | Programming | 1
2 | Discrete Mathematics | 3
3 | Databases | 2
4 | Advanced Databases | 2

### wild cards

- **% and \*** - zero or more characters wildcard
- **_** - any single character

### SELECT

- retrieves data from a table
<br><br>

get the columns *cid* and *title* from *courses* table

```sql
SELECT cid,title FROM courses;
```

get all columns from courses table

```sql
SELECT * FROM courses;
```

### DISTINCT

- removes duplicates from the results of a SELECT statement
<br><br>

get *lecturer* column from courses table, but removes duplicate values 

```sql
SELECT DISTINCT lecturer FROM courses;
```

get *cid* and *lecturer* columns from courses table, but removes duplicate (cid, lecturer) pairs

```sql
SELECT DISTINCT cid,lecturer FROM courses;
```

### WHERE

- specifies conditions to be met for a row to be selected
<br><br>

get all rows from courses table that have a lecturer value of 2

```sql
SELECT * FROM courses WHERE lecturer = 2;
```

#### valid operators

Operator | Description
---|---
= | Equal	
\> | Greater than	
< | Less than	
\>= | Greater than or equal	
<= | Less than or equal	
<> | Not equal
BETWEEN	| Between a certain range	
LIKE | Search for a pattern	
IN | To specify multiple possible values for a column

#### LIKE

- matches a text pattern in a WHERE clause
<br><br>



### INSERT
### DELETE
### UPDATE

