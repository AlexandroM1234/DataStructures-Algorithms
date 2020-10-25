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
    def push(self,val):
        """
        creates a new node to add to the end of the LL
        """
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

    def pop(self):
        """
        removes a node from the tail
        """
        # if there is no head the is no LL so return None
        if not self.head: return None
        else:
            # set up a refrence to the head
            current = self.head
            newTail = current
            # traverse until you reach the tail
            while current.next:
                newTail = current
                current = current.next
            # set the tail to the newTail
            self.tail = newTail
            # set the new tail's next to none
            self.tail.next = None
            # decrement the length 
            self.length -= 1
            # if there is 1 node left in the LL set the head and the tail to None
            if self.length == 0:
                self.head = None
                self.tail = None
            
            return current

    def shift(self):
        """
        removes a node from the head
        """
        # if there is no head we can't remove from it
        if not self.head: return None
        else:
            # set a refrence to the current head and the current head's next which will be the new head
            current = self.head
            newHead = current.next
            # set the head to the new head
            self.head = newHead
            # decrement the length
            self.length -= 1
            # if there is one node left set the tail to none
            if self.length == 0:
                self.tail = None
            # finally return the removed node
            return current

    def unshift(self,val):
        """
        adds a new node at the head of the LL
        """
        # create a new node
        newNode = Node(val)
        # if there is no head the new node is the head and tail
        if not self.head:
            self.head = newNode
            self.tail = self.head
        else:
            # make the new node's next the current head and then make the head the new node
            currentHead = self.head
            newNode.next = currentHead
            self.head = newNode
        # increment the length then return the LL
        self.length += 1
        return LL
    def get(self,index):
        """
        returns a node a certain index
        """
        # if the index is invalid return None
        if index >= self.length or index < 0:
            return None
        else:
            # increment counter to traverse the LL until you meet the desired index
            counter = 0
            current = self.head
            while counter != index:
                current = current.next
                counter += 1
            # once you reach the node at the index return it
            return current
    
    def setNode(self,index,val):
        """
        sets a new value of a node at a certain index
        """
        # get the node at the desired index
        node = self.get(index)
        # if there is no node at that index return False
        if not node: return False
        else:
            # if there is a node change the value and return True
            node.val = val
            return True

    def insert(self,index ,val):
        """
        inserts a new node at a certain index
        """
        # if the index is invalid return False
        if index < 0 or index > self.length: return False
        # if the index is the head of the LL do unshift
        if index == 0:
            self.unshift(val)
            return True
        # if the index is the tail do push
        elif index == self.length:
            self.push(val)
            return True
        else:
            # create a new node
            newNode = Node(val)
            # get the node 1 before the index we want to insert at
            prev = self.get(index - 1)
            # make the previous node's next the new node
            temp = prev.next
            prev.next = newNode
            # the new nodes next becomes the previous node's next
            newNode.next = temp
            # increment the length then return true
            self.length += 1
            return True

    def remove(self,index):
        """
        removes a node at a certain index
        """
        # if the index is invalid return False
        if index < 0 or index >= self.length: return None
        # if the index is the head do shift
        if index == 0:
            return self.shift()
        # if the index is the tail do pop
        elif index == self.length - 1:
            return self.pop()
        else:
            # if its in the middle get the node 1 before the node you want to remove
            prev = self.get(index-1)
            # have a refrence of the removed node which is the previous' next
            removedNode = prev.next
            # now the previous' next is the removed node's next which makes the removed node lose its refrence in the LL
            prev.next = removedNode.next
            # decrement the length and return the removed node
            self.length -= 1
            return removedNode
    def reverse(self):
        """
        reverses the linked list in place
        """
        # have a refrence to the head
        node = self.head
        # switch the head and the tail
        self.head = self.tail
        self.tail = self.head
        # make the refrenced head node the tail(head)
        self.tail =node
        # have a next and previous for pointer manipulation for later
        nextNode = None
        prev = None
        # while there are nodes to traverse
        while(node):
            # the next node becomes the current node's next
            nextNode = node.next
            # then the current node's next is the previous node
            node.next = prev
            # then the previous node becomes the current node
            prev = node
            # then the current node becomes the next node
            node = nextNode
        # the loop points all the nodes backwards while traversing then return the entire LL
        return self   



LL = SinglyLinkedList()

LL.push("Hello")
LL.push("GoodBye")
LL.push("wackV2")
LL.push("Hello")
LL.push("GoodBye")
LL.push("wackV2")
LL.push("Hello")
LL.push("GoodBye")
LL.push("wackV2")
# print(LL.pop().val)
LL.reverse()

while(LL.head):
    print(LL.head.val)
    LL.head = LL.head.next