# c++

# flashcards

## basics

<embed tags="c++,basics" mode="and"/>

## advanced topics

<embed tags="c++,advanced" mode="and"/>

# language design

- the standard library is made in c++, with very minor use of machine code
- statically typed (all types must be specified at compile time)

# basics

- **//** - comments
    - ignored by compiler, for human use
- **<<** - "put to" operator
    - writes the second argument onto the first
- **>>** - "get from" operator
    - puts input from left side into right side
    - type of operator on right determines accepted input

## types

- a type defines a set of possible values and some operations
- types can be printed using `#include <typeinfo>` and `typeid(x).name()`

### fundamental types

- bool - true, false
- char - 'a', 'b'
- int - 1, 42, -7
- double - 3.1415926545, 2.9999

### type sizes

- type sizes differ based on implementation across different machines
- size of type can be found with the `sizeof()` operator

### assignment/arithmetic type conversions

c++ will automatically convert between types for some assignment and arithmetic operations

```c++
double d = 2.2;
int i = 7;
d = d+i; // converts to double
i = d∗i; // converts to int
```

## assignment

**=** and **{}** can be used to assign values to variables. **{}** is universal and doesn't perform the data conversions that **=** does.

```c++
int i1 = 7.2;   // i1 becomes 7
int i2 {7.2};   // error : floating-point to integer conversion
int i3 = {7.2}; // error : floating-point to integer conversion
```

## auto

**auto** automatically assigns the variable type, and should be used only with **=** so the type can be determined by the initializer

```c++
auto i1 = 2.2;       // double
auto i2 { 2.2 };     // double (before c++14: class std::initializer_list<double>)
auto i3 = { 2.2 };   // class std::initializer_list<double>
double i3 = { 2.2 }; // double
```

## const and constexpr

- **const** - makes a variable unchangeable once assigned
    - function arguments can be declared as const asserting that the function will not modify the variable passed in
- **constexpr** - variable whose value is determined at runtime
- **constexpr function** - constexpr functions must only have a return statement that computes a value

```c++
constexpr double constSquare(double x) { return x * x; }
double square(double x) { return x * x; }

const double i1 = constSquare(2);       // ok
const double i2 = square(2);            // ok
constexpr double i3 = constSquare(2);   // ok
constexpr double i4 = square(2);        // error: expression did not evaluate to a constant

const int i = 2;
constexpr double i5 = constSquare(i);   // ok

int j = 2;
const double i6 = constSquare(j);       // ok
constexpr double i7 = constSquare(j);   // error: expression did not evaluate to a constant

double sum(const vector<double>&) {...} // sum will not modify its argument
```

### const member functions

**const** can be used to make a non-static member function unable to modify the attributes of the object it's called on

```c++
class A {
    int x;
public:
    void getX() const {
        ++x; // causes error
        return x;
    }
}
```

## pointers

- **\*** - "contents of" operator
- **&** - "address of" operator
- **type\*** - variable that holds a pointer address pointing to a variable of the specified type
- **type&** - variable that is a reference to a variable

## user defined types

### structures

- a variable that contains pointers to other variables
- structures organize a group of variables
- the name given to the struct becomes a new data type
- structs cannot contain functions, but functions can specify that they require or return them

### classes




# cheat sheet

```c++

// comments

/* multi
   line
   comments */ 

// _____ preprocessor statements _____

#include <libraries>
#include "files"

// _____ types _____

bool boolean = true;
char character = 'a';
int integer = 2;
float floatingPoint = 3.14f;
double doublePrecision = 1.11111111111111111111111;
auto autoDouble 3.14;

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

// _____ assignment operators _____

x += y; // x = x+y
++x;    // pre-increment: x = x+1    x=1; z = ++x; z == 2;
x++;    // post-increment: x = x+1   x=1; z = x++; z == 1;
x −= y; // x = x-y
--x;    // pre-decrement: x = x-1    x=1; z = --x; z == 0;
x--;    // post-decrement: x = x-1   x=1; z = x--; z == 1;
x ∗= y; // x = x*y
x /= y; // x = x/y
x %= y; // x = x%y

// _____ comparison operators _____

x == y; // equal
x != y; // not equal
x < y; // less than
x > y; // greater than
x <= y; // less than or equal
x >= y; // greater than or equal

// _____ console i/o ______

std::cout << "enter a number: " << std::endl; // output to console, endl is a newline
std::cin >> x; // get input from console;

// _____ conditional statements ______

if (condition) {

} else if (condition) {

} else {

}

switch(x) {
    case 1:
        y = 1;
        break; // break prevents code from other cases from running
    case 2: // multiple cases can run the same code
    case 3:
        y = 2;
        break;
    default: // if no other cases match, this runs
        y = 4;
}

// _____ loops _____

while(condition) {
    // checks condition, if true, runs code in block and repeats this process, otherwise stops
}

for(runsAtTheStart(); runsWhileThisIsTrue(); runsAfterEveryRepeat()) {

}

// auto& will give a reference to each element
for (auto x : {0,1,2,3,4,5,6,7,8,9}) // type varName : iterable
    std::cout << x << '\n'; // prints list


// _____ pointers and references _____

// __ pointer variables __
int a = 2;      // 2
int* b = &a;    // address of a
int** c = &b;   // address of b

*b += 1; // increment the contents of b (which is a)

// use * and & operators to access a
std::cout << *b;  // 3 (contents of variable b points to)
std::cout << **c; // 3 (contents of the contents of c)
std::cout << *&*b;// 3 (contents of the address of the contents of b)

// __ reference variables __
int& d = a; // d is a reference to a
d += 1;

std::cout << d; // 4
std::cout << a; // 4

// __ pointer in a function __
void changePoint(int* d) {
    *d += 1;
    return;
}
changePoint(&a);
std::cout << a; // 5

// __ reference in a function __
void changeRef(int& x) {
    x += 1;
    return;
}
changeRef(a);
std::cout << a; // 6

// __ nullptr __
int* e = nullptr;
std::cout << *e; // read access violation: e was nullptr
std::cout << (e == nullptr); // true
e = &a;
std::cout << *e; // 6

// _____ structs _____

struct StructName { // declare structure
	int var1;
	double* arr1;
};

// initialize with general initializer
double arr[] = {1,2,3};
StructName s1{ 3, arr}; 

// initialize then assign values
StructName s2;
s2.var1 = 3;
s2.arr1 = new double[3];
for (int i = 0;i < 3;i++) { s2.arr1[i] = i + 1; }




```