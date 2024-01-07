const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);
  candies = candies.map((c, i) => c + extraCandies >= maxCandies);
  return candies;
};

console.log(kidsWithCandies(candies, extraCandies));
