function flattenArr(arr) {
  let result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(flattenArr(element));
    } else {
      result.push(element);
    }
  });
  return result;
}

let flatAArrr = flattenArr([6, 6, 6, [644, 7, 7, [7, 6, 5], 7], 0]);
console.log(flatAArrr);

function flattenArrWithDepth(arr, depth = 1) {
  let result = [];
  arr.forEach((element) => {
    if (Array.isArray(element) && depth > 0) {
      result = result.concat(flattenArrWithDepth(element, depth - 1));
    } else {
      result.push(element);
    }
  });
  return result;
}

let flatAArrr1 = flattenArrWithDepth(
  [6, 6, 6, [644, 7, 7, [7, 6, 5], 7], 0],
  2
);
console.log(flatAArrr1);
