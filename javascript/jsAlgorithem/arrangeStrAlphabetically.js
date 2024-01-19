function arrangeStringAlphabetically(str) {
  // return str.split("").sort().join("");

  // bubble sort
  let strArr = str.split("");

  for (let i = 0; i < strArr.length - 1; i++) {
    for (let j = 0; j < strArr.length - 1 - i; j++) {
      if (strArr[j] > strArr[j + 1]) {
        [strArr[j], strArr[j + 1]] = [strArr[j + 1], strArr[j]];
      }
    }
  }
  return strArr.join("");
}

console.log(arrangeStringAlphabetically("rinki"));
console.log(arrangeStringAlphabetically("poop"));
