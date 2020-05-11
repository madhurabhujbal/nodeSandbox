
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

module.exports = deleteListItem;