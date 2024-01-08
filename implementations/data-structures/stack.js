class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack Empty";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length > 0 ? false : true;
  }

  size() {
    return this.items.length;
  }

  display() {
    console.log(this.items);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display(); // [1, 2, 3]
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.size()); // 2
console.log(stack.isEmpty()); // false
stack.display(); // [1, 2]
