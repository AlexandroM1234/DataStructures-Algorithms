class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // adds a new Node at then end of the DLL
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const curTail = this.tail;
      curTail.next = newNode;
      newNode.prev = curTail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
}

let DLL = new DoublyLinkedList();

DLL.push("First");
DLL.push("Middle");
DLL.push("Last");

console.log(DLL);
