function getPair(input, targetSum) {
    // Scan the input array and return a pair that matches target sum, empty array for no match
    let resultArray = [];

    let seenNumbers = {};
    for (let i = 0; i < input.length; i++) {

        let currNumber = input[i];
        let matchingNumber = targetSum - currNumber;
        if(seenNumbers[matchingNumber] != undefined) {
            for(let j = 0; j < seenNumbers[matchingNumber]; j++) {
                resultArray.push([currNumber, matchingNumber]);
            }
        }
        // Add current number to the map
        if(seenNumbers[currNumber] == undefined) {
            seenNumbers[currNumber] = 1;
        } else {
            seenNumbers[currNumber] += 1;
        }
    }
    return resultArray;
}


function duplicateFind(input) {
    let counts = {};
    let duplicate = [];
    for(let i = 0; i < input.length; i++) {
        let curr = input[i];
        if(counts[curr] == undefined) {
            // number seen for the first time
            counts[curr] = 1;
        } else {
            // number exists, so increament the count
            counts[curr] += 1;

            //this also means, curr is previously seen
            duplicate.push(curr);
        }
    }

    return duplicate;
}

function getInput(fileName) {
    // Read input data from the given file
    return [ 1721, 979, 366, 299, 675, 1456];
}

let sampleInput = getInput("smallInput.txt");
let targetSum = 2020;

let result = getPair(sampleInput, targetSum);
console.log("Result pair: ", result);

let numberOfDuplicates = duplicateFind(result);
console.log("Number of duplicates in the input: ", numberOfDuplicates);

module.exports = {getPair};