
let num = 3;

for(let i = 0; i < num; i++) {
    //print i+1 times
    let myString = "";
    for(j = 0; j < i + 1; j++) {
        myString += "*";
    }
    console.log(myString);
}