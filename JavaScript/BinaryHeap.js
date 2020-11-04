// Binary Heaps can be made using an array/ list
// For a max binary heap the greates number is in the first index
// to find the children of a number/node formula is 2n + 1 for the left child and 2n+2 for the right child
// to find the parent take a child's n - 1 / 2 and floor it to get a valid index

class MaxBinaryHeap {
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
      // if the new value is less than the parent no work needs to be done and the loop is over
      if (value <= parent) break;
      // if the value is greater the switch the parentValue and the childValue and then continue the loop with the index as the parent Index to see if that value is in the correct spot in the heap
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
}

let heap = new MaxBinaryHeap();

heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(149);
heap.insert(200);
heap.insert(66);

console.log(heap.values);
