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
        # add the new value to the heap
        self.values.append(val)
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
            if (value <= parent): break
            # otherwise the parent is less than the new value and the new value takes the parent's index and the parent takes it's child's index
            self.values[parentIndex] = value
            self.values[index] = parent
            # then the loop repeats with the parent index to check if the value is in the correct spot
            index = parentIndex
    def extractMax(self):
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
                if (leftChildIdx < length):
                    # if the index is valid assign the leftChild to the value at that index 
                    leftChild = self.values[leftChildIdx]
                    # if the left child value is greater than the current value assign it's index to swap
                    if (leftChild > value):
                        swap = leftChildIdx
                # check if the right child index is valid
                if (rightChildIdx < length):
                    # if it is assign right child to the value at that index
                    rightChild = self.values[rightChildIdx]
                    # There are 2 cases where swap change to the right child index
                    # 1. If swap is None and the rightChild value is greater than the current value
                    # 2. If swap is assigned to the left child value and the right child value is greater than the left
                    if (swap == None and rightChild > value) or (swap is not None and rightChild > leftChild):
                        swap = rightChildIdx
                # if swap is None nothing needs to be swapped and the loop ends
                if (swap == None): break
                # If swap has a index the value at the current index is equal to the value at the swap index
                self.values[index] = self.values[swap]
                # then swap's value changes to the current value
                self.values[swap] = value
                # then the loop continues with the index swap is assigned to
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

