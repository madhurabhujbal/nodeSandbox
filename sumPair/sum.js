const fs = require('fs');
const readline = require('readline');

function getPair(input, targetSum) {
    // Scan the input array and return a pair that matches target sum, empty array for no match
    let resultArray = [];
    for (let i = 0; i < input.length; i++) {
        for(let j = 0; j < input.length; j++) {
            if (i == j) {
                continue;
            }
            if(input[i] + input[j] === targetSum) {
                resultArray.push(input[i]);
                resultArray.push(input[j]);
                return resultArray;
            }
        }
    }
    return resultArray;
}

function getInput(fileName) {
    let numbersArray = [];
    var readFile = readline.createInterface({
        input: fs.createReadStream(fileName)
    });

    readFile.on('line', function(line) {
        let number = parseInt(line);
        console.log('number from file:', number);
        numbersArray.push(number);
        console.log('number array:', numbersArray);
    });
    // Read input data from the given file
    return numbersArray;
}

let sampleInput = getInput("smallInput.txt");
let targetSum = 2020;

let result = getPair(sampleInput, targetSum);
console.log("Result pair: ", result);

module.exports = {getPair};