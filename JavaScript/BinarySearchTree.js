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
    This is best and average case assuming the binary search tree is balanced
    Insertion - O(log N) 
    Searching - O(log N)
  */

  constructor() {
    this.root = null;
  }
  /**
   * Insert a node into the binary search tree
   * @param {*} val
   */
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
  /**
   * Find a value in the binary search tree
   * @param {*} val

   */
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
  /**
   * Traverse every node row by row
   */
  BFS() {
    let q = [];
    let visited = [];
    let current = this.root;
    q.push(this.root);

    while (q.length) {
      current = q.shift();
      visited.push(current.val);
      if (current.left) q.push(current.left);
      if (current.right) q.push(current.right);
    }
    return visited;
  }

  /**
   *  Traverse the tree by going parent left right
   */
  DFSPreOrder() {
    let visited = [];

    const traverse = (node) => {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }
  /**
   * Traverse the tree by going left right parent
   */
  DFSPostOrder() {
    let visited = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    };
    traverse(this.root);
    return visited;
  }
  /**
   * Traverse the tree by going left parent right
   */
  DFSInOrder() {
    let visited = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return visited;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFSInOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSPreOrder());
