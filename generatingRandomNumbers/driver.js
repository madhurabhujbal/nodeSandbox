const arrayGen = require('./randomNumberGenerator.js');
const arrayOperations = require('./arrayOperations')();

let result = arrayGen(5, 1, 10);
console.log("Result array : " + result);

const minimumValue = arrayOperations.getMinValue(result);
console.log("Minimum value in array : " + minimumValue);

const maximumValue = arrayOperations.getMaxValue(result);
console.log("Maximum value in array : " + maximumValue);

const averageValue = arrayOperations.getAverage;
console.log("Average value : " + averageValue(result));