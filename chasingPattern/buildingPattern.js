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

function getTreeCount(sampleInput, right, down) {
    let count = 0;
    let rowPosition = down;
    let columnPosition = right;
    const rowLength = sampleInput[rowPosition].length;
    for(; rowPosition < sampleInput.length; rowPosition += down) {
        let pos = columnPosition % rowLength;
        if(sampleInput[rowPosition][pos] == '#') {
            count = count + 1;
        }
        columnPosition += right;
    }
    return count;
}

let sampleInput = getInput("input.txt");
let treeCount = getTreeCount(sampleInput, 1, 2);
console.log(treeCount);
//87*205*85*79*33