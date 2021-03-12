
let minValue = 1;
let maxValue = 100;
let numbersInArray = 5;
let resultArray = getRandomNumberArray(numbersInArray, minValue, maxValue);

function getRandomNumberArray(numbersInArray, minValue, maxValue) {
    let randomNumber = generateRandomNumber(minValue, maxValue);
    console.log(randomNumber);
}

function generateRandomNumber(minValue, maxValue) {
    minValue = Math.ceil(minValue);
    maxValue = Math.floor(maxValue);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}