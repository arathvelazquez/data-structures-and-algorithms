// Get all prime numbers.


const getPrimeNumbers = function(limitNumber) {

  // Populate an array with all the values from 1 to limitNumber;
  let primes = new Array();
  let result = new Array();

  primes[0] = false;
  primes[1] = false;

  for(let i = 2; i < limitNumber; i++) {
    primes[i] = true;
  }

  // 1, 2, 3 * 3, 4 * 4, ..., i * i < limitNumber
  for (let i = 2; i * i < limitNumber; i++) {
    for (let j = i; j * i < limitNumber; j++) {
      if (primes[j * i]) {
        primes[j * i] = false;
      }
    }
  }

  for (let i = 0; i < limitNumber; i++) {
    if (primes[i] === true) {
      result.push(i)
    }
  }

  return result;
}


console.log(getPrimeNumbers(100));
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

console.log(getPrimeNumbers(25));
// 2, 3, 5, 7, 11, 13, 17, 19, 23