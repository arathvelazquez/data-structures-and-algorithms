/*

Leetcode: 419. Battleships in a Board

https://leetcode.com/problems/battleships-in-a-board/

Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.

Example:
X..X
...X
...X
In the above board there are 2 battleships.


Battleships will always have a cell separating between them.
*/

const dfs = function(board, seen, i, j) {

  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] == '.' || seen[i][j] == true) {
    return 0;
  }

  // board[i][j] = '.';
  seen[i][j] = true;

  dfs(board, seen, i + 1, j);
  dfs(board, seen, i - 1, j);
  dfs(board, seen, i, j + 1);
  dfs(board, seen, i, j - 1);
  return 1;

}

const countBattleships = function(board) {

  let totalBattleships = 0;
  let seen = new Array(board.length).fill(false).map(() => new Array(board[0].length).fill(false));

  for (let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {

      if (board[i][j] == 'X') {
        totalBattleships += dfs(board, seen, i, j);
      }
    }
  }

  return totalBattleships;
}

let board = [
  ["X", ".", ".", "X"],
  [".", ".", ".", "X"],
  [".", ".", ".", "X"]
];

console.log(countBattleships(board));
// 2

board = [
  ["X", ".", ".", "X"],
  ["X", ".", ".", "X"],
  [".", "X", ".", "X"]
];

console.log(countBattleships(board));
// 3