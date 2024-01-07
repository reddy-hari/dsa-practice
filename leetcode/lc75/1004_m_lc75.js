const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;

var longestOnes_ = function (nums, k) {
  let maxCount = 0;
  let count = 0;
  let zeroesAllowed = k;
  let i = 0;
  let j = 0;
  while (i < nums.length) {
    if (nums[i] === 1) {
      count++;
      i++;
    } else {
      if (zeroesAllowed > 0) {
        zeroesAllowed--;
        count++;
        i++;
      } else {
        if (nums[j] === 0) {
          zeroesAllowed++;
        }
        count--;
        j++;
      }
    }
    if (maxCount < count) maxCount = count;
  }
  return maxCount;
};

var longestOnes = function (nums, k) {
  let [left, right, maxCount] = [0, 0, 0];
  for (right = 0; right < nums.length; right++) {
    if (nums[right] === 0) k -= 1;
    while (k < 0) {
      if (nums[left] === 0) k++;
      left += 1;
    }
    maxCount = Math.max(maxCount, right - left + 1);
  }
  return maxCount;
};

console.log(longestOnes(nums, k));
