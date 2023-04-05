'use strict';

function insertShift(arr, val) {
  const n = arr.length;
  const mid = Math.floor(n / 2);
  for (let i = n - 1; i > mid; i--) {
    arr[i] = arr[i - 1];
  }
  arr[mid] = val;
  return arr;
}
