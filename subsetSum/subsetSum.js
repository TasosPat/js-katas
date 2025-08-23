// Subset Sum - Codewars 5kyu
// Returns a subset of numbers that sum to target or null if none exists

function subsetSum(xs,target) {
    if (target === 0) return [];
    if (xs.length === 0 && target !== 0) return null;
    const sums = { 0: [] };
    for(let i=0; i<xs.length; i++) {
      const currSums = {...sums}
      for (const key in currSums) {
        const newSum = Number(key)+xs[i];
        const subSet = [...currSums[key]]
        subSet.push(xs[i])
        sums[newSum] = subSet
        if (newSum === target) return sums[newSum];
      }
    }
    return null;
  }

  module.exports = subsetSum;