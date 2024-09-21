# stream ciphers

## stream vs. block cipher

- **stream cipher** - encrypts one bit at a time
    - example: xor 1 bit of the key stream with 1 bit of the input
    - small and fast, used in smaller devices with less resources
    - traditionally assumed to be faster, but modern block ciphers are also fast
- **block cipher** - encrypts an entire section of data at once
    - examples: DES and AES
    - used more often

## synchronous stream ciphers

- put key $k$ in a key stream generator, which generates 1 bit of the key at a time

## asynchronous stream ciphers

- put key $k$, *and the previous ciphertext output* in a key stream generator, which generates 1 bit of the key at a time

## encryption and decryption

- $x_i,y_i,s_i \in \\{ 0,1 \\}$
- encryption - $y_i = e_s_i(x_i) = x_i + s_i \text{ mod } 2$
- decryption - $x_i = d_s_i(y_i) = y_i + s_i \text{ mod } 2$

- why addition mod 2 - same as XOR
- if the key is random, it is impossible to extract the plaintext from the ciphertext

## key stream

- **key stream** - algorithm that generates an unbound number of secret bits
    - security of the stream cipher depends completely on the key stream
    - the actual key is used as an input/seed
    - the more "random looking" the bits, the better

## random number generators

- true randomness may be impossible
- pseudorandom number generators - use a function with a seed to produce unpredictable numbers
    - given bits of the stream, further bits should not be feasibly computable (for some $n$, given a polynomials (in $n$) number of consecutive bits of the stream, there is no polynomial time (in $n$) algorithm that can predict the next bit)
    - no one has proven the existence of cryptographically secure PRNGs
    - seed should be random as well - example: system time, observe kernel on-goings, user mouse movement
    - example: linear PRNG - $s_0$ = seed, $s_{i+1} \equiv a_s_i + b \text{ mod } m
        - example `rand()` in ANSI C $s_{i+1} = 1103515245_s_i + 12345 mod 2^{31}$

### key streams from PRNGs

- many PRNGs have good statistical properties (they look random)
- example: $s_0 = \text{seed}$, $s_{i+1} \equiv as_i + b \text{ mod } m$
    - attack: by knowing the seed and formula, by getting 3 outputs, you can solve for a,b mod m
    - not cryptographically secure

## one-time pad

- **one-time pad (OTP)**
    1. the key stream $s_0,s_1,...$ is generate by a true random number generator
    2. every key stream bit $s_i$ is used only once
- OTP is unconditionally secure

## practical stream ciphers

- initial key is entered into both the encryption and decryption key stream generators

## shift register based stream ciphers

### linear feed shift registers (LFSR)

- hardware PRNG
- consists of flip-flops and a feedback path

![](./media/4cr3_1.JPG)

$s_i = s_{i-2} + s_{i-3} \text{ mod } 2$

### general LFSRs

 - formula for general LFSR - $s_m = p_m s_{m-1} + ... + p_1 s_1 + p_0 s_0 \text{ mod } 2$
-**degree** of an LFSR - the amount of terms ($m$)

![](./media/4cr3_2.JPG)

- if $p_i = 1$ feedback is active, if 0 its inactive

### LFSRs are periodic

- mathematically described by linear recurrences
- after a finite number of output bits, the sequence will repeat
- length of the period is called the length of the LFSR

- **max length of an LFSR** of degree $m$ is $s^m - 1$

### known plaintext attacks

- use the recurrence relation $s{i+m} = p_{m-1} s_{i+m-1} + ... + p_1 s_{i+1} + p_0 s_i \text{ mod } 2, s_i,p_j \in \\{0,1\\}, i = 0,1,...

- use a system of linear equations in the form $i = 0...m-1$ $s_{m...2m-1}$ = ... mod 2

- to counteract, use multiple LFSRs with nonlinear components:

### multiple LFSRs

- colored flip flops are conditioned by the clock (clock randomly multiplies into the result depending on the state of the colored flip flops)

![](./media/4cr3_3.JPG)

### LFSRs for stream ciphers

- if an LFSR is used for a stream cipher, the secret key is the set of coefficients ($p_{m-1},...,p_1,p_0$)
- if some plaintext is obtained, a **known plaintext attack** can be launched
    - if $2m-1$ plaintext ($x$) and ciphertext ($y$) bits are known, the first $2m$ key stream bits can be obtained: $s_i = x_i + y_i \text{ mod } 2$