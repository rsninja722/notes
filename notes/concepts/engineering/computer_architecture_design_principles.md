# computer architecture design principles

- **computer architecture** - a set of rules and methods that describe the functionality, organization, and implementation of computer systems.

why should we care about computer architecture?

it is relevant when thinking of:

- high performance computation
- operating systems
- drivers and hardware acceleration
- low-level and embedded programming

## architectural design principles

- focus on performance, efficiency, cost, and reliability, and balancing the trade offs between these factors
- the design process is task dependent meaning each step requires the previous step to be complete

### abstraction

abstraction in hardware

```
low level                                                                                                               abstract

quantum physics --> atoms --> transistors --> logic gates --> integrated circuits --> components --> discrete parts --> computer 
```

abstraction in software

```
low level                                    frameworks/libraries                                      abstract
                                             /\  \/       /\  \/
machine code --> assembly --> c/c++/compiled languages --> python/javascript/interpreted languages --> software 
```

- key in both hardware and software
- hides complexity
- allows decisions and designs at different levels of detail

usually, the more abstraction, the less efficiency and control of computation, but at the benefit at less human time being required to develop any given hardware or software    

### redundancy and replication

redundancy increases reliability while replication ensure consistency

- **redundancy** - having more than one component/process/nodes in a system in the case of a failure
    - **active** - all nodes are the same process
    - **passive** - one node runs a process, and switches to another node in the case of failure
- **replication** - the synchronization of state between redundant nodes


example: error correcting codes are used to protect against random bit flips from cross talk in cables, cosmic rays, and other sources of data loss

### parallelism

running multiple similar tasks at the same time 

- if an idea works once it can work $2^N$ times as well
- can be on a micro and macro level
    - micro - many full adders working at the same time in an ALU
    - macro - many GPUs mining bitcoin at the same time

### pipelining

keeping ever park of a task busy while constantly, dividing incoming tasks into a series of smaller steps

physical example: car production line

instruction set example:

instructions are queued up in a way that makes execution more efficient

Clock cycle| 1|	2| 3 |4	|5 |6 |7
---|---|---|---|---|---|---|---
Instr. No.|||||||
1|IF| ID| EX|MEM|	WB||		
2|	| IF| ID|EX|	MEM|	WB|	
3|	|	| IF|ID|	EX|	MEM|	WB
4|	|	|   |IF|	ID|	EX|	MEM|
5|	|	|	||	IF|	ID|	EX



### moore's law

get  ahead of the curve so your design is not obsolete

<img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Moore%27s_Law_Transistor_Count_1970-2020.png" style="width: 50%;">


