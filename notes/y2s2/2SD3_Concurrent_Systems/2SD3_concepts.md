# 2SD3 concepts

## Learning Objectives
- understand
    - Basic models of concurrency, both algebraic and graphical
    - The concepts of process and thread
    - Resource management and sharing
    - Basic ideas of design and architecture of concurrent systems
    - Problems with testing and verification of concurrent systems
- be able to
    - Specify concurrent systems with process algebras and Petri nets.
    - Implement concurrent systems with processes, threads and other available tools.
    - Verify and test crucial parts of concurrent systems.

## review

[automata](?note=notes/concepts/engineering/automata.md)

# intro

## sequential vs concurrent

- **sequential** - series of steps executed one at a time
- **concurrent** - multiple threads of control allowing multiple steps to execute at the same time

- **concurrent system** - system consisting of several parts acting together

## dependance

- in an **independent** system, each thread can run without relying on the others
- in a **dependent system** - threads rely on information/processes to be complete in other threads before they can run

## benefits/drawbacks of concurrent systems

- benefits
    - performance gain from parallelism
    - allows I/O to be processed without blocking other processes
    - allows certain tasks to be given higher priority (more computing resources)
    - allows programs that interact with/control multiple things to be structured in a more appropriate way
- drawbacks
    - error prone: concurrency introduces many new possibilities for errors 
        - (example: one thread deletes an object that another thread is still accessing)