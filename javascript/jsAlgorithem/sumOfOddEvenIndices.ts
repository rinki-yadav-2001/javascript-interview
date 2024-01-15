function sumEvenOddIndices(numArr: any) {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < numArr.length; i++) {
    i % 2 === 0 ? (evenSum += numArr[i]) : (oddSum += numArr[i]);
  }

  return {
    evenSum,
    oddSum,
  };
}

console.log(sumEvenOddIndices([25, 4, 4, 4, 7, 3, 1]));
console.log(sumEvenOddIndices([14, 40, 34, 8, 3, 54, 7]));
