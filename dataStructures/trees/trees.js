
// Node class. 
class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BST {

  constructor () {
    // Once instanced, root is null.
    this.root = null;
  }

  add(data) {
    // Let's start with the root node.
    const node = this.root;

    // if it was just created, node is null so assign data as root. 
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      // Recursive function when adding a new value.
      const searchTree = function (node) {
        // If data is less then current node, let's try to insert it in left side.
        if (data < node.value) {
          // Insert new node with data to left side.
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else { // If left side is not null, search for a new spot by using recursive call.
            return searchTree(node.left);
          }
        } else if (data > node.value) { // If data is greater than current node value. try to insert it.
          // If right side is available, let's insert it.
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else { // Otherwise, try to insert in right side. 
            return searchTree(node.right);
          }
        } else { // If data is the same as the node value, we can disregard it.
          return null;
        }
      }
      // Insert node in correct place.
      return searchTree(node);
    }
  }

  findMin() {
    // In order to find the minimum value,
    // we need to go all the way left until we don't see any left node and print the node value.
    let current = this.root;
    if (current) {
      while (current.left !== null) {
        current = current.left;
      }
      
      return current.value;
    }
  }

  // For find, we need to go all the way right and print the last value.
  findMax() {
    let current = this.root;

    if (current) {
      while(current.right !== null) {
        current = current.right;
      }

      return current.value;
    }
  }

  // To be verify if any value exists, we need to compare if the value is greater or less than the current node value.
  // Based on that, we need to move left or right respectively.
  isPresent(data) {
    let current = this.root;

    while(current) {
      if (data === current.value) {
        return true;
      } else if (data < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  // To traverse a tree, we can do it in different order.

  // Pre-Order Traversal: First root, then left and then right node.
  preOrderTraversal() {
    console.log(`Pre Order Traversal`);

    let current = this.root;
    let result = new Array();

    if (current) {
      const preOrder = function(node) {

        result.push(node.value);
        if (node.left !== null) {
          preOrder(node.left);
        } 
        if (node.right !== null) {
          preOrder(node.right);
        } 

      }

      preOrder(current);
      return result;
    }
  }

  
  // In-Order traversal: First left node, then root and then right node.
  inOrderTraversal() {
    console.log(`In Order traversal: `);
    let current = this.root;
    let result = new Array();

    if (current) {
      const inOrder = function(node) {

        if (node.left !== null) {
          inOrder(node.left)
        }
        result.push(node.value);
        if (node.right !== null) {
          inOrder(node.right);
        }
      }
      inOrder(current);
      return result;
    }
  }

  // Post-order traversal: First left, then right and finally root.
  postOrderTraversal = function () {
    console.log(`Post Order traversal: `);
    let current = this.root;
    let result = new Array();

    if (current) {
      const postOrder = function(node) {

        if (node.left !== null) {
          postOrder(node.left);
        }
        if (node.right !== null) {
          postOrder(node.right)
        }
        result.push(node.value);
      }

      postOrder(current);
      return result;
    }
  }

  findMinHeight(node = this.root) {
    if (node == null) {
      return -1;
    }

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  findMaxHeight(node = this.root) {
    if (node == null) {
      return -1;
    }

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
}

const BSTree = new BST();

BSTree.add(10);
BSTree.add(5);
BSTree.add(12);
BSTree.add(11);
BSTree.add(1);
BSTree.add(9);
BSTree.add(2);
BSTree.add(17);


console.log(BSTree.findMin());
console.log(BSTree.findMax());
console.log(BSTree.isPresent(2));
console.log(BSTree.isPresent(12));
console.log(BSTree.preOrderTraversal());
console.log(BSTree.inOrderTraversal());
console.log(BSTree.postOrderTraversal());
console.log(`Min height: ${BSTree.findMinHeight()}`);
console.log(`Max height: ${BSTree.findMaxHeight()}`);
