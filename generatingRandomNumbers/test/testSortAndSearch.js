const assert = require('chai').assert;
const {getSortedArray, getSearchedValue} = require('../sortAndSearch');

describe("Check if Element to be searched exists in random array, and been searched correctly", function() {
    describe("With search element is not a number", function() {
        it("search result should return warning msg", function() {
            let result = getSearchedValue([], NaN);
            assert.equal(result, "Please enter a valid number for search");
        });

        it("search result should be empty", function() {
            let result = getSearchedValue([], undefined);
            assert.equal(result, "Please enter a valid number for search");
        });
    });


    describe("With search element not present in given array range", function() {
        it("result should return warning msg when the number is smaller than the range", function() {
            let result = getSearchedValue([2, 4, 5], 1 );
            assert.equal(result, "Value out of range");
        });

        it("result should return warning msg when the number is greater than the range", function() {
            let result = getSearchedValue([2, 4, 5], 6 );
            assert.equal(result, "Value out of range");
        });

        it("result should return warning msg for empty array", function() {
            let result = getSearchedValue([], 6 );
            assert.equal(result, "Value out of range");
        });
    });
});