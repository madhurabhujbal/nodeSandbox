const assert = require('chai').assert;
const arrayGen = require('../randomNumberGenerator');

//valid case tests:
describe('Check if array of random numbers is generated', function() {
    //1. giving 3,2,1,0 parameters
    describe('arryGen function can have 0 to 3 parameters', function() {
        it('With no arguments, result should not be null', function() {
            let result = arrayGen();
            assert.notEqual(result, null);
        });

        it('With no arguments, result should not be undefined', function() {
            let result = arrayGen();
            assert.notEqual(result, undefined);
        });

        it('With no arguments, result should be an empty array', function() {
            let result = arrayGen();
            assert.equal(result.length, 0);
        });
    });
});

//2. giving negetive parameters
//3. giving any other datatype other than integer/ fraction

//invalid case tests: