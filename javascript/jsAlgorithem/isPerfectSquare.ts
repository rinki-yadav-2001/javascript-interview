function isPerfectSquare(num: number) {
  if (num < 0) {
    return false;
  }
  let squareRoot = Math.sqrt(num);
  return squareRoot === Math.floor(squareRoot);
}

console.log(isPerfectSquare(25));
console.log(isPerfectSquare(14));
