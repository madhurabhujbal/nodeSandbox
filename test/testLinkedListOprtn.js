const assert = require('chai').assert;
const {addListItem, addItemInMiddle, deleteListItem, getArray} = require('../linkedListOperations');


describe("With an empty linked-list", function() {
    it("Element passed cannot be serched or deleted", function() {
        let head = deleteListItem(undefined, 78);
        assert.equal(head, "List is empty");
    });

    it("Element passed would be added as head in list", function() {
        let head = addListItem(undefined, 45);
        assert.equal(head.value, 45);
        assert.equal(head.next, undefined);
    });
});

describe("If position of element to be inserted exceeds linked-list length", function() {
    it("Should give a warning message", function() {
        let head = undefined;
        head = addListItem(head, 89);
        head = addListItem(head, 819);
        head = addItemInMiddle(head, 5, 34);
    });
});

describe("If linked-list is passed to getArray()", function() {
    let head = undefined;
    head = addListItem(head, 89);
    head = addListItem(head, 214);
    head = addListItem(head, 65);

    it("Should return array with same size and elements as linked-list", function() {
        let expArray = [89, 214, 65]
        let actArray = getArray(head);
        assert.equal(expArray.length, actArray.length);
    });

});

// describe("By passing element that is not present in linked-list", function() {
//     it("Searching element should return a warning message", function() {
//         // let head = deleteListItem({head: {value: 87, next: undefined}, node1: {value: 56, next: undefined}}, 99);
//         // assert.equal(head, "Element not present in the list");

//     });
// });