function middleNumOfThree(num1: number, num2: number, num3: number) {
  let numArr = [num1, num2, num3];
  numArr.sort((a, b) => a - b);
  return numArr[1];
}

console.log(middleNumOfThree(25, 4, 4));
console.log(middleNumOfThree(14, 40, 34));
