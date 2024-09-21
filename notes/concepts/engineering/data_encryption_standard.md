# data encryption standard

- created by throwing together different circuits and algorithms and hoping
- DES - a block cipher that encrypts 64 bit blocks
    - ley length of 56 bits
    - standardized in 1977 by NIST
    - replaced by Advanced Encryption Standard in 2000
    - feistel cipher

## primitives

- **confusion** - obscuring the relation between the key and the ciphertext
- **diffusion** - spreading the influence of small changes in the input, across as much of the output as possible

both operations together create a *product cipher*

many of each operations can occur in a cipher

## overview

- encryption is performed as follows
    - initial permutation
    - 16 rounds are performed 
    - final permutation is performed
- each round a key is created based on the main key

## single round

![single round is shown in brackets](./media/4cr3_4.JPG)

- bitwise initial permutation, then 16 rounds of:
    - plaintext split into 32bit left ($L_i$) and right ($R_i$) halves
    - $R_i$ is fed into $f$, then the output is XORed with $L_i$
    - left and right are swapped

rounds can be expressed as

- $L_i = R_{i-1}$
- $R_i = L_{i-1} \oplus f(R_{i-1},k_i)

![after final round, final permutation is performed](./media/4cr3_5.JPG)

### how a key is created each round

- f-function:
    1. expansion e
    2. XOR with round key
    3. S-box substitution
    4. permutation

![steps shown with arrows top to bottom](./media/4cr3_6.JPG)

#### expansion e

permutes based on an array where some bits are put in multiple of the output array positions

#### s-box

![s-box table](./media/4cr3_7.JPG)

- use the leftmost and rightmost bit as the row index
- use the middle 4 bits as the column
- selects 4 bits from a predefined table

- non linear - differential analysis attacks
- every 6 bits from the 48 bit expansion uses a different table

#### permutation P

- bitwise permutation based on a table

## initial and final permutations

permutations described by arrays (shown as tables) $IP$ (initial permutation) and $IP^{-1}$ (final permutation)

example:

- $IP$ = [4,3,1,2] - $IP$(abcd) = dcab
- $IP^{-1}$ = [3,4,2,1] - $IP^{-1}$(dcab) = abcd

## key schedule

### PC-1 transform

- ignores the parity (first) bit of each byte
- permutes the bits using a table

### split

56 bit permuted key is split into 28 bit halves

## each round

- halves are rotated
- PC-2 selects a permuted subset of 48 bits of the halves

- on rounds i=1,2,9,16 the halves are rotated left by 1 bit, other rounds by 2 bits

- causes the first and last key to be the same

## decryption

- only the key scheduler needs to be modified for decryption
- changing left shifts to right shifts generates the keys in reverse order
    - no rotation for i = 1
    - 1 bit rotation for i = 2,9,16
    - 2 bit rotation for other rounds

## security

- major criticisms:
    - key space is too small ($2^56$)
    - design reasoning behind the s-boxes have never been revealed - potential backdoor?

- resistent to both differential and linear cryptanalysis
    - this means the NSA and IBM were either lucky, or knew about these attacks 15 years before the public

- venerable to exhaustive key search
    - for a pair of plaintext x and ciphertext y, test all keys until $DES_k^{-1}(x) = y$

## history of attacks

- 1993 - specific hardware (key search machine) could break DES in 36h at a cost of $1000000
- 2006 - use 120 FPGAs to break DES in 6.4 days at a cost of $10000
