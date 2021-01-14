/*
Facebook: Reverse to Make Equal

Given two arrays A and B of length N, determine if there is a way to make A equal to B by reversing any subarrays from array B any number of times.
Signature

bool areTheyEqual(int[] arr_a, int[] arr_b)

Input
All integers in array are in the range [0, 1,000,000,000].

Output
Return true if B can be made equal to A, return false otherwise.

Example
A = [1, 2, 3, 4]
B = [1, 4, 3, 2]
output = true

After reversing the subarray of B from indices 1 to 3, array B will equal array A.
*/

function areEqual(array_a, array_b) {

  if (array_a.length !== array_b.length) {
    return false;
  }

  let helperArray = Array(1001).fill(0);

  for(let i = 0; i < array_a.length; i++) {
    helperArray[array_a[i]] += 1; 
    helperArray[array_b[i]] -= 1; 

  }

  for(let j = 0; j < helperArray.length; j++) {
    if (helperArray[j] !== 0) {
      return false;
    }
  }

  return true;
  
}

let array_a = [1,2,3,1000];
let array_b = [1,1000,3,2];
console.log(areEqual(array_a, array_b));
