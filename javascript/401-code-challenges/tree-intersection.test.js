'use strict';

// Import the necessary dependencies
const { tree_intersection, Node } = require('./your_file_name'); // Replace 'your_file_name' with the actual file name containing the implementation

// Test case
describe('tree_intersection', () => {
  test('returns a set of common values between two binary trees', () => {
    // Create the binary trees
    const tree1 = new Node(1);
    tree1.left = new Node(2);
    tree1.right = new Node(3);
    tree1.left.left = new Node(4);
    tree1.left.right = new Node(5);

    const tree2 = new Node(1);
    tree2.left = new Node(6);
    tree2.right = new Node(3);
    tree2.left.left = new Node(4);
    tree2.left.right = new Node(7);

    // Call the function and store the result
    const result = tree_intersection(tree1, tree2);

    // Define the expected common values
    const expectedCommonValues = new Set([1, 3, 4]);

    // Assert that the result matches the expected common values
    expect(result).toEqual(expectedCommonValues);
  });
});
