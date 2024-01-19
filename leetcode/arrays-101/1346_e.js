const arr = [-2, 0, 10, -19, 4, 6, -8];

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && 2 * arr[i] === arr[j]) return true;
    }
  }

  return false;
};

console.log(checkIfExist(arr));
