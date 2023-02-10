# 2SD3 Concurrent Systems

- instructor email - janicki@mcmaster.ca
- course website - [http://www.cas.mcmaster.ca/~cs2sd3](http://www.cas.mcmaster.ca/~cs2sd3)

## marks

- assignments - 3 at 10% each
- midterm - 20%
- exam - 50%

## what is a concurrent system
- systems consisting of several parts acting together

sequential vs concurrent

- a sequential program has a single thread of control
- concurrent programs have multiple threads of control allowing them to perform multiple computations in parallel and to control multiple external activities which occur at the same time


## why concurrent programs?

- performance gain from multiprocessing hardware (parallelism)
- increased application throughput
- increased application responsiveness
- more appropriate structure for programs which interact with the environment, control 
activities and handle multiple events

## why is it important to learn

- concurrency is widespread but error prone     

## models

- model - simplified representation of the real world
- used by software designers and engineers to
    - gain confidence in the validity of a proposed design
    - focus on an aspect of interest (concurrency)
    - model animation to visualize behavior
    - mechanical verification of properties

- LTS - labelled transition systems
- petri nets - extension of finite state machines
    - displayed and analysed by the LTSA analysis tool

# tutorial

no concrete definitions for concurrency, concurrent programing amd parallel programs

- parallelism - running multiple computations simultaneously 
- process - the instance of a computer program executed by one or many threads. it contains the program code and its activity. it includes the program counter TODO