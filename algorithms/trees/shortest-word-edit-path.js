/*

Pramp: Shortest Word Edit Path

Given two words source and target, and a list of words words, find the length of the shortest series of edits that transforms source to target.
Each edit must change exactly one letter at a time, and each intermediate word (and the final target word) must exist in words.

If the task is impossible, return -1.

Example 1:
source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]
output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.

Example 2:
source = "no", target = "go"
words = ["to"]
output: -1
*/

const shortestWordEditPath = function (source, target, words) {

  let Q = new Array();
  let seen = {};
  let diff = new Number();

  Q.push([source, 0]);

  while (Q.length > 0) {
    let [word, depth] = Q.shift();
    if (word === target) {
      return depth;
    }

    for (let i = 0; i < word.length; i++) {
      for (let singleWord of words) {

        if (word.length == singleWord.length) {
          diff = 0;
        }

        for (let k = 0; k < singleWord.length; k++) {
    
          if (word[k] != singleWord[k]) {
            

            diff += 1;
            console.log(`${word} is different to ${singleWord} with ${diff}`);

            if (diff == 2) {
              break;
            }
          }

          if (diff == 1 && !seen[singleWord]) {
            console.log(singleWord);
            Q.push([singleWord, depth + 1]);
            seen[singleWord] = true;
    
          }
        }
        
      }
    }
  }
  return -1;
}

let source = "bit";
let target = "dog";

let words = ["but", "put", "big", "pot", "pog", "dog", "lot"];
console.log(shortestWordEditPath(source, target, words));
// 5
