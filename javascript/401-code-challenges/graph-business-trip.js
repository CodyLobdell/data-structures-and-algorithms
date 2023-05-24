'use strict';

function businessTrip(graph, cities) {
  let cost = 0;

  // Check if the cities are in the graph
  for (let i = 0; i < cities.length - 1; i++) {
    const currentCity = cities[i];
    const nextCity = cities[i + 1];

    // Check if the current city is in the graph
    if (!graph.hasOwnProperty(currentCity)) {
      return null;
    }

    // Check if there is a direct flight between the current city and the next city
    if (!graph[currentCity].hasOwnProperty(nextCity)) {
      return null;
    }

    // Add the cost of the flight to the total cost
    cost += graph[currentCity][nextCity];
  }

  return cost;
}

