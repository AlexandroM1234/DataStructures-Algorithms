class Node:
    def __init__(self,val):
        self.val = val
        self.left = None
        self.right = None

class BinarySearchTree:
    """
    Time Complexity:
    This is best and average case assuming the binary search tree is balanced

    Insertion - O(log N) 

    Searching - O(log N)
    """
    def __init__(self):
        self.root = None

    # insert a new node into the BST
    def insert(self,val):
        # make the new node
        newNode = Node(val)
        # if there is no root the new node becomes the root
        if not self.root:
            self.root = newNode
            return self
        current = self.root
        # if there is a root we have to traverse the tree
        while current:
            # In case there are duplicate values return None
            if val == current.val: return None
            # if the value is less than the current value traverse the left sub tree
            if val < current.val:
                # if there is no left node on the current node the newNode becomes the current's left
                if not current.left:
                    current.left = newNode
                    return self
                # other wise keep traversing the left tree
                current = current.left
            # if the value is greater than the current value traverse the right subtree
            elif val > current.val:
                # if the current node has no right node the newNode becomes the current's right node
                if not current.right:
                    current.right = newNode
                    return self
                # otherwise keep traversing the right subtree
                current = current.right
                
   # find a value in the BST
    def find(self,val):
        # if there is no root there is no tree so return False
        if not self.root: return False
        current = self.root
        found = False
        # while there is a root and the value is not found
        while current and not found:
            # if the value is less than the current value traverse the left sub tree
            if val < current.val:
                current = current.left
            # if the value is greater than the current value traverse the right sub tree
            elif val > current.val:
                current = current.right
            else:
                # Now if the value isnt greater or less than the current value that means its equal to the value and we have found the node and can now exit the loop
                found = True
        # In the case the value is not found return None
        if not found: return None
        # And once the node is found return it
        return current

tree = BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

print(tree.find(7))