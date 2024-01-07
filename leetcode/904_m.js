const fruits = [1, 2, 3, 2, 2];
// const fruits = [0, 1, 2, 2];

/** Sliding Window
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let i = 0;
  let j = 0;
  let maxFruits = 0;
  const fruitCounts = new Map();
  while (j < fruits.length) {
    fruitCounts.set(fruits[j], (fruitCounts.get(fruits[j]) || 0) + 1);
    while (fruitCounts.size > 2) {
      const leftFruit = fruits[i];
      fruitCounts.set(leftFruit, fruitCounts.get(leftFruit) - 1);
      if (fruitCounts.get(leftFruit) === 0) {
        fruitCounts.delete(leftFruit);
      }
      i++;
    }
    maxFruits = Math.max(maxFruits, j - i + 1);
    j++;
  }
  return maxFruits;
};

console.log(totalFruit(fruits));
