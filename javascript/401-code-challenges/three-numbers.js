'use strict';

function findLargestProduct(numbers):
  if numbers.length < 3:
throw error "Array must contain at least 3 integers"

    Sort the numbers array in descending order

product1 = numbers[0] * numbers[1] * numbers[2] // Product of three largest numbers
product2 = numbers[0] * numbers[length - 1] * numbers[length - 2] // Product of largest number and two smallest numbers

return max(product1, product2)
