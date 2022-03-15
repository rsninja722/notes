# c

**TODO**
- printing
- getting input
- functions
- rest of variable types
- pointers
- arrays
- strings
- structs
- sizeof
- typecasting
- enums
- constant
- memory management
- common math functions
- common string methods

## hello world

```c
#include <stdio.h>

int main(int argc, char const *argv[]) {
    
    printf("Hello world!\n");

    return 0;
}
```

## compilation

### compile and run on linux

compile: `gcc -o output file.c`

run: `./output`

### compilation steps

when compiling c code, there are 4 main steps the computer runs through. Intermediate files are created as these steps run, but by default, the intermediate files are deleted automatically

![compilation](./media/c_1.png)a == b
a != b
a < b
a > b
a <= b
a >= b

#### preprocessors

during the first step of compilation, these directives will be replaced with text before moving on to the next steps

- [🔗](https://docs.microsoft.com/en-us/cpp/preprocessor/hash-define-directive-c-cpp) **#define** - defines an identifier to replace through out the source code. 
    - example: `#define PI 3.141592`
- [🔗](https://docs.microsoft.com/en-us/cpp/preprocessor/hash-undef-directive-c-cpp) **#undef** - removes the current definition for an identifier. 
    - example: `#undef PI`
- [🔗](https://docs.microsoft.com/en-us/cpp/preprocessor/hash-include-directive-c-cpp) **#include** - copies the code from the specified header file into the source code.
    - standard header - `#include <file.h>`
    - user defined header - `#include "file.h"`
- other preprocessors include `#ifdef #ifndef #if #else #elif #endif #error #pragma` these are usually used for header guards and more complicated code that is less often used in smaller programs

## comments

```c
// comments can be single line

/* 
or
multi line 
*/
```



## variables

most variables are declared in the form of `type name = value;` or `type name;`

sizes listed are what is seen most of the time 

### integer types
```c
char a = 'a'; // size: 1 byte

int b = -2,147,483,647; // size: 4 byte 
unsigned int c = 4,294,967,295; // size: 4 byte 

short d = -32,768; // size: 2 bytes
unsigned short e = 65,535; // size: 2 bytes

long f = -9223372036854775807; // size: 8 bytes
unsigned long g = 18446744073709551615; // size: 8 bytes
```

### floating-point types
```c
float a = 1.25;            // size: 4 bytes    range: 1.2E-38 to 3.4E+3       precision: 6 decimal places
double b = 3.14159265359;  // size : 8 byte    range: 2.3E-308 to 1.7E+308	  precision: 15 decimal places
long double	= 5.33333e1000;// size: 10 byte    range: 3.4E-4932 to 1.1E+4932  precision: 19 decimal places
```

## control structures

### selection statements

#### if
```c
if (expression) {
    statement;
}
```

#### else
```c
if (expression) {
    statement;
} else {
    statement;
}
```

#### else if
```c
if (expression) {
    statement;
} else if (expression) {
    statement;
}
```

#### ternary operator
```c
int var = expression ? true_statement : false_statement;
// basically a way to shorten an if else, since it has a return value, it can be assigned to variables and used in other expressions
```

#### switch
```c
switch (condition) {
    case constant1:
        statement;
        break;

    case constant2:
        statement;
        break;

    default:
        statement;
}
```

### loops

#### while loop
```c 
while (expression) { 
    statement; // checks expression before executing statements
}
```

#### do while loop
```c
do { 
    statement; // executes statements then checks expression
} while (expression); 
```

#### for loop
```c
for(initial_statement; expression; loop_statement) { 
    // initial_statement is ran once before the loop starts, every iteration the statement is ran, 
    // then the expression is checked then, the loop_statement is ran
    statement;
}
```

### jump statements

#### break
```c 
while (expression) { 
    break; // exits the current layer of loop
}
// goes to here
```

#### continue
```c 
for (int i=0;i<5;i++) { 
    if (i == 3) { continue; } // skips over the rest of the statements and runs the next iteration of the loop
    printf("%d ",i);
}
// will print 0 1 2 4
```

#### return
```c 
int add (int a, int b) {
    return a + b;
    printf("I won't print");
}
add(1,3); // returns a value of 4
// return can also return void (nothing) by calling: return;
```

#### goto
```c 
for (int x = 0; x < 3; x++) {
    for (int y = 0; y < 3; y++) {
        printf("%d %d\n",x,y);
        if (x + y == 3) { goto endloop;} // goto jumps to the specified label
    }
}
endloop:printf("exited loop early"); // label with a statement, could write endloop:; if no statement is needed
// prints:
// 0 0
// 0 1
// 0 2
// 1 0
// 1 1
// 1 2
// exited loop early
```

## operators

[operator precedence](https://devdocs.io/c/language/operator_precedence)

### boolean
```c
!a // NOT a
a && b // a AND b
a || b // a OR b
```

### comparison
```c
a == b // equal
a != b // not equal
a < b // less than
a > b // greater than
a <= b // less than or equal
a >= b // greater than or equal
```

### arithmetic
```c
a + b // addition
a - b // subtraction
-a // flips the sign of a
a * b // multiplication
a / b // division
a % b // modulus
~a // bitwise NOT
a & b // bitwise AND
a | b // bitwise OR
a ^ b // bitwise XOR
a << b // bitwise left shift a by b places
a >> b // bitwise right shift a by b places
```

### assignment
```c
a = b // sets value of a to value of b
a += b // a = a + b
a -= b // a = a - b
a *= b // a = a * b
a /= b // a = a / b
a %= b // a = a % b

++a // a = a + 1   value is returned after incrementing
--a // a = a - 1   value is returned after decrementing

a++ // a = a + 1   value is returned before incrementing
a-- // a = a - 1   value is returned before decrementing

// bitwise assignment
a &= b // a = a & b
a |= b // a = a | b
a ^= b // a = a ^ b
a <<= b // a = a << b
a >>= b // a = a >> b
```