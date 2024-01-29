# 2DB3 concepts


## intro

[databases](?note=notes/concepts/engineering/databases.md) <!-- [](/notes/concepts/engineering/databases.md) -->

## entity-relationship model

[entity-relationship model](?note=notes/concepts/engineering/entity-relationship_model.md) <!-- [](/notes/concepts/engineering/entity-relationship_model.md) -->

## SQL

[SQL](?note=notes/concepts/engineering/sql.md) <!-- [](/notes/concepts/engineering/sql.md) -->

## relational algebra

[relational algebra](?note=notes/concepts/engineering/relational_algebra.md) <!-- [](/notes/concepts/engineering/relational_algebra.md) -->

## dependency theory

[dependency theory](?note=notes/concepts/engineering/dependency_theory.md) <!-- [](/notes/concepts/engineering/dependency_theory.md) -->

## decomposition and normal forms

[decomposition and normal forms](?note=notes/concepts/engineering/decomposition_and_normal_forms.md) <!-- [](/notes/concepts/engineering/decomposition_and_normal_forms.md) -->

## aside: names in software

guidelines

1. dont put limitations on what can be entered unless you have a specific goal
2. clarify what you are asking the user to fill in
    - informal - ask what they want to be called 
    - formal - ask what they want to be called formally
    - billing - ask the name as used by their bank
    - shipping - ask the name as used by the mail carrier
    - travel - ask the name as printed in their travel documents
3. have sensible defaults - prefill billing names with account information

there is no standard solution that works in all cases

## connecting to DB2 server

in a terminal, run:

1. `ssh nickolij@cs2db3.cas.mcmaster.ca`
2. `db2`
3. `connect to cs2db3`
4. `list tables`

to create a table: `create table name(field Type, field Type)`

## connect with dbeaver/datagrip

field | value
---|---
host | cs2db3.cas.mcmaster.ca
port | 25010
database | cs2db3
username | macid
password | ---

## commands

- copy file onto server `scp filenameA macid@cs2db3.cas.mcmaster.ca:~/filenameB`
- get db2 to execute file (after sshing) `db2 -tvf filename`