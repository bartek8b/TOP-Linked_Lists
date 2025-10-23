class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
}

export class List {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node();
    newNode.value = value;
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let curr = this.head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
    // console.log(this);
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    newNode.next = this.head;
    this.head = newNode;
    // console.log(this);
  }

  print() {
    let output = new Array();
    let curr = this.head;
    while (curr) {
      // console.log(curr.value);
      output.push(curr.value);
      curr = curr.next;
    }
    return output;
  }

  size() {
    let lenght = 0;
    let curr = this.head;
    while (curr) {
      lenght++;
      curr = curr.next;
    }
    if (lenght === 0) {
      return `The list is empty`;
    }
    return `List length: ${lenght}`;
  }

  getHead() {
    if (!('head' in this)) {
      throw new Error('Head is missing');
    }
    if (this.head) return this.head.value;
    else return 'The list is empty';
  }
}
