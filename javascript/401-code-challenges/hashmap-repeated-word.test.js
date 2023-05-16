'use strict';

describe('repeatedWord', () => {
  it('should return the first repeated word in a string', () => {
    const str1 = 'The quick brown fox jumps over the lazy dog';
    const str2 = 'The quick brown fox jumps over the quick dog';
    const str3 = 'Hello, world!';
    const str4 = 'This is a test string with no repeated words';

    expect(repeatedWord(str1)).toBe('the');
    expect(repeatedWord(str2)).toBe('quick');
    expect(repeatedWord(str3)).toBe('');
    expect(repeatedWord(str4)).toBe('');
  });
});
