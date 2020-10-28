class Node:
    def __init__(self,val):
        self.val = val
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0
    
    def push(self,val):
        newNode = Node(val)
        if not self.head:
            self.head = newNode
            self.tail = self.head
        else:
            curTail = self.tail
            curTail.next = newNode
            newNode.prev = curTail
            self.tail = newNode
        self.length += 1
        return self

    def pop(self):
        if not self.head: return None
        prevTail = self.tail
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.tail = prevTail.prev
            prevTail.prev = None
            self.tail.next = None
        self.length -= 1
        return prevTail
    
    def shift(self):
        if not self.head: return None
        prevHead = self.head
        if self.length == 1:
            self.head = None
            self.tail = None
        else:
            self.head = prevHead.next
            prevHead.next = None
            prevHead.prev = None
        self.length -= 1
        return prevHead

    def unshift(self,val):
        newHead = Node(val)
        if not self.head:
            self.head = newHead
            self.tail = self.head
        else:
            self.head.prev = newHead
            newHead.next = self.head
            self.head = newHead
        self.length += 1
        return self

    def get(self,index):
        if index < 0 or index >= self.length: return None
        current = None
        half = self.length / 2
        if index < half:
            counter = 0
            current = self.head
            while counter != index:
                current = current.next
                counter += 1
        else:
            counter = self.length - 1
            current = self.tail
            while counter != index:
                current = current.prev
                counter -= 1
        return current

    def setNode(self,index,val):
        node = self.get(index)
        if not node: return None
        node.val = val
        return node
    
    def insert(self,index,val):
        if index < 0 or index > self.length: return False

        if index == 0:
            self.unshift(val)
            return True
        elif index == self.length:
            self.push(val)
            return True
        else:
            newNode = Node(val)
            prev = self.get(index-1)
            after = prev.next

            prev.next = newNode
            newNode.prev = prev
            newNode.next = after
            after.prev = newNode
            self.length += 1
            return True

    def remove(self,index):
        if index < 0 or index >= self.length: return None

        if index == 0:
            return self.shift()
        elif index == self.length - 1:
            return self.pop()

        else:
            before = self.get(index-1)
            remove = before.next
            after = remove.next

            before.next = after
            after.prev = before

            remove.prev = None
            remove.next = None

            self.length -= 1
            return remove


DLL = DoublyLinkedList()

DLL.push("val")
DLL.push("val2")
DLL.push("val3")
print(DLL.setNode(1,"newval"))
while DLL.head:
    print(DLL.head.val)
    DLL.head = DLL.head.next
