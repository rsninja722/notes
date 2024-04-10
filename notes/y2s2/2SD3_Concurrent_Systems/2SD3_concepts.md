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


# deadlock

## requirements
- serially reusable resources
    - processes use resources in a mutually exclusive way
- incremental acquisition
    - processes hold on to resources while waiting for new ones
- no pre-emption
    - process can only release their resources voluntarily
- wait-for cycle
    - there exists a circular chain of processes for which each has the resource needed by the next process

## starvation

if by trying to avoid deadlock, one makes process "give up" if they can't get the needed resource(s), then its possible for the process to never get the resource(s) and "starves"

## dining philosophers

- problem - 5 philosophers sit around a table with 5 forks, each need 2 forks to eat

### asymmetrically simple minded solution

```
FORK = (get -> put -> FORK),
PHIL = (when(i = 1 OR  i = 3 OR i = 5) think -> left.get -> right.get -> eat -> left.put -> right.put -> PHIL
| when(i = 2 OR  i = 4) think -> right.get -> left.get -> eat -> right.put -> left.put -> PHIL),
|| DINERS (N=5) = forall[i:1..N] (phil[i]: PHIL || {phil[i].right,phil[i+1].left} :: FORK);
```

### butler solution 

```
FORK = (get -> put -> FORK),
PHIL = (think -> sitdown -> right.get -> left.get -> eat -> right.put -> left.put -> getup -> PHIL),
BUTLER(K = 4) = COUNT[0]
COUNT[i : 1..4] = (when(i < K) sitdown -> COUNT[i + 1] | getup -> COUNT[i − 1]),
|| DINERS(N = 5) = (forall[i : 1..N]
(phil[i] : PHIL || {phil[i].right, phil[i + 1].left} :: FORK)
|| {phil[i : ..N]} :: BUTLER(K = 4));
```

### simultaneity

![processes](./media/2sd3.JPG)

![composition](./media/2sd3_2.JPG)

```
FORK = (take.right -> put.right -> FORK | take.left -> put.left -> FORK),
PHIL = (think -> takeboth -> eat -> putboth -> PHIL),
|| DINERS(N = 5) = forall[i : 1..N] (phil[i] : PHIL||{phil[i].right, phil[i + 1].left} :: FORK);
```

