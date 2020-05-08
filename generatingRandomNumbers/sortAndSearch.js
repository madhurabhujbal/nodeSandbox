
function getSortedArray(givenArray) {
    let result = [];
    for(let i = 0; i < givenArray.length; i++) {
        result[i] = givenArray[i];
    }
    console.log("Given array : " + givenArray);
    let swapped = true;
    let count = 0;

    while(swapped == true) {
        swapped = false;
        for(let i = 1; i < result.length - count; i++) {
            if(result[i - 1] > result[i]) {
                let temp = result[i - 1];
                result[i - 1] = result[i];
                result[i] = temp;
                swapped = true;
            }
        }
        count++;
    }
    return result;
}

//binary search on array
function getSearchedValue(givenArray, searchValue) {

    let sortedArray = [];
    for(let i = 0; i < givenArray.length; i++) {
        sortedArray[i] = givenArray[i];
    }
    console.log("sorted array : "+ sortedArray);
    let lower = 0;
    let upper = sortedArray.length - 1;
    console.log("Element to be searched : " + searchValue);
    let location = "";
    while(lower <= upper) {
        let mid = getMidValue(lower, upper);
        //console.log(sortedArray[midValue]);
        if(searchValue == sortedArray[mid]) {
            location = mid + 1;
            break;
        } else if(searchValue < sortedArray[mid]) {
            upper = mid - 1;
        } else {
            lower = mid + 1;
        }
    }
    return location;
}

function getMidValue(lower, upper) {
    mid = Math.floor((lower + upper)/2);
    return mid;
}
module.exports = { getSortedArray, getSearchedValue };
