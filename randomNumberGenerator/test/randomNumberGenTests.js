let randomNumberGenerator = require('../randomNumberGenerator');
const assert = require('chai').assert;

describe('If required random number array length is empty or undefined', function() {
    it('Should return an empty array', function() {
        let arrayLength = '';
        let randomNumberArray = randomNumberGenerator.getRandomNumberArray(arrayLength, 1, 100);
        assert.deepEqual(randomNumberArray, []);

        arrayLength = undefined;
        randomNumberArray = randomNumberGenerator.getRandomNumberArray(arrayLength, 1, 100);
        assert.deepEqual(randomNumberArray, []);
    });
});

describe('For duplicate values in the input array', function() {
    it('function should return number of duplicates in the array', function() {
        let inputArray = [1, 2, 3, 1, 1, 1]
        let duplicateCount = randomNumberGenerator.findDuplicates(inputArray);
        assert.equal(duplicateCount, '1'); 
    });
});