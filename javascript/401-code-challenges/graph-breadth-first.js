'use strict';

class Graph {
  constructor() {
    this.nodes = [];
    this.adjacencyList = {};
  }

  // Add a node to the graph
  addNode(node) {
    this.nodes.push(node);
    this.adjacencyList[node] = [];
  }

  // Add an edge between two nodes
  addEdge(node1, node2) {
    this.adjacencyList[node1].push(node2);
    this.adjacencyList[node2].push(node1);
  }

  // Breadth-First Traversal
  breadthFirst(startNode) {
    const visited = new Set();
    const queue = [startNode];
    const result = [];

    visited.add(startNode);

    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

// Example usage
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
console.log(traversalResult);

