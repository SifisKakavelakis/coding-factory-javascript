const obj = { id: 1, firstname: "Anna" }

// Mutable Add
obj.lastname = "Smith"; // add new property

// Immutable Add
// Without [] syntax, the field name will be "field" instead of the value of the field variable
const addToobj = (obj, field, value) => ({...obj, [field]: value}) // retunrn new object with added property

const obj2 = addToobj(obj, "lastname", "Smith");

console.log(obj2);
