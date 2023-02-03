# 2DB3 Databases

- instructor email - jhellings@mcmaster.ca, website - https://jhellings.nl
- database - `ssh nickolij@cs2db3.cas.mcmaster.ca`

## grades

- exam - 52%
- assignments - 7 at 8% each, best 6 counted

date | assignment
---|---
January 29 | The Entity-Relationship Model.
February 8 | SQL–The Structured Query Language.
February 19 | The Relational Data Model and SQL.
March 1 | The Relational Algebra.
March 12 | Dependency Theory.
March 22 | Decomposition and Normal Forms.
March 31 | Databases–Inside the Black Box

## textbooks

Database Management Systems, Third Edition by Raghu Ramakrishnan and Johannes Gehrke

material covered:

- Part I (Chapter 1–5).
- Part III (Chapter 8).
- Part V (Chapter 16 and 17).
- Part VI (Chapter 19).
- Part II is useful background knowledge (not covered)

# intro

94 zettabytes of data were consumed in 2022 (94000 exabytes, 94 000 000 petabytes)

- **data** - must have some sort of structure
    - TODO good def
- dealing with large amounts of data is challenging, especially when dealing with lots of concurrent access

- **database** - collection of data - typically all related with a clear structure
    - **entities** - things stored in the data (students, classes)
    - **relationships** - connection between entities (course enrolment, schedule)
- **DBMS** - DataBase Management System - software designed to assist in maintaining and utilizing databases

## is a file system a DBMS?

no, details depend on editors, file system, os, hardware...

## benefits of a DMBS

- data independence/abstraction - wow you use the data is independent of how the data is represented and stored
- query language - specify what you what, not how to get it 
- provides strong grantees - data integrity and recovery
- concurrent data access
- efficient with large data volumes