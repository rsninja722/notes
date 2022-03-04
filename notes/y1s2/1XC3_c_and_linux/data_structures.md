# data structures

## linked lists

## binary search trees

example of a binary search tree

![binary search tree](./media/data_structures_1.png)

- **node** - the basic unit of the data structure. each node has 2 children: either `null` or another node
- **root node** - node that has no parents
- **leaf node** - node that has no children
- **node height** - number of nodes in the longest path from a leaf node to the node, leaf nodes has height 0
- **node depth** - number of nodes in the path from the root node to the node, root node has depth 0

### insertion

1. start at root node
2. use sorting function to decide to go left or right child
3. if child is null, set child to node with new value and stop
4. otherwise go to 2. looking at this node

### searching

1. start at root node
2. check the current node's value, stop if found or null
3. use sorting function to decide to go left or right child

