const assert = require('chai').assert;
const passwordValidation = require('../passwordValidation');

describe("For a record that matches the given criteria", function() {
    it('should return true', function() {
        let record = { lowerLimit: 1, upperLimit: 3, charToMatch: 'a', password: 'abcde' };
        let validStatus = passwordValidation.passwordValidation1(record);
        assert.equal(validStatus, true);
    });
});