// const asteroids = [5, 10, -5];
// const asteroids = [10, 2, -5];
// const asteroids = [10, 2, -5, 4];
// const asteroids = [8, -8];
const asteroids = [-2, -1, 1, 2];

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  for (const asteroid of asteroids) {
    let flag = true;
    while (stack.length && stack[stack.length - 1] > 0 && asteroid < 0) {
      if (Math.abs(stack[stack.length - 1] < Math.abs(asteroid))) {
        stack.pop();
        continue;
      } else if (Math.abs(stack[stack.length - 1] === Math.abs(asteroid))) {
        stack.pop();
      }
      flag = false;
      break;
    }
    if (flag) stack.push(asteroid);
  }
  return stack;
};

console.log(asteroidCollision(asteroids));
