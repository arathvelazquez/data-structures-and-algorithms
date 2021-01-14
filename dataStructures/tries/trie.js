// Tries.

class Node {
  keys = new Map();
  end = false;

  setEnd() {
    this.end = true;
  }

  isEnd() {
    return this.end;
  }
}

const Trie = function() {

  this.root = new Node();

  this.add = function(input, node = this.root) {
    if (input.length == 0) {
      node.setEnd();
      return;
    }

    if (!node.keys.has(input[0])) {
      console.log(`Adding ${input[0]}`);
      node.keys.set(input[0], new Node());
    }

    return this.add(input.substr(1), node.keys.get(input[0]));
  }

  this.isWord = function(word) {
    let node = this.root;

    while (word.length > 1) {

      if (!node.keys.get(word[0])) {
        return false;
      }
      node = node.keys.get(word[0]);
      word = word.substr(1);
    }

    return (node.keys.has(word) && node.keys.get(word).isEnd());
  }

  this.print = function() {
    // create new array to store all the words.
    let words = new Array();
    // Recursive function to traverse all the nodes.
    let search = function(node, string) {
      // Validate id node has some keys/nodes.
      if (node.keys.size != 0) {
        // Traverse all the keys/nodes.
        for(let letter of node.keys.keys()) {
          // Recursive call to get all the keys/nodes.
          search(node.keys.get(letter), string.concat(letter));
        }

        // Push to words only if the node has a "end".
        if (node.isEnd()) {
          words.push(string);
        }
      } else {
        // if the string length is greater than 0, push it to words.
        string.length > 0 ? words.push(string) : undefined;
        return;
      }
    }

    // Recursive call to search thru all the nodes.
    search(this.root, new String());
    // words will have all the words from trie. Validate if it has content.
    return words.length > 0 ? words : null;

  }
}


let myTrie = new Trie();
myTrie.add('ball');
myTrie.add('ballon');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('dork');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');

console.log(`'doll' is a valid word? ${myTrie.isWord('doll')}`);
console.log(`'dor' is a valid word? ${myTrie.isWord('dor')}`);
console.log(`'dorm' is a valid word? ${myTrie.isWord('dorm')}`);
console.log(`'dorf' is a valid word? ${myTrie.isWord('dorf')}`);
console.log(`'ave' is a valid word? ${myTrie.isWord('ave')}`);
console.log(`'sen' is a valid word? ${myTrie.isWord('sen')}`);
console.log(`'sending' is a valid word? ${myTrie.isWord('sending')}`);
console.log(`'sense' is a valid word? ${myTrie.isWord('sense')}`);

console.log(myTrie.print());
