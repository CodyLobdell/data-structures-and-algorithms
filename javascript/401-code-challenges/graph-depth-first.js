'use strict';

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  depthFirstTraversal(startVertex) {
    const visited = {};
    const result = [];

    const dfs = (vertex) => {
      if (!vertex) return;

      visited[vertex] = true;
      result.push(vertex);

      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
    };

    dfs(startVertex);

    return result;
  }
}

// Example usage:
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

console.log(graph.depthFirstTraversal('A')); // Output: ['A', 'B', 'D', 'E', 'C']
