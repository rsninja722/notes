# c

**TODO**
- memory management

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

![compilation](./media/c_1.png)

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

## printing

print using the `printf` function. The first argument is a string, following arguments are variables/constants that can be used to replace parts of the string

```c
printf("message\n"); // prints: message

printf("number %d\n", 3); // prints: number 3

printf("%010.3f/n", 12.3456); // prints: 000012.346
```

format string conversion specification:

character(s) | description
:--- | :---
`%` | (required) introductory character
`-` `+` `#` `+` *`space`* | `-` left justified <br> `+` sign is always shown <br> *`space`* prepends a space if there is no sign or there is nothing <br> `#` alternate behavior <br> `0` uses leading 0's to pad extra space
`.` `*` | `.` the following number specifies the precision. the number that comes before specifies the length of padding
conversion format specifiers | `c` single character <br> `s` character string <br> `d` integer <br> `o` shows an integer in octal form <br> `x` show an integer in hexadecimal form <br> `u` shows an unsigned integer in decimal form <br> `f` floating point number


## ascii table

<details>
<summary>show table</summary>

code | character | description
---|---|---
0	| NULL	| (Null character)
1	| SOH	| (Start of Header)
2	| STX	| (Start of Text)
3	| ETX	| (End of Text)
4	| EOT	| (End of Transmission)
5	| ENQ	| (Enquiry)
6	| ACK	| (Acknowledgement)
7	| BEL	| (Bell)
8	| BS	| (Backspace)
9	| HT	| (Horizontal Tab)
10	| LF	| (Line feed)
11	| VT	| (Vertical Tab)
12	| FF	| (Form feed)
13	| CR	| (Carriage return)
14	| SO	| (Shift Out)
15	| SI	| (Shift In)
16	| DLE	| (Data link escape)
17	| DC1	| (Device control 1)
18	| DC2	| (Device control 2)
19	| DC3	| (Device control 3)
20	| DC4	| (Device control 4)
21	| NAK	| (Negative acknowledgement)
22	| SYN	| (Synchronous idle)
23	| ETB	| (End of transmission block)
24	| CAN	| (Cancel)
25	| EM	| (End of medium)
26	| SUB	| (Substitute)
27	| ESC	| (Escape)
28	| FS	| (File separator)
29	| GS	| (Group separator)
30	| RS	| (Record separator)
31	| US	| (Unit separator)
32	|  	| (Space)
33	| !	| (Exclamation mark)
34	| "	| (Quotation mark ; quotes)
35	| #	| (Number sign)
36	| $	| (Dollar sign)
37	| %	| (Percent sign)
38	| &	| (Ampersand)
39	| '	| (Apostrophe)
40	| (	| (round brackets or parentheses)
41	| )	| (round brackets or parentheses)
42	| *	| (Asterisk)
43	| +	| (Plus sign)
44	| ,	| (Comma)
45	| -	| (Hyphen)
46	| .	| (Dot , full stop)
47	| /	| (Slash)
48	| 0	| (number zero)
49	| 1	| (number one)
50	| 2	| (number two)
51	| 3	| (number three)
52	| 4	| (number four)
53	| 5	| (number five)
54	| 6	| (number six)
55	| 7	| (number seven)
56	| 8	| (number eight)
57	| 9	| (number nine)
58	| :	| (Colon)
59	| ;	| (Semicolon)
60	| <	| (Less-than sign)
61	| =	| (Equals sign)
62	| >	| (Greater-than sign ; Inequality) 
63	| ?	| (Question mark)
64	| @	| (At sign)
65	| A	| (Capital A)
66	| B	| (Capital B)
67	| C	| (Capital C)
68	| D	| (Capital D)
69	| E	| (Capital E)
70	| F	| (Capital F)
71	| G	| (Capital G)
72	| H	| (Capital H)
73	| I	| (Capital I)
74	| J	| (Capital J)
75	| K	| (Capital K)
76	| L	| (Capital L)
77	| M	| (Capital M)
78	| N	| (Capital N)
79	| O	| (Capital O)
80	| P	| (Capital P)
81	| Q	| (Capital Q)
82	| R	| (Capital R)
83	| S	| (Capital S)
84	| T	| (Capital T)
85	| U	| (Capital U)
86	| V	| (Capital V)
87	| W	| (Capital W)
88	| X	| (Capital X)
89	| Y	| (Capital Y)
90	| Z	| (Capital Z)
91	| [	| (square brackets or box brackets)
92	| \	| (Backslash)
93	| ]	| (square brackets or box brackets)
94	| ^	| (Caret or circumflex accent)
95	| _	| (underscore, underbar)
96	| `	| (Grave accent)
97	| a	| (Lowercase  a )
98	| b	| (Lowercase  b )
99	| c	| (Lowercase  c )
100	| d	| (Lowercase  d )
101	| e	| (Lowercase  e )
102	| f	| (Lowercase  f )
103	| g	| (Lowercase  g )
104	| h	| (Lowercase  h )
105	| i	| (Lowercase  i )
106	| j	| (Lowercase  j )
107	| k	| (Lowercase  k )
108	| l	| (Lowercase  l )
109	| m	| (Lowercase  m )
110	| n	| (Lowercase  n )
111	| o	| (Lowercase  o )
112	| p	| (Lowercase  p )
113	| q	| (Lowercase  q )
114	| r	| (Lowercase  r )
115	| s	| (Lowercase  s )
116	| t	| (Lowercase  t )
117	| u	| (Lowercase  u )
118	| v	| (Lowercase  v )
119	| w	| (Lowercase  w )
120	| x	| (Lowercase  x )
121	| y	| (Lowercase  y )
122	| z	| (Lowercase  z )
123	| {	| (curly brackets or braces)
124	| \| | (vertical-bar, vbar, vertical line)
125	| }	| (curly brackets or braces)
126	| ~	| (Tilde ; swung dash)
127	| DEL	|(Delete)

</details>

## variables

most variables are declared in the form of `type name = value;` or `type name;`

sizes listed are what is seen most of the time

### const
```c
const int a = 1; // const makes the variable un-modifiable
a = 2; // results in an error
```

### integer types
```c
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

