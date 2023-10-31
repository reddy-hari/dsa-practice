// const n = 0;
// const n = 1;
// const n = 5;
const n = 16;

/** Print entire sequence */
function fibonacci_(n) {
  let result = [0, 1];
  if (n === 0) return 0;
  if (n === 1) return result.slice(0, 1);
  for (let i = 1; i < n - 1; i++) result.push(result[i] + result[i - 1]);
  return result;
}

/** Print nth number in sequence */
const fibonacciRecursive_ = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    const result = fibonacciRecursive_(n - 1) + fibonacciRecursive_(n - 2);
    return result;
  }
};

/** Print entire sequence */
const fibonacciRecursive = (n, sequence = [0, 1]) => {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (sequence.length === n) {
    return sequence; // Will be the final return
  } else {
    sequence.push(
      sequence[sequence.length - 1] + sequence[sequence.length - 2]
    );
    sequence = fibonacciRecursive(n, sequence);
    return sequence;
  }
};

// console.log(fibonacci_(n));
console.log(fibonacciRecursive(n));
