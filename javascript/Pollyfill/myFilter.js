// filter Pollyfill method

Array.prototype.myFilter = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

// filter method
const arr = [2, 5, 67, 4];
let multiply = arr.filter((num, i, arr) => {
  return num > 3;
});
console.log(multiply);

// myFilter method
let multiply2 = arr.myFilter((num, i, arr) => {
  return num > 3;
});
console.log(multiply2);
