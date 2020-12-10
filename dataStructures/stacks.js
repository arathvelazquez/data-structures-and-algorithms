// Stacks are based on LIFO principle.
// Methods: push, pop, peek, length.

class Stack {
  count = 0;
  storage = {}

  // Adds a value onto the end of the stack.
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack.
  pop() {
    if (this.count === 0) {
      return null;
    }
    
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  // Returns the last inserted item of the stack.
  peek() {
    if (this.count === 0) {
      return null;
    }
    return this.storage[this.count - 1];
  }

  // Length of the stack.
  size() {
    return this.count;
  }

  // Print all the values of the stack.
  print() {
    let result = '';
    for (let i = 0; i < this.count; i++) {
      result += this.storage[i] + `${(i < this.count -1) ? ', ' : '.'}`;
    }
    return result;
  }
}

let stack = new Stack();

console.log(stack.peek());
stack.push(4);
console.log(stack.pop());
stack.push('Testa');
console.log(stack.pop());
stack.push(4);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(5);
stack.push(2);
stack.push('Test');
console.log(stack.peek());
console.log(`Size is ${stack.size()}`);
console.log(stack.print());