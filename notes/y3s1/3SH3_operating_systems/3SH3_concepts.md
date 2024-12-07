# 3SH3 concepts

## review

the whole [computer architecture course](?note=notes/y2s1/2GA3_Computer_Architecture/2GA3_concepts.md) <!-- [](/notes/y2s1/2GA3_Computer_Architecture/2GA3_concepts.md) --> provides an understanding of what an operating system is running on and controlling

most importantly, review: [computer architecture and operating systems](?note=notes/concepts/engineering/computer_architecture_and_operating_systems.md) <!-- [](/notes/concepts/engineering/computer_architecture_and_operating_systems.md) -->

## topics

[operating systems](?note=notes/concepts/engineering/operating_systems.md) <!-- [](/notes/concepts/engineering/operating_systems.md) -->

[processes and threads](?note=notes/concepts/engineering/processes_and_threads.md) <!-- [](/notes/concepts/engineering/processes_and_threads.md) -->



## tut qs chapter 1/2

for all questions, understand the structure of the hardware, os, kernel, and user programs, and the consequences of separation and how separation is achieved

1. Distinguish between system and application programs.
    - system code/software/application 
        - system specific
        - necessary for booting and basic operation of the computer
    - user apps/application programs - user friendly
        - customizable
2. Explain the purpose and significance of an interrupt vector.
    - needed to handle interrupts, by dispatching the interrupt command to the cpu
    - enhances efficient processing, and system responsiveness
    - provides organization and modularity for tasks
3. What is a bootstrap program, and where is it stored?
    - first program to run, loads BIOS into ROM, then the OS into ROM
    - small initial piece of software that is executed when a compute is started
    - stored on ROM
4. Why are at least two modes (kernel and user mode) necessary in a computer system?
    - kernel mode for internal operation
    - user mode for user application
    - to let kernel functions have less time latency (priority on CPU)
    - to protect certain parts of memory and storage, and allow different privileges
5. What are the advantages and disadvantages of the microkernel approach to structure an Operating System?
    - microkernel - kernel takes care of cpu scheduling and inter-process communication
    - provides faster execution, additional protection, flexibility, modularity/portability
    - disadvantages - increased latency, complexity of inter-process communication - lots of registers required
6. What are the advantages and disadvantages of the Modular approach to structure an Operating System? Why should every operating system support modules?
    - similar to q5
7. What are System Calls and what are they used for? Is it true that all system calls are programmed in high level languages? Justify your answer.
    - 
8. Why do you need an API to access system calls?
    - user friendly abstraction
    - provides consistency and error handling
    - security
9. What are system daemons? What are the advantages of using system programs? Is it a good idea to include system program code in the kernel? Justify your answer.
    - part of OS outside of kernel daemon programs can not be edited by the user
    - manages internal kernel tasks
    - same advantages as above


# commands

command | info
---|---
`lsmod` | list modules
`sudo insmod bogus.ko` | installs compiled module
`sudo rmmod bogus` | removes installed module
`dmesg` | shows kernel log buffer
`sudo dmesg -c` | shows and clears kernel log buffer
`scp file user@192.168.56.1:C:/file/path` | transfer file from vm