/*

Facebook: Rotational Cipher

One simple way to encrypt a string is to "rotate" every alphanumeric character by a certain amount. Rotating a character means replacing it with another character that is a certain number of steps away in normal alphabetic or numerical order.
For example, if the string "Zebra-493?" is rotated 3 places, the resulting string is "Cheud-726?". Every alphabetic character is replaced with the character 3 letters higher (wrapping around from Z to A), and every numeric character replaced with the character 3 digits higher (wrapping around from 9 to 0). Note that the non-alphanumeric characters remain unchanged.
Given a string and a rotation factor, return an encrypted string.

Signature
string rotationalCipher(string input, int rotationFactor)

Input
1 <= |input| <= 1,000,000
0 <= rotationFactor <= 1,000,000

Output
Return the result of rotating input a number of times equal to rotationFactor.

Example 1
input = Zebra-493?
rotationFactor = 3
output = Cheud-726?

Example 2
input = abcdefghijklmNOPQRSTUVWXYZ0123456789
rotationFactor = 39
output = nopqrstuvwxyzABCDEFGHIJKLM9012345678

*/

const allLetters = function(start, end) {

  let newSet = {};
  for(let i = start; i <= end; i++) {
    newSet[i] = String.fromCharCode(i);
  }

  return newSet;
}

const rotateCharacter = function(char, rotationFactor, initial, mod) {
  let result = ((char - initial + rotationFactor) % mod) + initial;

  return result;
}

const rotationalCipher = function(input, rotationFactor){

  let fromAZ = allLetters(65, 90);
  let fromaz = allLetters(97, 122);
  let from09 = allLetters(48, 57);
  let output = '';
 
  for (let i = 0; i < input.length; i++) {
    let currentPosition = input.charCodeAt(i);

    if (currentPosition >= 65 && currentPosition <=90) {
      output += fromAZ[rotateCharacter(currentPosition, rotationFactor, 65, 26)];
    } else if (currentPosition >= 97 && currentPosition <=122) {
      output += fromaz[rotateCharacter(currentPosition, rotationFactor, 97, 26)];
    } else if (currentPosition >= 48 && currentPosition <=57) {
      output += from09[rotateCharacter(currentPosition, rotationFactor, 48, 10)];
    } else {
      output += input[i];
    }
  }

  return output;
}

let input1 = 'Zebra-493?';
let rotationFactor1 = 3;

console.log(rotationalCipher(input1, rotationFactor1));
// Expected output: Cheud-726?

let input2 = 'abcdefghijklmNOPQRSTUVWXYZ0123456789';
let rotationFactor2 = 39;

console.log(rotationalCipher(input2, rotationFactor2));
// Expected output: nopqrstuvwxyzABCDEFGHIJKLM9012345678
 