// Remove duplicates from an array.
const numbers = [5, 3, 9, 2, 2, 11, 8, 8, 999, 999];

// with set method
const uniqueArr = [...new Set(numbers)];
console.log(uniqueArr);

//  with filter method

const uniqueArrWithFilter = numbers.filter((value, index, self) => {
  return self.indexOf(value) === index;
});
console.log(uniqueArrWithFilter);

// with reduce method
const uniqueArrWithReduce = numbers.reduce((acc, item) => {
  if (!acc.includes(item)) {
    acc.push(item);
  }
  return acc;
}, []);

console.log(uniqueArrWithReduce);
