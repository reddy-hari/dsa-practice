// const arr = [0, 3, 2, 1];
// const arr = [3, 5, 5];
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  let i = 0;
  let j = arr.length - 1;

  while (arr[i] < arr[i + 1]) i++;
  while (arr[j] < arr[j - 1]) j--;

  if (i === arr.length - 1 || j === 0) return false;

  return i === j;
};

console.log(validMountainArray(arr));
