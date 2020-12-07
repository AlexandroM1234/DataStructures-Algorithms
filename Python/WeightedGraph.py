import math


class Node:
    def __init__(self, val, priority):
        self.val = val
        self.priority = priority


class PriorityQueue:
    """
    Priority Queues are a Minimum Binary Heap

    Time Complexity:
        Insertion: O(log N)
        Removal - O(log N)
        Searching - O(N)
    """

    def __init__(self):
        self.values = []

    def enqueue(self, val, priority):
        """
        Insert a value into the Max Binary Heap
        """
        newNode = Node(val, priority)
        # add the new value to the heap
        self.values.append(newNode)
        # get the index of the last element in the heap
        index = len(self.values) - 1
        # get the value at that index
        value = self.values[index]
        # while the index is valid
        while index > 0:
            # get the parent of the newly added item
            parentIndex = (index - 1) // 2
            # check the value of the parent and if the newly added value is less than its parent no more work needs to be done and the loop breaks
            parent = self.values[parentIndex]
            if value.priority >= parent.priority:
                break
            # otherwise the parent is less than the new value and the new value takes the parent's index and the parent takes it's child's index
            self.values[parentIndex] = value
            self.values[index] = parent
            # then the loop repeats with the parent index to check if the value is in the correct spot
            index = parentIndex

    def dequeue(self):
        """
        Remove the largest number from the Binary Heap
        """
        # in a max binary heap the largest number will be at the zeroth index assuming the heap is made with a list
        largest = self.values[0]
        # get the last item of the heap
        end = self.values.pop()
        # edge case if there is only 1 item in the heap if there is pop it and return it
        if len(self.values) > 0:
            # the last value goes to the top of the heap
            self.values[0] = end
            # setup some variables for the index,length, and values for later
            index = 0
            length = len(self.values)
            value = self.values[0]
            # now we bubble down with the smallest value
            while True:
                # get the children of the current index
                leftChildIdx = 2 * index + 1
                rightChildIdx = 2 * index + 2
                #  Assigning their values to None because their index could be out of range
                leftChild = None
                rightChild = None
                # swap variable will be used later to keep track of what is moving throughout the heap
                swap = None
                # Check if the left child index is valid
                if leftChildIdx < length:
                    # if the index is valid assign the leftChild to the value at that index
                    leftChild = self.values[leftChildIdx]
                    # if the left child priority is less than the current priority assign it's index to swap
                    if leftChild.priority < value.priority:
                        swap = leftChildIdx
                # check if the right child index is valid
                if rightChildIdx < length:
                    # if it is assign right child to the value at that index
                    rightChild = self.values[rightChildIdx]
                    # There are 2 cases where swap change to the right child index
                    # 1. If swap is None and the rightChild priority is less than the current value
                    # 2. If swap is assigned to the left child value and the right child priority is less than the left
                    if (swap == None and rightChild.priority < value.priority) or (
                        swap is not None and rightChild.priority < leftChild.priority
                    ):
                        swap = rightChildIdx
                # if swap is None nothing needs to be swapped and the loop ends
                if swap == None:
                    break
                # If swap has a index the value at the current index is equal to the value at the swap index
                self.values[index] = self.values[swap]
                # then swap's value changes to the current value
                self.values[swap] = value
                # then the loop continues with the index swap is assigned to
                index = swap
        return largest


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
            smallest = q.dequeue().val
            if smallest == endV:
                while prev[smallest]:
                    path.append(smallest)
                    smallest = prev[smallest]
                break
            if smallest or distances[smallest] != math.inf:
                for neighbor in self.adjacencyList[smallest]:
                    nextNode = self.adjacencyList[smallest][neighbor]
                    candidate = distances[smallest] + nextNode["weight"]
                    nextNeighbor = nextNode["node"]

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
