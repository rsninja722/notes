TODO: Finish language features, multi file, best practices

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

#### access struct members

```c++
void f(Structure s1,Structure& s2,Structure* s3) {
    std::cout << s1.var;
    std::cout << s2.var;
    std::cout << s3->var;
}
```

#### modifying members of structs passed by value

careful when using pointers in structs, passing by value even as a const doesn't prevent modification of the data the pointer points to

```c++
struct One { int var1; };
struct Two { One* var2; };
void f(const Two t) { t.var2->var1 = 2; }

int main() {
	One o = { 1 };
	Two t = { &o };
	std::cout << t.var2->var1; // 1
	f(t);
	std::cout << t.var2->var1; // 2
}
```

# classes

## structure

```c++
```

## initializer

### initializer list

initializer lists are structured as follows: `Classname() : member1( val1 ), member2( val2 ) { ... }`, and can be used to initialize members, call specific parent constructors, or delegate to . 

```c++
// the only way to change a const after creating it
class C {
public:
    C(int val) : m_val{val} {}
private:
    const int m_val;
};

// choosing constructor for parent with no default constuctor
class Parent {
public:
    int val;
    Parent(int x) : val{ x } {}
    Parent(int x, int y) : val{ x + y } {}
};

class Child : public Parent {
public:
    Child() : Parent{ 1, 2 } {}
};

// delegating constructor
class C {
public:
    C(char x, int y) {}
    C(int y) : C{'a', y} {} // delegates to C(char, int)
};
```

further details of how the initialization list functions are shown below:

```c++
// priority of member vs argument names
class C {
public:
    const int& i;
    C(int c) :
        i{a},       // sets C::i to C::a
        b{c},       // sets C::b to c
        c{c},       // sets C::c to c
        d{this->c}  // sets C::d to C::c
    {}
private:
    int a,b,c,d
};

// using with try ... catch
class C {
public:
    int i;
    C() try : i{1} {} catch (...) { /* handle exception */ }
};
```

## const member functions

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

## operator overloading

by default, the assignment

### operator[]

```c++

```

# standard library

## vector

# advice

The C++ programming language / Bjarne Stroustrup. Fourth edition.

- Express ideas directly in code;
- Define classes to represent application concepts directly in code;
- Use concrete classes to represent simple concepts and performance-critical components;
- Avoid "naked" new and delete operations;
- Use resource handles and Resource Acquisition is Initialization to manage resources;
- Use abstract classes as interfaces when complete separation of interface and implementation is needed; 
- When designing a class hierarchy, distinguish between implementation inheritance and inter-face inheritance;
- Control construction, copy, move, and destruction of objects;
- Return containers by value (relying on move for efficiency);
- Provide strong resource safety; that is, never leak anything that you think of as a resource;
- Use containers, defined as resource handle templates, to hold collections of values of the same type;
- Use function templates to represent general algorithms;
- Use function objects, including lambdas, to represent policies and actions;
- Use type and template aliases to provide a uniform notation for types that may vary among similar types or among implementations;

# standard library

## algorithm

`#include <algorithm>`

```c++
sort(a.begin(), a.end()); // a is some type with an iterator
sort(a.begin(), a.end()); // a is some type with an iterator
```

## utility

`#include <utility>`

### pair

```c++
// ways to initialize
std::pair<int, char> p1 {1, 'a'};
auto p2 = std::make_pair(2, 'b');

// access elements
std::cout << p1.first;
std::cout << p1.second;

// swap elements of p1 and p2
p1.swap(p2);
```
## vector

```c++
// initialize
vector<int> vect1;
vector<int> vect2(5, 1); // {1,1,1,1,1}
vector<int> vect3{1,1,1,1,1};

int arr[] = {1,2,3};
int n = sizeof(arr) / sizeof(arr[0]);
vector<int> vect4(arr, arr + n);

vector<int> vect5(vect2.begin() vec2.end());

fill(vect2.begin(), vect2.end(), 3); // {3,3,3,3,3}

iota(vect2.begin(), vect2.end(), 1); // {1,2,3,4,5}
```

## map/unordered_map


`#include <map>` - stored as balanced BST, lower memory, O(log n) search/insert/delete, rebalance time required for
    - `multimap` allows pairs with the same key
    - maps and multimaps will keep elements ordered by key

`#include <unordered_map>` - stored as hash table, higher memory, best: O(1) / worst: O(n) search/insert/delete
    - `unordered_multimap` allows pairs with the same key

```c++
std::map<int, int> m;
std::multimap<int, int> m2;
std::unordered_map<int, int> m3;
std::unordered_multimap<int, int> m4;

// insert elements
m.insert({1,2});
m.emplace(2,3);
m.emplace(std::make_pair(3,4)); // doesn't copy or move objects
m[4] = 5; // will overwrite if pair exists already
// insert and emplace_hint can take an iterator to hint to the position to insert the element, can speed up insert time

// access elements
m.at(1); // 2   returns out_of_range exception if key does not exist
m[1]; // 2      initialize a pair with the value type's default value if key does not exist

// other methods
m.find(1); // returns an iterator to the position of the element, or m.end() if it doesn't exist
m.erase(1); // deletes pair with key 1, also can remove all elements between a provided iterator start and end
m.clear(); // deletes all elements
m.empty(); // true if map has no elements, false if not
m.size(); // number of elements
m.swap(m2); std::swap(m,m2); // swap maps

// iterate
for(auto i:m) {
    // i is a pair
}
```

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

// _____ new _____
// TODO placement new


int* newInt(int x) {
	return new int{ x }; // new creates allocates memory for the 
}                        // object and returns a pointer to it.
                         // objects created by new will not be
                         // deleted at the end of the scope
int* i = newInt(3);
std::cout << *i; // 3

// _____ arrays _____

int arr[4] = { 0,1,2,3 };
int arr2[4] = { 0 }; // = {0,0,0,0}

// access element of array
std::cout << arr[1]; // 1
std::cout << *(arr+1); // 1 ( arr is just a pointer to the first element in the array )
std::cout << 1[arr]; // 1 ( compiler treats it as *(1+arr) whereas arr[1] is treated as *(arr+1) ) 

// modify
arr[1] += 10; // think of [] having a return type of int&
std::cout << arr[1]; // 11

// declare explicitly as a pointer ( can allocate memory separately from declaration)
int* arr2;
arr2 = new int[4];
for (int i = 0;i < 4;i++) { arr2[i] = i; }

// move array pointer
std::cout << arr2[0]; // 0
arr2 += 1;
std::cout << arr2[0]; // 1
std::cout << arr2[-1]; // 0


// _____ structs _____

struct StructName { // declare structure
	int var1;
	double* arr1;
};

// initialize with general initializer
double arr[] = {1,2,3};
StructName s1{ 3, arr }; 

// initialize then assign values
StructName s2;
s2.var1 = 3;
s2.arr1 = new double[3];
for (int i = 0;i < 3;i++) { s2.arr1[i] = i + 1; }

// when using a pointer to a struct, access members with -> instead of .
void structPointer(StructName* s) {
    s->var1 = 3;
    s->arr1 = new double[3];
}



```