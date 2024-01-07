const minMax = (array) => {
  if (array.length === 0) return { minimum: undefined, maximum: undefined }; // Handle empty array case

  let min = array[0];
  let max = array[0];
  let n = array.length;

  while (n) {
    if (array[n] < min) min = array[n];
    if (array[n] > max) max = array[n];
    n--;
  }
  return { minimun: min, maximum: max };
};

const array = [5, 12, 1, -3, 8, 20, 7];

console.log(minMax(array));
