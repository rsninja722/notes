# Propositional Logic

a proposition is a declaritive sentance that is either true or false

### negation / $$\lnot$$

$$a$$ | $$\neg a$$ |
:-: | :-: |
T | F |
F | T |

### conjunction / and / $$\land$$

$$a$$ | $$b$$ | $$a \land b$$ |
:-: | :-: | :-: |
T | T | T |
T | F | F |
F | T | F |
F | F | F |

### disjunction / or / $$\lor$$

$$a$$ | $$b$$ | $$a \lor b$$ |
:-: | :-: | :-: |
T | T | T |
T | F | T |
F | T | T |
F | F | F |

### exclusive disjunction / xor / $$\oplus$$

$$a$$ | $$b$$ | $$a \oplus b$$ |
:-: | :-: | :-: |
T | T | F |
T | F | T |
F | T | T |
F | F | F |

### implication / $$\rightarrow$$

can be written as 
- if a then b
- if a, b
- b unless ¬a
- b if a
- b whenever a
- b follows from a
- a implies b
- a only if b
- b when a

$$a$$ | $$b$$ | $$a \rightarrow b$$ |
:-: | :-: | :-: |
T | T | T |
T | F | F |
F | T | T |
F | F | T |

### biconditional / $$\iff$$ / $$\equiv$$

if and only if
a is necessary and sufficient for b
if a then b, and conversely
a iff b

$$a$$ | $$b$$ | $$a \iff b$$ |
:-: | :-: | :-: |
T | T | T |
T | F | F |
F | T | F |
F | F | T |


## converse, contrapositive, and inverse

for a → b
- b → a is the converse
- ¬b → ¬a is the contrapositive
- ¬a → ¬b is the inverse
