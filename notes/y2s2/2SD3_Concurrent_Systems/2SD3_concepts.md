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

## petri nets

### firing rules

- all incoming resources must be ready, and then all fire to their process at the same time
- a process may require multiple tokens from one resource
- a process can create multiple (can be different) amount of tokens for their output resource(s)

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

## colored petri nets

colored petri nets make use of [multisets](?note=notes/concepts/engineering/multisets.md) <!-- [](/notes/concepts/engineering/multisets.md) -->

- each resource is now a multiset
- each transition can define how and how many tokens are needed
- each process can define conditions for what resources they can take in

### example with dining philosophers

![dining philosophers colored petri net](./media/2sd3_3.JPG)

take forks requires 1 philosopher and 2 forks 

```
colour PH = with ph1 | ph2 | ph3 | ph4 | ph5
colour Fork = with f 1 | f 2 | f 3 | f 4 | f 5
LEFT : PH -> FORK, RIGHT : PH -> FORK
var x : PH
fun LEFT x = case of ph1 => f 2 | ph2 => f 3 | ph3 => f 4 | ph4 => f 5 | ph5 => f 1
fun RIGHT x = case of ph1 => f 1 | ph2 => f 2 | ph3 => f 3 | ph4 => f 4 | ph5 => f 5
```



# FSP syntax

```tex
const NAME = 1
range NAME2 = 3..7

LABEL = (transition_a -> transition_b -> LABEL),
LABEL2 = (a -> b -> LABEL2 | c -> LABEL2),

||COMPOSITION = (LABEL || LABEL2).

||COMPOSITION_WITH_INSTANCES = (instance_a:LABEL || instance_b:LABEL).

MULTI_TRANSITIONS = (a[i:0..2] -> b[i] -> MULTI_TRANSITIONS)

CLIENT = (call -> wait -> continue -> CLIENT)
SERVER = (request -> service -> reply -> SERVER)
||RENAMEED = (CLIENT || SERVER)/{call/request,reply/wait}
% CLIENT = (call -> reply -> continue -> CLIENT)
% SERVER = (call -> service -> reply -> SERVER)

RESOURCE = acquire -> release -> RESOURCE
USER = acquire -> use -> release -> USER
||PREFIXED = a : USER || b : USER || {a, b} :: RESOURCE
% relabels every transition of a process with the prefix(s)


HIDING = (a->b->c HIDING)\{a} % hides a
HIDING2 = (a->b->c HIDING2)@{a} % hides all except a (hides b and c)
```
