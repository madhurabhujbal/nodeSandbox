
function arrayOperations() {
    function getMinValue(result) {
        let minValue = result[0];
        for(let i = 1; i < result.length; i++) {
            if(minValue > result[i]) {
                minValue = result[i];
            }
        }
        return minValue;
    }

    function getMaxValue(result) {
        let maxValue = result[0];
        for(let i = 1; i < result.length; i++) {
            if(maxValue < result[i]) {
                maxValue = result[i];
            }
        }
        return maxValue;
    }

    function getAverage(result) {
        if(result.length == 0) {
            return "";
        }
        let total = 0;
        for(let i = 0; i < result.length; i++) {
            total = total + result[i];
        }
        return total / result.length;
    }

    return {
        getAverage,
        getMinValue,
        getMaxValue
    };
}

module.exports = arrayOperations;