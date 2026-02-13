const arr = [1, 2, 3, 4, 5, 3, 6, 3, 3];
const indexes = [];

const getIndexes = (array, value) => {
    const indexes = [];
    arr.forEach((val, index) => {
        if (val === value) {
            indexes.push(index);
        }
    });
    return indexes
}

console.log(getIndexes(arr, 3));

// do it with reduce
const getIndexesWithReduce = (array, value) => {
    return array.reduce((indexes, element, index) => (element === value) ? [...indexes, index] : indexes, []);
}

console.log(getIndexesWithReduce(arr, 3)); // Output: [2]