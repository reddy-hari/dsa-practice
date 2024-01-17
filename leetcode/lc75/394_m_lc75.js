// const s = "3[a]2[bc]";
// const s = "2[abc]3[cd]ef";
// const s = "2[abc3[cd]]ef";
// const s = "3[a2[c]]";
const s = "100[leetcode]";

const isDigit = (char) => {
  return /\d/.test(char);
};

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let i = 0;
  const stack = [];
  while (i < s.length) {
    if (s[i] === "]") {
      const subStr = [];
      while (stack[stack.length - 1] !== "[") {
        subStr.push(stack.pop());
      }
      stack.pop(); // pop [
      if (isDigit(stack[stack.length - 1])) {
        let mul = [];
        while (isDigit(stack[stack.length - 1])) {
          mul.push(stack.pop());
        }
        const multiple = parseInt(mul.reverse().join(""));
        stack.push(...subStr.reverse().join("").repeat(parseInt(multiple)).split(""));
      } else {
        stack.push(...subStr.reverse());
      }
    } else {
      if (isDigit(s[i])) {
        let num = "";
        while (isDigit(s[i])) {
          num += s[i];
          i++;
        }
        stack.push(num);
        stack.push("[");
      } else {
        stack.push(s[i]);
      }
    }
    i++;
  }
  return stack.join("");
};

console.log(decodeString(s));
