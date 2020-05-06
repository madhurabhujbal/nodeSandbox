
    let result = [32, 5, 7, 4, 1, 45];
    console.log("Given array : " + result);
    let swapped = true;
    let count = 0;

    while(swapped == true) {
        swapped = false;
        //for(let j = 1; j <= result.length; j++) {
            for(let i = 1; i < result.length - count; i++) {
                if(result[i - 1] > result[i]) {
                    let temp = result[i - 1];
                    result[i - 1] = result[i];
                    result[i] = temp;
                    swapped = true;
                }
            }
            count++;
            // }
        }
    console.log("Sorted Array : " + result);


