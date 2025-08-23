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
        const result = subsetSum(xs, target);
        expect(result).not.toBe(null);
        expect(result.reduce((acc,curr) => acc + curr, 0)).toBe(target);
    });
    test('check it returns a subset of numbers that are not next to each other when their sum equals the target', () => {
        const xs = [1,2,3];
        const target = 4;
        const result = subsetSum(xs, target);
        expect(result).not.toBe(null);
        expect(result.reduce((acc,curr) => acc + curr, 0)).toBe(target);
    });
   
    test('check it returns the correct subset of numbers when there are duplicates', () => {
        const xs = [2,2,3];
        const target = 4;
        const result = subsetSum(xs, target);
        expect(result).not.toBe(null);
        expect(result.reduce((acc,curr) => acc + curr, 0)).toBe(target);
    });
    test('check it returns null when there are no subsets that result in the target number', () => {
        const xs = [1,2,5];
        const target = 10;

        expect(subsetSum(xs, target)).toEqual(null);
    });
    test('check it returns an array with one number if that equals the target', () => {
        const xs = [2,5,9];
        const target = 9;
        const result = subsetSum(xs, target);
        expect(result).toEqual([9]);
        
    });
    test('check it returns the same input array when the whole array is required to equal the target', () => {
        const xs = [2,5,9];
        const target = 16;
        const result = subsetSum(xs, target);
        expect(result).toEqual(xs);
        
    });
});