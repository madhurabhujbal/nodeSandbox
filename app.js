
function printList(head) {
    let current = head;
    while(current != undefined) {
        console.log(current.value);
        current = current.next;
    }
}

const head = {value: 89, next: undefined};
const node1 = {value: 45, next: undefined};
head.next = node1;
const node2 = {value: 36, next: undefined};
node1.next = node2;

printList(head);