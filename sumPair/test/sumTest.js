let sum = require('../sum');
const assert = require('chai').assert;

describe('If a pair with given target sum exists', function() {
    let input = [ 1721, 979, 366, 299, 675, 1456];
    let targetSum = 2020;
    let resultArray= sum.getPair(input, targetSum);
    it('Should return the pair', function() {
        assert.equal(resultArray.length, 1);
    });

    it('Should return the pair that adds up to target sum', function() {
        let resultArray= sum.getPair(input, targetSum);
        assert.deepEqual(resultArray, [[299, 1721]]);
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

describe('If a triade of numbers matches target sum', function() {
    let input = [ 1721, 979, 366, 29, 675, 1456];
    let targetSum = 2020;
    let resultArray = sum.getTriade(input, targetSum);
    it('Should return array with 3 numbers that add up to target sum', function() {
        assert.deepEqual(resultArray, [979, 366, 675]);
    });
});