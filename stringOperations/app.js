const stringOperations = require('./stringOperations');

let givenString = 'Madhura';
let charToFind = 'a' ;

let stringLength = stringOperations.calculateStringLength(givenString);
console.log(`Length of given string ${givenString} is ${stringLength}`);

let charIndex = stringOperations.findCharIndex(givenString, charToFind);
console.log(`Position of char ${charToFind} in ${givenString} is ${charIndex}`);

let charIndexes = stringOperations.findCharIndexes(givenString, charToFind);
console.log(charIndexes);
console.log(`Position of char ${charToFind} in ${givenString} are ${charIndexes}`);
