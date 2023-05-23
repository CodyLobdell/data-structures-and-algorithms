'use strict';

const graph = {
  "City A": { "City B": 100, "City C": 200 },
  "City B": { "City C": 50, "City D": 150 },
  "City C": { "City D": 250 },
  "City D": { "City E": 350 }
};

const cities = ["City A", "City B", "City C", "City D", "City E"];
const tripCost = businessTrip(graph, cities);

console.log(tripCost);  // Output: 950
