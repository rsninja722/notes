# computer architecture and operating systems

## real-time operating systems

- **real-time operating system** - an operating system which guarantees instructions will be executed within a set amount of time

## processor structure

a processor contains:

- ALU and other components/engines
- local storage
- controller - governs execution
- external interface
- internal connections

```
            ----------
     ______ controller _______
    |       ----------        | control lines
    |        |    |           |         ^
 ---------  ---  ---------- -------    internal connections
 registers  ALU  components engines
 (storage)  ---  ---------- -------
 ---------   |        |      |   
     |      -------------------
     |_____      bus            < internal connections
            -------------------
                    |
            ------------------
            external interface
            ------------------
            | | | | | | | | |
```

## memory

- **temporal locality** - The principle stating that if a data location is referenced then it will tend to be referenced again soon. 
- **spatial locality** - The locality principle stating that if a data location is referenced, data locations with nearby addresses will tend to be referenced soon.
- **memory hierarchy** - A structure that uses multiple levels of memories; as the distance from the processor increases, the size of the memories and the access time both increase while the cost per bit decreases.
- **block/line** - the minimum unit of information that can be present or not present in a cache
- **hit rate** - The fraction of memory accesses found in a level of the memory hierarchy.
- **miss rate** - The fraction of memory accesses not found in a level of the memory hierarchy.
- **hit time** - The time required to access a level of the memory hierarchy, including the time needed to determine whether the access is a hit or a miss.
- **miss penalty** - The time required to fetch a block into a level of the memory hierarchy from the lower level, including the time to access the block, transmit it from one level to the other,insert it in the level that experienced the miss, and then pass the block to the requestor.

### memory technology

Memory technology | Typical access time | $ per GiB in 2020
---|---|---
SRAM semiconductor memory | 0.5–2.5 ns | $500–$1000
DRAM semiconductor memory | 50–70 ns | $3–$6
Flash semiconductor memory | 5,000–50,000 ns | $0.06–$0.12
Magnetic disk | 5,000,000–20,000,000 ns | $0.01–$0.02

#### disk memory

- **track** - One of thousands of concentric circles that makes up the surface of a magnetic disk.
- **sector** - One of the segments that make up a track on a magnetic disk; a sector is the smallest amount of information that is read or written on a disk.
- **seek** - The process of positioning a read/write head over the proper track on a disk.
- **rotational latency** - Also called rotational delay. The time required for the desired sector of a disk to rotate under the read/write head; usually assumed to be half the rotation time.

### caches

- **cache** - the level in the memory hierarchy between the processor and main memory. or any storage that manages to take advantage of locality of access
- **direct-mapped cache** - A cache structure in which each memory location is mapped to exactly one location in the cache.
    - example - memory of 32 entries mapped to a cache size of 8 entries - 00101, 10101, 11101, and 01101 all map to 101 and 00001, 01001, 10001, and 110011 all map to 001
- **tag** - A field in a table used for a memory hierarchy that contains the address information required to identify whether the associated block in the hierarchy corresponds to a requested word.
    - example continued, the tag would be the upper 2 bits
- **valid bit** - A field in the tables of a memory hierarchy (usually 1 bit) that indicates that the associated block in the hierarchy contains valid data.

- structure of data: index | valid | tag | data 

- **cache miss** - A request for data from the cache that cannot be filled because the data is not present in the cache.
