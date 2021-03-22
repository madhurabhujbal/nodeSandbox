let sum = require('../sum');
const assert = require('chai').assert;

describe('If a pair with given target sum exists', function() {
    let input = [ 1721, 979, 366, 299, 675, 1456];
    let targetSum = 2020;
    let resultArray= sum.getPair(input, targetSum);
    it('Should return the pair', function() {
        assert.equal(resultArray.length, 2);
    });

    it('Should return the pair that adds up to target sum', function() {
        let resultArray= sum.getPair(input, targetSum);
        assert.deepEqual(resultArray[0] + resultArray[1], targetSum);
    });
});

describe('If no pair of numbers matches target sum', function() {
    let input = [ 1721, 979, 366, 29, 675, 1456];
    let targetSum = 2020;
    let resultArray = sum.getPair(input, targetSum);
    it('Should return an empty array', function() {
        assert.deepEqual(resultArray, []);
    });
});