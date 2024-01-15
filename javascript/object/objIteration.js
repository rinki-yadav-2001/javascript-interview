// Iterate over the properties of an object.

const obj = { a: 1, b: 2, c: 3 };
// with for....in loop

for (let key in obj) {
  console.log(`${key}  : ${obj[key]}`);
}

// Object.entries()

const objArr = Object.entries(obj);
objArr.forEach(([key, value]) => {
  console.log(`${key}  : ${value}`);
});

// Object.keys()

const objKeys = Object.keys(obj);
objKeys.forEach((key) => {
  console.log(`${key}  : ${obj[key]}`);
});

// Object.values()

const objValues = Object.values(obj);
objValues.forEach((value) => {
  console.log(`${value}`);
});
