// const nums = [2, 0, 5, 1, 4];
const nums = [2, 0];
// const nums = [2,1,5,0,4,6]
// const nums = [5,4,3,2,1]
// const nums = [1,2,3,4,5]

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let [min, mid] = [Infinity, Infinity];
  for (n of nums) {
    if (n <= min) {
      min = n;
    } else if (n <= mid) {
      mid = n;
    } else {
      return true;
    }
  }
  return false;
};

console.log(increasingTriplet(nums));
