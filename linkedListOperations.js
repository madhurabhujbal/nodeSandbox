
    function printList(head) {
        console.log(">>>>>>>>>>>>>>>>");
        let current = head;
        while(current != undefined) {
            console.log(current.value);
            current = current.next;
        }
        console.log("<<<<<<<<<<<<<<<");
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
        if(head == undefined) {
            return "List is empty";
        }
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

module.exports = {printList, addListItem, deleteListItem};