'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const node = new Node(value);

    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if (!this.top) {
      return null;
    }

    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek() {
    if (!this.top) {
      return null;
    }

    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}


class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return value;
  }

  peek() {
    if (!this.head) {
      return null;
    }

    return this.head.value;
  }

  isEmpty() {
    return !this.head;
  }
}
