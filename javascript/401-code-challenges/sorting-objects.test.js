'use strict';

describe('mergeSort', () => {
  test('sorts an array in ascending order', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    mergeSort(arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('handles an empty array', () => {
    const arr = [];
    mergeSort(arr);
    expect(arr).toEqual([]);
  });

  test('handles an array with one element', () => {
    const arr = [1];
    mergeSort(arr);
    expect(arr).toEqual([1]);
  });

  test('handles an array with duplicate elements', () => {
    const arr = [4, 2, 8, 2, 7];
    mergeSort(arr);
    expect(arr).toEqual([2, 2, 4, 7, 8]);
  });

  test('handles a large array', () => {
    const arr = [];
    for (let i = 0; i < 1000; i++) {
      arr.push(Math.floor(Math.random() * 1000));
    }
    const sortedArr = [...arr].sort((a, b) => a - b);
    mergeSort(arr);
    expect(arr).toEqual(sortedArr);
  });
});
