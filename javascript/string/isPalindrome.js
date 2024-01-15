function isPalindrome(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
    if (str.toLowerCase() === reverseStr.toLowerCase()) {
      return true;
    }
  }
  return false;
}
console.log(isPalindrome("yadav"));
console.log(isPalindrome("vadav"));
