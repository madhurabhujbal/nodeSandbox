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
    // Read input data from the given file
    let numbersArray = [];
    try {
        const data = fs.readFileSync(fileName, 'utf-8');
        const lines = data.split(/\r?\n/);
        for(let i = 0; i < lines.length; i++) {
            numbersArray.push(parseInt(lines[i]));
        }
    } catch(err) {
        console.error(err);
    }
    return numbersArray;
}

let sampleInput = getInput("input.txt");
let targetSum = 2020;

let result = getPair(sampleInput, targetSum);
console.log("Result pair: ", result);

module.exports = {getPair};