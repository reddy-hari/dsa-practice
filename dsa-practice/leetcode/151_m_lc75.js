// const s = "a good   example";
const s = "the sky is blue";

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords_ = function (s) {
  s = s.trim();
  s = s.split(" ");
  s = s.filter((w) => w.length);
  s = s.reverse();
  s = s.join(" ");
  return s;
};

/** One line */
var reverseWords = function (s) {
  return s
    .trim()
    .split(" ")
    .filter((w) => w.length)
    .reverse()
    .join(" ");
};

console.log(reverseWords(s));
