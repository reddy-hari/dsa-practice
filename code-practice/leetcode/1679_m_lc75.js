// const nums = [1, 2, 3, 4];
// const nums = [4, 4, 1, 3, 1, 3, 2, 2, 5, 5, 1, 5, 2, 1, 2, 3, 5, 4];
const nums = [2, 2, 2, 3, 1, 1, 4, 1];
// const k = 2;
const k = 4;
// const k = 3;
// const k = 5;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let [nMap, count] = [new Map(), 0];
  for (const num of nums) {
    let complement = k - num;
    if (nMap.has(complement) && nMap.get(complement) > 0) {
      count += 1;
      nMap.set(complement, nMap.get(complement) - 1);
    } else {
      nMap.set(num, (nMap.get(num) || 0) + 1);
    }
  }
  return count;
};

console.log(maxOperations(nums, k));
