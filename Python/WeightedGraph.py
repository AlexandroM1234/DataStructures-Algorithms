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
        node = None
        self.adjacencyList[v1].append({node: v2, weight: weight})
