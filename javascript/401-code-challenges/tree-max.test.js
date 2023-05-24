'use strict';

describe('BinaryTree', () => {
  describe('findMaxValue', () => {
    it('returns the maximum value stored in the tree', () => {
      const tree = new BinaryTree();
      tree.root = new Node(5);
      tree.root.left = new Node(3);
      tree.root.right = new Node(8);
      tree.root.left.left = new Node(2);
      tree.root.left.right = new Node(4);
      tree.root.right.left = new Node(7);
      tree.root.right.right = new Node(9);
      expect(tree.findMaxValue()).toBe(9);
    });
    it('returns null if the tree is empty', () => {
      const tree = new BinaryTree();
      expect(tree.findMaxValue()).toBeNull();
    });
  });
});



