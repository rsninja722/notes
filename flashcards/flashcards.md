# tags
c++,basics
## front
**c++**

what is the difference between assignment with `{}` and with `=`?
## back
```c++
// conversion
int i = 7.2;   // automatic conversion to 7
int j {7.2};   // error : floating-point to integer conversion

// behavior with auto
auto k = 7.2;  // double
auto l { 7.2 };// class std::initializer_list<double>
```
# tags
c++,basics
## front
**c++**

explain what `const` and `constexpr` mean.
## back
- `const` - makes a variable unchangeable
- `constexpr` - a simple function or variable whose value can be determined during compilation

[more info](http://localhost/notes/?note=notes/concepts/languages/c++.md#constandconstexpr)
# tags
c++,advanced
## front
## back