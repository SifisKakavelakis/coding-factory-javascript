function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter1 = createCounter();
console.log(counter1());

class Counter {
    #count = 0; // PRIVATE FIELD
    increment() {
        this.#count++;
        return this.#count;
    }
}

const counter2 = new Counter();
console.log(counter2.increment());
