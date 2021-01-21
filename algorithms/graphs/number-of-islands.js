/*

Leetcode: 200. Number of Islands

https://leetcode.com/problems/number-of-islands/

Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

Example 1:
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

const sinkAdjacentIslands = function (grid, i, j) {

  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == '0') {
    // console.log(`Out of boundaries: ${i} x ${j} or 0`);
    return grid;
  }

  if (grid[i][j] === '1') {
    console.log(`Sinking ${i} x ${j}`);
    grid[i][j] = '0';
  }

  sinkAdjacentIslands(grid, i + 1, j);
  sinkAdjacentIslands(grid, i - 1, j);
  sinkAdjacentIslands(grid, i, j + 1);
  sinkAdjacentIslands(grid, i, j - 1);

  return grid;
};

const numIslands = function(grid) {

  // Error checking
  if (grid == null || grid.length == 0) {
    return 0;
  }

  // Traverse all the grid
  let numIslands = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        numIslands++;
        grid = sinkAdjacentIslands(grid, i, j);
      }
    }
  }

  return numIslands;
}

let grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];

console.log(numIslands(grid));
// 1

grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

console.log(numIslands(grid));
// 3

grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","1","0"]
];

console.log(numIslands(grid));
// 2

grid = [
  ["0","0","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","0","0","0"],
  ["0","0","0","0","0"]
];

console.log(numIslands(grid));
// 0

grid = [
  ["1","1","1","1","1"],
  ["1","1","1","1","1"],
  ["1","1","1","1","1"],
  ["1","1","1","1","1"]
];

console.log(numIslands(grid));
// 1

grid = [
  ["1","0","1","0","1"],
  ["0","1","0","1","0"],
  ["1","0","1","0","1"],
  ["0","1","0","1","0"]
];

console.log(numIslands(grid));
// 10


