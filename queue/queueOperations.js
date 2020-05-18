
//Queue operations: enqueue, dequeue, print,

function enqueue(Queue, number) {
    Queue.push(number);
    return Queue;
}

function printQueue(Queue) {
    console.log(Queue);
}

let Queue = [8, 234, 84, 78];
printQueue(Queue);
enqueue(Queue, 99);
printQueue(Queue);
