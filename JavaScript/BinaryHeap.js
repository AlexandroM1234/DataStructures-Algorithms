/*
Binary Heaps can be made using an array/ list
 For a max binary heap the greates number is in the first index
 to find the children of a number/node formula is 2n + 1 for the left child and 2n+2 for the right child
 to find the parent take a child's n - 1 / 2 and floor it to get a valid index
*/
class MaxBinaryHeap {
  /* 
  Time Complexity:
    Insertion - O(log N)
    Removal - O(log N)  
    Searching - O(N)
  */
  constructor() {
    this.values = [];
  }
  insert(val) {
    // add the value to the end of the array
    this.values.push(val);
    // get the index of the newly added item and the value
    let index = this.values.length - 1;
    let value = this.values[index];
    //  while there is a valid index
    while (index > 0) {
      // get the parentIndex and value
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      // if the new value is less than or equal to the parent no work needs to be done and the loop is over
      if (value <= parent) break;
      // if the value is greater the switch the parentValue and the childValue and then continue the loop with the index as the parent Index to see if that value is in the correct spot in the heap
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  // remove the largest number from the heap
  extractMax() {
    // get the largest number and the last value
    let max = this.values[0];
    let end = this.values.pop();
    // edge case if there is only 1 number in the heap just return the max
    if (this.values.length > 0) {
      // The first number in the heap is now equal to the last number
      this.values[0] = end;
      // set up the index, the length of the heap and the value thats going to be moving down the heap
      let index = 0;
      let length = this.values.length;
      const value = this.values[0];
      // Now we bubble down from the top of the heap
      while (true) {
        // get the children of the current index
        let leftChildIdx = 2 * index + 1;
        let rightChildIdx = 2 * index + 2;
        // setup some variables for the values of the children to make sure the index is valid
        let leftChild, rightChild;
        let swap = null;
        // check if the left child index is valid
        if (leftChildIdx < length) {
          // if the index is valid assign leftChild the value at its index
          leftChild = this.values[leftChildIdx];
          // if the leftChild value is greater than the current value assign it's index to swap
          if (leftChild > value) {
            swap = leftChildIdx;
          }
        }
        // check if the rightChild index is vaild
        if (rightChildIdx < length) {
          // if the index is valid assign rightChild to the value at the index
          rightChild = this.values[rightChildIdx];
          if (
            // If swap is null and rightChild's value is greater than the current value swap it
            (swap === null && rightChild > value) ||
            // Or if swap is assigned a value from the leftChild and the rightChild is greater than the left change swap from the left index to the right
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
        // if swap is equal to nothing the loop stops and max is returned
        if (swap === null) break;
        // Now the value at the current index is now equal to the value at the swapped index
        this.values[index] = this.values[swap];
        // now the value at the swapped index is now equal to the current value
        this.values[swap] = value;
        // Then the loop repeats with the index being the swapped index
        index = swap;
      }
    }

    return max;
  }
}

let heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
