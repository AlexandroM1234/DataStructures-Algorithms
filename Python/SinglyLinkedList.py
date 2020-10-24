# Define a node with a value and a next pointer
class Node:
    def __init__(self,val):
        self.val = val
        self.next = None

class SinglyLinkedList:
    # Linked List has a head tail and length
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
    # Add a node to the linked list
    def push(self,val):
        # create a new node with a given value
        newNode = Node(val)
        # if the LL is empty it becomes the head and the tail
        if not self.head:
            self.head = newNode
            self.tail = self.head
        # if the LL is not empty
        else:
            # The tails next pointer points to  the new node
            self.tail.next = newNode
            # then the tail is the new node
            self.tail = newNode
        # after everthing increment the length and return the LL
        self.length += 1
        return self

LL = SinglyLinkedList()
LL.push("HElLO")
LL.push("GOODBYE")
