const DEFAULT = 0
let counter = DEFAULT

$(function() {
    $('#btnIncr').on('click', () => onIncreasedClicked())
    $('#btnReset').on('click', () => onResetClicked())
    $('#btnDecr').on('click', () => onDecreaseClicked())
})

// Controllers
function onIncreasedClicked() {
    increaseCounter()
}

function onResetClicked() {
    resetCounter()
}

function onDecreaseClicked() {
    decreaseCounter()
}

// Model

function increaseCounter() {
    counter = DEFAULT
    render()
}

function resetCounter() {
    counter++
    render()
}

function decreaseCounter() {
    counter--
    render()
}

// View
function render() {
    const $counter = $('#counter')
    $counter.text(counter)
    styleCounterElement($counter)
}

function styleCounterElement($counter) {
    $counter.toggleClass('color-green', counter > 0)
    $counter.toggleClass('color-red', counter < 0)
    $counter.toggleClass('color-black', counter === 0)
}