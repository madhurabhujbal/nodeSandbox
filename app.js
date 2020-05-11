
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
    if(head.value == number) {
        head = head.next;
        return head;
    }

    let current = head;
    let previous = undefined;
    while(current != undefined) {
        if(current.value == number) {
            //match found
            previous.next = current.next;
            return head;
        }
        previous = current;
        current = current.next;
    }

    if(current == undefined) {
        console.log("Element not present in the list");
        return head;
    }
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
head = deleteListItem(head, 89);
console.log("After deleting list item : ");
printList(head);

