# java

## java advantages and disadvantages

advantages | disadvantages
---|---
documentation/support | less accessible
portability/JVM/bytecode | too verbose/ritualistic
practical | JVM: gib file size, bad performance
some luxeries (garbage collection) | licensing
very OO | less control (memory management)
| very OO


## java generics

TODO parametric polymorphisim

`Test<T>` indicates that Test is instatiated by type T

```java
class Test<T> {
    T obj; // An object of type T is declared
    
    Test(T obj) { // constructor
        this.obj = obj;
    }

    public T getObject() { // fetches the contained object
        return this.obj;
    }
}
```