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

    //2. giving negetive parameters
    describe('arrayGen() can take negetive parameters, except for array length', function() {
        it('With one negetive parameter, result should give an error', function() {
            assert.throws(()=>{arrayGen(-99)}, RangeError);
        });

        it('With second, third or both arguments negetive, result should not be an empty array', function() {
            let result = arrayGen(1, - 2);
            assert.notEqual(result.length, 0);
        });
    });

    //3. giving any other datatype other than integer/ fraction
    describe('arrayGen() can take only integer parameters', function() {
        it('With first parameter except number, result should give an error', function() {
            assert.throws(()=>{arrayGen('')}, "array size is not a number");
        });

        it('With second, third or both parameters except numbers, result should give an error', function() {
            assert.throws(()=>{arrayGen(1, '', 20.6)}, "min/max value is not a number");
        })
    });

    //4. giving array length as fraction value
    describe('arrayGen() length cannot be a fraction value', function() {
        it('With first parameter as fraction, result should give an error', function() {
            assert.throws(()=>{arrayGen(1.3)}, RangeError);
        });
    });

});


