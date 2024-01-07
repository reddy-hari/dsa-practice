const s = [1, 0, 3];
// const s = [3];
// const s = [0];
// const s = [];
// const s = [1, 4, 5, 2, 3];

const mn = (s) => {
  if (!s.length) return 0;
  if (s.length === 1 && s[0] === 0) return s[0] + 1;

  s = s.sort((a, b) => a - b); // Ascending
  for (let i = 1; i < s.length; i++) {
    if (s[i] - s[i - 1] !== 1) return s[i] - 1;
  }
  // If no missing number found, return the last number + 1
  return s[s.length - 1] + 1;
};

console.log(mn(s));
