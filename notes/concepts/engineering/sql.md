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

### valid operators

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

### three-valued logic
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

#### nested queries

- use one query to select some set of data, and use another to refine that set

```sql
SELECT id FROM students
WHERE id IN (SELECT id FROM faculty);
```

#### ALL

```sql
SELECT pid, rid FROM reviews
WHERE originality >= ALL (SELECT originality FROM reviews);
```
- returns primary key of review(s) with highest originality

#### correlated nested queries


```sql
SELECT pid, rid FROM reviews AS ra
WHERE originality >= ALL (
    SELECT originality 
    FROM reviews AS rb
    WHERE ra.rid = rb.rid);
```

#### ANY

```sql
SELECT pid, rid FROM reviews
WHERE originality = ANY (
    SELECT quality
    FROM reviews);
```
- returns review(s) with originality = quality

#### EXISTS

- **EXISTS** - true if the provided list $\ne \varnothing$

```sql
SELECT * FROM students
WHERE EXISTS (
    SELECT *
    FROM faculty);
```

#### BETWEEN

- `name BETWEEN x AND y` - equivalent to `x <= name AND name <= y`

#### JOIN

```sql
SELECT * FROM courses C
JOIN instructors I 
    ON C.cid = I.cid;
```

##### CROSS JOIN

- works like join but returns the cartesian product of the two selected rows   

```sql
SELECT * FROM courses C
CROSS JOIN instructors I 
    WHERE C.cid = I.cid;
```

also can be written as

```sql
SELECT * FROM courses C, instructors I 
    WHERE C.cid = I.cid;
```

##### INNER JOIN

```sql
SELECT * FROM courses C
INNER JOIN instructors I 
    ON C.cid = I.cid;
```

##### LEFT JOIN

##### LEFT OUTER JOIN

##### RIGHT JOIN

##### RIGHT OUTER JOIN

##### FULL JOIN

##### FULL OUTER JOIN

#### aggregate

function | definition
---|---
MIN() | minimum value of column
MAX() | maximum value of column
COUNT() | number of rows
DISTINCT | used with other functions, removes rows with duplicate values for that column 
SUM() | adds values of column
AVG() | averages values of column, use CAST to get a decimal result from a column of INTs

#### CAST

function | definition
---|---
CAST(_ AS DOUBLE) |
CAST(_ AS DECIMAL) |

#### GROUP BY

- aggregation operates on groups of rows (by default a table is one group)
- `GROUP BY` splits a table into separate groups of rows
    - after grouping, you can't access individual unaggregated columns

##### example

productreview

user | product | rating
---|---|---
Alicia | cheese | 10
Alicia | phone | 5
Eva | cheese | 9
Eva | shoe | 8
Bo | phone | 3
Bo | shoe | 5
Celeste | cheese | 7

```sql
SELECT product, MAX(rating), MIN(rating)
FROM productreview
GROUP BY product;
```

output

product | MAX(rating) |	MIN(rating)
---|---|---
cheese  | 10 | 7
phone	|  5 | 3
shoe	|  8 | 5


##### HAVING

```sql
SELECT aggregated output columns
FROM sources
WHERE row conditions -- Filters rows before grouping!
GROUP BY columns_to_group_rows_on
HAVING conditions_on_aggregated groups; -- Filters aggregated rows (after grouping)
```

###### example

productreview

user | product | rating
---|---|---
Alicia | cheese | 10
Alicia | phone | 5
Eva | cheese | 9
Eva | shoe | 8
Bo | phone | 3
Bo | shoe | 5
Celeste | cheese | 7

```sql
SELECT product, MAX(rating), MIN(rating)
FROM productreview
GROUP BY product
HAVING COUNT(*) > 2; -- only products with > 2 rows
```

output

product | MAX(rating) |	MIN(rating)
---|---|---
cheese  | 10 | 7

```sql
SELECT product, MAX(rating), MIN(rating)
FROM p
GROUP BY product
HAVING AVG(rating) >= 5;
```

output

product | MAX(rating) |	MIN(rating)
---|---|---
cheese  | 10 | 7
shoe	|  8 | 5

```sql
SELECT product, MAX(rating), MIN(rating)
FROM p
WHERE rating > 4 -- filter out bad ratings
GROUP BY product
HAVING AVG(rating) >= 5; 
```

output

product | MAX(rating) |	MIN(rating)
---|---|---
cheese  | 10 | 7
phone	|  5 | 3
shoe	|  8 | 5


### INSERT

```sql
INSERT INTO table_name (column_name1, column_name2) -- specifying columns optional
VALUES (value_1, value_2), (more_rows, optional);
```

#### sql data types

- character and binary strings

name | definition
---|---
`CHAR(n)` | fixed-length string of n characters
`VARCHAR(n)` | variable-length string of at-most n characters
`CLOB` | large strings
`BINARY(n)` | fixed-length binary string of n characters
`VARBINARY(n)` | variable-length binary string of at-most n characters
`BLOB` | large binary string

note: CLOB and BLOB are intended for storage only, cannot be primary keys or be operated on in queries

- numeric types 

name | definition
---|---
`DECIMAL(p,s)` | exact number with p positions before comma, and s after (p and s are optional args)
`SMALLINT` | fixed width integer
`INT` | fixed width integer
`BIGINT` | fixed width integer
`REAL` | floating point
`DOUBLE` | floating point
`BOOLEAN` | boolean type

- date and time types

name | definition
---|---
`DATE` | day 
`TIME` | time of day
`TIMESTAMP` | date and time
`INTERVAL` | time duration

- CURRENT_DATE, CURRENT_TIME, and CURRENT_TIMESTAMP yield now.
    - example `CREATE TABLE test (stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);`
- Functions YEAR, MONTH, DAY to extract date information.
- Functions HOUR, MINUTE, SECOND to extract time information.

#### relationships as tables

for the following many-to-many relationship

![](./media/2db3_12.JPG)

the insert statement would be as follows

```sql
CREATE TABLE enroll_in
(
    sid INT NOT NULL REFERENCES student(sid),
    cid INT NOT NULL REFERENCES course(cid),
    year INT NOT NULL,
    PRIMARY KEY(sid, cid),
    CHECK(2020 <= year)
);
```

note: `REFERENCES student(sid)` can be written as `REFERENCES student` because REFERENCES points to the primary key by default

#### non-default actions

for `... REFERENCES table(id) ON UPDATE action ON DELETE action`

possible actions are:

action | description
---|---
`NO ACTION` | reject all invalidating changes (this is the default behavior)
`RESTRICT` | reject all changes to foreign key columns in referenced rows
`CASCADE` | apply the same changes to foreign keys
`SET NULL` | set the foreign key to null
`SET DEFAULT` | set the foreign key to the default value (of that column)

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