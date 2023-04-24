'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  findMaxValue() {
    if (!this.root) {
      return null;
    }
    let maxValue = this.root.value;
    const traverse = (node) => {
      if (!node) {
        return;
      }
      if (node.value > maxValue) {
        maxValue = node.value;
      }
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    return maxValue;
  }
}
