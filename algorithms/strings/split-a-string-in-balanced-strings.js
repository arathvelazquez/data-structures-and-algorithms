/*

Leetcode: 1221. Split a String in Balanced Strings

https://leetcode.com/problems/split-a-string-in-balanced-strings/

Balanced strings are those who have equal quantity of 'L' and 'R' characters.
Given a balanced string s split it in the maximum amount of balanced strings.
Return the maximum amount of splitted balanced strings.

Example 1:
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

Example 2:
Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.

Example 3:
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".

Example 4:
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
*/

const balancedStringSplit = function(string) {

  let balancedCount = 0;
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    
    if (string[i] === 'L') {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      balancedCount++;
    }
  }

  return balancedCount;
}

// First approach with basic counter.
let string = 'RLRRLLRLRL';
console.log(balancedStringSplit(string));
// 4

string = 'RLLLLRRRLR';
console.log(balancedStringSplit(string));
// 3

string = 'LLLLRRRR';
console.log(balancedStringSplit(string));
// 1

string = 'RLRRRLLRLL';
console.log(balancedStringSplit(string));
// 2
