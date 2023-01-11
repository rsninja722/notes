# testing

checking to see if code meets requirements

## v model

![v model](./media/software-engineering-v-model.png)



## unit testing

- **whitebox** - examining the code and testing specific parts/edge cases
- **blackbox** - testing the output of a part of code with certain input without examining the internal workings of the code

- **statement coverage** - test cases cause each statement to be executed at least once

## code graph 

```java
public int func(int x) {
    if (x == 3) {
        return 3;
    }
    int z = 1;
    if(x==2) {
        z = 2;
    } else {
        z = 4;
    }

    return z;
}

```

```
    O
   /|
  O O
   / \
   O O
   \ /
    O
    |
    O
```

statements are edges

- edge coverage - statement coverage for code graphs

## code coverage

- path coverage - traverses all paths from the start node to the end node(S) at least one in hte code graph
    - often too large to be feasible

## static and dynamic testing

- dynamic - running the code
- static - reading the code

## test cases

cover all extreme cases and also some normal ones 

examples:
- large inputs
- empty inputs
- 0, or negative numbers