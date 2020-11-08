class MaxBinaryHeap:
    """
    Time Complexity:
        Insertion: O(log N)
        Removal - O(log N)
        Searching - O(N)
    """
    def __init__(self):
        self.values = []

    def insert(self, val):
        """
        Insert a value into the Max Binary Heap
        """
        self.values.append(val)
        index = len(self.values) - 1
        value = self.values[index]

        while index > 0:
            parentIndex = (index - 1) // 2
            parent = self.values[parentIndex]
            if (value <= parent): break
            self.values[parentIndex] = value
            self.values[index] = parent
            index = parentIndex
    def extractMax(self):
        """
        Remove the largest number from the Binary Heap
        """
        largest = self.values[0]
        end = self.values.pop()

        if len(self.values) > 0:
            self.values[0] = end
            index = 0
            length = len(self.values)
            value = self.values[0]
            while True:
                leftChildIdx = 2 * index + 1
                rightChildIdx = 2 * index + 2

                leftChild = None
                rightChild = None
                swap = None
                if (leftChildIdx < length):
                    leftChild = self.values[leftChildIdx]
                    if leftChild > value:
                        swap = leftChildIdx
                if (rightChildIdx < length):
                    rightChild = self.values[rightChildIdx]
                    if (swap == None and rightChildIdx > value) or (swap is not None and rightChild > leftChild):
                        swap = rightChildIdx
                if (swap == None): break
                self.values[index] = self.values[swap]
                self.values[swap] = value
                index = swap
        return largest


heap = MaxBinaryHeap()
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)

print(heap.values)
print(heap.extractMax())
print(heap.extractMax())
print(heap.values)

