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
  // add a node at the beginning of the DLL
  unshift(val) {
    const newHead = new Node(val);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length += 1;
    return this;
  }
  // get a value at a given index
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current;
    const half = this.length / 2;
    if (index < half) {
      let counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter += 1;
      }
    } else {
      let counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter -= 1;
      }
    }

    return current;
  }
  // get a node and set a new value to it
  set(index, val) {
    let node = this.get(index);
    if (!node) return null;
    node.val = val;
    return node;
  }
  // insert a node given an index and value
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    } else if (index === this.length) {
      this.push(val);
      return true;
    } else {
      let newNode = new Node(val);
      let prev = this.get(index - 1);
      let temp = prev.next;
      prev.next = newNode;
      newNode.prev = prev;
      newNode.next = temp;
      temp.prev = newNode;
      return true;
    }
  }
}

let DLL = new DoublyLinkedList();

DLL.push("First");
DLL.push("Middle");
DLL.push("END");
DLL.push("newENd");
console.log(DLL.insert(3, "New end"));

while (DLL.head) {
  console.log(DLL.head.val);
  DLL.head = DLL.head.next;
}
