/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7

return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

const levelOrder = function(root) {
    
  let node = root;
  let result = [];
  let q = [];
  
  if (node === null) {
      return result;
  }
  
  q.push(node);
  
  while(q.length > 0) {
      let size = q.length;
      let currentLevel = [];
      for (let i = 0; i < size; i++) {
          let current = q.shift();
          currentLevel.push(current.val);

          if (current.left) {
              q.push(current.left);
          }
          if (current.right) {
              q.push(current.right);
          }
      }
      
      result.push(currentLevel);
  }
  return result;
};