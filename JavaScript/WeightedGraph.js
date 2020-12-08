class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
// PriorityQueue is a Minimum Binary Heap so smallest number is the root
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  /**
   * Add the value to the end of the array
   * @param {*} val
   * @param {*} priority
   */
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    // get the index of the newly added item and the value
    let index = this.values.length - 1;
    let value = this.values[index];
    //  while there is a valid index
    while (index > 0) {
      // get the parentIndex and value
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      // if the new value is greater than or equal to the parent no work needs to be done and the loop is over
      if (value.priority >= parent.priority) break;
      // if the value is less the switch the parentValue and the childValue and then continue the loop with the index as the parent Index to see if that value is in the correct spot in the heap
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  /**
   * Remove the smallest number from the heap
   */
  dequeue() {
    // get the largest number and the last value
    let min = this.values[0];
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
          // if the leftChild value is less than the current value assign it's index to swap
          if (leftChild.priority < value.priority) {
            swap = leftChildIdx;
          }
        }
        // check if the rightChild index is vaild
        if (rightChildIdx < length) {
          // if the index is valid assign rightChild to the value at the index
          rightChild = this.values[rightChildIdx];
          if (
            // If swap is null and rightChild's value is greater than the current value swap it
            (swap === null && rightChild.priority < value.priority) ||
            // Or if swap is assigned a value from the leftChild and the rightChild is greater than the left change swap from the left index to the right
            (swap !== null && rightChild.priority < leftChild.priority)
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

    return min;
  }
}
/**
 * A Graph with a value on the edges
 */
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  /**
   * Add a vertex to the Graph
   * @param {*} vertex
   */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  /**
   * Add an edge between to vertices with a weight
   * @param {*} v1
   * @param {*} v2
   * @param {number} weight
   */
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  /**
   * Return the shortest path between 2 vertices
   * @param {*} startV
   * @param {*} endV
   */
  dijkstrasAlgo(startV, endV) {
    const distances = {};
    const q = new PriorityQueue();
    const prev = {};
    const path = [];
    let smallest;
    for (const vertices in this.adjacencyList) {
      if (vertices === startV) {
        distances[vertices] = 0;
        q.enqueue(vertices, 0);
      } else {
        distances[vertices] = Infinity;
        q.enqueue(vertices, Infinity);
      }
      prev[vertices] = null;
    }
    while (q.values.length) {
      smallest = q.dequeue().val;
      if (smallest === endV) {
        while (prev[smallest]) {
          path.push(smallest);
          smallest = prev[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - How we got to neighbor
            prev[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            q.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}
const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "F", 1);
g.addEdge("D", "E", 3);
g.addEdge("F", "E", 1);
console.log(g.dijkstrasAlgo("A", "F"));
