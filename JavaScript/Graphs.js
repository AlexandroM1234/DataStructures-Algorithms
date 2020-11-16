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
  // DFS Recurisve
  DFSR(vertex) {
    const output = [];
    const vistied = {};
    const adjacencyList = this.adjacencyList;
    // create a helper function for traversing
    function dfs(vertex) {
      // if there is no vertex return null
      if (!vertex) return null;
      // set the vertex in visited
      vistied[vertex] = true;
      // push the vertex to the output array
      output.push(vertex);
      // then for the values at the vertex if they are not in visited call bfs on it
      adjacencyList[vertex].forEach((neighbor) => {
        if (!vistied[neighbor]) {
          return dfs(neighbor);
        }
      });
    }
    dfs(vertex);
    return output;
  }
  // DFS Itterative
  DFSI(start) {
    const vistied = {};
    const output = [];
    const s = [];
    s.push(start);
    // while the stack has something in it
    while (s.length) {
      // get the last value of the stack
      let vertex = s.pop();
      // set it to visited and push it to the ouput array
      vistied[vertex] = true;
      output.push(vertex);
      // then for the values at thaat vertex set them to visited and add them to the stack
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!vistied[neighbor]) {
          vistied[neighbor] = true;
          s.push(neighbor);
        }
      });
    }
    return output;
  }
  // BFS Itterative
  BFSI(start) {
    // same logic as the DSF but instead of a stack we use a queue
    const vistied = {};
    const output = [];
    const q = [];
    q.push(start);
    while (q.length) {
      let vertex = q.shift();
      vistied[vertex] = true;
      output.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!vistied[neighbor]) {
          vistied[neighbor] = true;
          q.push(neighbor);
        }
      });
    }
    return output;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.DFSI("A"));
console.log(g.DFSR("A"));
console.log(g.BFSI("A"));
