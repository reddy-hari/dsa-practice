/**
 * Merge Sort Implementation
 * @param {number[]} arr
 * @returns
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case: An array with 0 or 1 elements is already sorted

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort and merge the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  console.log("Current Pass | Left Sorted Array - " + sortedLeft);
  console.log("Current Pass | Right Sorted Array - " + sortedRight);

  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

// Merge two sorted arrays into a single sorted array
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and merge them into the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  console.log(
    "Current Pass | Concat Result - " +
      result.concat(left.slice(leftIndex), right.slice(rightIndex))
  );

  // Concatenate any remaining elements from both arrays
  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Outputs [3, 9, 10, 27, 38, 43, 82]
