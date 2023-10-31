// const nums = [1, 2, 3, 1];
// const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const nums = [3, 3];

var containsDuplicate_ = function (nums) {
  if (nums.length < 2) return false;
  nums = nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
};

var containsDuplicate = function (nums) {
  let numSet = new Set();
  for (n of nums) {
    if (numSet.has(n)) {
      return true;
    } else {
      numSet.add(n);
    }
  }
  return false;
};

console.log(containsDuplicate(nums));
