const assert = require('chai').assert;
const {getSortedArray, getSearchedValue} = require('../sortAndSearch');

describe("Check if Random array generated is Sorted correctly", function() {

});

describe("Check if Element to be searched exists in random array, and been searched correctly", function() {
    describe("With search element is not a number", function() {
        it("For search element other than number, search operation should return warning msg", function() {
            let result = getSearchedValue([], NaN);
            assert.equal(result, "Please enter a valid number for search");
        });
    });

    // describe("With no search element provided", function() {
    //     it("With no search element provided, search operation should be empty", function() {
    //         let result = getSearchedValue([], undefined);
    //         assert.equal(result, "");
    //     });
    // });
});