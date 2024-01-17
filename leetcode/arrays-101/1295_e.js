const nums = [12, 345, 2, 6, 7896];

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let evenCount = 0;
  for (const n of nums) {
    if ((n + "").length % 2 === 0) evenCount++;
  }
  return evenCount;
};

console.log(findNumbers(nums));
