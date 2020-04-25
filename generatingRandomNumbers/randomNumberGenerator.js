
function arrayGen(num, min, max){
    if(num == undefined) {
        return [];
    } else if(typeof num != 'number') {
        throw "array size is not a number";
    }

    let a = new Array(num);

    if(min == undefined) {
        min = 0;
        max = 1000;
    } else if(max == undefined) {
        max = 1000;
    }

    if(typeof min != 'number' || typeof max != 'number') {
        throw "min/max value is not a number";
    }

    for(let i = 0;  i < a.length; i++) {
        a[i] = randomNumGenBetween(min, max);
    }
    return a;
};

function randomNumGenBetween(min, max) {
    return Math.floor(
        (Math.random() * (max - min + 1)) + min);
};

module.exports = arrayGen;