'use strict';

const Graph = require('./graph'); // Assuming the code is in a separate file called "graph.js"

describe('Graph depth-first pre-order traversal', () => {
  test('should perform depth-first pre-order traversal correctly', () => {
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('D', 'E');

    const traversalOrder = graph.depthFirstTraversal('A');

    expect(traversalOrder).toEqual(['A', 'B', 'D', 'E', 'C']);
  });
});
