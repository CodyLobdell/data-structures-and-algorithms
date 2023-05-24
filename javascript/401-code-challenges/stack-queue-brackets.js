'use strict';

function validateBrackets(str) {
  let stack = [];
  const openBrackets = ['(', '{', '['];
  const closeBrackets = [')', '}', ']'];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      const matchingOpenBracket = openBrackets[closeBrackets.indexOf(char)];
      if (stack.length === 0 || stack[stack.length - 1] !== matchingOpenBracket) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

