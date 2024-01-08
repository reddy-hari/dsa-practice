class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) "Queue Empty";
    console.log(`Dequeued element: ${this.items[this.items.length - 1]}`);
    this.items.shift();
  }

  front() {
    if (!this.items.length) "Queue Empty";
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length < 1;
  }

  size() {
    return this.items.length;
  }

  display() {
    console.log(`Queue: ${this.items}`);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.display();
console.log("Front Element: " + queue.front());
console.log("Empty: " + queue.isEmpty());
console.log("Size: " + queue.size());
