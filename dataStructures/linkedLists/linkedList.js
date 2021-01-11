
class Node {
  constructor(element) {
    this.value = element
    this.next = null;
  }
}

class LinkedList {

  length = 0;
  head = null;

  size() {
    return this.length;
  }

  getHead() {
    return this.head.value;
  }

  add(element) {
    let node = new Node(element);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  remove(element) {

    let currentNode = this.head;
    let previousNode;
    console.log(`Trying to remove: ${element}.`)
    if (currentNode.value == element) {
      this.head = currentNode.next;
    } else {
      while(currentNode && currentNode.value !== element) {
        previousNode = currentNode;
        currentNode = currentNode && currentNode.next;
      }

      if (currentNode) {
        previousNode.next = currentNode.next;
      } else {
        console.log(`${element} was not found in list.`);
        return false;
      }

    }

    this.length--;
    console.log(this.print());

  }

  print() {
    let current = this.head;
    let result = [];

    if (current == null) {
      return result;
    }

    while(current != null) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  findMaxValue() {

    let node = this.head;
    if (!node) {
      return null;
    }

    let max = node.value;
    let current = node;

    while (current.next != null) {
      current = current.next;
      if (current.value > max) {
        max = current.value
      }
    }

    return max;
  }

  indexOf(element) {
    let currentNode = this.head;
    let index = -1;

    while (currentNode) {
      index++;
      if (currentNode.value === element) {
        return index;
      }
      currentNode = currentNode.next;
    }

    return -1;
  }

  elementAt(index) {
    let currentNode = this.head;
    let count = 0;
    if (index > this.length -1) {
      return null;
    }

    while(count < index) {
      count++;
      currentNode = currentNode.next;
    }

    return currentNode.value;
  }

  addAt(index, element) {

    let currentNode = this.head;
    let currentIndex = 0;
    let previousNode;
    let node = new Node(element);

    if (index > this.length) {
      console.log(`Error: Index ${index} is greater than length list ${this.length}.`);
      return false;
    }

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return true;
    }

    while(currentIndex < index) {
      currentIndex++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    node.next = currentNode;
    previousNode.next = node;

    this.length++;

    return true;

  }
}

const linkedList = new LinkedList();

linkedList.add(10);
linkedList.add(5);
linkedList.add(45);
linkedList.add(4);
linkedList.add(40);
linkedList.add(0);
linkedList.add(12);
linkedList.add(60);

console.log(`Print Linked List: ${linkedList.print()}`);
console.log(`Size: ${linkedList.size()}`);
console.log(`Head: ${linkedList.getHead()}`);
console.log(`Max Value: ${linkedList.findMaxValue()}`);

linkedList.remove(10);
linkedList.remove(4);
linkedList.remove(6);

console.log(`Print Linked List: ${linkedList.print()}`);
console.log(`Size: ${linkedList.size()}`);
console.log(`Head: ${linkedList.getHead()}`);
console.log(`Max Value: ${linkedList.findMaxValue()}`);

console.log(`Index of 40: ${linkedList.indexOf(40)}`);
console.log(`Index of 0: ${linkedList.indexOf(0)}`);
linkedList.remove(40);
console.log(`Index of 40: ${linkedList.indexOf(40)}`);
console.log(`Index of 0: ${linkedList.indexOf(0)}`);
console.log(`Index of 12: ${linkedList.indexOf(12)}`);

console.log(`Element at index 0: ${linkedList.elementAt(0)}`);
console.log(`Element at index 4: ${linkedList.elementAt(4)}`);
console.log(`Element at index 5: ${linkedList.elementAt(5)}`);
console.log(`Element at index 10: ${linkedList.elementAt(10)}`);

console.log(`Adding element 10 at index 3: ${linkedList.addAt(3, 10)}`);
console.log(`Adding element 30 at index 0: ${linkedList.addAt(0, 30)}`);
console.log(`Adding element 20 at index 20: ${linkedList.addAt(7, 20)}`);

console.log(`Print Linked List: ${linkedList.print()}`);
console.log(`Size: ${linkedList.size()}`);
console.log(`Head: ${linkedList.getHead()}`);