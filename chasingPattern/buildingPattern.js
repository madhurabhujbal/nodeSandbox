const fs = require('fs');

function getInput(fileName) {
    // Read input data from the given file
    let numbersArray = [];
    try {
        const data = fs.readFileSync(fileName, 'utf-8');
        const lines = data.split(/\r?\n/);
        for(let i = 0; i < lines.length; i++) {
            numbersArray.push(lines[i]);
        }
    } catch(err) {
        console.error(err);
    }
    return numbersArray;
}

function getTreeCount(sampleInput, right) {
    let count = 0;
    for(let i = 1; i < sampleInput.length; i++) {
        let pos = (i * right) % sampleInput[i].length;
        if(sampleInput[i][pos] == '#') {
            count = count + 1;
        }
    }
    return count;
}

let sampleInput = getInput("smallInput.txt");
let treeCount = getTreeCount(sampleInput, 3);
console.log(treeCount);
// console.log(sampleInput);