function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

const name = "Rinki";
console.log(reverseString(name));

// reverse method

function reverseMethod(str) {
  return str.split("").reverse().join("");
}
console.log(reverseMethod("yadav"));
