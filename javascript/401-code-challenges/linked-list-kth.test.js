'use strict';

const LinkedList = require('./LinkedList');

describe('LinkedList', () => {
  describe('kthFromEnd', () => {
    test('returns the value k nodes from the end of the list', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      list.append(4);
      list.append(5);
      expect(list.kthFromEnd(2)).toBe(3);
    });

    test('returns null if k is out of bounds', () => {
      const list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
      expect(list.kthFromEnd(3)).toBeNull();
    });
  });
});
