
    let result = [2, 5, 7, 4, 56, 45];
    console.log("Given array : " + result);
    let swapped = true;

    while(swapped == true) {
        swapped = false;
        //for(let j = 1; j <= result.length; j++) {
            for(let i = 1; i < result.length; i++) {
                if(result[i - 1] > result[i]) {
                    let temp = result[i - 1];
                    result[i - 1] = result[i];
                    result[i] = temp;
                    swapped = true;
                }
                console.log("Sorted Array : " + result);
            }
       // }
    }
