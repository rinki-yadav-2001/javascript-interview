// myMap method pollyfill

Array.prototype.myMap = function (cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i, this));
  }
  return newArr;
};

const arr = [2, 5, 67, 4];
// map method
let multiply = arr.map((num, i, arr) => {
  return num * 3;
});
console.log(multiply);

// myMap method
let multiply2 = arr.myMap((num, i, arr) => {
  return num * 3;
});
console.log(multiply2);
