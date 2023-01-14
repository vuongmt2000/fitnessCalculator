export default class Stack<T> {
  private readonly stack: Array<T>;

  constructor(initial?: T) {
    this.stack = [];
    if (initial) {
      this.stack.push(initial);
    }
  }

  get length(): number {
    return this.stack.length;
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  push(value: T): number {
    return this.stack.push(value);
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack.pop();
  }

  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }

  take(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.stack.length - 2];
  }

  clear() {
    this.stack.length = 0;
  }

  first(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[0];
  }
}
