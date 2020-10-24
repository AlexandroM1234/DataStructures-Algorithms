// Define a node with a value and a next pointer
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  //Linked List has a head tail and length
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Add a node to the linked list
  push(val) {
    // create a new node with a given value
    var newNode = new Node(val);
    // if the LL is empty it becomes the head and the tail
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // if the LL is not empty
      // The tails next pointer points to  the new node
      this.tail.next = newNode;
      // then the tail is the new node
      this.tail = newNode;
    }
    // after everthing increment the length and return the LL
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
console.log(list);
