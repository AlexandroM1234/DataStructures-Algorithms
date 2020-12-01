import math


class PriorityQueue:
    """
    docstring
    """

    def __init__(self):
        self.values = []

    def enqueue(self, val, priority):
        """
        add something to the priority queue
        """
        self.values.append({val, priority})
        self.sort()

    def dequeue(self):
        """
        remove something from the priority queue
        """
        return self.values.pop(0)

    def sort(self):
        """
        sort the priority queue
        """
        self.values.sort()


class WeightedGraph:
    """
    Graph where edges have weight
    """

    def __init__(self):
        self.adjacencyList = {}

    def addVertex(self, vertex):
        """
        add vertex to the weighted graph
        """
        if vertex not in self.adjacencyList:
            self.adjacencyList[vertex] = []

    def addEdge(self, v1, v2, weight):
        """
        add edge from one vertex to another with a weight
        """
        self.adjacencyList[v1].append({"node": v2, "weight": weight})

    def dijkstras(self, startV, endV):
        """
        return the shortest path from one vertex to another
        """
        distances = {}
        q = PriorityQueue()
        prev = {}
        path = []
        smallest = None

        for vertices in self.adjacencyList:
            if vertices == startV:
                distances[vertices] = 0
                q.enqueue(vertices, 0)
            else:
                distances[vertices] = math.inf
                q.enqueue(vertices, math.inf)
            prev[vertices] = None

        while len(q.values):
            print(q.values)
            if smallest == endV:
                while prev[smallest]:
                    path.append(smallest)
                    smallest = prev[smallest]
                break
            if smallest or distances[smallest] != math.inf:
                for neighbor in self.adjacencyList[smallest]:
                    nextNode = self.adjacencyList[smallest][neighbor]
                    candidate = distances[smallest] + nextNode.weight
                    nextNeighbor = nextNode.node

                    if candidate < distances[nextNeighbor]:
                        distances[nextNeighbor] = candidate
                        prev[nextNeighbor] = candidate
                        prev[nextNeighbor] = smallest
                        q.enqueue(nextNeighbor, candidate)
            output = path + smallest
            return reversed(output)


g = WeightedGraph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B", 4)
g.addEdge("A", "C", 2)
g.addEdge("B", "E", 3)
g.addEdge("C", "D", 2)
g.addEdge("C", "F", 4)
g.addEdge("D", "F", 1)
g.addEdge("D", "E", 3)
g.addEdge("F", "E", 1)
print(g.adjacencyList)
print(g.dijkstras("A", "F"))
