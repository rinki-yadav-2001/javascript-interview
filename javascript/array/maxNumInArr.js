function findMaxNumberInArr(arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

const originalArr = [27, 2, 2, 3, 3, 54, 5, 6];

console.log(findMaxNumberInArr(originalArr));
