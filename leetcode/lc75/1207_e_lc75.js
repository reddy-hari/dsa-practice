// const arr = [1, 2, 2, 1, 1, 3];
const arr = [1, 2];

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let [aMap, v] = [new Map(), []];
  arr.forEach((a) => aMap.set(a, (aMap.get(a) || 0) + 1));
  for (let value of aMap.values()) {
    if (v.includes(value)) return false;
    v.push(value);
  }
  return true;
};

console.log(uniqueOccurrences(arr));
