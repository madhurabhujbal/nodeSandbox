const assert = require('chai').assert;
const {getSortedArray, getSearchedValue} = require('../sortAndSearch');

describe("Check if Random array generated is Sorted correctly", function() {

});

describe("Check if Element to be searched exists in random array, and been searched correctly", function() {
    describe("With no search element provided, search operation should be empty", function() {
        it("With no search element provided, search operation should be empty", function() {
            let result = getSearchedValue([], NaN || undefined);
            assert.equal(result, "");
        });
    });
});