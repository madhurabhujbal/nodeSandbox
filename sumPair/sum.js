function getPair(input, targetSum) {
    // Scan the input array and return a pair that matches target sum, empty array for no match

    return [];
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