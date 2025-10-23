import { List } from './linkedLists.js';

const list = new List();

list.append('1');
list.append('2');
list.append('3');
list.prepend('0');

console.log(list.print());
console.log(list.size());
console.log(list);
