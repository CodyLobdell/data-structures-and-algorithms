'use strict';

const { Stack, Queue } = require('./stack-queue');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('pushing and popping values from stack', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.pop()).toBe(3);
    expect(stack.peek()).toBe(2);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.pop()).toBe(null);
  });

  test('peeking at an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBe(null);
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('enqueueing and dequeuing values from queue', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
    expect(queue.dequeue()).toBe(1);
    expect(queue.peek()).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.dequeue()).toBe(null);
  });

  test('peeking at an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBe(null);
  });
});
