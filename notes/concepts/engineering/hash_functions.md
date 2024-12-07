# hash functions

## need for hash functions

- represent arbitrarily large data using fixed-size values


## requirements

- fast for large inputs
- fixed output size
- output is sensitive to all input bits

- **preimage resistance** -  one way
- **second preimage resistance** - having one data and its hash, does not reveal the contents of another data with the same hash
- **collision resistance** - hard to create two different data that have the same hash

## merkle-damgard construction

- split input into blocks of equal size
- feed the output of a compression function and the next block into itself until all blocks are processed
- return last output

## hash function from block ciphers (Matyas–Meyer–Oseas)

- spit input into blocks of equal size
- each round
    - key is last round output xor with last block
    - feed block into cipher

## secure hash algorithm 2 (SHA-2)

![overview of SHA-2](./media/4cr3_14.JPG)

### padding

for message of length $l$, message will be (message) append ($1000...$ of length 512-64-$l$) append (64 bit int equal to $l$)

### dividing

divide message into 512 bit blocks $M_1,M_2,...$

### functions

- $Ch(x, y, z) = (x \land  y) \oplus (x \land  \lnot z)$
- $Ma(x, y, z) = (x \land  y) \oplus (x \land  z) \oplus (y \land  z)$
- $\Sigma 0(x) = (x \gg_R 2) \oplus (x \gg_R 13) \oplus (x \gg_R 22)$
- $\Sigma 1(x) = (x \gg_R 6) \oplus (x \gg_R 11) \oplus (x \gg_R 25)$
- $\sigma 0(x) = (x \gg_R 7) \oplus (x \gg_R 18) \oplus (x \gg_S 3)$
- $\sigma 1(x) = (x \gg_R 17) \oplus (x \gg_R 19) \oplus (x \gg_S 10)$

$\gg_R$ is right rotation

$\gg_S$ is right shift

$x,y,z$ are 32 bit words

### message schedule

![message schedule](./media/4cr3_15.JPG)

### compression function

![compression function](./media/4cr3_16.JPG)

### algorithm

![complete algorithm](./media/4cr3_17.JPG)