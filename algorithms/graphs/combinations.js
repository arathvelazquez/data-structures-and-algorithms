// Welcome to Facebook!

// This is just a simple shared plaintext pad, with no execution capabilities.

// When you know what language you would like to use for your interview,
// simply choose it from the dropdown in the top bar.

// Enjoy your interview!
  
  
// given a list of items, each comes with a name and price, e.g., [ "soup": 4, "fries": 2, "fish": 9]. For a given target amount, b (e.g. b=11), find out all possible combinations that sum up to b.

/*

items = {
  "soup" : 4,
  "fries" : 2,
  "fish" : 9
}


[fries, fish], [fish, fries]

["soup": 4, "fries": 2, "fish": 9, "chicken": 7, "meat": 2, "cereal": 1]

[[fries, fish], [soup, chicken], [chicken, fries, meat]]

11 - items[3] > 0 = 4 
items[]

*/

const allCombination = function(items, b) {
  
  
  
  // [ 4, 2, 9, 7, 2, 1, 1] 
  let map = {}
  let result = new Array();
  
  for (let i = 0; i < items.length; i++) {
    let current = map[items[i]];
    if (current) {
      current += 1;
    } else {
      current = 1;
    }
  }
  
  // items = {
  //   "4": 1,
  //   "2": 2,
  //   "9": 1,
  //   "7": 1,
  //   "1": 2
  // }
  
  
  for(let i = 0; i < items.length; i++) {
    
    let substraction = b - items[i];
    
    helper(items, b, );
    while(b - items[i] > 0) {
      
      
    }
    
    if (map[substraction]) {
      
      // 11 - 9 = 2 => {9,2}, {9,2}
      
      if (map[substraction] > 1 ) {
        
      } else {
        result.push(items[i], map[substraction])
      }  
      
    }
  }

}

// 11 - 9 => 2
// 2 

const helper = function(b, map, current) {
  
  let substraction = b - current;
  
  while ( substraction > 0) {
    
    if (!map[substraction]) {
      return false;
    }
    
    helper(substraction, map, substraction); 
  }
  
  
}






