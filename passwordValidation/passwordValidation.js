const fs = require('fs');

function processRecord(line) {
    let cols = line.split(" ");

    // Get limits from the first column
    let lowerLimit = parseInt(cols[0].split('-')[0]);
    let upperLimit = parseInt(cols[0].split('-')[1]);

    // Get char from the second column
    let charToMatch = cols[1][0];

    // Get input string from the third column
    let password = cols[2];
    console.log(password);

    if(password[lowerLimit - 1] == charToMatch && password[upperLimit - 1] != charToMatch) {
        return true;
    }

    if(password[lowerLimit - 1] != charToMatch && password[upperLimit - 1] == charToMatch) {
        return true;
    }

    // let count = 0;
    // for(let i = 0; i < password.length; i++){
    //     if(password[i] == charToMatch) {
    //         count++;
    //     }
    // }
    // if(count >= lowerLimit && count <= upperLimit) {
    //     console.log(line);
    //     return true;
    // }
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