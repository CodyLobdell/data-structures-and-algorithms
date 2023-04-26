'use strict';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

function fizzBuzzTree(tree) {
  if (!tree) {
    return null;
  }

  const fizzBuzzValue = (value) => {
    if (value % 3 === 0 && value % 5 === 0) {
      return 'FizzBuzz';
    } else if (value % 3 === 0) {
      return 'Fizz';
    } else if (value % 5 === 0) {
      return 'Buzz';
    } else {
      return value.toString();
    }
  };

  const newTree = new TreeNode(fizzBuzzValue(tree.value));

  for (let i = 0; i < tree.children.length; i++) {
    const child = fizzBuzzTree(tree.children[i]);
    newTree.children.push(child);
  }

  return newTree;
}
