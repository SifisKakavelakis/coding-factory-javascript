// 1. Basic Function Syntax
function sayHello(name) {
    return `Hello ${name}!`;
}

console.log(sayHello("Alice"));

// 2. Function Expression
const add = function(a, b) {
    return a + b;
}
console.log(add(5, 3));

// 3. Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 6));

// 4. Optional params
function sayHi(name) {
    if (!name) {
        name = "Guest";
    }
    console.log(`Hi ${name}`);
}

sayHi();

// 5. Default params
function sayHi2(name = "Guest") {
    console.log(`Hi ${name}`);
}
sayHi2()

function addUser(name = "Anonymous", age = 18, isAdmin = false) {
    return { name, age, isAdmin};
}

// 6. Rest parameters
function max(...numbers) {
    for (const num of numbers) {
        console.log(num);
        
    }
    return Math.max(...numbers);
}
console.log(max(1, 2, 3, 4, 5, 6, 7, 8, 9));



