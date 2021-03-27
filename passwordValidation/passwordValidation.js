const fs = require('fs');

function processRecord(line) {
    console.log(line);
    return false;
}

function processInput(fileName) {
    let result = 0;
    try {
        const data = fs.readFileSync(fileName, 'utf-8');
        const lines = data.split(/\r?\n/);
        for(let i = 0; i < lines.length; i++) {
            if(processRecord(lines[i])) {
                result++;
            }
        }
    } catch(err) {
        console.error(err);
    }
    return result;
}

let result = processInput('sampleInput.txt');
console.log("Result : " + result);