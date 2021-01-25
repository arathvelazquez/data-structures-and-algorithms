/*

Leetcode: 322. Coin Change

https://leetcode.com/problems/coin-change/


You are given coins of different denominations and a total amount of money amount.

Write a function to compute the fewest number of coins that you need to make up that amount.
If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0

Example 4:
Input: coins = [1], amount = 1
Output: 1

Example 5:
Input: coins = [1], amount = 2
Output: 2

*/

const coinChange = function(coins, amount) {

  let dp = new Array(amount + 1);
  coins.sort((a, b) => a - b);
  dp.fill(amount + 1);
  
  dp[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]]);    
      } else {
        break;
      }
    }
  }
  
  return dp[amount] > amount ? -1 : dp[amount];
}

let coins = [1,2,5];
let amount = 11

console.log(coinChange(coins, amount));
// 3

coins = [2];
amount = 3;
console.log(coinChange(coins, amount));
// -1

coins = [1];
amount = 0;
console.log(coinChange(coins, amount));
// 0

coins = [1];
amount = 1;
console.log(coinChange(coins, amount));
// 1

coins = [1];
amount = 2;
console.log(coinChange(coins, amount));
// 2
