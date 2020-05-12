const assert = require('chai').assert;
const {printList, addListItem, deleteListItem} = require('../linkedListOperations');

describe("With an empty list", function() {
    it("Element cannot be serched", function() {
        let result = deleteListItem(undefined, 78);
        assert.equal(result, "List is empty");
    })
});