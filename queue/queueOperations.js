
//Queue operations: enqueue, dequeue, print,

function enqueue(Queue, number) {
    let top = 0;
    if(Queue.length == 0) {
        Queue.push(number);
        top = 1;
    }
    Queue.push(number);
    top = top + 1;
    return Queue;
}

function printQueue(Queue) {
    console.log(Queue);
}

let Queue = [8, 234, 84, 78];
printQueue(Queue);
enqueue(Queue, 99);
printQueue(Queue);
