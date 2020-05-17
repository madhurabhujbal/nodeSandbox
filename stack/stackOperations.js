
function push(stack, number) {
    let num = number
    stack.push(num);
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

module.exports = {push, printStack, pop};

