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
  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;

      let index = 0;
      let length = this.values.length;
      const value = this.values[0];

      while (true) {
        let leftChildIdx = 2 * index + 1;
        let rightChildIdx = 2 * index + 2;
        let leftChild, rightChild;
        let swap = null;
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild > value) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild > value) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = value;
        index = swap;
      }
    }

    return max;
  }
}

let heap = new MaxBinaryHeap();

heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);
console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.values);
