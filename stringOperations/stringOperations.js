function calculateStringLength(givenString) {
    //check if given string is empty or undefined
    let isInvalid = ifStringEmptyOrUndef(givenString);
    if(isInvalid) {
        return -1;
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
    //check if given string is empty or undefined
    let isInvalid = ifStringEmptyOrUndef(givenString);
    if(isInvalid) {
        return -1;
    }
    //if char is empty or undefined
    let isCharInvalid = ifCharEmptyOrUndef(charToFind);
    if(isCharInvalid) {
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
    //check if given string is empty or undefined
    let isInvalid = ifStringEmptyOrUndef(givenString);
    if(isInvalid) {
        return -1;
    }
    //if char is empty or undefined
    let isCharInvalid = ifCharEmptyOrUndef(charToFind);
    if(isCharInvalid) {
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
    //check if given string is empty or undefined
    let isInvalid = ifStringEmptyOrUndef(givenString);
    if(isInvalid) {
        return -1;
    }
    //if substring is empty or undefined
    let isSubstringInvalid = ifCharEmptyOrUndef(subStringToFind);
    if(isSubstringInvalid) {
        return -1;
    }

    let foundPosition;
    outer: for (let i = 0; i < givenString.length - subStringToFind.length + 1; i++) {
        if(subStringToFind[0] == givenString[i]) {
            foundPosition = i;
            for(let j = 1; j < subStringToFind.length; j++) {
                if(subStringToFind[j] != givenString[foundPosition + j]) {
                    continue outer;
                }
            }
            return foundPosition;
        }
    }
    return -1;
}

function ifStringEmptyOrUndef(givenString) {
    if(givenString == '' || givenString == undefined) {
        return true;
    }
}
function ifCharEmptyOrUndef(charToFind) {
    if(charToFind == '' || charToFind == undefined) {
        return true;
    }
}

module.exports = {calculateStringLength, findCharIndex, findCharIndexes, findSubstringIndexes}