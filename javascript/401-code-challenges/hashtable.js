'use strict';

class Hashtable {
  constructor() {
    this.table = new Array(137);
  }
  hash(string) {
    const H = 37;
    let total = 0;
    for (let i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
      total += this.table.length - 1;
    }
    return parseInt(total);
  }
  set(key, value) {
    const position = this.hash(key);
    if (this.table[position] === undefined) {
      this.table[position] = { key, value };
    } else {
      let index = position;
      while (this.table[index] !== undefined && this.table[index].key !== key) {
        index++;
      }
      this.table[index] = { key, value };
    }
  }
  get(key) {
    const position = this.hash(key);
    if (this.table[position] === undefined) {
      return undefined;
    }
    let index = position;
    while (this.table[index] !== undefined && this.table[index].key !== key) {
      index++;
    }
    if (this.table[index] === undefined) {
      return undefined;
    }
    return this.table[index].value;
  }
  has(key) {
    const position = this.hash(key);
    if (this.table[position] === undefined) {
      return false;
    }
    let index = position;
    while (this.table[index] !== undefined && this.table[index].key !== key) {
      index++;
    }
    if (this.table[index] === undefined) {
      return false;
    }
    return true;
  }
  keys() {
    const keys = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] !== undefined) {
        keys.push(this.table[i].key);
      }
    }
    return keys;
  }
}
