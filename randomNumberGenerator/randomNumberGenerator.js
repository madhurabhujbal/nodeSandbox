
let minValue = 1;
let maxValue = 100;
let numbersInArray = 5;
let resultArray = getRandomNumberArray(numbersInArray, minValue, maxValue);
console.log(resultArray);

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