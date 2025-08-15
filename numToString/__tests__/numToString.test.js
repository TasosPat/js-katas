const numToString = require('../numToString');

describe('numToString', () => {
    test('check if a single digit number like 5 is returned as a string', () => {
        const actual = 5;
        const expected = "5";
        expect(numToString(actual)).toBe(expected);
    });
    test('check if a double digit number like 15 is returned as a string', () => {
        const actual = 15;
        const expected = "15";
        expect(numToString(actual)).toBe(expected);
    });
    test('if given a number as a string, ensure the same result is returned', () => {
        const actual = "5";
        expect(numToString(actual)).toBe(actual);
    });
  });