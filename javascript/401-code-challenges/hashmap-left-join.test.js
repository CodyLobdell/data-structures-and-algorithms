'use strict';

// Function definition
function leftJoin(synonyms, antonyms) {
  const result = {};

  for (let key in synonyms) {
    const synonymValue = synonyms[key];
    const antonymValue = antonyms[key] || null;
    result[key] = [synonymValue, antonymValue];
  }

  return result;
}

// Test case
const synonyms = {
  'happy': 'joyful',
  'sad': 'unhappy',
  'big': 'large'
};

const antonyms = {
  'happy': 'sad',
  'small': 'big',
  'good': 'bad'
};

const expectedResult = {
  'happy': ['joyful', 'sad'],
  'sad': ['unhappy', null],
  'big': ['large', null]
};

const result = leftJoin(synonyms, antonyms);

// Compare the actual result with the expected result
const isEqual = JSON.stringify(result) === JSON.stringify(expectedResult);

// Print the test result
console.log('Test Result:', isEqual);
