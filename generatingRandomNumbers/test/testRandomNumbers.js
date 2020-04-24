const assert = require('chai').assert;
const arrayGen = require('../randomNumberGenerator');

//valid case tests:
describe('Check if array of random numbers is generated', function() {
    //1. giving 3,2,1,0 parameters
    describe('arryGen function can have 0 to 3 parameters', function() {
        it('With no arguments', function() {
            let result = arrayGen();
            assert(result != null, 'Result should not be null');
            assert(result != undefined, 'Result should not be undefined');
            assert(result.length == 0, 'Result should be an empty array');
        });
    });
});

//2. giving negetive parameters
//3. giving any other datatype other than integer/ fraction

//invalid case tests: