const arrayGen = require('./randomNumberGenerator.js');
const arrayOperations = require('./arrayOperations');

let result = arrayGen(5, 1, 10);
console.log("Result array : " + result);

// const minimumValue = minValue();
// console.log("Minimum value in array : " + minimumValue);

// const maximumValue = maxValue();
// console.log("Maximum value in array : " + maximumValue);

const averageValue = arrayOperations();
console.log("Average value : " + averageValue(result));