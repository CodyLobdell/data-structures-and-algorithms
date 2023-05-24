'use strict';

class AnimalShelter {
  constructor() {
    this.dogs = [];
    this.cats = [];
  }

  enqueue(animal) {
    if (animal.species === "dog") {
      this.dogs.push(animal);
    } else if (animal.species === "cat") {
      this.cats.push(animal);
    }
  }

  dequeue(pref) {
    if (pref !== "dog" && pref !== "cat") {
      return null;
    }
    if (pref === "dog" && this.dogs.length > 0) {
      return this.dogs.shift();
    } else if (pref === "cat" && this.cats.length > 0) {
      return this.cats.shift();
    } else {
      // if there are no animals of the requested type, return null
      return null;
    }
  }
}
