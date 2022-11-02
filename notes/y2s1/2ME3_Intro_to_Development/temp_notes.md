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

##  

- **waterfall**

```
|-----|
|RA   | ─┐
|-----||-----|
\/     |S+D  | ─┐
SRS    |-----||-----|
              |code | ─┐
              |-----||-----|
                     |test | ─┐
                     |-----||-----|
                            |D+M  |
                            |-----|
```

- **agile**
    - scrums, sprints

<pre class="hljs language-markdown">
     (R1, R2, R3)
        |-----|
   |--> |RA   | --\/   
|-----| |-----| |-----|
|test  |        |SD   |
|-----| |-----| |-----|  
    ^--- |code | <--|
        |-----|
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

final
abstract

implements

interface

@override


# class diagrams

- "+" - public

- "--" - private

- "#" - protected

```
_______________________
|Point                 |
|______________________|
|+ x_coord: int        |
|-- y_coord: double    |
|# z_coord: boolean    |
|______________________|
|+ setY()              |
|+ distanceFrom(Point) |
|                      |
|______________________|
                     |
  |                  |  ( Point is a B)
  | (Point uses A)  __
  \/                \/la
_________           ________
|  A    |           |    B  |
|_______|           |_______|

 |
 | (C has a A (has a implies uses))
 /\
 \/
 ________
|    C  |
|_______|

```

# design patterns

factory
strategy
singilton
ovserver
decorator
facade
prox
adapter 
command


# study

design patterns, focus on decorator, factory

principles

SOLID
- single responsibility/information hiding
- open closed
- liskov substitution principle
- interface segregation 
- design for interfaces/dependency inversion

## strategy pattern

- encapsulate algorithms that can be switched out during run time 

subject must know about the observers

observers should be able to unsubscribe and potential resubscribe to the subject

observers must know about the subject

## observer pattern

subject: things that are observed

observers: things that watch the subjects

## decorator patter

## design pattern

### relationships

- one-to-relationship
    - one subject
    - many observers

### updating models
push - subject gives the observer the update
pull - subject notifies the observer a change has been made, but the observer decides when the request the info
poll - observer constantly asks subject if there have been changes  

# midterm review

room based off last name

5 questions
20 marks
50 minutes

## breakdown

intro stuff (definitions and stuff)
q1 2 marks

OOP (encapsulations, design principles, inheritance/polymorphism, know how all the key words work like implements, extends, etc.)

might have to code

q2 3 marks
q3 5 marks

design patterns (also design principles) 

java code will be written, has to be readable to someone that knows java ("javaish code")

be able to work from a UML diagram, and produce a class diagram

q4 6 marks
q5 4 marks

design principles
- information hiding/single responsibility
- open closed
- dependency inversion/design for interfaces

UML arrows
- association --->
- is-a ---|>
- has a <>----
    - example: object stores something passed in the constructor

## design patterns

strategy pattern

the encapsulation of an algorithm
```

_____________________________________    _____________________________
|application                        |    |< shortest algorithm >     |
|-------------------                |    |---------------------------|
|Graph graph                        |    |                           |
|pathAlgorithm a                    |    |                           |
|shortestPath()                     |--->|calcPath(Graph)            |
|setPathAlgorithm(pathAlgorithm)    |    |                           |
|___________________________________|    |___________________________|
                                                 ^
                                                /_\
                                                 |
                              ___________________|_
                           __|__________________  |
                        __|__________________  |  |
                        |dijkstra           |  |  |
                        |-------------------|  |  |
                        |shortestPath()     |  |__|
                        |                   |__|
                        |___________________|


```

factory pattern

decorator pattern




## example questions

what is the open/closed principle and why is it appealing from a design standpoint?


You work for an Uber-esque software company. In the software, they model physical
locations and road-ways as a graph. They contain all this information in a single class: Map. Within
the Map class there is a shortestPath(node1, node2) method. This has worked fine for a while,
but as the company expands they find their algorithm for shortest path is not always the correct
one to use, especially when the graph gets large. This is causing a lot of headaches and clients and
drivers are getting frustrated with the software. How would you refactor the Map class? What design
pattern would you use (or should have been used to begin with)?
Page 7



Imagine you have been contracted to develop software for a Starbucks-style coffee shop.
Your software must keep track of customers’ beverages orders and calculate their total price once the
order is complete.
Right now the store works as follows. The customer chooses between three sorts of drinks: coffee,
latte, or cappuccino. Once selected, the customer then has their choice of options to add to their
drink. For example, cream, sugar, honey, milk, chocolate syrup, etc. Some of these options adds cost
to the drink, other do not.
Think about what could change later on with these drink options, and devise a design for this software
system. Draw a UML diagram of your design, and explain your design decisions.
Page 10
