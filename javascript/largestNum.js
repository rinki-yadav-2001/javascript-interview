//  find largest number in an array

function LargestNumber(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  let largenumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largenumber) {
      largenumber = arr[i];
    }
  }
  return largenumber;
}

const arr1 = [6, 8, 4, 3, 2, 6, 99, 0, 70];
const result = LargestNumber(arr1);
console.log(result);
