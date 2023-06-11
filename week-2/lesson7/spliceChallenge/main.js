const splice = function(array, start, deleteCount, ...items) {

  const removed = [];
  const length = array.length;
  
  // Remove elements and store them in the removed array
  for (let i = 0; i < deleteCount; i++) {
    removed.push(array[start + i]);
  }
  
  // Move elements to fill the gap left by the removed elements
  const numToMove = length - start - deleteCount;
  if (numToMove > 0) {
    for (let i = 0; i < numToMove; i++) {
      array[start + i] = array[start + deleteCount + i];
    }
  }
  
  // Delete remaining elements
  array.length = length - deleteCount;
  
  // Insert new elements at the start index
  const numToInsert = items.length;
  if (numToInsert > 0) {
    for (let i = numToInsert - 1; i >= 0; i--) {
      array.splice(start, 0, items[i]);
    }
  }
  
  return removed;
}

// remove 1 element
let arr = [1,2,3]
arr.splice(0,1); 
console.log(arr); //should be [2,3]

// add 1 element
arr = [1,2,3]
arr.splice(0,0,0); 
console.log(arr); //should be [0,1,2,3]

// replace 1 element
arr = [1,2,3]
arr.splice(1,1,55); 
console.log(arr); //should be [1,55,3] 

// delete all elements from index to end
arr = [1,2,3,4,5]
arr.splice(1); 
console.log(arr); //should be [1] 

// returns array of deleted elements
arr = [1,2,3]
let deleted = arr.splice(1); 
console.log(deleted); //should be [2,3] 

// returns an array of the deleted element (1 element)
arr = [1,2,3]
deleted = arr.splice(1,1); 
console.log(deleted); //should be [2] 

// returns an empty array when no elements are deleted
arr = [1,2,3]
deleted = arr.splice(1,0,5); 
console.log(deleted); //should be [] 


