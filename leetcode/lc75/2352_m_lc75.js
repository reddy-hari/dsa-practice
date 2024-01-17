const grid = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let count = 0;
  let transpose = grid.map((_, i) => grid.map((row) => row[i]));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < transpose.length; j++) {
      let flag = grid[i].every((value, k) => value === transpose[j][k]);
      if (flag) count++;
    }
  }

  return count;
};

console.log(equalPairs(grid));

/**
 * Compare each grid value to its transpose value
 * let flag = true;
 * for (let k = 0; k < grid.length; k++) {
 *   if (grid[i][k] !== transpose[j][k]) {
 *     flag = false;
 *     break;
 *   }
 * }
 */
