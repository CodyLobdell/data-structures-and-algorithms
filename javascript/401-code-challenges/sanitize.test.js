'use strict';

function sanitizeUrl(url) {
  let sanitizedUrl = '';

  for (let i = 0; i < url.length; i++) {
    if (url[i] === ' ') {
      sanitizedUrl += '%20';
    } else {
      sanitizedUrl += url[i];
    }
  }

  return sanitizedUrl;
}
// Test Case
const url = 'https://example.com/my page';
const sanitized = sanitizeUrl(url);
console.log('Original URL:', url);
console.log('Sanitized URL:', sanitized);
