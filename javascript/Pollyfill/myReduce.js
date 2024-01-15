Array.prototype.myReduce = function (cb, initialvalue) {
  let accumulator = initialvalue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};
const arr = [2, 5, 67, 4];
let multiply = arr.reduce((acc, num, i, arr) => {
  return (acc *= num);
}, 1);
console.log(multiply);

let multiply2 = arr.myReduce((acc, num, i, arr) => {
  return (acc *= num);
}, 1);
console.log(multiply2);
