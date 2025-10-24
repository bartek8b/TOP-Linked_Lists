class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    if (!this.head) return '';
    let output = ``;
    let curr = this.head;
    while (curr.next) {
      output += `(${curr.value}) -> `;
      curr = curr.next;
    }
    output += `(${curr.value}) -> null`;
    return output;
  }

  size() {
    let size = 0;
    let curr = this.head;
    while (curr) {
      size++;
      curr = curr.next;
    }
    return size;
  }

  getHead() {
    if (!('head' in this)) {
      throw new Error('Head is missing');
    }
    return this.head ? this.head.value : undefined;
  }

  getTail() {
    if (!this.head) return undefined;
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    return curr.value;
  }

  at(index) {
    index = Math.abs(Math.round(index));
    let curr = this.head;
    let i = 0;
    while (curr) {
      if (i === index) return curr.value;
      curr = curr.next;
      i++;
    }
    return undefined;
  }

  pop() {
    if (!this.head) return undefined;
    if (!this.head.next) {
      const value = this.head.value;
      this.head = null;
      return value;
    }
    let curr = this.head;
    while (curr.next && curr.next.next) {
      curr = curr.next;
    }
    const value = curr.next.value;
    curr.next = null;
    return value;
  }
  contains(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return true;
      curr = curr.next;
    }
    return false;
  }

  find(value) {
    let curr = this.head;
    let index = 0;
    while (curr) {
      if (curr.value === value) return index;
      index++;
      curr = curr.next;
    }
    return null;
  }
}
