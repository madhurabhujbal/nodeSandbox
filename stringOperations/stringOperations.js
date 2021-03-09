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
    return true;
}

module.exports = {calculateStringLength, findCharIndex}