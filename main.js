import { List } from './linkedLists.js';

const list = new List();

list.append('1');
list.append('2');
list.append('3');
list.prepend('0');

list.size();
list.print();
console.log(list.getHead());
console.log(list.getTail());
list.at(5);
list.at(2);

console.log(list);
