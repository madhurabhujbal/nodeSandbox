
function arrayGen(num, min, max){
    let a = new Array(num);

    if(min == undefined) {
        min = 0;
        max = 1000;
    } else if(max == undefined) {
        max = 1000;
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