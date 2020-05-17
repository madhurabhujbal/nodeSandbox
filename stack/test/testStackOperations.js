const {push, printStack, pop} = require('../stackOperations');
const assert = require('chai').assert;

describe("For empty stack : ", function() {
    let stack = [];
    it("Should return error message for pop()", function() {
        assert.equal(pop(stack), "Stack underflow error");
    });

    it("Should add number to stack", function() {
        push(stack, 67);
        assert.equal(stack[stack.length -1], 67);
    });
});

describe("For non-empty stack : ", function() {
    let stack = [90, 34, 56, 78];
    it("Should return last element in stack for pop()", function() {
        assert.equal(pop(stack), 78);
    });
});

