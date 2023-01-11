# exceptions

instead of terminating the program, exceptions can be caught and dealt with

```java
// catch an exception
try {
    code;
} catch (Exception e) {
    System.out.println(e.toString());
}

// catch different types of exceptions
try {
    code;
} catch (NumberFormatException e) {
    System.out.println(e.toString());
} catch (ArithmeticException e) {
    System.out.println(e.toString());
}
```

custom exceptions can be made and thrown