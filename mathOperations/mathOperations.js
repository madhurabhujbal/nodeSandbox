
    function add(num1, num2) {
        console.log(`Addition of ${num1} and ${num2} is:`);
        let addResult = num1 + num2;
        return addResult;
    }
    function subtract(num1, num2) {
        console.log(`Subtraction of ${num1} and ${num2} is:`);
        let subtractResult = num1 - num2;
        return subtractResult;
    }

module.exports = {add, subtract};