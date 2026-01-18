const { isPrime } = require('./isPrime');

describe('Prime Number Tests', () => {

  test('return true for prime number', () => {
    expect(isPrime(7)).toBe(true);
  });

  test('return false for non-prime number', () => {
    expect(isPrime(10)).toBe(false);
  });

});
