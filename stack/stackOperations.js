
let stack = [];

push(9);
push(17);
push(344);
push(236);

function push(number) {
    let num = number
    stack.push(num);
    printStack(stack);
}

function printStack(stack) {
    console.log(stack);
}