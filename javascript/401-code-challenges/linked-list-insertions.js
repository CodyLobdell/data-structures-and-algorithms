'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  append(data) {
    let newLastNode = new Node(data);
    if (this.head === null) {
      this.head = newLastNode;
    } else {
      let current = this.head;
      while (current !== null) {
        if (current.next === null) {
          return current.next = newLastNode;
        }
        current = current.next;
      }

    }
  }
  insert(data) {

    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertBefore(old, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);
    let preNode = {};
    while (current) {
      if (this.head.value === old) {
        newNode.next = current;
        return this.head = newNode;
      } else if (current.value === old) {
        preNode.next = newNode;
        return newNode.next = current;
      } else {
        preNode = current;
        current = current.next;
      }
    }
  }

  insertAfter(old, newVal) {
    let current = this.head;
    let newNode = new Node(newVal);
    while (current) {
      if (current.value === old) {
        newNode.next = current.next;
        return current.next = newNode;
      } else {
        current = current.next;
      }
    }
  }

  toString() {
    // return string "{ a } -> { b } -> { c } -> NULL
    let current = this.head;
    let arr = [];

    while (current !== null) {
      let currentVal = current.value;
      arr.push('{ ' + currentVal + ' }');
      current = current.next;
    }
    arr.push('NULL');
    let str = arr.join(' -> ');
    return str;
  }

}

module.exports = LinkedList;
