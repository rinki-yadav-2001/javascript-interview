// Filter an object to include specific key-value pairs based on a condition.

const obj = { a: 10, b: 20, c: 30, d: 40 };

const filterObj = Object.entries(obj).filter(([key, value]) => {
  return value > 20;
});

console.log(Object.fromEntries(filterObj));

const filterObj1 = Object.entries(obj).reduce((obj1, [key, value]) => {
  if (value < 30) obj1[key] = value;
  return obj1;
}, {});

console.log(filterObj1);
