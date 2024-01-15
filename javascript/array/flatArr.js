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
