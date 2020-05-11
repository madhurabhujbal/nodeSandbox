
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

module.exports = addListItem;