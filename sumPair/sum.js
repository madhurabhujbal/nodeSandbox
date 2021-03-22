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
    return [ 1721, 979, 366, 299, 675, 1456];
}

let sampleInput = getInput("smallInput.txt");
let targetSum = 2020;

let result = getPair(sampleInput, targetSum);
console.log("Result pair: ", result);

module.exports = {getPair};