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
