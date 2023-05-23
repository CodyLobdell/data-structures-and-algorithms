'use strict';

// Create a new instance of the Graph class
const graph = new Graph();

// Add nodes
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');

// Perform breadth-first traversal from 'A'
const traversalResult = graph.breadthFirst('A');

// Expected output: ['A', 'B', 'C', 'D', 'E']
console.log(traversalResult);
