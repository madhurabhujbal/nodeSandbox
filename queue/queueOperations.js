
function enqueue(Queue, number) {
    Queue.push(number);
}

function dequeue(Queue) {
    if(Queue.length == 0) {
        return "Queue is empty";
    }
    return Queue.shift();
}

function printQueue(Queue) {
    console.log(Queue);
}

module.exports = {enqueue, dequeue, printQueue};