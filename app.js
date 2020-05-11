
function printList(head) {
    let current = head;
    while(current != undefined) {
        console.log(current.value);
        current = current.next;
    }
}

function addListItem(head, num) {
    if(head == undefined) {
        head = {value: num, next: undefined};
        return head;
    }

    let current = head;
    while(current.next != undefined) {
        current = current.next;
    }
    let node3 = {value: num, next: undefined};
    current.next = node3;
    return head;
}

function deleteListItem(head, number) {
    let current = head;
    let flag = false;
    for(current = head; current != undefined; current = current.next) {
        if(current.value == number) {
            flag = true;
            break;
        }
    }

    if(flag == false) {
        return "Element not present in the list";
    }

    while(current.next.value != number) {
        current = current.next;
    }
    current.next = current.next.next;
}

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
let result = deleteListItem(head, 39);
console.log(result);
console.log("After deleting list item : ");
printList(head);

