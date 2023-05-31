'use strict';

class Navigator {
  constructor() {
    this.history = [];
    this.currentIndex = -1;
  }

  back() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.history[this.currentIndex];
    }
    return null;
  }

  forward() {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++;
      return this.history[this.currentIndex];
    }
    return null;
  }

  go(location) {
    this.history = this.history.slice(0, this.currentIndex + 1);
    this.history.push(location);
    this.currentIndex++;
  }
}
