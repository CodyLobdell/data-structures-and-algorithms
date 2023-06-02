'use strict';

const integerToRoman = require('./integerToRoman');

// Assuming the function is in a separate file called 'integerToRoman.js'

describe('integerToRoman', () => {
  it('should convert an integer to its Roman numeral equivalent', () => {
    expect(integerToRoman(1234)).toBe('MCCXXXIV');
    expect(integerToRoman(3999)).toBe('MMMCMXCIX');
    expect(integerToRoman(9)).toBe('IX');
    expect(integerToRoman(49)).toBe('XLIX');
    expect(integerToRoman(2021)).toBe('MMXXI');
  });
});
