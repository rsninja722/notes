# arrays

malloc allocates memory
calloc allocates memory and initializes all values to 0
```c
// declare           size size of type
ptr = (float*) calloc(25, sizeof(float))

// free when done
free(ptr)
```