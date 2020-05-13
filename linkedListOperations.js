
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

    function addItemInMiddle(head, pos, number) {
        let position = pos;
        if(position == 1) {
            head = {value: number, next: head};
            return head;
        }
        if(head == undefined) {
            console.log ("Cannot add element on this position as list is empty");
        }

        let count = 1;
        let current = head;
        while(current != undefined && count != position - 1) {
            current = current.next;
            count++;
        }
        if(current == undefined) {
            console.log("Position exceeds list size: " + (count - 1));
            return head;
        }
        let newNode = {value: number, next: current.next};
        current.next = newNode;
        return head;
    }

    function getArray(head) {
        let array = [];
        let current = head;
        while(current != undefined) {
            array.push(current.value);
            current = current.next;
        }
        return array;
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

module.exports = {printList, addListItem, addItemInMiddle, deleteListItem, getArray};