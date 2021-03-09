const stringOperations = require('./stringOperations');

let givenString = 'Madhura';
let charToFind = 'a' ;

let stringLength = stringOperations.calculateStringLength(givenString);
console.log(`Length of given string ${givenString} is ${stringLength}`);

let charIndex = stringOperations.findCharIndex(givenString, charToFind);
console.log(`Index of char ${charToFind} in ${givenString} is ${charIndex}`);
