const arrayOfObjects = [
  { name: "Alice", age: 25 },
  { name: "John", age: 30 },
  { name: "Emma", age: 20 },
  { name: "Mike", age: 35 },
];

// Sorting the array of objects based on the 'age' property in ascending order
arrayOfObjects.sort((a, b) => a.age - b.age);

console.log(arrayOfObjects);
