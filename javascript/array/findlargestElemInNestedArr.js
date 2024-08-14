function findLargestInNestedArr(arr) {
    let largestNum = arr[0] || 0;
    function traverse(arr) {
      for (const elem of arr) {
        if (Array.isArray(elem)) {
          traverse(elem);
        } else {
          largestNum = elem > largestNum ? elem : largestNum;
        }
      }
    }
    traverse(arr);
    return largestNum;
  }
  
  console.log(findLargestInNestedArr([2, 5, 35, 7, [65, 7]]));