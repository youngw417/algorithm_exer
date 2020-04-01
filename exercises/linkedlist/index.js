// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(record) {
    this.head = new Node(record, this.head);
  }

  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) return null;
    // let node = this.head;
    // while (node) {
    //   if (!node.next) return node;

    //   node = node.next;
    // }
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    // if (!this.head) {
    //   this.head = new Node(data);
    //   return;
    // }
    // this.getLast().next = new Node(data);

    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) return node;
      node = node.next;
      counter++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.getAt(index)) return;
    if (index === 0) {
      this.removeFirst();
      return;
    }

    this.getAt(index - 1).next = this.getAt(index).next;
  }
  insertAt(data, index) {
    //   if (!this.head || index === 0) {
    //     this.insertFirst(data);
    //     return;
    //   }

    //   if (!this.getAt(index)) {
    //     this.insertLast(data);
    //     return;
    //   }

    //   const node1 = this.getAt(index - 1).next;
    //   this.getAt(index - 1).next = new Node(data, node1);

    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    //   for (let i = 0; i < this.size(); i++) {
    //     fn(this.getAt(i), i);
    //   }

    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
}

// const list = new LinkedList();
// list.head = new Node(10);

module.exports = { Node, LinkedList };
