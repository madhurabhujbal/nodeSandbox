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
    let index = 1;
    for(let i = 0; i < givenString.length; i++) {
        if(givenString[i] == charToFind) {
            return index;
        }
        index = index + 1;
    }
    return -1;
}

module.exports = {calculateStringLength, findCharIndex}