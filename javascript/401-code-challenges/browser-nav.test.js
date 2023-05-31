'use strict';

const Navigator = require('./Navigator');

describe('Navigator', () => {
  let navigator;

  beforeEach(() => {
    navigator = new Navigator();
  });

  test('should navigate back and forward correctly', () => {
    navigator.go('Home');
    navigator.go('About');
    navigator.go('Contact');

    expect(navigator.back()).toBe('About');
    expect(navigator.forward()).toBe('Contact');
    expect(navigator.forward()).toBe(null);
    expect(navigator.back()).toBe('About');
  });
});
