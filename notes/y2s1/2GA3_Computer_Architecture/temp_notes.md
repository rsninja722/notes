# temp notes

## adding binary numbers

add the same as decimal numbers

half adder

full adder


## lecture 4

adders

ALU

has data in, data out, and control

implement hardware for additions subtraction and logic

control path and data path

### implementing memory

fixed logic circuits that maintain state, load operands and store results


## latch

enable | data | output
---|---|---
0|0|previous input
0|1|previous input
1|0|0
1|1|1

## registers

multiple latches together, separate data lines, one data line

## propagation delay

TODO

the need to synchronize - clock with frequency of $f = \frac{1}{I}$

complex circuits have multiple clocks

flipflops

combinatorial circuits

## sequential circuits

high level ideas: transistors, boolean functions, digital circuits

sequential circuits
more sophisticated

binary counters

- 1 stream in, n-bit binary out, rectangle

decoder

- n-bit in, $2^n$ out, rectangle

multiplexer/demultiplexer

- trapezoid

## fixed logic circuit

```
clock -> nand -> not -> counter -> decoder (stop)
         /\                                   |
         -----  not <--------------------------
```

## types of logic circuits

- fixed logic
- programmable logic
    - fpga
- stored program and reprogrammable circuits

## hardware design principles

- replication vs iteration
- gate minimization
- power
- abstraction

# data and programs

what data can represent

- stored program
- interpreted as instructions
- interpreted as standard data

bits and bytes

## how is data stored in memory (representation)

- **bit** - binary digit

### words vs bytes

bytes - 8 bits

words - n bytes - depends on architecture

### most and least significant bits

```
LSB ->  | 0 | 3 | 4 | 2 | 4 | 7 |  <- MSB

```

### big and little endian

big - most sig to least sig

little - leas sig to most sig

4 byte word

```
little |0|1|2|3|  big |3|2|1|0|
```

### binary weighted representation

10110110

$$\sum_{i-1}^{u} b_i 2^i = 0.2^0 + 1.2^1 + 1.2^2 + 0.2^3 + 1.2^4 + 1.2^5 + 0.2^6 + 1.2^7$$

TODO

### binary and hexadecimal

4 binary bits - 16 values. maps to 1 hexadecimal digit

1101 0110

0x**D6**

### signed integers

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

### casting and filling integers


# ssh

ssh nickolij@cs2ga3.cas.mcmaster.ca

