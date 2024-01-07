const nums = [7, 1, 5, 3, 6, 4];

const maximumDifference_ = (nums) => {
  let [i, j] = [0, 1];
  let maxDiff = 0;
  while (i < nums.length - 1) {
    j = i + 1;
    while (j < nums.length - 1) {
      if (maxDiff < nums[j] - nums[i]) {
        maxDiff = nums[j] - nums[i];
      }
      j++;
    }
    i++;
  }
  return maxDiff;
};

const maximumDifference = (nums) => {
  let maxDiff = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      if (maxDiff < nums[j] - nums[i]) {
        maxDiff = nums[j] - nums[i];
      }
    }
  }
  return maxDiff;
};

console.log(maximumDifference(nums));
