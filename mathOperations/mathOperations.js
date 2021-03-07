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

    function multiply(num1, num2) {
        console.log(`Multiplication of ${num1} and ${num2} is:`);
        let multiplicationResult = num1 * num2;
        return multiplicationResult;
    }

    function divide(num1, num2) {
        console.log(`Division of ${num1} and ${num2} is:`);
        let divisionResult = num1 / num2;
        return divisionResult;
    }

    function average(num1, num2) {
        console.log(`Average of ${num1} and ${num2} is:`);
        let averageResult = (num1 + num2) / 2;
        return averageResult;
    }

module.exports = {add, subtract, multiply, divide, average};