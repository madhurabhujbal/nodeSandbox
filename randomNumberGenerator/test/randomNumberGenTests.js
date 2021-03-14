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

describe('For lower and upper limit of array element', function() {
    describe('If upper limit is less than lower limit', function() {
        it('Should return array with error code', function(){
            let lowerLimit = 10;
            let upperLimit = 5;
            let randomNumberArray = randomNumberGenerator.getRandomNumberArray(3, lowerLimit, upperLimit);
            assert.deepEqual(randomNumberArray, [-1]);
        });
    });

    describe('If lower limit is empty or undefined', function() {
        it('Should set 0 as the lower limit', function() {
            let lowerLimit = '';
            let arrayLength = 5;
            let randomNumberArray = randomNumberGenerator.getRandomNumberArray(5, lowerLimit, 5);
            let min = randomNumberArray[0];
            for(let i = 1; i < arrayLength; i++) {
                if(randomNumberArray[i] < min) {
                    min = randomNumberArray[i];
                }
            }
            assert.isAtLeast(min, 0, "Lower limit is not less than 0");
        });
    });
});

describe('For duplicate values in the input array', function() {
    it('function should return number of duplicates in the array', function() {
        let inputArray = [1, 2, 3, 1, 1, 1]
        let duplicateCount = randomNumberGenerator.findDuplicates(inputArray);
        assert.equal(duplicateCount, '1'); 
    });
});