function getRandomNumberArray(numbersInArray, minValue, maxValue) {
    if(numbersInArray == '' || numbersInArray == undefined) {
        return [];
    }

    if(minValue > maxValue) {
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

let minValue = 1;
let maxValue = 100;
let numbersInArray = 5;
let resultArray = getRandomNumberArray(numbersInArray, minValue, maxValue);
console.log(resultArray);
let duplicateCount = findDuplicates(resultArray);
console.log(duplicateCount);

module.exports = {getRandomNumberArray, generateRandomNumber, findDuplicates}