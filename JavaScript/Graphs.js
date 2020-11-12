class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // add a new vertex to the adjancency list
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
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  // remove a vertex from the graph and all of its connections
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
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
g.addEdge("Hong Kong", "Kyoto");
g.addEdge("DC", "Austin");
g.addEdge("Dallas", "Austin");
console.log(g.adjacencyList);
g.removeVertex("Tokyo");
g.removeVertex("DC");
console.log(g.adjacencyList);
