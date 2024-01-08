const array = [5, 2, 9, 3, 6];

const quickSort = (array) => {
  if (array.length < 2) return array;

  const pivot = array[array.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < array.length; i++) {
    // Skip pivot or the run would result in an infinite loop and thus a stack overflow
    if (array[i] === pivot) continue; 
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  const leftSortedSubArray = quickSort(left);
  const rightSortedSubArray = quickSort(right);

  return [...leftSortedSubArray, pivot, ...rightSortedSubArray];
};

console.log(quickSort(array));
