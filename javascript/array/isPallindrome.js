//  Check if an array is a palindrome:

function isPalindrome(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const palindromeArray = [1, 2, 3, 5, 1];
const isPal = isPalindrome(palindromeArray);
console.log(isPal);
