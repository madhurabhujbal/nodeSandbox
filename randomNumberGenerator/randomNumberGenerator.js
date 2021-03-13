
let minValue = 1;
let maxValue = 6;
let numbersInArray = 5;
let resultArray = getRandomNumberArray(numbersInArray, minValue, maxValue);
console.log(resultArray);
// let resultArray = [1, 2, 1, 3, 1];
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

function findDuplicates(resultArray) {
    let count = 0;
    for(let i = 0; i < resultArray.length; i++) {
        for(let j = 0; j < resultArray.length; j++) {
            if(j == i) {
                continue;
            }

            if(resultArray[i] == resultArray[j]) {
                count = count + 1;
            }
        }
    }
    return count;
}