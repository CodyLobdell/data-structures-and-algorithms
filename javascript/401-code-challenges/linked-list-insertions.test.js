'use strict';

const { LinkedList } = require('./LinkedList');

describe('LinkedList', () => {
  describe('append', () => {
    it('should add a new node to the end of an empty list', () => {
      const list = new LinkedList();
      list.append(1);
      expect(list.head.value).toBe(1);
      expect(list.tail.value).toBe(1);
      expect(list.length).toBe(1);
    });

    it('should add a new node to the end of a non-empty list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      expect(list.head.value).toBe(1);
      expect(list.tail.value).toBe(2);
      expect(list.length).toBe(2);
    });
  });
});
