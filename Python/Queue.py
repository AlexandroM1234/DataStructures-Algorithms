# Queues are stacks except they are FIFO(First in first out)

queue = []

queue.append("A")
queue.append("B")
queue.append("C")
queue.append("D")
queue.pop(0)
# print(queue)

class Node:
    def __init__(self,val):
        self.val = val
        self.next = None

class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0

    def enqueue(self,val):
        newNode = Node(val)
        if not self.first:
            self.first = newNode
            self.last = newNode
        else:
            self.last.next = newNode
            self.last = newNode
        self.size += 1
        return self.size
    
    def dequeue (self):
        if not self.first: return None

        temp = self.first

        if self.first == self.last:
            self.first = None
        self.first = self.first.next
        self.size -= 1
        return temp.val

q = Queue()

q.enqueue("1")
q.enqueue("2")
q.enqueue("3")
q.enqueue("4")
q.dequeue()
while q.first:
    print(q.first.val)
    q.first = q.first.next