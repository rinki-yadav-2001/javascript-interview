function reverseNum(n) {
  // return +n.toString().split("").reverse().join("");
  let rev = 0;
  while (n > 0) {
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  return rev;
}

console.log(reverseNum(29876523));
console.log(reverseNum(65));
