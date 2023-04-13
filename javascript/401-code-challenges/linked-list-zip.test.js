'use strict';

const { LinkedList, Node } = require('./LinkedList');
const zipLists = require('./zipLists');
describe('zipLists', () => {
  test('zips two linked lists together', () => {
    const list1 = new LinkedList();
    list1.addToTail(1);
    list1.addToTail(3);
    list1.addToTail(5);
    const list2 = new LinkedList();
    list2.addToTail(2);
    list2.addToTail(4);
    list2.addToTail(6);
    list2.addToTail(8);
    const zipped = zipLists(list1, list2);
    expect(zipped.head.value).toBe(1);
    expect(zipped.head.next.value).toBe(2);
    expect(zipped.head.next.next.value).toBe(3);
    expect(zipped.head.next.next.next.value).toBe(4);
    expect(zipped.head.next.next.next.next.value).toBe(5);
    expect(zipped.head.next.next.next.next.next.value).toBe(6);
    expect(zipped.head.next.next.next.next.next.next.value).toBe(8);
    expect(zipped.head.next.next.next.next.next.next.next).toBeNull();
  });
  test('handles empty input lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();
    const zipped = zipLists(list1, list2);
    expect(zipped.head).toBeNull();
  });
  test('handles uneven input lists', () => {
    const list1 = new LinkedList();
    list1.addToTail(1);
    list1.addToTail(3);
    const list2 = new LinkedList();
    list2.addToTail(2);
    list2.addToTail(4);
    list2.addToTail(6);
    list2.addToTail(8);
    const zipped = zipLists(list1, list2);
    expect(zipped.head.value).toBe(1);
    expect(zipped.head.next.value).toBe(2);
    expect(zipped.head.next.next.value).toBe(3);
    expect(zipped.head.next.next.next.value).toBe(4);
    expect(zipped.head.next.next.next.next.value).toBe(6);
    expect(zipped.head.next.next.next.next.next.value).toBe(8);
    expect(zipped.head.next.next.next.next.next.next).toBeNull();
  });
});
