/*

Leetocde: 286. Walls and gates

Given a maze with cells being: gates, walls or empty spaces.

Fill the empty spaces with the number of steps to the closest gate. Allowed steps: UP, RIGHT, LEFT & DOWN

Example:

Input:
_ W G _
_ _ _ W
_ W _ W
G W _ _

Output:
3 W G 1
2 2 1 W
1 W 2 W
G W 3 4
*/

const dfs = function(grid, count, i, j) {

  if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 'W' || grid[i][j] < count ) {
    return grid;
  }

  grid[i][j] = (grid[i][j] == "G") ? "G" : count; 

  dfs(grid, count + 1, i + 1, j);
  dfs(grid, count + 1, i - 1, j);
  dfs(grid, count + 1, i, j + 1);
  dfs(grid, count + 1, i, j - 1);
  return grid;

}

const wallsAndGates = function (grid) {

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == 'G') {
        dfs(grid, 0, i, j);
      }
    }
  }

  return grid; // in-place operation.
}

let grid = [
  ["_", "W", "G", "_"],
  ["_", "_", "_", "W"],
  ["_", "W", "_", "W"],
  ["G", "W", "_", "_"]
];

console.log(wallsAndGates(grid));
/*
[
  [3, W, G, 1],
  [2, 2, 1, W],
  [1, W, 2, W],
  [G, W, 3, 4]
]
*/



