let obj1 = { name: "Rinki ", lastname: "Yadav", Add: { city: "Ayodhya" } };

// Shallow Copy

// By spread operator and Object.assign
let obj2 = { ...obj1 };
// or
let obj3 = Object.assign({}, obj1);
// console.log(obj1);
// console.log(obj2);
obj2.Add.city = "bengaluru";
// console.log(obj1);
// console.log(obj2);

// Deep Copy
// Using JSON.parse() and JSON.stringify() (for deep cloning):

let obj2Deep = JSON.parse(JSON.stringify(obj1));
console.log(obj1);
console.log(obj2Deep);

obj2Deep.Add.city = "Dehradun";

console.log(obj1);
console.log(obj2Deep);

// lodash method

const _ = require("lodash");

const originalObject = { a: 1, b: { c: 2 } };
const clonedObject = _.cloneDeep(originalObject);

// Modify the clonedObject to demonstrate deep cloning
clonedObject.b.c = 3;

console.log(originalObject); // Output: { a: 1, b: { c: 2 } }
console.log(clonedObject); // Output: { a: 1, b: { c: 3 } }
