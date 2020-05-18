const {enqueue, dequeue} = require('../queueOperations');
const assert = require('chai').assert;

describe("for empty queue : ", function() {
    let Queue = [];
    it("Should return warning msg for dequeue()", function() {
        let msg = dequeue(Queue);
        assert.equal(msg, "Queue is empty");
    });

    it("Should add element to queue for enqueue()", function() {
        enqueue(Queue, 61);
        assert.equal(Queue, 61);
    });
});