// Binary search.

let recursiveBS = function(array, x, left, right) {

  // Get middle
  let mid = Math.floor(left + ((right - left) / 2));
  // Base case
  if (left > right) return false;
  // Compare middle with given x
  if (x === array[mid]) return true;

  if (x > array[mid]) {
    return recursiveBS(array, x, mid + 1, right);
  } else {
    return recursiveBS(array, x, left, mid - 1);
  }
}

let iterativeBS = function(array, x) {

  let left = 0;
  let right = array.length - 1;

  while(right>=left) {
    let mid = Math.floor(left + ((right - left) / 2));

    if (x === array[mid]) return true;

    if (x > array[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

let array = [1,4,6,9,10,14,15,20,21,30,50];
let itemToSearch = 1;

console.log(recursiveBS(array, itemToSearch, 0, array.length -1));
console.log(iterativeBS(array, itemToSearch));

let array2 = [1,3,8,10,13,18,25,30];
let itemToSearch2 = 19;

console.log(recursiveBS(array2, itemToSearch2, 0, array2.length -1));
console.log(iterativeBS(array2, itemToSearch2));
