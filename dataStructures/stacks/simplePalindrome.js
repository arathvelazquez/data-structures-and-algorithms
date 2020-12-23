// Stack example

let words = 'Race car';
let wordWithNoSpaces = '';
let rword = '';
let letter = [];

for(let i = 0; i < words.length; i++) {
  if (words[i] !== ' ') {
    letter.push(words[i].toLowerCase());
    wordWithNoSpaces += words[i].toLowerCase();
  }
}

for(let i = 0; i < wordWithNoSpaces.length; i++) {
  rword += letter.pop();
}

if (wordWithNoSpaces === rword) {
  console.log(`${words} is a palindrome.`);
} else {
  console.log(`${words} is not a palindrome.`);
}

