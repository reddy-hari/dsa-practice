const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let numsMap = new Map();
  nums.forEach((n) => numsMap.set(n, (numsMap.get(n) || 0) + 1));
  const numsArray = Array.from(numsMap, ([n, f]) => ({ n, f }));
  numsArray.sort((a, b) => b.f - a.f);
  numsArray.length = k;
  return numsArray.map((na) => na.n);
};

console.log(topKFrequent(nums, k));
