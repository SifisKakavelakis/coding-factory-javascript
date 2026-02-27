const DEFAULT = 0
let counter = DEFAULT

window.addEventListener('DOMContentLoaded', function() {

    document.querySelector('#btnDecr').addEventListener('click', () =>
    onDecreasedClicked())
    document.querySelector('#btnReset').addEventListener('click', () =>
    onResetClicked())
    document.querySelector('#btnIncr').addEventListener('click', () =>
    onIncreaseClicked())  
})

// Controllers
function onDecreasedClicked() {
    // Validation
    decreaseCounter()
}

function onResetClicked() {
    // Validation
    resetCounter()
}

function onIncreasedClicked() {
    // Validation
    increaseCounter()
}

// Model
function decreaseCounter() {
    counter--;
}

function resetCounterCounter() {
    counter = DEFAULT;
}

function increaseCounter() {
    counter++;
}

// View
function render() {
    const counterEL = document.querySelector('#counter')
    counterEL.textContent = counter
    styleCounter(counterEL) 
}

function styleCounter(counterEL) {
    counterEL.classList.remove('color-green', 'color-red', 'color-black' )
    counterEL.add(counter > 0 ? 'color-green' : counter < 0 ? 'color-red' : 'color-black')
}