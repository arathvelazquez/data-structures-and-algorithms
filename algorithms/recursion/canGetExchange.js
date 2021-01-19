/*
Facebook: Change in a Foreign Currency

You likely know that different currencies have coins and bills of different denominations. In some currencies, it's actually impossible to receive change for a given amount of money. For example, Canada has given up the 1-cent penny. If you're owed 94 cents in Canada, a shopkeeper will graciously supply you with 95 cents instead since there exists a 5-cent coin.
Given a list of the available denominations, determine if it's possible to receive exact change for an amount of money targetMoney. Both the denominations and target amount will be given in generic units of that currency.

Signature
boolean canGetExactChange(int targetMoney, int[] denominations)

Input
1 ≤ |denominations| ≤ 100
1 ≤ denominations[i] ≤ 10,000
1 ≤ targetMoney ≤ 1,000,000

Output
Return true if it's possible to receive exactly targetMoney given the available denominations, and false if not.

Example 1
denominations = [5, 10, 25, 100, 200]
targetMoney = 94
output = false

Every denomination is a multiple of 5, so you can't receive exactly 94 units of money in this currency.


Example 2
denominations = [4, 17, 29]
targetMoney = 75
output = true

You can make 75 units with the denominations [17, 29, 29].

*/

const helper = function(target, coin) {

  if (coin > target) {
    return target;
  }

  return helper(target - coin, coin);
}

const canGetExchange = function(target, denominations) {
  if (denominations.length === 0 || target === 0) {
    return false;
  }

  for (let i = denominations.length - 1; i >= 0; i--) {
    if (denominations[i] <= target) {
      target = helper(target, denominations[i])
    }
  }

  if (target === 0) {
    return true;
  } else {
    return false;
  }
}

let target1 = 94;
let denominations1 = [5, 10, 25, 100, 200];

console.log(canGetExchange(target1, denominations1));


let target2 = 75;
let denominations2 = [4, 17, 29];

console.log(canGetExchange(target2, denominations2));

let target3 = 0;
let denominations3 = [4, 17, 29];

console.log(canGetExchange(target3, denominations3));

let target4 = 10;
let denominations4 = [];

console.log(canGetExchange(target4, denominations4));

let target5 = 100;
let denominations5 = [4, 8, 100];

console.log(canGetExchange(target5, denominations5));