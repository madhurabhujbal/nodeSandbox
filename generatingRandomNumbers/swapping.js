
    let result = [2, 5, 7, 4, 56, 45];
    console.log("Given array : " + result);
    let sortedArray;
    let swapped = false;
    do{
        swapped = false;
        for(let i = 1; i < result.length; i++) {
            if(result[i - 1] > result[i]) {
                let temp = result[i - 1];
                result[i - 1] = result[i];
                result[i] = temp;
                swapped = true;
            }
        }
        console.log("Sorted Array : " + result);
    } while(swapped == true);
