function secondMinNumber(arr) {
  let min = Infinity;
  let secMin = Infinity;
  for (const num of arr) {
    if (num < min) {
      secMin = min;
      min = num;
    } else if (num < secMin && num !== min) {
      secMin = num;
    }
  }
  return secMin;
}

console.log(secondMinNumber([7, 3, 4, 4, 21, 43, 22, 12]));
