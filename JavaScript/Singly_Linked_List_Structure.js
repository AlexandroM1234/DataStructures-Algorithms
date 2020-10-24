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
    const newNode = new Node(val);
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
  // remove from the tail
  pop() {
    // if there is no head return undefined because there are no nodes in the LL
    if (!this.head) return undefined;
    else {
      // have 2 pointers that begin at the head
      let current = this.head;
      let newTail = current;
      // traverse the linked list while there is a next node
      while (current.next) {
        // have the newTail be 1 node behind the current
        newTail = current;
        // the current node is always traversing 1 node faster than the new tail
        current = current.next;
      }
      // once we reach a point where there is no current.next and the newTail is one behind current
      //the LL.tail changes to the newTail node that is one behind the very end
      this.tail = newTail;
      // Then remove the refrence of the previous tail's next so that newTail truely becomes the end of the LL
      this.tail.next = null;
      // decrement the length of the LL and return the previous LL.tail that we replaced
      this.length -= 1;
      // special case if there is one thing left in the linked list to set both head and tail to null
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }
}

const list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
// list.push("GOODBYE");
// list.push("GOODBYE");
// list.push("GOODBYE");
// // list.push("Wack");

console.log(list);
console.log(list.pop());
console.log(list);
