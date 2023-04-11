'use strict';

const LinkedList = require('../index');

describe('Testing the Linked List data structure', () => {
  test('Can successfully instantiate an empty linked list', () => {
    let newLinkedList = new LinkedList();
    expect(newLinkedList.head).toBe(null);
  });

  test('Can properly insert into the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    expect(newLinkedList.head.value).toEqual(1);
  });

  test('Can successfully add a node to the end of the linked list', () => {

    let newLinkedList = new LinkedList();
    newLinkedList.append(1);
    expect(newLinkedList.head.value).toEqual(1);
  });

  test('Can successfully add multiple nodes to the end of a linked list', () => {

    let newLinkedList = new LinkedList();
    newLinkedList.append(1);
    expect(newLinkedList.head.value).toEqual(1);
    newLinkedList.append(2);
    expect(newLinkedList.head.next.value).toEqual(2);
  });


  test('The head property will properly point to the first node in the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.append(1);
    expect(newLinkedList.head.value).toBe(1);
  });

  test('Can properly insert multiple nodes into the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.insert(1);
    newLinkedList.insert(2);
    expect(newLinkedList.head.value).toEqual(2);
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.append(1);
    let ans = newLinkedList.includes(1);
    expect(ans).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.append(1);
    let ans = newLinkedList.includes(2);
    expect(ans).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.append(1);
    newLinkedList.append(2);
    let str = newLinkedList.toString();
    expect(str).toEqual('{ 1 } -> { 2 } -> NULL');
  });

  test('Can successfully insert a node before a node located i the middle of a linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.append(1);
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    newLinkedList.append(5);
    newLinkedList.insertBefore(3, 9);
    let str = newLinkedList.toString();
    expect(str).toEqual('{ 1 } -> { 2 } -> { 9 } -> { 3 } -> { 4 } -> { 5 } -> NULL');
  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.append(1);
    newLinkedList.append(2);
    newLinkedList.insertBefore(1, 9);
    let str = newLinkedList.toString();
    expect(str).toEqual('{ 9 } -> { 1 } -> { 2 } -> NULL');
  });

  test('Can successfully insert after a node in the middle of the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.append(1);
    newLinkedList.append(2);
    newLinkedList.append(3);
    newLinkedList.append(4);
    newLinkedList.insertAfter(3, 9);
    let str = newLinkedList.toString();
    expect(str).toEqual('{ 1 } -> { 2 } -> { 3 } -> { 9 } -> { 4 } -> NULL');
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    let newLinkedList = new LinkedList();
    newLinkedList.append(1);
    newLinkedList.append(2);
    newLinkedList.insertAfter(2, 9);
    let str = newLinkedList.toString();
    expect(str).toEqual('{ 1 } -> { 2 } -> { 9 } -> NULL');
  });
});

