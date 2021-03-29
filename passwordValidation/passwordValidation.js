const fs = require('fs');

function processRecord(line) {
    let dataObject = {};
    let cols = line.split(" ");

    // Get limits from the first column
    let lowerLimit = parseInt(cols[0].split('-')[0]);
    dataObject['lowerLimit'] = lowerLimit;
    let upperLimit = parseInt(cols[0].split('-')[1]);
    dataObject['upperLimit'] = upperLimit;

    // Get char from the second column
    let charToMatch = cols[1][0];
    dataObject['charToMatch'] = charToMatch;

    // Get input string from the third column
    let password = cols[2];
    dataObject['password'] = password;
    return dataObject;

}

function passwordValidation2(recordData) {
    let password = recordData.password;
    if(password[recordData.lowerLimit - 1] == recordData.charToMatch && password[recordData.upperLimit - 1] != recordData.charToMatch) {
        return true;
    }

    if(password[recordData.lowerLimit - 1] != recordData.charToMatch && password[recordData.upperLimit - 1] == recordData.charToMatch) {
        return true;
    }
    return false;
}

function passwordValidation1(recordData) {
    let password = recordData.password;
    let count = 0;
    for(let i = 0; i < password.length; i++){
        if(password[i] == recordData.charToMatch) {
            count++;
        }
    }
    if(count >= recordData.lowerLimit && count <= recordData.upperLimit) {
        return true;
    }
    return false;
}


function processInput(fileName) {
    let result = 0;
    try {
        const data = fs.readFileSync(fileName, 'utf-8');
        const lines = data.split(/\r?\n/);
        for(let i = 0; i < lines.length; i++) {
            let recordData = processRecord(lines[i]);
            if(passwordValidation2(recordData)) {
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