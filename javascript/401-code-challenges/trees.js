'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Depth first traversal methods
  preOrder() {
    const values = [];
    const traverse = (node) => {
      if (node) {
        values.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return values;
  }

  inOrder() {
    const values = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        values.push(node.value);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return values;
  }

  postOrder() {
    const values = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        values.push(node.value);
      }
    };
    traverse(this.root);
    return values;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        // Value already exists in the tree
        return;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}
