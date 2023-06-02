'use strict';

const findLargestProduct = require('./findLargestProduct'); // Assuming the function is in a separate file called 'findLargestProduct.js'

describe('findLargestProduct', () => {
  it('should identify the largest possible product of three numbers from an array', () => {
    expect(findLargestProduct([1, 2, 3, 4, 5])).toBe(60);
    expect(findLargestProduct([-10, -20, 1, 2, 3])).toBe(600);
    expect(findLargestProduct([5, 5, 5])).toBe(125);
    expect(findLargestProduct([0, 1, 2, 3])).toBe(6);
    expect(findLargestProduct([-1, -2, -3, -4, -5])).toBe(-6);
  });

  it('should throw an error if the array contains less than three integers', () => {
    expect(() => findLargestProduct([])).toThrow('Array must contain at least 3 integers');
    expect(() => findLargestProduct([1, 2])).toThrow('Array must contain at least 3 integers');
  });
});
