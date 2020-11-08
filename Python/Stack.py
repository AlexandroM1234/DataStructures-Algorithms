
stack = []

stack.append(1)
stack.append(2)
stack.append(3)
stack.append(4)
stack.pop()

# print(stack)

class Node:
    def __init__(self,val):
        self.val = val
        self.next = None
class Stack:
    """
    Time Complexity:
        Insertion = O(1)
        Removal = O(1)
        Search = O(N)
        Access = O(N)
    """
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0
    
    def push(self,val):
        newNode = Node(val)

        if not self.first:
            self.first = newNode
            self.last = newNode
        else:
            first = self.first
            self.first = newNode
            self.first.next = first
        
        self.size += 1

        return self.size
    
    def pop(self):
        if not self.first: return None
        temp = self.first
        if self.first == self.last:
            self.last = None
        self.first = self.first.next
        self.size += 1
        return temp.val

s = Stack()

s.push(1)
s.push(2)
s.push(3)
s.pop()

while s.first:
    print(s.first.val)
    s.first = s.first.next