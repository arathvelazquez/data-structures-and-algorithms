/*

Leetcode: 11. Container With Most Water

https://leetcode.com/problems/container-with-most-water/

Given n non-negative integers a1, a2, ..., a<sub>n</sub> , where each represents a point at coordinate (i, a<sub>i</sub>).
n vertical lines are drawn such that the two endpoints of the line i is at (i, a<sub>i</sub>) and (i, 0).
Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation:
The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

Example 3:

Input: height = [4,3,2,1,4]
Output: 16

Example 4:

Input: height = [1,2,1]
Output: 2
*/

const maxArea = function(heights) {

  let max = Number.MIN_VALUE;

  for (let i = 0; i < heights.length; i++) {
    for (let j = i + 1; j < heights.length; j++) {

      let min = Math.min(heights[i], heights[j]);
      max = Math.max(max, min * (j - i));
    }
  }

  return max;

}

// Linear time complexity.
const maxArea1 = function(heights) {

  let max = Number.MIN_VALUE;

  let i = 0;
  let j = heights.length - 1;

  while (i < j) {
    let min = Math.min(heights[i], heights[j]);
    max = Math.max(max, min * (j - i));

    if (heights[i] < heights[j]) {
      i++;
    } else {
      j--;
    }
  }

  return max;
}

// First approach n to the power of 2.
let heights = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(heights));
// 49

heights = [1,1];
console.log(maxArea(heights));
// 1

heights = [4,3,2,1,4];
console.log(maxArea(heights));
// 16

heights = [1,2,1];
console.log(maxArea(heights));
// 2

heights = [1,2,3,1];
console.log(maxArea(heights));
// 3

// First approach with linear time complexity.
heights = [1,8,6,2,5,4,8,3,7];
console.log(maxArea1(heights));
// 49

heights = [1,1];
console.log(maxArea1(heights));
// 1

heights = [4,3,2,1,4];
console.log(maxArea1(heights));
// 16

heights = [1,2,1];
console.log(maxArea1(heights));
// 2

heights = [1,2,3,1];
console.log(maxArea1(heights));
// 3



