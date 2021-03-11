const stringOperations = require('./stringOperations');

let givenString = 'hello';
let charToFind = 'l' ;
let subStringToFind = 'llo';

let stringLength = stringOperations.calculateStringLength(givenString);
console.log(`Length of given string ${givenString} is ${stringLength}`);

let charIndex = stringOperations.findCharIndex(givenString, charToFind);
console.log(`Position of char ${charToFind} in ${givenString} is ${charIndex}`);

let charIndexes = stringOperations.findCharIndexes(givenString, charToFind);
console.log(`Position of char ${charToFind} in ${givenString} are ${charIndexes}`);

let substringIndexes = stringOperations.findSubstringIndexes(givenString, subStringToFind);
console.log(`Position of substring ${subStringToFind} in ${givenString} are ${substringIndexes}`);


