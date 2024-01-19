function secondLargestNumber(arr) {
  let max = -Infinity;
  let secmax = -Infinity;
  for (const num of arr) {
    if (num > max) {
      secmax = max;
      max = num;
    } else if (num > secmax && num !== max) {
      secmax = num;
    }
  }
  return secmax;
}

console.log(secondLargestNumber([7, 3, 4, 4, 21, 43, 22, 12]));
