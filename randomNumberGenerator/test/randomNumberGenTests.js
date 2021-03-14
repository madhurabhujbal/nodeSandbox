let randomNumberGenerator = require('../randomNumberGenerator');
const assert = require('chai').assert;

describe('For duplicate values in the input array', function() {
    it('should return number of duplicates in the array', function() {
        let duplicateCount = randomNumberGenerator.findDuplicates([1,2,3,1,1]);
        assert.equal(duplicateCount, '1'); 
    });
});