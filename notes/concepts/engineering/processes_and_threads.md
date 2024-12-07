# processes and threads

- **process control block** (or task control block) - stores info associated with each process
    - process state
    - process number
    - CPU registers and program counter
    - CPU scheduling info
    - memory-management info

## process representation in linux

- process are called **tasks** in linux

represented by the C structure `task_struct`

```c
pid t_pid; /* process identifier */
long state; /* state of the process */
unsigned int time_slice /* scheduling information */
struct task_struct *parent; /* this process's parent */
struct list_head children; /* this process's children */
struct files_struct *files; /* list of open files */
struct mm_struct *mm; /* address space of this process */
```

## process states

- **new** - being created
- **ready** - waiting to be assigned to a processor
- **running** - instructions being executed
- **waiting** - 