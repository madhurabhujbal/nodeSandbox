function getRandomNumberArray(numbersInArray, minValue, maxValue) {
    if(numbersInArray == '' || numbersInArray == undefined) {
        return [];
    }
    
    if(maxValue == '' || maxValue == undefined) {
        maxValue = 100;
    }
    
    if(minValue == '' || minValue == undefined) {
        minValue = 0;
    }
    
    if(minValue > maxValue) {
        return [-1];
    }

    if(isNaN(numbersInArray) || isNaN(minValue) || isNaN(maxValue)) {
        return [-1];
    }

    let randomNumberArray = [];
    let randomNumber;
    for(let i = 0; i < numbersInArray; i++) {
        randomNumber = generateRandomNumber(minValue, maxValue);
        randomNumberArray.push(randomNumber);
    }
    return randomNumberArray;
}

function generateRandomNumber(minValue, maxValue) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

function findDuplicates(inputArray) {
    let counts = {};
    let duplicates = 0;
    for(let i = 0; i < inputArray.length; i++) {
        let curr = inputArray[i];
        if(counts[curr] == undefined) {
            //first occurence of element
            counts[curr] = 1;
        }
        else {
            if(counts[curr] == 1) {
                duplicates += 1;
            }
            counts[curr] = counts[curr] + 1;
        }
    }
    return duplicates;
}

function getMinRandomNumber(inputArray) {
    let min = inputArray[0];
    for(let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] < min) {
            min = inputArray[i];
        }
    }
    return min;
}

function getMaxRandomNumber(inputArray) {
    let max = inputArray[0];
    for(let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > max) {
            max = inputArray[i];
        }
    }
    return max;
}

function getAverageRandomNumber(inputArray) {
    let average;
    let addition = 0;
    for(let i = 0; i < inputArray.length; i++) {
        addition += inputArray[i];
    }
    average = (addition / inputArray.length);
    console.log(`addition of numbers in array: ${addition}`);
    return average;
}

let minValue = 1;
let maxValue = 100;
let numbersInArray = 5;
let resultArray = getRandomNumberArray(numbersInArray, minValue, maxValue);
console.log(resultArray);
let duplicateCount = findDuplicates(resultArray);
console.log(duplicateCount);
let minRandomNumber = getMinRandomNumber(resultArray);
console.log(`Lowest value in random number array: ${minRandomNumber}`);
let maxRandomNumber = getMaxRandomNumber(resultArray);
console.log(`Highest value in random number array: ${maxRandomNumber}`);
let averageRandomNumber = getAverageRandomNumber(resultArray);
console.log(`Average value of random number array: ${averageRandomNumber}`);

module.exports = {getRandomNumberArray, generateRandomNumber, findDuplicates, getMinRandomNumber, getMaxRandomNumber, getAverageRandomNumber}