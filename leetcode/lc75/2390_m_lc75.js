const s = "leet**cod*e";

/**
 * Using a stack
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stack = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === "*") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
    i++;
  }
  return stack.join("");
};

// Inefficient for large inputs
var removeStars_ = function (s) {
  const sArr = s.split("");
  let i = 0;
  while (i < sArr.length) {
    if (sArr[i] === "*") {
      if (i > 0) {
        sArr.splice(i - 1, 2);
        i -= 2;
      }
    }
    i++;
  }
  return sArr.join("");
};

console.log(removeStars(s));
