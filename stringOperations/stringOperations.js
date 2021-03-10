function calculateStringLength(givenString) {
    if(givenString == undefined) {
        return `undefined`;
    }

    else if(givenString == '') {
        return `empty string`;
    }

    let counter = 0;
    let i = 0;
    let currentValue = givenString[i];
    while(currentValue !== undefined) {
        i = i + 1;
        counter = counter + 1;
        currentValue = givenString[i];
    }
        return counter;
}

function findCharIndex(givenString, charToFind) {
    //if char is empty or undefined
    if(charToFind == '' || charToFind == undefined) {
        return -1;
    }

    for(let i = 0; i < givenString.length; i++) {
        if(givenString[i] == charToFind) {
            return i + 1;
        }
    }
    return -1;
}

//for char occurs multiple times in a string
function findCharIndexes(givenString, charToFind) {
    //if char is empty or undefined
    if(charToFind == '' || charToFind == undefined) {
        return -1;
    }
    
    let indexArray = [];
    for (let i = 0; i < givenString.length; i++) {
        if(givenString[i] == charToFind) {
            indexArray.push(i + 1);
        }
    }
    return indexArray;
}

module.exports = {calculateStringLength, findCharIndex, findCharIndexes}