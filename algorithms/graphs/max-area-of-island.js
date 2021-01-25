/*

Leetcode: 695. Max Area of Island

https://leetcode.com/problems/max-area-of-island/


Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:
Input: 
[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]

Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.


Example 2:
Input:
[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
*/

const area = function(grid, seen, i, j) {

  // Validate limits, seen and '0'
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == 0 || seen[i][j]) {
    return 0;
  }

  seen[i][j] = true;

  return (1 +
    area(grid, seen, i + 1, j) +
    area(grid, seen, i - 1, j) +
    area(grid, seen, i, j + 1) +
    area(grid, seen, i, j - 1));

}

const maxAreaOfIsland = function (grid) {

  if (grid === null || grid.length === 0) {
    return 0;
  }

  let maxArea = 0;
  let seen = new Array(grid.length).fill(false).map(() => new Array(grid[0].length).fill(false));

  for(let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      maxArea = Math.max(maxArea, area(grid, seen, i, j));
    }
  }

  return maxArea; 

}

let grid = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
];

console.log(maxAreaOfIsland(grid));
// 6

grid = [
  [0,0,1,0,0,0,0,1,0,0,0,0,0],
  [0,0,0,0,0,0,0,1,1,1,0,0,0],
  [0,1,1,0,1,0,0,0,1,0,0,0,0],
  [0,1,0,0,1,1,0,0,1,0,1,0,0],
  [0,1,0,0,1,1,0,0,1,1,1,0,0],
  [0,0,0,0,0,0,0,0,0,0,1,0,0],
  [0,0,0,0,0,0,0,1,1,1,1,0,0],
  [0,0,0,0,0,0,0,1,1,0,0,0,0]
  ];
  
console.log(maxAreaOfIsland(grid));
// 17

grid = [
  [0,0,1,0,0,0,0,1,0,1,0,0,0],
  [0,0,0,1,1,0,1,1,1,1,1,0,0]
];

console.log(maxAreaOfIsland(grid));
// 7

grid = [
  [0,0,0,0,0,0,0,0]
];

console.log(maxAreaOfIsland(grid));
// 0

grid = [];

console.log(maxAreaOfIsland(grid));
// 0