function calculateStringLength(givenString) {
    if(givenString == undefined) {
        return `undefined`;
    }

    else if(givenString == '') {
        return `empty string`;
    }
    
    console.log(givenString[0]);
    let counter = 1;
    return 1;
}

module.exports = {calculateStringLength}