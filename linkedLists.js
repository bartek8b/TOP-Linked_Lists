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
    console.log(`List values: ${output}`);
    return output;
  }

  size() {
    let size = 0;
    let curr = this.head;
    while (curr) {
      size++;
      curr = curr.next;
    }
    if (size === 0) {
      return `The list is empty`;
    }
    console.log(`List size: ${size}`);
    return size;
  }

  getHead() {
    if (!('head' in this)) {
      throw new Error('Head is missing');
    }
    if (this.head) return `Head value: ${this.head.value}`;
    else return 'The list is empty';
  }

  getTail() {
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    return `Tail value: ${temp.value}`;
  }

  at(index) {
    const list = this.print();
    const maxIndex = list.length - 1;
    index = Math.round(Math.abs(index));
    if (index > maxIndex) {
      console.log(`Enter the value no higher than ${list.length}`);
      return undefined;
    }
    console.log(`The value at #${index} is ${list[index]}`);
    return list[index];
  }
}
