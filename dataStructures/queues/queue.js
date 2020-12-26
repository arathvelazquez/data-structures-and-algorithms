// Queues are based on FIFO principle.
/*
For instance, an array like this:
Index:   0  1  2   3  4
Values: [5, 3, 6, 10, 8]

It could be represented in this form for better understanding:
8 -> 10 -> 6 -> 3 -> 5

Where 5 it was the first number stored in the stack and it should be the first one to be removed when dequeuing.

Queues have simple methods such as enqueue, dequeue, front and size.
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

class PriorityQueue extends Queue {

  enqueue(value) {
    if (this.isEmpty()) {
      this.collection.push(value);
    } else {
      let added = false;
      for(let i = 0; i < this.collection.length; i++) {
        if (value[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, value);
          added = true;
          break;
        }
      } 
      if(!added) {
        this.collection.push(value);
      }
    }
  }
}

const queue = new Queue();
console.log('Queue.');
queue.print();
console.log(queue.isEmpty());
queue.enqueue(5);
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(10);
queue.enqueue(8);
console.log(queue.front());
queue.print();
// [ 5, 3, 6, 10, 8 ]
queue.size();
console.log(queue.isEmpty());

queue.dequeue();
console.log(queue.front());
queue.dequeue();
queue.print();
console.log(queue.isEmpty());
// Result of Queue:
// [ 6, 10, 8 ]

const priorityQueue = new PriorityQueue();
console.log('\nPriority Queue.');
priorityQueue.enqueue(['Data 1', 1]);
priorityQueue.enqueue(['Data 3', 3]);
priorityQueue.enqueue(['Data 2', 2]);
priorityQueue.enqueue(['Data 0', 0]);
priorityQueue.print();
// [ [ 'Data 0', 0 ], [ 'Data 1', 1 ], [ 'Data 2', 2 ], [ 'Data 3', 3 ] ]
priorityQueue.dequeue();
priorityQueue.print();
// Result of priorityQueue:
// [ [ 'Data 1', 1 ], [ 'Data 2', 2 ], [ 'Data 3', 3 ] ]
