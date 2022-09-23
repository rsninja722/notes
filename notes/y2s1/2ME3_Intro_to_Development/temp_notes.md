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

<pre class="hljs language-markdown">
     (R1, R2, R3)
        _______
   |--> |RA   | --\/   
_______ ‾‾‾‾‾‾‾ _______
|test  |        |SD   |
‾‾‾‾‾‾‾ _______ ‾‾‾‾‾‾‾  
    ^--- |code | <--|
        ‾‾‾‾‾‾‾
</pre>

- **spiral** - like agile, but you are trying to deliver a full product each cycle
- **v**


## what makes good software

- efficient
- maintainable
    - scalable
- useability
- reliable
- correct - it meets the requirements
- robust - meets unspecified requirements (protects against user error, edge cases, etc.)

software can be correct but not robust (patriot missile system)

## assumed maintenance phase

in sotware development usually:

- 40% cost allocated for development
- 60% cost allocated for maintenance
    - 20% corrective
    - 20% adaptive
    - 60% improvement

## inheritance

"is-a" relation

<details>
<summary>inheritance example</summary>
- animal
    - vertebrate
        - mammal
        - bird
        - fish
        - reptile
        - amphibian
    - invertebrate
        - arthropod
            - arachnid
            - insect
        - cephalopod


mammal is a vertebrate is an animal
</details>

in java -  use `extends` for classes/abstract classes, `implements` for interfaces 

polymorphism - TODO