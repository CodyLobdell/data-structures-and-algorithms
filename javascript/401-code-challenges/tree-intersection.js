'use strict';

// Binary Tree Node
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// Hashmap implementation
class Hashmap {
  constructor() {
    this.map = {};
  }
  // Insert key-value pair into the hashmap
  insert(key, value) {
    this.map[key] = value;
  }
  // Check if the hashmap contains a key
  contains(key) {
    return this.map.hasOwnProperty(key);
  }
}
// Function to find common values in two binary trees
function tree_intersection(tree1, tree2) {
  const hashmap = new Hashmap();
  const commonValues = new Set();
  // Helper function to traverse a binary tree and store values in the hashmap
  function traverseAndStore(node) {
    if (node) {
      hashmap.insert(node.value, true);
      traverseAndStore(node.left);
      traverseAndStore(node.right);
    }
  }
  // Helper function to traverse a binary tree and check for common values in the hashmap
  function traverseAndCheck(node) {
    if (node) {
      if (hashmap.contains(node.value)) {
        commonValues.add(node.value);
      }
      traverseAndCheck(node.left);
      traverseAndCheck(node.right);
    }
  }
  // Store values from the first binary tree in the hashmap
  traverseAndStore(tree1);
  // Check for common values in the second binary tree and add them to the set
  traverseAndCheck(tree2);
  return commonValues;
}
