

function getSortedById(empArray, property) {
    let swapped = true;
    //continue until no more swapping
    while(swapped == true) {
        swapped = false;
        //check for all elements
        for(let i = 0; i < empArray.length - 1; i++) {
            //if current is greater than next
            if(empArray[i][property] > empArray[i + 1][property]) {
                //swap the elements
                let temp = empArray[i];
                empArray[i] = empArray[i + 1];
                empArray[i + 1] = temp;
                swapped = true;
            }
        }
    }
}

let empArray = [{name: "Madhura", id : 28, age : 19},
                {name: "Tom", id : 08, age : 13},
                {name: "Jerry", id : 59, age : 23},
                {name: "Ben", id : 24, age : 33}];
console.log(empArray);
getSortedById(empArray, 'id');
console.log(empArray);
getSortedById(empArray, 'age');
console.log(empArray);