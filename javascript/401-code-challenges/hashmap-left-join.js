'use strict';

function leftJoin(synonyms, antonyms) {
  const result = {};

  // Iterate through the keys of the first hashmap
  for (let key in synonyms) {
    // Store the value from the first hashmap
    const synonymValue = synonyms[key];

    // Retrieve the corresponding value from the second hashmap
    const antonymValue = antonyms[key] || null;

    // Add the key-value pair to the result hashmap
    result[key] = [synonymValue, antonymValue];
  }

  return result;
}
