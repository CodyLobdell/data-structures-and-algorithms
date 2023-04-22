'use strict';

// Import the assert module
const assert = require('assert');

// Test the validateBrackets function
describe('validateBrackets', () => {
  it('should return true for a string with balanced brackets', () => {
    assert.strictEqual(validateBrackets('([]{})'), true);
  });

  it('should return false for a string with unbalanced brackets', () => {
    assert.strictEqual(validateBrackets('([)]'), false);
  });

  it('should return true for a string with no brackets', () => {
    assert.strictEqual(validateBrackets('hello world'), true);
  });

  it('should return true for a string with nested balanced brackets', () => {
    assert.strictEqual(validateBrackets('([{}])'), true);
  });

  it('should return false for a string with nested unbalanced brackets', () => {
    assert.strictEqual(validateBrackets('([{}]}'), false);
  });
});
