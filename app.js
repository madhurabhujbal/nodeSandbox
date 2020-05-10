
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

let head = {value: 89, next: undefined};
const node1 = {value: 45, next: undefined};
head.next = node1;
const node2 = {value: 36, next: undefined};
node1.next = node2;
//let head = undefined;

console.log("Before : ");
printList(head);
head = addListItem(head, 67);
console.log("After : ");
printList(head);
