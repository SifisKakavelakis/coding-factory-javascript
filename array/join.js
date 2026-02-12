const arr = [1, 2, 3, 4, 5];

const str = arr.join(" | "); // join array elements into a string
console.log(str);   // Output: "1 | 2 | 3 | 4 | 5"

// add elements to the array
arr.pushs(6);   // Add an element to the end of the array
arr.push(7, 8); // Add multiple elements to the end of the array

// delete on element
delete arr[0];  // Deletes the first element (1) but leaves an empty slot.