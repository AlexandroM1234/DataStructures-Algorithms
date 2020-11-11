class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // add a new vertex to the adjancenct list
  addVertex(key) {
    this.adjacencyList[key] = [];
    return this;
  }
}

let g = new Graph();

g.addVertex("Tokyo");

console.log(g.adjacencyList);
