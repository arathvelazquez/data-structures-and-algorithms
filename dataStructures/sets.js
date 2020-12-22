// Set are similar to Stacks with only difference that Set does not have repeated values.

// Operations: has, values, add, remove, size, union, intersection, difference, subset

class mySet {

  storage = [];

  // Checks for the presence of an element and return true or false.
  has(value) {
    return (this.storage.indexOf(value) !== -1);
  }

  // Returns all the values in the Set.
  values() {
    return this.storage;
  }

  // Adds a new unique value to the Set.
  add(value) {
    if (!this.has(value)) {
      this.storage.push(value)
      return true;
    }
    return false;
  }

  // Removes an element from the Set.
  remove(value) {
    if (this.has(value)) {
      let index = this.storage.indexOf(value);
      this.storage.splice(index, 1);
      return true;
    }
    return false;
  }

  // This method returns the size of the collection.
  size() {
    return this.storage.length;
  }

  // This method returns the union of 2 sets.
  union(otherSet) {
    let newSet = new mySet();
    let firstSet =  this.values();
    let secondSet = otherSet.values();

    firstSet.forEach(value => {
      newSet.add(value);
    })

    secondSet.forEach(value => {
      newSet.add(value);
    });

    return newSet;
  }

  // This method returns the intersection of 2 sets.
  intersection(otherSet) {
    let newSet = new mySet();
    let firstSet = this.values();

    firstSet.forEach(value => {
      if (otherSet.has(value)) {
        newSet.add(value);
      }
    })

    return newSet;
  }

  // This method returns the difference of 2 sets.
  difference(otherSet) {
    let newSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach(value => {
      if (!otherSet.has(value)) {
        newSet.add(value);
      }
    });

    secondSet.forEach(value => {
      if (!this.has(value)) {
        newSet.add(value);
      }
    });

    return newSet;
  }

  // This method returns true or false if the second set is a subset of the first set.
  isSubsetOf(otherSet) {

    if (this.size() > otherSet.size()) {
      return false;
    } else {

      for(let i = 0; i < this.size(); i++) {
        if (!otherSet.has(this.values()[i])) {
          return false;
        }
      }
      return true;
    }
  }
}

let setA = new mySet();
let setB = new mySet();
let setC = new mySet();
let setD = new mySet();

setA.add(1);
setA.add(2);
setA.add(2);
setA.add('Test');
setA.add(3);
setA.add(4);
console.log(setA.has(3));
console.log(setA.values());
setA.remove(3);
console.log(setA.has(3));
console.log(setA.size());
console.log(`setA values: ${setA.values()}`);

setB.add(2);
setB.add(3);
setB.add(4);
setB.add(4);
setB.add(5);
console.log(`setB values: ${setB.values()}`);

let setAunionB = setA.union(setB);
console.log(`setAunionB values: ${setAunionB.values()}`);

let setAintersectionB = setA.intersection(setB);
console.log(`setAintersectionB values: ${setAintersectionB.values()}`);

let setAdifferenceB = setA.difference(setB);
console.log(`setAdifferenceB values: ${setAdifferenceB.values()}`);

setC.add(1);
setC.add(2);
setC.add(3);
setC.add(4);
console.log(`\nsetC values: ${setC.values()}`);

setD.add(1);
setD.add(2);
setD.add(3);
setD.add(4);
setD.add(5);
console.log(`setD values: ${setD.values()}`);


let setCsubsetD = setC.isSubsetOf(setD);
console.log(`setCsubsetD values: ${setCsubsetD}`);
