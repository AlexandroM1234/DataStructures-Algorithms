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
  // remove a node from the tail
  pop() {
    if (!this.head) return undefined;

    const prevTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = prevTail.prev;
      prevTail.prev = null;
      this.tail.next = null;
    }
    this.length -= 1;
    return prevTail;
  }
  // remove a node from the beginning of the DLL
  shift() {
    if (!this.head) return undefined;

    const prevHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = prevHead.next;
      prevHead.next = null;
      this.head.prev = null;
    }
    this.length -= 1;
    return prevHead;
  }
}

let DLL = new DoublyLinkedList();

DLL.push("First");
DLL.push("Middle");
DLL.push("END");
console.log(DLL.shift());
