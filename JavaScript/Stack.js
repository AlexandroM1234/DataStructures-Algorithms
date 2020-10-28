// Stacks can be made with an array my using push and pop and using LIFO(Last In first Out)
let stack = [];

stack.push("FIRST");
stack.push("SEC");
stack.push("THIRD");

stack.pop();

// console.log(stack);

// Stacks are just a abstract DS and can be implemented with a Linked List instead of an Array
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  // Time Complexity
  // Insertion = O(1)
  // Removal = O(1)
  // Search = O(N)
  // Access = O(N)
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add a new node to the top of the stack
  push(val) {
    // create a new node
    let newNode = new Node(val);
    // if there is no first the new node becomes the first and the last
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      // if there is a first already the new node becomes the new first
      let first = this.first;
      this.first = newNode;
      // after the new Node is made the first the first next is the prev first
      this.first.next = first;
    }
    // increment and return the size
    return ++this.size;
  }

  // whatever the first node is it's gonna be the first one to be popped
  pop() {
    // if there is no first there is no stack
    if (!this.first) return null;
    let temp = this.first;
    // if the first is the last make both null
    if (this.first === this.last) {
      this.last = null;
    }
    // make the new first the current first's next and then decrement the size and return the previous first's value
    this.first = this.first.next;
    this.size -= 1;
    return temp.val;
  }
}

const s = new Stack();

console.log(s.push("FIRST"));
console.log(s.push("Second"));
console.log(s.push("Thirrd"));
// console.log(s.pop());
// console.log(s.pop());
// console.log(s.pop());

console.log(s);
