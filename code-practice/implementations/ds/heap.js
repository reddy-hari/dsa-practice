class MinHeap {

  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value)
  }

  extractMin() {
    // Remove and return the minimum element from the heap and restore the heap property.
  }

  peek() {
    // Retrieve the minimum element without removing it.
  }

  size() {
    // Return the number of elements in the heap.
  }

  isEmpty() {
    // Check if the heap is empty.
  }

  heapify() {
    // Ensure that the heap property is maintained for all elements in the heap.
  }

  static fromArray(array) {
    // Create a heap from an array of elements efficiently.
  }

  update(index, newValue) {
    // Modify the value of a specific element in the heap and restore the heap property.
  }

  merge(otherHeap) {
    // Merge two heaps into a single heap.
  }

}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);

console.log(minHeap.extractMin());