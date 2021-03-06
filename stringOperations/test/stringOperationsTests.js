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

describe("For an empty or undefined character/s or substring to be searched in a string", function() {
    it("Should return invalid index", function() {
        let index = stringOperations.findCharIndex('main', '');
        assert.equal(index, -1);
        index = stringOperations.findCharIndex('main', undefined);
        assert.equal(index, -1);

        index = stringOperations.findCharIndexes('main', '');
        assert.equal(index, -1);
        index = stringOperations.findCharIndexes('main', undefined);
        assert.equal(index, -1);

        index = stringOperations.findSubstringIndexes('main', '');
        assert.equal(index, -1);
        index = stringOperations.findSubstringIndexes('main', undefined);
        assert.equal(index, -1);
    });
});

describe("For a given string", function() {
    it("Should return length of the string", function(){
        let length = stringOperations.calculateStringLength('Manchester');
        assert.equal(length, 10);
    });
});

describe("For a given character to be searched in a string", function() {
    it("Should return position of character in the string", function(){
        let position = stringOperations.findCharIndex('Manchester', 's');
        assert.equal(position, 7);
    });
});

describe("For a given character that occurs multiple times in a string", function() {
    it("Should return all the positions of character in the string", function(){
        let positions = stringOperations.findCharIndexes('amsterdam', 'a');
        assert.deepEqual(positions, [1, 8]);
    });
});

describe("For a given substring", function() {
    it("Should return the position of substring in the string", function(){
        let position = stringOperations.findSubstringIndexes('opposite', 'site');
        assert.equal(position, 5);
    });

    it("Should return invalid position if substring is not present in string", function(){
        let position = stringOperations.findSubstringIndexes('opposite', 'pose');
        assert.equal(position, -1);
    });
});