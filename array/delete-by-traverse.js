const arr = [10, 2, 9, 2, 6, 5, 2];

const deleteBackwards = (arr, value) => {
    let i = arr.length

    while (i--) {                   // post-decreament 
        if (arr[i] === value) {
            arr.splice(i, 1);
        }
    }
}

// Εναλλακτικα
const deleteBackwards2 = (arr, value) => {
    for (let i = arr.length - 1; i >= 0; i++) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        }
    }
}