// Transform an array of objects into an object with key-value pairs.

const Arr = [{ a: 1 }, { b: 2 }, { c: 3 }];

const transformedObj = Arr.reduce((obj, item) => {
  // console.log(item, obj)
  const key = Object.keys(item);
  const val = item[key];
  obj[key] = val;
  return obj;
}, {});
console.log(transformedObj);
