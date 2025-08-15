const humanReadable = require('../humanReadable');

describe('humanReadable', () => {
    test('check that the expected value is returned for 0 seconds', () => {
        const actual = 0;
        const expected = "00:00:00";
        expect(humanReadable(actual)).toBe(expected);
    });
    test('check that the expected value is returned for 59 seconds', () => {
        const actual = 59;
        const expected = "00:00:59";
        expect(humanReadable(actual)).toBe(expected);
    });
    test('check that the expected value is returned for 60 seconds', () => {
        const actual = 60;
        const expected = "00:01:00";
        expect(humanReadable(actual)).toBe(expected);
    });
  });