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

let sampleInput = getInput("smallInput.txt");
console.log(sampleInput);