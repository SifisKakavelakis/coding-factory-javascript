const queue = [1, 2, 3, 4, 5];

queue.push(6); // Add 6 to the end of the queue
console.log(queue);

const frontElement = queue.shift();
console.log("Dequeued element:", frontElement);
console.log(queue);


