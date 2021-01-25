/*

Leetcode: 230. Kth Smallest Element in a BST

https://leetcode.com/problems/kth-smallest-element-in-a-bst/

Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Example 1:

Input:
root = [3,1,4,null,2],
k = 1
   3
  / \
 1   4
  \
   2
Output: 1


Example 2:
Input:
root = [5,3,6,2,4,null,null,1],
k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3

*/

const { BST, Node } = require('../../dataStructures/trees/trees');

// Example 1
let k = 1;
const tree = new BST();
tree.add(3);
tree.add(4);
tree.add(1);
tree.add(2);

let allValues = tree.inOrderTraversal();
console.log(allValues[k - 1]);
// Output: 1

// Example 2
k = 3;
let tree2 = new BST();
tree2.add(5);
tree2.add(3);
tree2.add(6);
tree2.add(2);
tree2.add(2);
tree2.add(4);
tree2.add(1);

allValues = tree2.inOrderTraversal();
console.log(allValues[k - 1]);
// Output: 3
