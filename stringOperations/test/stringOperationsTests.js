const assert = require('chai').assert;
const stringOperations = require('../stringOperations');

describe("For empty or undefined string", function() {
    it("Length of string should be equal to error code", function() {
        let emptyErrorCode = stringOperations.calculateStringLength('');
        let undefinedErrorCode = stringOperations.calculateStringLength('');
        assert.equal(emptyErrorCode, -1);
        assert.equal(undefinedErrorCode, -1);
    });

    it("Should return invalid index", function() {
        let emptyErrorCode = stringOperations.findCharIndex('');
        assert.equal(emptyErrorCode, -1);
        let undefinedErrorCode = stringOperations.findCharIndex(undefined);
        assert.equal(undefinedErrorCode, -1);
        
        emptyErrorCode = stringOperations.findSubstringIndexes('');
        assert.equal(emptyErrorCode, -1);
        undefinedErrorCode = stringOperations.findSubstringIndexes(undefined);
        assert.equal(undefinedErrorCode, -1);
    });
});

describe("For a given valid and non-empty string", function() {
    it("Should return correct length of the string", function(){
        let length = stringOperations.calculateStringLength('Manchester');
        assert.equal(length, 10);
    });
});