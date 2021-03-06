 const assert = require('chai').assert;
 const {addListItem, addItemInMiddle, deleteListItem, getArray, getPosition} = require('../linkedListOperations');


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
    describe("With an empty linked list passed to function, it:", function() {
        let head = undefined;
        let expArray = [];
        it("Should return an empty array", function() {
            let actArray = getArray(head);
            assert.equal(expArray.length, actArray.length);
        });
    });

    describe("With non-empty linked list passed to function, it: ", function() {
        let head = undefined;
        head = addListItem(head, 89);
        head = addListItem(head, 214);
        head = addListItem(head, 65);
        let expArray = [89, 214, 65]
        let actArray = getArray(head);

        it("Should return array with same size", function() {
            assert.equal(expArray.length, actArray.length);
        });

        it("Should return array with same and elements in same position as linked-list", function() {
            for(let count = 0; count < expArray.length; count++) {
                assert.equal(expArray[count], actArray[count]);
            }
        });
    });
});

describe("By passing element that is not present in linked-list : ", function() {
    let head = undefined;
    head = addListItem(head, 89);
    head = addListItem(head, 214);
    head = addListItem(head, 16);
    head = addListItem(head, 90);
    head = addListItem(head, 67);
    let beforeArray = getArray(head);
    head = deleteListItem(head, 99);
    let afterArray = getArray(head);
    it("Linked list size should remain unchanged", function() {
        assert.equal(beforeArray.length, afterArray.length);
    });

    it("Elments in linked-list before and after search should remain same", function() {
        for(let count = 0; count < beforeArray.length; count++) {
            assert.equal(beforeArray[count], afterArray[count]);
        }
    });
});

describe("By passing element that is present in linked-list : ", function() {
    let head = undefined;
    head = addListItem(head, 89);
    head = addListItem(head, 214);
    head = addListItem(head, 16);
    head = addListItem(head, 90);
    head = addListItem(head, 67);
    let beforeArray = getArray(head);
    let position = getPosition(head, 16);
    head = deleteListItem(head, 16);
    let afterArray = getArray(head);

    it("Linked list size should be changed", function() {
        assert.equal(beforeArray.length - 1, afterArray.length);
    });

    it("Elments in linked-list before and after deleted item should remain same", function() {
        let count;
            for(count = 0; count < beforeArray.length && count < position - 1; count++) {
                assert.equal(beforeArray[count], afterArray[count]);
            }
            let afterPos = count;
            count++;
            for(; count < beforeArray.length; count++) {
                assert.equal(beforeArray[count], afterArray[afterPos]);
                afterPos++;
            }

    });
});