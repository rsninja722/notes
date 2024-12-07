# advanced encryption system

- most widely used symmetric cipher
- chosen by the US national institute of standards and technology (NIST) in 2001
- block cipher with 128 bit size
- supports 128, 192, and 256 bit keys

## overview

![AES process overview](./media/4cr3_8.JPG)

### rounds

- number of rounds depends on key length

key length (bits) | number of rounds
---|---
128 | 10 
192 | 12
256 | 14

![over view of rounds](./media/4cr3_9.JPG)

## internal structure

the 128 bit input is arranged into 16 bytes denoted $A_0...A_{15}$ in a "state matrix"

$$\begin{array}{c:c:c:c}
   A_{0} & A_{4} & A_{8} & A_{12} \\\\ \hline
   A_{1} & A_{5} & A_{9} & A_{13} \\\\ \hline
   A_{2} & A_{6} & A_{10} & A_{14} \\\\ \hline
   A_{3} & A_{7} & A_{11} & A_{15}
\end{array}$$

![structure for single round](./media/4cr3_10.JPG)

### byte substitution layer

- 16 $S$-boxes that are
    - identical
    - nonlinear (only nonlinear elements of AES)
        - $S(A_i) + S(A_j) \neq S(A_i + A_j)$
    - bijective
        - can be uniquely reversed
    - often implemented as a lookup table

### diffusion layer

- consists of the two sublayers
- performs a linear operation

#### shiftRows sublayer

- rows in the state matrix are shifted cyclically

input

$$\begin{array}{c:c:c:c}
   B_{0} & B_{4} & B_{8} & B_{12} \\\\ \hline
   B_{1} & B_{5} & B_{9} & B_{13} \\\\ \hline
   B_{2} & B_{6} & B_{10} & B_{14} \\\\ \hline
   B_{3} & B_{7} & B_{11} & B_{15}
\end{array}$$

output

$$\begin{array}{c:c:c:c}
   B_{0} & B_{4} & B_{8} & B_{12} \\\\ \hline
   B_{5} & B_{9} & B_{13} & B_{1} \\\\ \hline
   B_{10} & B_{14} & B_{2} & B_{6} \\\\ \hline
   B_{15} & B_{3} & B_{7} & B_{11}
\end{array}$$

#### mixColumn sublayer

- linear transformation that mixes each column of the matrix
- each column is multiplied as a vector with a fixed 4x4 matrix

### key addition layer

- $C \oplus k_i$ where $C$ is the matrix, and $k_i$ is the subkey

### key schedule

- subkeys are recursively derived from the input key
- number of subkeys = number of rounds + 1

![key schedule for 128 bit key AES](./media/4cr3_11.JPG)

- W\[0\] ... w\[3\] are the original AES key

#### function g

![structure of function g](./media/4cr3_12.JPG)

- rotates 4 input bytes
- applies non-linear S-box substitution
- XORs the round number with the leftmost byte

## decryption

- all layers must be inverted
    - key addition is its own inverse

![decryption overview](./media/4cr3_13.JPG)

### inverse mixColumn

- state matrix columns multiplied with inverse of 4x4 matrix

### inverse shiftRows

- rows shifted right instead of left

### inverse byte substitution

- inverse S-box $S^{-1}$ is used, if a lookup table is used, it is reversed

### decryption key schedule

all subkeys are computed first, so they can be used in reverse order

## practical issues

- efficient on 8-bit processors, inefficient on 32 or 64 bit
- to improve efficiency: merge all round functions into one table look-up with 256 32-bit entries
    - each round can be computed with 16 table look-ups

### security

- brute-force attacks - not possible with current compute due to key length
- analytical attacks - no known analytical attacks
- side-channel attacks
    - several published attacks that target specific implementations, not the algorithm itself

    