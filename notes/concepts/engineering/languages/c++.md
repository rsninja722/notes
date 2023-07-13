# C++

- C++ is a compiled language created in 1979 that gets compiled into machine code
- wide platform support
- fast language, but will be slower than interpreted languages if you write bad code

## language design

- the standard library is made in c++, with very minor use of machine code
- statically typed (all types must be specified at compile time)

# vscode setup

- install visual studio 
- install c++ desktop development
- create empty c++ project
- right click source files folder > add new item > c++ file

## building

- right click on project > build

## running

- click local windows debugger

## compilation

1. header files are included into source (.cpp) files
2. each source file is compiled into an object file (.obj)


# basics

## hello world

```c++
#include <iostream>

int main() {
	std::cout << "hello world!" << std::endl;
	std::cin.get();
}
```

- **//** - comments
    - ignored by compiler, for human use
- **<<** - "put to" operator
    - writes the second argument onto the first

## types

- a type defines a set of possible values and 

### fundamental types

- bool - true, false
- char - 'a', 'b'
- int - 1, 42, -7
- double - 3.1415926545, 2.9999

### type sizes

- type sizes differ based on implementation across different machines
- size of type can be found with the `sizeof()` operator

## main

- entry point for program
- main can return nothing

## preprocessor statements

anything that begins with a # happens before compilation 

### #include

- copies the content of the specified file into the file it is written in

# cheat sheet

```c++

// comments

// _____ preprocessor statements _____

#include <libraries>
#include "files"

// _____ types _____

bool boolean = true;
char character = 'a';
int integer = 2;
float floatingPoint = 3.14;
double doublePrecision = 1.11111111111111111111111;

sizeof(int); // 4 bytes (usually)

// _____ arithmetic operators _____

int x = 1;int y=2;

x + y; // plus
+x; // unary plus
x − y; // minus
−x; // unar y minus
x ∗ y; // multiply
x / y; // divide
x % y; // remainder (modulus) for integers

// _____ comparison operators _____

x == y; // equal
x != y; // not equal
x < y; // less than
x > y; // greater than
x <= y; // less than or equal
x >= y; // greater than or equal
 


```


