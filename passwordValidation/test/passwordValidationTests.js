const assert = require('chai').assert;
const passwordValidation = require('../passwordValidation');

describe("For a record that matches the given criteria", function() {
    it('should return true', function() {
        let record = { lowerLimit: 1, upperLimit: 3, charToMatch: 'a', password: 'abcde' };
        let validStatus = passwordValidation.passwordValidation1(record);
        assert.equal(validStatus, true);
    });
});

describe("For given number of records", function() {
    it('should return number of valid records according to condition1', function() {
        let validRecords = passwordValidation.processInput('sampleInput.txt');
        assert.equal(validRecords, 2);
    });

    it('should return number of valid records according to condition2', function() {
        let validRecords = passwordValidation.processInput('sampleInput.txt', 2);
        assert.equal(validRecords, 1);
    });
});

