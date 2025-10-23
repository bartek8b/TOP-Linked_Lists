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
  }

  prepend(value) {
    const newNode = new Node();
    newNode.value = value;
    newNode.next = this.head;
    this.head = newNode;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }

  size() {
    let lenght = 0;
    let curr = this.head;
    while (curr) {
      lenght++;
      curr = curr.next;
    }
    if (lenght === 0) {
      console.log(`The list is empty`);
      return
    }
    console.log(`List length: ${lenght}`);
  }
}
