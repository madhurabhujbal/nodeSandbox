
//Queue operations: enqueue, dequeue, print,

function enqueue(Queue, number) {
    Queue.push(number);
    return Queue;
}

function dequeue(Queue) {
    if(Queue.length == 0) {
        console.log("Queue is empty");
    }
    return Queue.shift();
}

function printQueue(Queue) {
    console.log(Queue);
}

let Queue = [8, 234, 84, 78];
printQueue(Queue);
enqueue(Queue, 99);
printQueue(Queue);
dequeue(Queue);
printQueue(Queue);
