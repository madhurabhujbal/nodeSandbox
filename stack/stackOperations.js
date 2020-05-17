
let stack = [];

function push(number) {
    let num = number
    stack.push(num);
}

function printStack(stack) {
    console.log(stack);
}

function pop() {
    let top = stack.length;
    if(top == 0) {
        return "Stack underflow error";
    }
    top = top - 1;
    return stack.pop();
}

push(9);
push(17);
push(344);
push(236);
printStack(stack);
console.log(pop());
printStack(stack);

