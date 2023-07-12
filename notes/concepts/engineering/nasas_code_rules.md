# nasa's codebase rules

## 1 simple control flow

- no recursion, or goto's

## 2 give all loops an upper bound

- max iterations

## 3 no dynamic memory allocation after initialization

## 4 all functions should be able to be printed on a piece of paper

- around 60 lines or less

## 5 the code's assertion density should average to minimally two assertions per function

## 6 declare all data objects at the smallest possible level of scope

## 7 Each calling function must check the return value of nonvoid functions, and each called function must check the validity of all parameters provided by the caller.

## 8 limit preprocessor

- only headers and simple macros

## 9 restrict pointer use

- one de-reference at a time
- no function pointers

## 10 be pedantic

- compile in pedantic mode, all warnings enabled
- many unit test
