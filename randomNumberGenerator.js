let num =3;

let arrNum = arrayGen(num);
console.log(arrNum);


function arrayGen(num){
    let a = new Array(num);
    for(let i = 0;  i < a.length; i++) {
        a[i] = randomNumGenBetween(1, 100);
        //a[i] = randomNumGenBetween(1, 10);
    }
    return a;
};

function randomNumGenBetween(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
};

function randomNumGenBetween(max) {
    return Math.floor(
        Math.random() * (max + 1)
    )
};