class Graph:
    """
    Graph made with an adjacenyList
    """
    def __init__(self):
        self.adjacencyList = {}
    
    def addVertex(self, vertex):
        """
        add a vertex to the adjacency list
        """
        self.adjacencyList[vertex] = []
    
    def addEdge(self, v1,v2):
        """
        add a connection from one vertex to another
        """
        self.adjacencyList[v1].append(v2)
        self.adjacencyList[v2].append(v1)

    def removeEdge(self, v1 , v2):
        """
        remove a connection from 2 nodes 
        """
        self.adjacencyList[v1] = list(filter(lambda x: x != v2,self.adjacencyList[v1]))
        self.adjacencyList[v2] = list(filter(lambda x: x != v1,self.adjacencyList[v2]))

    def removeVertex(self,vertex):
        """
        removes a vertex from the adjacency list
        """

        while len(self.adjacencyList[vertex]):
            adjacencyVertex = self.adjacencyList[vertex].pop()
            self.removeEdge(vertex,adjacencyVertex)

        del self.adjacencyList[vertex]

    def DFSI(self, start):
        """
        Depth First Traversal Itterative
        """
        visited = {}
        output = []
        s = []

        s.append(start)

        while (len(s)):
            vertex = s.pop()

            visited[vertex] = True
            output.append(vertex)

            for neighbor in self.adjacencyList[vertex]:
                if neighbor not in visited:
                    visited[neighbor] = True
                    s.append(neighbor)

        return output

    def BFSI(self, start):
        """
        Breadth First Traversal Itterative
        """
        visited = {}
        output = []
        q = []

        q.append(start)

        while (len(q)):
            vertex = q.pop(0)

            visited[vertex] = True
            output.append(vertex)

            for neighbor in self.adjacencyList[vertex]:
                if neighbor not in visited:
                    visited[neighbor] = True
                    q.append(neighbor)

        return output
g = Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
print(g.adjacencyList)
print(g.DFSI("A"))
print(g.BFSI("A"))