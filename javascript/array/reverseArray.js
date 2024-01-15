// Reverse an array.

const Arr = [6, 5, 54, 3, 3, 2, 2, 27];

// with reverse method
const reverseArr = Arr.reverse();
console.log(reverseArr);

// without reverse method
function reverseArrayMethod(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
}
const originalArray = [1, 2, 3, 4, 5];
console.log(reverseArrayMethod(originalArray));
