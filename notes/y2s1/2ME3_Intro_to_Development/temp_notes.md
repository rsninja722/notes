# temp notes

## software development life cycle (SDLC)

### phases

1. **requirements analysis**
    - what the software does 
    - gathering requirements, asking stakeholders
    - specify functional requirements
        - what the software actually does
        - "the software shall..."
        - atomic, precise, verifiable
    - specify non-functional requirements
        - useability, performance, security
    - a contract between the client and developer
        - clear scope/out of scope defined
2. **specification and design**
    - how it meets the requirements
    - plan modules, classes, packages, libraries/APIs
    - what the code does
    - prototyping
    - documentation
    - flowcharts
    - UML
        - sequence, use case, state, class
3. **implementation / development**
    - how you implement the specifications
4. **validation and verification / testing**
5. **deployment and maintenance**

### models

- **waterfall**

```
_______
|RA   | ─┐
‾‾‾‾‾‾‾_______
\/     |S+D  | ─┐
SRS    ‾‾‾‾‾‾‾_______
              |code | ─┐
              ‾‾‾‾‾‾‾_______
                     |test | ─┐
                     ‾‾‾‾‾‾‾_______
                            |D+M  |
                            ‾‾‾‾‾‾‾
```

- **agile**
    - scrums, sprints
- **spiral**
- **v**