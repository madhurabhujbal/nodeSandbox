// const arrayGen = require('./randomNumberGenerator.js');
// const arrayOperations = require('./arrayOperations')();

// let result = arrayGen(5, 1, 10);
// console.log("Result array : " + result);

// const minimumValue = arrayOperations.getMinValue(result);
// console.log("Minimum value in array : " + minimumValue);

// const maximumValue = arrayOperations.getMaxValue(result);
// console.log("Maximum value in array : " + maximumValue);

// const averageValue = arrayOperations.getAverage;
// console.log("Average value : " + averageValue(result));

const getSearchedValue = require('./sortAndSearch').getSearchedValue;
let array = [1, 2, 3, 4, 5];
result = getSearchedValue(array, NaN);
console.log(result);