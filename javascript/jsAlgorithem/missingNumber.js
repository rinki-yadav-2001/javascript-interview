function findMissingNumber(arr) {
    let n = arr.length + 1;
    let totalSum = n * ((n + 1) / 2);
    const actualSum = arr.reduce((acc, item) => {
      return (acc += item);
    }, 0);
    let missingNumber = totalSum - actualSum;
    return missingNumber;
  }
  
  console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 9, 10]));
  