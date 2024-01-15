// 1.find Char count
function strCount(str) {
  let strCount = {};
  if (typeof str !== "string") {
    throw new Error("Input is not a string");
  }
  for (const char of str) {
    strCount[char] = (strCount[char] || 0) + 1;
  }
  return strCount;
}

const inputString1 = "hello world";
const result1 = strCount(inputString);

console.log(result1);

// 2. find length

function charCount(str) {
  if (typeof str !== "string") {
    return "it is not string";
  }
  return str.length;
}
const inputString = "hello world";
const result = charCount(inputString);

console.log(result);
