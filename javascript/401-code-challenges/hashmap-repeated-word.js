'use strict';

function repeatedWord(str) {
  // Convert the string to lowercase and remove all non-alphabetic characters
  str = str.toLowerCase().replace(/[^a-z ]/g, '');

  // Split the string into an array of words
  const words = str.split(' ');

  // Create a Set to store the unique words we've seen so far
  const uniqueWords = new Set();

  // Loop through the words in the array
  for (let i = 0; i < words.length; i++) {
    // If we've already seen this word, return it
    if (uniqueWords.has(words[i])) {
      return words[i];
    } else {
      // Otherwise, add it to the Set of unique words
      uniqueWords.add(words[i]);
    }
  }

  // If no word is repeated, return an empty string
  return '';
}
