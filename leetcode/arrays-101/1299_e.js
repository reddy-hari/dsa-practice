const arr = [17, 18, 5, 4, 6, 1];

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let maxRight = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let current = arr[i];
    arr[i] = maxRight;
    maxRight = Math.max(current, maxRight);
  }

  return arr;
};

var replaceElements_ = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > max) max = arr[j];
    }
    arr[i] = max;
    if (i === arr.length - 1) arr[i] = -1;
  }
  return arr;
};

console.log(replaceElements(arr));
