// const addListItem = require('./addingListItem');
// const deleteListItem = require('./deletingListItem');
// const printList = require('./printList');
const {printList, addListItem, addItemInMiddle, deleteListItem, getArray, getPosition} = require('./linkedListOperations');

// let deleteItem = deleteListItem(undefined, 89);
// console.log(deleteItem);
let head = {value: 89, next: undefined};
printList(head);

head = addListItem(head, 77);
head = addListItem(head, 78);
head = addListItem(head, 79);
printList(head);
// let result = printList(newList);
// console.log(result);

let position = getPosition(head, 77);
console.log(position);