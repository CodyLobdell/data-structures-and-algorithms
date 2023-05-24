'use strict';

// Create a graph
const graph = new Graph();

// Add nodes
const node1 = graph.addNode('A');
const node2 = graph.addNode('B');
const node3 = graph.addNode('C');

// Add edges
graph.addEdge(node1, node2, 3);
graph.addEdge(node1, node3, 4);
graph.addEdge(node2, node3, 2);

// Get nodes
console.log(graph.getNodes()); // [Node { value: 'A' }, Node { value: 'B' }, Node { value: 'C' }]

// Get neighbors of a node
console.log(graph.getNeighbors(node1)); // [Edge { node: Node { value: 'B' }, weight: 3 }, Edge { node: Node { value: 'C' }, weight: 4 }]

// Get the size of the graph
console.log(graph.size()); // 3
