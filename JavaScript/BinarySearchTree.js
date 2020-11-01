class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  /* 
  Time Complexity:
    Insertion - O(log N)
    Searching - O(log N)
  */

  constructor() {
    this.root = null;
  }
  // insert a node into the binary search tree
  insert(val) {
    // create the new node
    const newNode = new Node(val);
    // if there is no root the new node becomes the root
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    // if there are other nodes in the tree traverse the tree like a linked list
    let current = this.root;
    while (current) {
      // if the value inputed is less than the current value traverse the left subtree
      if (val === current.val) return undefined;
      if (val < current.val) {
        // if there is no left on the current node the new node becomes the current's left
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        // if there is a node  on the current's left that node becomes the new current and keeps traversing
        current = current.left;
      } // same process except the value is greater than the current's value and taverses the right subtree
      else if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // find a value in the binary search tree
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
console.log(tree.find(5));
console.log(tree);
