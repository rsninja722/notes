# preconditions, preconditions and hoare triples

- **precondition** - (of a statement) an assertion about the program variables in a state that a statement may execute in

- **postcondition** - (of a statement) an assertion about the sates in which it may terminate

- **hoare triple** - {precondition} statement {postcondition}
    - also denoted $\lbrace P \rbrace S \lbrace Q \rbrace$
    - if you apply S to P you get Q
    - example: $\lbrace x = 0 \rbrace x \coloneqq x + 1 \lbrace x > 0 \rbrace$

assignment as a hoare triple: $\lbrace R[x \coloneqq E] \rbrace x \coloneqq E \lbrace R \rbrace$
