
function getSortedArray(givenArray) {
    let result = [];
    for(let i = 0; i < givenArray.length; i++) {
        result[i] = givenArray[i];
    }
    console.log("Given array : " + givenArray);
    console.log("Copied array : " + result);
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
    function getSearchedValue(givenArray) {

        let sortedArray = [];
        for(let i = 0; i < givenArray.length; i++) {
            sortedArray[i] = givenArray[i];
        }
        console.log("sorted array"+ sortedArray);
        let lower = 0;
        let upper = sortedArray.length - 1;
        let searchValue = 32 ;
        console.log("Element to be searched : " + searchValue);
        let mid;

        while(lower <= upper) {
            let midValue = getMidValue(lower, upper);
            //console.log(sortedArray[midValue]);
            if(searchValue == sortedArray[midValue]) {
                console.log("Element found at position " + (midValue + 1));
                break;
            } else if(searchValue < sortedArray[midValue]) {
                upper = midValue;
            } else {
                lower = midValue;
            }
        }

        function getMidValue(lower, upper) {
            mid = Math.floor((lower + upper)/2);
            return mid;
        }
    }

    module.exports = getSortedArray, getSearchedValue;
