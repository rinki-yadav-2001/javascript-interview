function reverseString(str: String) {
  // return str == str.split("").reverse().join("");
  let strArr = str.split("");
  let start = 0;
  let end = strArr.length - 1;

  while (start < end) {
    const temp = strArr[start];
    strArr[start] = strArr[end];
    strArr[end] = temp;
    start++;
    end--;
  }

  const reverseStr = strArr.join("");
  return reverseStr;
}

console.log(reverseString("hello"));
console.log(reverseString("stupid"));
