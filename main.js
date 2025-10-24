import { List } from './linkedLists.js';

const list = new List();

list.append('1');
list.append('2');
list.append('3');
list.prepend('0');

console.log(list.size());
console.log(list.print());
console.log(list.getHead());
console.log(list.getTail());
// Undefinded as list.length === 4
console.log(list.at(5));
console.log(list.at(2));
console.log(list.at(3.2));
console.log(list.at(-1.5));

console.log(list);
console.log(list.pop());
// list.length === 3
console.log(list.print());
console.log(list.contains('2'));
console.log(list.contains('5'));
console.log(list.find('8'));
console.log(list.find('1'));
console.log(list.removeAt(1));
console.log(list.print());
console.log(list.insertAt('new', 3));
console.log(list.insertAt('new', 0));
console.log(list.print());
