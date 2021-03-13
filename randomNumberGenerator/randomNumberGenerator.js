
// let minValue = 1;
// let maxValue = 6;
// let numbersInArray = 5;
// let resultArray = getRandomNumberArray(numbersInArray, minValue, maxValue);
// console.log(resultArray);
let resultArray = [1, 2, 4, 3, 5];
let duplicateCount = findDuplicates(resultArray);
console.log(duplicateCount);

function getRandomNumberArray(numbersInArray, minValue, maxValue) {
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
    for(let i = 0; i < inputArray.length; i++) {
        let curr = inputArray[i];
        if(counts[curr] == undefined) {
            //first occurence of element
            counts[curr] = 1;
        }
        else {
            counts[curr] = counts[curr] + 1;
        }
    }
    
    // count duplicates
    let duplicates = 0;
    for(let [key, value] of Object.entries(counts)) {
        if(value > 1) {
            duplicates = duplicates + 1;
        }
    }
    return duplicates;
}