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
