function deepEqual(obj1, obj2) {
  // Check if both objects are strictly equal
  if (obj1 === obj2) {
    return true;
  }

  // Check if both objects are not null and are objects
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check each key-value pair recursively
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Example objects for comparison
const object1 = { a: 1, b: { c: 2 } };
const object2 = { a: 1, b: { c: 2 } };
const object3 = { a: 1, b: { c: 3 } };

console.log(deepEqual(object1, object2)); // Output: true
console.log(deepEqual(object1, object3)); // Output: false
