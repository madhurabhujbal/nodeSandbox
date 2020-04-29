const arrayGen = require('./randomNumberGenerator');

let result = arrayGen(20);
console.log("Result array : " + result);

const minimumValue = minValue();
console.log("Minimum value in array : " + minimumValue);
//let maxValue = maxValue();

function minValue() {
    let minValue = result[0];
    for(let i = 1; i < result.length; i++) {
        if(minValue > result[i]) {
            minValue = result[i];
        }
    }
    return minValue;
}

// function maxValue() {

// }