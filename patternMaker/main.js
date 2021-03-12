
let num = 4;
let pattern = patternMaker(num);
for(let i = 0; i < pattern.length; i++) {
    console.log(pattern[i]);
}

function patternMaker(num) {
    let pattern = [];
    for(let i = 0; i < num; i++) {
        //print i+1 times
        let myString = "";
        for(j = 0; j < i + 1; j++) {
            myString += "*";
        }
        pattern.push(myString)
    }

    for(let i = num - 1; i > 0; i--) {
        //print i-1 times
        let myString = "";
        for(j = i; j > 0; j--) {
            myString += "*";
        }
        pattern.push(myString)
    }
    return pattern;
}