/*

Pramp: Time Planner

Implement a function meetingPlanner that given the availability, slotsA and slotsB,
of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. 

If there is no common time slot that satisfies the duration requirement, return an empty array.

Each person’s availability is represented by an array of pairs.
Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot.
The second epoch is the end time of that slot.
The input variable dur is a positive integer that represents the duration of a meeting in seconds.
The output is also a pair represented by an epoch array of size two.

In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap.
Further assume that the slots are sorted by slots’ start time.

Implement an efficient solution and analyze its time and space complexities.

Test Case #1
Input: [[7,12]], [[2,11]], 5
Expected: []

Test Case #2
Input: [[6,12]], [[2,11]], 5
Expected: [6,11]

Test Case #3
Input: [[1,10]], [[2,3],[5,7]], 2
Expected: [5,7]

Test Case #4
Input: [[0,5],[50,70],[120,125]], [[0,50]], 8
Expected: []

Test Case #5
Input: [[10,50],[60,120],[140,210]], [[0,15],[60,70]], 8
Expected: [60,68]

Test Case #6
Input: [[10,50],[60,120],[140,210]], [[0,15],[60,72]], 12
Expected: [60,72]
*/

// PENDING to solve.
function meetingPlanner(slotsA, slotsB, dur) {
  // Brute force approach
  let result = new Array();
  
  if ( slotsA == null || slotsA.length <= 0 || slotsB == null || slotsB.length <= 0) {
    return result;
  }

  // slotsA = [[6,12]];
  // slotsB = [[2,11]]
  // dur = 5;

  // [6,11]
  
  for (let i = 0; i < slotsA.length; i++) {
    for (let j = 0; j < slotsB.length; j++) {

      let subA = slotsA[i];
      let subB = slotsB[j];
      
      if (
          (slotsA[i][0] <= slotsB[j][0]) &&
          (slotsA[i][1] >= slotsB[j][1]) &&
          (slotsA[i][1] - slotsA[i][0] >= dur) &&
          ((slotsB[j][1] - slotsB[j][0] >= dur))
        ) {
        
        // This will give me the matching starting time.
        //               0    1
        // slotsA[i] == [60, 120] 120 - 8 = 112
        // slotsB[j] == [61, 70] 70 - 8 = 62 
        
        // console.log(slotsA[i]);
        // console.log(slotsB[j]);
        

        // if ( slotsA[i][1] - dur > slotsA[i][0] && slotsB[j][1] - dur > slotsB[j][0]) {
        result.push(Math.max(slotsA[i][0], slotsB[j][0]));
        result.push(Math.max(slotsA[i][0], slotsB[j][0] ) + dur);
        //}
      }
    } 
  }
  
  return result;
}

let slotsA = [[10, 50], [60, 120], [140, 210]];
let slotsB = [[0, 15], [61, 70]];
let dur = 8;
console.log(meetingPlanner(slotsA, slotsB, dur));
// [61, 69]

slotsA = [[10, 50], [60, 120], [140, 210]];
slotsB = [[0, 15], [60, 70]];
dur = 12;
console.log(meetingPlanner(slotsA, slotsB, dur));
// []

slotsA = [[7,12]];
slotsB = [[2,11]]
dur = 5;
console.log(meetingPlanner(slotsA, slotsB, dur));
// []

slotsA = [[6,12]];
slotsB = [[2,11]]
dur = 5;
console.log(meetingPlanner(slotsA, slotsB, dur));
// [6,11]
 
slotsA = [[1,10]];
slotsB = [[2,3],[5,7]]
dur = 2;
// console.log(meetingPlanner(slotsA, slotsB, dur));
// [5,7]
 
slotsA = [[0,5],[50,70],[120,125]];
slotsB = [[0,50]]
dur = 8;
// console.log(meetingPlanner(slotsA, slotsB, dur));
// []
 
slotsA = [[10,50],[60,120],[140,210]];
slotsB = [[0,15],[60,70]]
dur = 8;
// console.log(meetingPlanner(slotsA, slotsB, dur));
// [60,68]
 
slotsA = [[10,50],[60,120],[140,210]];
slotsB = [[0,15],[60,72]]
dur = 1;
// console.log(meetingPlanner(slotsA, slotsB, dur));
// [60,72]




