function checkIfPalindrome(name){

    let iterations = name.length / 2;
    for (let i = 0; i < iterations; i++) {
        if (name[i] === name[(name.length - i) - 1]) {
            continue;
        } 
        else {
            return false;
        }
    }
    return true;
}

module.exports = {checkIfPalindrome};