const {printList, addListItem, addItemInMiddle, deleteListItem, getArray, getPosition} = require('./linkedListOperations');

let head = {value: 89, next: undefined};
let node1 = {value: 45, next: undefined};
head.next = node1;
let node2 = {value: 36, next: undefined};
node1.next = node2;
//let head = undefined;

console.log("Before adding list item : ");
printList(head);
head = addListItem(head, 79);
head = addListItem(head, 77);
console.log("After adding list item : ");
printList(head);
head = deleteListItem(head, 89);
console.log("After deleting list item : ");
printList(head);
head = addItemInMiddle(head, 20, 11);
console.log("After adding list item in middle: ");
printList(head);
let array = getArray(head);


