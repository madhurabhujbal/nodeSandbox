
function push(stack, number) {
    let top = stack.length;
    if(top == 0) {
        stack.push(number);
        top = 1;
    }
    stack.push(number);
    top = top + 1;
}

function printStack(stack) {
    console.log(stack);
}

function pop(stack) {
    let top = stack.length;
    if(top == 0) {
        return "Stack underflow error";
    }
    top = top - 1;
    return stack.pop();
}

function dequeStack(stack) {
    if(stack.length == 0) {
        return "Stack underflow error";
    }
    return stack.shift();
}

module.exports = {push, printStack, pop, dequeStack};

