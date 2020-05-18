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

describe("for non-empty queue : ", function() {
    let Queue = [45, 78, 33, 58, 136, 247];
    it("Should return first entered element in queue for dequeue()", function() {
        let firstElement = dequeue(Queue);
        assert.equal(firstElement, 45);
    });

    it("Should add element to top of queue for enqueue()", function() {
        enqueue(Queue, 21);
        assert.equal(Queue[Queue.length - 1], 21);
    });
});