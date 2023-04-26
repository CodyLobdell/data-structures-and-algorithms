'use strict';

const { TreeNode, fizzBuzzTree } = require('./fizzBuzzTree');

describe('fizzBuzzTree', () => {
  test('returns null for falsy input', () => {
    expect(fizzBuzzTree(null)).toBeNull();
  });

  test('returns a new tree with modified values', () => {
    // Create a sample tree
    const root = new TreeNode(1);
    const child1 = new TreeNode(3);
    const child2 = new TreeNode(5);
    const child3 = new TreeNode(15);
    const child4 = new TreeNode(7);
    root.children = [child1, child2, child3, child4];

    // Expected output tree
    const expectedRoot = new TreeNode('1');
    const expectedChild1 = new TreeNode('Fizz');
    const expectedChild2 = new TreeNode('Buzz');
    const expectedChild3 = new TreeNode('FizzBuzz');
    const expectedChild4 = new TreeNode('7');
    expectedRoot.children = [expectedChild1, expectedChild2, expectedChild3, expectedChild4];

    // Test the function with the sample tree
    const result = fizzBuzzTree(root);

    // Compare the expected and actual output trees
    expect(result).toEqual(expectedRoot);
  });
});
