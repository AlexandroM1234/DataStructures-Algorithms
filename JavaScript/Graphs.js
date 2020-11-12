class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  // add a new vertex to the adjancency list
  addVertex(vertex) {
    // check for duplicate vertices and then add a new vertex as a key and a new array as the value
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Array();
    return this;
  }
  // add a relationship from one vertext to another
  addEdge(v1, v2) {
    // check if both vertices are valid
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    // if they are valid add each vertex to their array
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
    return this.adjacencyList;
  }
  // remove an edge from one vertext to another
  removeEdge(v1, v2) {
    // check if both verticies are valid
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    // For the arrays at each vertex filter out the value of the other vertex
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  // remove a vertex from the graph and all of its connections
  removeVertex(vertex) {
    // check if the vertex is valid
    if (!this.adjacencyList[vertex]) return undefined;
    // while the array at the vertex has something in it
    while (this.adjacencyList[vertex].length) {
      // remove one item at a time from the vertex array
      const adjacentVertex = this.adjacencyList[vertex].pop();
      // then remove the connections from the given vertex and its adjacent verticies
      this.removeEdge(vertex, adjacentVertex);
    }
    // finally delete the vertex
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
console.log(g.adjacencyList);
