class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // add a new vertex to the adjancenct list
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Array();
    return this;
  }
  // add a relationship from one vertext to another
  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return this.adjacencyList;
  }
  // remove an edge from one vertext to another
  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    let i1 = this.adjacencyList[v1].indexOf(v2);
    let i2 = this.adjacencyList[v2].indexOf(v1);
    this.adjacencyList[v1].splice(i2);
    this.adjacencyList[v2].splice(i1);
  }
}

let g = new Graph();

g.addVertex("Tokyo");
g.addVertex("Hong Kong");
g.addVertex("Kyoto");
g.addVertex("Dallas");
g.addVertex("Austin");
g.addVertex("DC");
g.addEdge("Tokyo", "Kyoto");
g.addEdge("DC", "Austin");
g.addEdge("Dallas", "Austin");
