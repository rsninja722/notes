# computer architecture

## creating computer components with basic gates and transistors

## propagation delay

TODO

the need to synchronize - clock with frequency of $f = \frac{1}{I}$

complex circuits have multiple clocks

flipflops

combinatorial circuits


### adding binary numbers

### ALU

has data in, data out, and control

implement hardware for additions subtraction and logic

### implementing memory

fixed logic circuits that maintain state, load operands and store results


#### latch

enable | data | output
---|---|---
0|0|previous input
0|1|previous input
1|0|0
1|1|1

#### registers

multiple latches together, separate data lines, one data line

### sequential circuits

high level ideas: transistors, boolean functions, digital circuits

sequential circuits
more sophisticated

binary counters

- 1 stream in, n-bit binary out, rectangle

decoder

- n-bit in, $2^n$ out, rectangle

multiplexer/demultiplexer

- trapezoid

### fixed logic circuit

```
clock -> nand -> not -> counter -> decoder (stop)
         /\                                   |
         -----  not <--------------------------
```

### types of logic circuits

- fixed logic
- programmable logic
    - fpga
- stored program and reprogrammable circuits

## data in computers

what data can represent

- stored program
- interpreted as instructions
- interpreted as standard data

bits and bytes

### how is data stored in memory (representation)

- **bit** - binary digit

#### words vs bytes

bytes - 8 bits

words - n bytes - depends on architecture

#### most and least significant bits

```
LSB ->  | 0 | 3 | 4 | 2 | 4 | 7 |  <- MSB

```

#### big and little endian

big - most sig to least sig

little - leas sig to most sig

4 byte word

```
little |0|1|2|3|  big |3|2|1|0|
```

#### binary weighted representation

10110110

$$\sum_{i-1}^{u} b_i 2^i = 0.2^0 + 1.2^1 + 1.2^2 + 0.2^3 + 1.2^4 + 1.2^5 + 0.2^6 + 1.2^7$$

TODO

#### binary and hexadecimal

4 binary bits - 16 values. maps to 1 hexadecimal digit

1101 0110

0x**D6**

#### signed integers

sign-magnitude

```
|s|    m     |
```

s, m

ones complement

if s = +, them m, else !m

twos complement

if s = +, the m, else !(m-1)

$x = -x_{n-1}2^{n-1} + x_{n-2}2^{n-2} + \dots + x_1 2_1 + x_0 2_0$

with n-bits: min: $-2^n$, max: $2^n$

binary | unsigned int | sign magnitude int | ones complement int | twos complement int
---|:-:|:-:|:-:|:-:
0000 | 0 | 0 | 0 | 0
0001|1|1|1|1
0010|2|2|2|2
0011|3|3|3|3
0100|4|4|4|4
0101|5|5|5|5
0110|6|6|6|6
0111|7|7|7|7
1000|8|-0|-7|-8
1001|9|-1|-6|-7
1010|10|-2|-5|-6
1011|11|-3|-4|-5
1100|12|-4|-3|-4
1101|13|-5|-2|-3
1110|14|-6|-1|-2
1111|15|-7|-0|-1

#### casting and filling integers

## from circuits to programming

### fetch execute cycle

```
instructionPointer = start of program
repeat forever
    instruction = fetch (memory[instructionPointer])
    execute instruction
    instructionPointer++
```

instructions are represented as 

### high level programming

a programmer uses a *high level language* to write source code, then uses a tool to translate the source code into the representation that a preprocessor expects

```
source code
\/
[preprocessor]
\/
preprocessed source code
\/ 
[compiler]
\/
assembly code
\/
[assembler]
\/
reallocated object code
\/
[linker] <-- [object code in libraries]
\/
binary object code
```

### instruction set architecture

- **instruction set architecture** - set of operations the hardware recognizes, operations are called instructions
    - defines:
        - available instructions 
        - what the instructions do, pre/post conditions
        - number of operands, operand encoding, instruction encoding, result

most common ISAs: x86, arm, RISC-V

### assembly languages

- low-level programming level
- intermediate step to machine instructions
- direct mapping
- human readable, some shortcuts, macros

### types of instructions

- ALU operations
- Register access
- Memory access
- Program flow control

### branching

- moving the instruction pointer to a different location in program
- necessary for conditionals, loops, ect.

```
instructionPointer = start of program
repeat forever
    instruction = fetch (memory[instructionPointer])
    tmp = instructionPointer + 1
    execute instruction
    instructionPointer = tmp
```
### pipelining

### hazards for pipelines

may cause **stalls** which delay the pipeline

3 main types

- **data hazard** - waiting for data from earlier instruction
- **control hazard** - when the instruction fetched is no the one needed (example: don't know what instruction to fetch for branch until branch is evaluated)
- **structural hazard** - when a resource required is needed at the same time by more than one instruction

#### data forwarding 

one way to avoid stalls  

using data right after calculation, before its sent to memory

#### pipeline stalls

sometimes we need to stall the pipeline, which creates **bubbles**

the bubble will pass through the rest of the pipe

### use of registers

- types
    - general-purpose
    - floating point
    - instruction pointer
    - comparison operation

when working with registers, the workflow is typically as follows:

1. load data from memory to register
2. perform ALU operation
3. store result from register to memory

## assembly

### branching example

```assembly
#loop label
lop: add r1 r2  #increment counter
     memo r3 r7 #perform some operation
     cmp r2 r4  #compare to invariant
     bne loop   #conditional branch
#main label
main:           #goes on

```

## von neumann vs harvard architecture

### von neumann

- offers more flexibility
- can result in memory bottlenecks

```markdown
processor <-> memory
/\            /\
\/            \/
input/output facilities 

```

### harvard architecture

- less susceptible to bottle necks
- offers better security
- rigid separation between the types of memory

```markdown

instruction memory
/\
\/
processor <-> memory
/\            /\
\/            \/
input/output facilities 

```

## processors

- **processor** - a digital device that can perform multi-step computation

there are a few main types of processors:

- **fixed logic** - function fixed in hardware
    - example: adder
- **selectable logic** - can choose one of several fixed functions
- **parametrizable logic** - parameters govern computation
    - example: sin(a+xb)
- **programmable logic** - takes a list of instructions provided at runtime 

there are also different categories for processors

- **co-processors** - dedicated function
    - fixed/selectable logic 
    - used to implement a dedicated function, instructed by a general purpose processor, not usual used in isolation
- **microcontrollers** - direct hardware control
    - uses programmable logic
    - example: control for an elevator
- **embedded systems** - dedicated hardware
    - used for real-time operating systems
    - used on a device with a single purpose
    - example: coffee machine with a touch screen
- **general purpose** - interchangeable and compatible for multiple systems

```markdown
fixed
   ____
a-|    |
  |    |-c
b-|____|

selectable
   ____
a-|    |
  |    |-c
b-|____|
    |
    x (selects function)

parametrizable
   ____
a-|    |
  |    |-c
b-|____|
   | | |
   x y x
```