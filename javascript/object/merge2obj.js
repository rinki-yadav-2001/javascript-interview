const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

//spread operator
const mergerdObjWithSpread = { ...object1, ...object2 };
console.log(mergerdObjWithSpread, "spreadd");

// Object.Assign()

const mergedObjWithAssign = Object.assign({}, object1, object2);
console.log(mergedObjWithAssign, "Object.Assign");

//Object.fromEntries()
let combinedArr = Object.entries(object1).concat(Object.entries(object2));

const mergedObjWithFromEntries = Object.fromEntries(combinedArr);
console.log(mergedObjWithFromEntries, "Object.fromEntries()");
