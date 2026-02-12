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
