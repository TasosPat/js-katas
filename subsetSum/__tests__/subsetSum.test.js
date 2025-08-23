const subsetSum = require('../subsetSum');

describe('subsetSum', () => {
    test('check it returns an empty array when target is 0', () => {
        const xs = [1,2,3];
        const target = 0;
        const result = [];
        expect(subsetSum(xs, target)).toEqual(result);
    });
    test('check it returns null when the set is an empty array and the target not equal to 0', () => {
        const xs = [];
        const target = 3;
        const result = null;
        expect(subsetSum(xs, target)).toEqual(result);
    });
    test('check it returns a subset of the first two numbers when their sum equals the target', () => {
        const xs = [1,2,4];
        const target = 3;
        const result = [1,2];
        expect(subsetSum(xs, target)).toEqual(result);
    });
    test('check it returns a subset of numbers that aren not next to each other when their sum equals the target', () => {
        const xs = [1,2,3];
        const target = 4;
        const result = [1,3];
        expect(subsetSum(xs, target)).toEqual(result);
    });
  });