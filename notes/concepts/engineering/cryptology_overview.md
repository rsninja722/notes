# cryptology overview

- what is cryptography?
    - the art/science of protecting secrets
    - claims and proofs about methods of encryption

areas of crytology

- **crytology**
    - **cryptanalysis**
        - social engineering
        - implementation attacks
        - **classical cryptanalysis**
            - brute force attacks
            - mathematical analysis
    - **cryptography**
        - symmetric ciphers
        - asymmetric ciphers
        - protocols              

## symmetric cryptography

**symmetric cryptography** - encryption and decryption must be inverse to each other ($y=e_k(x), x = d_k(y), d_k(e_k(x)) = x$) known as completeness or soundness
    - both algorithms are public
    - the system is only secure because the key is shared in a secure way
    - problem of secure communication is reduced to the problem of securely sending and storing the key

### example: substitution cipher

- substitute symbols using a permutation
- the key is the permutation

example

```
abcdefghijklmnopqrstuvwxyz,';.?
            \/
yeqjul'wsrpifxthm.zk,d;voabh?cn

information <-> sxltfykstx
```
#### attacks

- brute force: for 31 characters there are $2^112$ keys 
- character frequency analysis - compare the frequency of ciphertext letters with the frequency of letters in the language

## cryptanalysis

- purpose - there is no current mathematical proof of security for any practical cipher
- the only way to be sure a cipher is secure - continuously try to break it and fail

- **kerckhoffs' principle** - a crypto system should be secure even if the attacker knows all details about the system, with the exception of the secret key

### key length

- the amount of bits needed for a key is estimated based on the best known attack
- required key length differs between symmetric and asymmetric algorithms

#### example: successful brute force attacks on symmetric algorithm

Key length | Security estimation
---|---
56–64 bits | short term: a few hours or days
112–128 bits | long term: several decades in the absence of quantum computers
256 bits | long term: several decades, maybe even with quantum computers


## secure programming

- programming while being aware of possible system attacks (example: measuring heat in wires, intercepting communication, knowing how random numbers are created with a programming language)

- **constant time programming** - programming in a way that the load on a cpu is constant
    - one of many methods used in secure programming


## caesar cipher

- shift each symbol

- key: $k \in \mathbb{Z}_m$
- plaintext: $x \in \mathbb{Z}_m$
- ciphertext: $y \in \mathbb{Z}_m$
- encryption: $c_k(x) \equiv (x + k) \text{ mod } m$
- decryption: $d_k(y) \equiv (y - k) \text{ mod } m$

- weaknesses - only one letter needs to be found, then the entire encryption is broken

### example

- $m = 26$
- $k = 17$

- plaintext - `attack` => `0,19,19,0,2,10`
- ciphertext - `17,10,10,17,19,1` => `rkkrtb`

## affine cipher

TODO