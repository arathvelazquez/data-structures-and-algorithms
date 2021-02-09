/*

Leetcode: 1. Two Sum

https://leetcode.com/problems/two-sum/

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

*/

// let result = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j <nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 result.push(i);
//                 result.push(j);
//                 break;
//             }
//         }
//     }
    
//     return result;

const twoSum = function (nums, target) {

  let map = {};
  let result = new Array();

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map[complement] && map[complement] !== i) {
      result.push(i);
      result.push(map[complement]);
      break;
    }
  }

  return result;

}

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));
// [0, 1]

nums = [3, 2, 4];
target = 6;

console.log(twoSum(nums, target));
// [1, 2]

nums = [3, 3];
target = 6;

console.log(twoSum(nums, target));
// [0, 1]

nums = [3,2,4];
target = 6;

console.log(twoSum(nums, target));
// [1,2]

nums = [2,7,11,15];
target = 9;

console.log(twoSum(nums, target));
// [0,1]
