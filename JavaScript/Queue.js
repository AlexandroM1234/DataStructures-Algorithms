// Queues are basically stacks except they go FIFO (First in First out)
let queue = [];

queue.push("ALEX");
queue.push("ALEX2");
queue.push("ALEX3");

// Keep in mind removing from the beginning would reindex everything and would be O(N) time complexity
queue.shift();
// console.log(queue);

// Now from scratch with a LL
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.first = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return temp.val;
  }
}

const q = new Queue();

q.enqueue("1st");
q.enqueue("2nd");
q.enqueue("3rd");

console.log(q);
console.log(q.dequeue());
console.log(q);
