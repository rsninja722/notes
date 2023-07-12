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

### SELECT

- retrieves data from a table
<br><br>



```sql
SELECT cid,title FROM courses; -- get the columns cid and title from courses table
SELECT * FROM courses; -- get all columns from courses table
```

#### DISTINCT

- removes duplicates from the results of a SELECT statement
<br><br>



```sql
SELECT DISTINCT lecturer FROM courses; -- get lecturer column from courses table, but removes duplicate values
SELECT DISTINCT cid,lecturer FROM courses; -- get cid and lecturer columns from courses table, but removes duplicate (cid, lecturer) pairs
```

#### WHERE

- specifies conditions to be met for a row to be selected
<br><br>

```sql
SELECT * FROM courses WHERE lecturer = 2; -- get all rows from courses table that have a lecturer value of 2
```

##### selecting multiple tables

```sql
SELECT * FROM courses, faculty WHERE lecturer = fid;
```

##### valid operators

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
SIMILAR TO | like LIKE but uses the SQL standard's definition of a regular expression
IN | To specify multiple possible values for a column
AND | boolean and of expressions on both sides of the AND
OR | boolean or of expressions on both sides of the OR
NOT() | boolean not of expression in brackets
IS NULL | returns if the left side is NULL
IS NOT NULL | returns if the left side is not NULL

##### three-valued logic
A|B|A AND B| A OR B |NOT A
---|---|---|---|---
F |F |F |F |T
T |F |F |T |F
F |T |F |T |T
T |T |T |T |F
F |unknown |F |unknown |T
T |unknown |unknown |T |F
unknown |F |F |unknown |unknown
unknown |T |unknown |T |unknown
unknown |unknown |unknown |unknown |unknown

#### LIKE

- matches a text pattern in a WHERE clause
<br><br>

```sql
SELECT * FROM courses WHERE title LIKE '%Databases%'; -- get all rows that have a title containing the word Databases
```

##### wild cards

- **%** - matches any text
<!-- - **% and \*** - zero or more characters wildcard
- **_** - any single character -->

#### AS

- renames columns in the output
<br><br>

```sql
SELECT title AS c_one, lecturer AS c_two FROM courses;
```
outputs

c_one | c_two
---|---
Programming | 1
Discrete Mathematics | 3
Databases | 2
Advanced Databases | 2

___

new columns can be created (AS is not required, just useful):

```sql
SELECT *, cid + 5 AS c_one, cid * lecturer AS c_two FROM courses;
```
outputs

cid | title |lecturer |c_one |c_two
---|---|---|---|---
1 | Programming |1 |6 |1
2 | Discrete Mathematics |3 |7 |6
3 | Databases |2 |8 |6
4 | Advanced Databases |2 |9 |8

#### ORDER BY

```sql
SELECT * FROM courses ORDER BY title; -- orders rows alphabetically by title
SELECT * FROM courses ORDER BY lecturer DESC, title ASC; -- orders rows first by lecturer descending, then by title ascending for rows with the same lecturer value
```

#### UNION

$A \cup B$

```sql
SELECT sid AS id FROM student
UNION -- UNION combines results as a set
SELECT fid AS id FROM faculty;

SELECT sid AS id FROM students
UNION ALL -- UNION ALL combines results as a multiset (includes duplicate entries)
SELECT fid AS id FROM faculty;
```

#### INTERSECT

$A \cap B$

```sql
SELECT sid AS id FROM students
INTERSECT -- INTERSECT combines results as a set.
SELECT fid AS id FROM faculty;

SELECT sid AS id FROM students
INTERSECT ALL -- INTERSECT combines results as a multiset. (if A had 4 elements that matched 3 elements from B, the first 3 elements will be returned)
SELECT fid AS id FROM faculty;
```

#### EXCEPT

$A - B$ ([set difference](?note=notes/y1s2/1DM3_math_for_cs/2_sets.md#differnce))

```sql
SELECT sid AS id FROM students
EXCEPT -- EXCEPT combines results as a set.
SELECT fid AS id FROM faculty;

SELECT sid AS id FROM students
EXCEPT ALL -- EXCEPT combines results as a multiset. (if A had 4 elements that matched 3 elements from B, 1 remaining element will be returned)
SELECT fid AS id FROM faculty;
```

#### nested select

#### ALL

#### ANY

#### EXISTS

#### BETWEEN

#### JOIN

##### CROSS JOIN

##### INNER JOIN

##### LEFT JOIN

##### LEFT OUTER JOIN

##### RIGHT JOIN

##### RIGHT OUTER JOIN

##### FULL JOIN

##### FULL OUTER JOIN

#### aggregate

function | definition
---|---
MIN() |
MAX() |
COUNT() |
DISTINCT |
SUM() |
AVG() |

#### CAST

function | definition
---|---
CAST(_ AS DOUBLE) |
CAST(_ AS DECIMAL) |

#### GROUP BY

##### HAVING


### INSERT

```sql
INSERT INTO table_name (column_name1, column_name2) -- specifying columns optional
VALUES (value_1, value_2), (more_rows, optional);
```


### DELETE

```sql
DELETE FROM table_name WHERE cid = 1; -- deletes specified rows
DELETE FROM table_name; -- deletes all rows
```

### UPDATE

```sql
UPDATE table_name
SET column_name = 'new value', other_column = some_number + 1
WHERE conditions = 1;

UPDATE table_name SET one = two, two = one; -- swap columns
```

## data definition

### CREATE TABLE

```sql
CREATE TABLE name (
    id INT GENERATED ALWAYS AS IDENTITY,
    some_number INT NOT NULL,
    other_number INT NOT NULL DEFAULT 13,
    short_text VARCHAR(100),
    long_text CLOB,
);
```

- `NOT NULL` - must have a value
- `DEFAULT` - specify default value for column
- `GENERATED ALWAYS AS IDENTITY` - automatically generate an identifier

#### identify primary key

single 

```sql
CREATE TABLE name (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
);
```

multiple 

```sql
CREATE TABLE name (
    pid INT NOT NULL,
    rid INT NOT NULL,

    PRIMARY KEY(pid,rid)
);
```

TODO
fill blank areas