### text
```c
char a = 'a'; // a single character

// both valid ways of declaring a string (array of characters)
char b[5] = {'H', 'e', 'l', 'l', 'o'};
char c[] = "Hello";
```

### arrays
```c
int arr1[] = {1, 2, 3, 4}; // initialize array
int arr2[4]; // declare array of size 4

arr2[0] = 3; // modify element
arr2[0]; // 3
```

### typedef
```c
// typedef [existing type] [new name];
typedef int myInt; // declare an alias for a type

myInt a = 1; // creates an int
```

### strut
```c
// declare structure
struct structName {
    int data1;
    int arr[10];
    char str[50];
}

struct structName a; // declare variable of type structName

// assign values to members of struct
a.data1 = 1; 
a.arr = {0,1,2,3,4,5,6,7,8,9};
strcpy(a.str, "some text"); // part of <string.h>
```

**.** vs **->**

normally use **.** to access member, use **->** if accessing member of a pointer to a struct

`(*a).data1` and `a->data1` are equivalent

### size
```c
// to get the size of a variable, use sizeof
sizeof int; // returns size in bytes
```

### type casting
```c
// ([new type]) [value]
int a = (int) 'A' // 65
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

## functions

```c
// [return type] [name] ([comma seperated arguments]) {
//    return [value];
// }
int add(int a, int b) {
    return a + b;
}
```

use `void` as the return type if no value is returned

## user input
```c
int a;
char b[10];

scanf("%d", &a); // take in integer
scanf("%10s", b); // take in string at most 10 characters long
```

## pointers 

### * and & as type modifiers
- `int i` declares an int.
- `int* p` declares a pointer to an int.
- `int& r = i` declares a reference to an int, and initializes it to refer to `i`.

Similarly:

- `void foo(int i)` declares a function taking an int (by value, i.e. as a copy).
- `void foo(int* p)` declares a function taking a pointer to an int.
- `void foo(int& r)` declares a function taking an int by reference. (C++ only)

### * and & as operators
- `foo(i)` calls `foo(int)`. The parameter is passed as a copy.
- `foo(*p)` dereferences the int pointer `p` and calls `foo(int)` with the int pointed to by `p`.
- `foo(&i)` takes the address of the int `i` and calls `foo(int*)` with that address.

## memory management
```c
int *arr;

arr = malloc(sizeof(int) * amountOfInts); // allocate memory dynamically 

arr = calloc(sizeof(int) * amountOfInts); // allocate memory dynamically and initializes all bytes to 0

arr = realloc(arr, sizeof(int) * amountOfInts); // allocates more memory for the array

free(arr); // releases the memory for the array
```