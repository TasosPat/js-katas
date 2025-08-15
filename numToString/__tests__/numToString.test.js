const numToString = require('../numToString');

describe('numToString', () => {
    test('check if a single digit number like 5 is returned as a string', () => {
        const actual = 5;
        const expected = "5";
        expect(numToString(actual)).toBe(expected);
    });
  });