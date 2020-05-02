const assert = require('chai').assert;
const arrayOperations = require('../arrayOperations');

describe("Check if all array operations are executing correctly", function() {
    describe("With no Array length and range provided, all array operations should be empty", function() {
        it("With no Array length and range provided, average value of result array should be empty", function() {
            let result = arrayOperations().getAverage([]);
            assert.equal(result, "");
        })
    });

});