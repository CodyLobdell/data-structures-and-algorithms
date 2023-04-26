'use strict';

const { expect } = require('@jest/globals');
const Tree = require('./tree');
const breadth_first = require('./breadth_first');

describe('breadth_first', () => {
  test('returns an array of all values in the tree, in the order they were encountered', () => {

    const tree = new Tree(1);
    tree.left = new Tree(2);
    tree.right = new Tree(3);
    tree.left.left = new Tree(4);
    tree.left.right = new Tree(5);
    tree.right.left = new Tree(6);
    tree.right.right = new Tree(7);

    expect(values).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
