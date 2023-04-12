'use strict';

const Node = require('./node');

describe('Node', () => {
  test('should create a node with the given value and null next pointer', () => {
    const node = new Node(42);
    expect(node.value).toBe(42);
    expect(node.next).toBe(null);
  });
});
