// Queues are based on FIFO principle.
/*
For instance, an array like this:
Index:   0  1  2   3  4
Values: [5, 3, 6, 10, 8]

It could be represented in this form for better understanding:
8 -> 10 -> 6 -> 3 -> 5

Where 5 it was the first number stored in the stack and it should be the first one to be removed when dequeuing.

Stacks have simple methods such as enqueue, dequeue, front and size.
*/

class Queue {

  collection = [];

  enqueue(value) {
    this.collection.push(value);
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return (this.collection.length === 0);
  }

  print() {
    console.log(this.collection);
  }
}

const queue = new Queue();
queue.print();
console.log(queue.isEmpty());
queue.enqueue(5);
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(10);
queue.enqueue(8);
console.log(queue.front());
queue.print();
queue.size();
console.log(queue.isEmpty());

queue.dequeue();
console.log(queue.front());
queue.dequeue();
queue.dequeue();
queue.print();
console.log(queue.isEmpty());