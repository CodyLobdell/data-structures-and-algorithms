'use strict';

const insertionSort = require('./insertionSort');

describe('insertionSort', () => {
  test('sorts an unsorted array of integers in ascending order', () => {
    const input = [8, 4, 23, 42, 16, 15];
    const expected = [4, 8, 15, 16, 23, 42];
    const sorted = insertionSort(input);
    expect(sorted).toEqual(expected);
  });

  test('sorts a sorted array of integers in ascending order', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    const sorted = insertionSort(input);
    expect(sorted).toEqual(expected);
  });

  test('sorts an array of duplicate integers in ascending order', () => {
    const input = [3, 2, 1, 2, 3, 1];
    const expected = [1, 1, 2, 2, 3, 3];
    const sorted = insertionSort(input);
    expect(sorted).toEqual(expected);
  });

  test('sorts an empty array of integers', () => {
    const input = [];
    const expected = [];
    const sorted = insertionSort(input);
    expect(sorted).toEqual(expected);
  });

  test('sorts an array with one element', () => {
    const input = [42];
    const expected = [42];
    const sorted = insertionSort(input);
    expect(sorted).toEqual(expected);
  });
});
