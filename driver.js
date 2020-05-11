const addListItem = require('./addingListItem');
const deleteListItem = require('./deletingListItem');
const printList = require('./printList');

// let deleteItem = deleteListItem(undefined, 89);
// console.log(deleteItem);
let head = {value: 89, next: undefined};
printList(head);

head = addListItem(head, 78);
printList(head);
// let result = printList(newList);
// console.log(result);