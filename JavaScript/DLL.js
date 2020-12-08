class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  /* 
  Time Complexity:
    Insertion = O(1)
    Removal = O(1)
    Searching =  O(N)
    Access  = O(N)
  Most of the logic is the same as the SLL except dealing with the extra prev point
  */
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /**
   *  Adds a new Node at then end of the DLL
   * @param {*} val
   */
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
  /**
   * Remove a node from the tail
   */
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
  /**
   * Remove a node from the beginning of the DLL
   */
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
  /**
   * Add a node at the beginning of the DLL
   * @param {*} val
   */
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
  /**
   * Get a value at a given index
   * @param {*} index
   */
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
  /**
   * Get a node and set a new value to it
   * @param {*} index
   * @param {*} val
   */
  set(index, val) {
    let node = this.get(index);
    if (!node) return null;
    node.val = val;
    return node;
  }
  /**
   * Insert a node given an index and value
   * @param {*} index
   * @param {*} val
   */
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
      let after = prev.next;

      prev.next = newNode;
      newNode.prev = prev;
      newNode.next = after;
      after.prev = newNode;
      this.length += 1;
      return true;
    }
  }
  /**
   * Remove a node from a certain index
   * @param {*} index
   */
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let before = this.get(index - 1);
      let remove = before.next;
      let after = remove.next;

      before.next = after;
      after.prev = before;

      remove.prev = null;
      remove.next = null;

      this.length -= 1;
      return remove;
    }
  }
}

let DLL = new DoublyLinkedList();

DLL.push("First");
DLL.push("Middle");
DLL.push("END");
DLL.push("newENd");
console.log(DLL.remove(3));
console.log(DLL);
// while (DLL.head) {
//   console.log(DLL.head.val);
//   DLL.head = DLL.head.next;
// }
