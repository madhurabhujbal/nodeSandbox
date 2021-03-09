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
    for(let i = 0; i < givenString.length; i++) {
        if(givenString[i] == charToFind) {
            return i + 1;
        }
    }
    return `${charToFind} does not exist in ${givenString}`;
}

module.exports = {calculateStringLength, findCharIndex}