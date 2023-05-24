'use strict';

const assert = require('assert');

// Create a new PseudoQueue
const queue = new PseudoQueue();

// Test enqueue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// Test dequeue
assert.equal(queue.dequeue(), 1);
assert.equal(queue.dequeue(), 2);
assert.equal(queue.dequeue(), 3);

// Test enqueue and dequeue mixed
queue.enqueue(4);
queue.enqueue(5);
assert.equal(queue.dequeue(), 4);
queue.enqueue(6);
assert.equal(queue.dequeue(), 5);
assert.equal(queue.dequeue(), 6);

console.log('All tests passed!');
