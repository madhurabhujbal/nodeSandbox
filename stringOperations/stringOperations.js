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

function findSubstringIndexes(givenString, subStringToFind) {
    //if substring to search is empty or undefined
    if(subStringToFind == '' || subStringToFind == undefined) {
        return -1;
    }

    let foundPosition;
    for (let i = 0; i < givenString.length; i++) {
        if(subStringToFind[0] == givenString[i]) {
            foundPosition = i;
            for(let j = 1; j < subStringToFind.length; j++) {
                if(subStringToFind[j] == givenString[foundPosition + j]) {
                    continue;
                }
                return -1;
            }
        }
        continue;
    }
    return foundPosition;
}

module.exports = {calculateStringLength, findCharIndex, findCharIndexes, findSubstringIndexes}