function findDuplicateElements(arr) {
  let occurance = {};
  let dupsArr = [];
  for (const element of arr) {
    occurance[element] = (occurance[element] || 0) + 1;
   
  }
  for (let key in occurance ){
       if (occurance[key] >1) {
      dupsArr.push(+key);
    }
  }
  return dupsArr;
}
const myArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 8, 8, 6, 7, 6, 6, 5, 5, 5, 4, 9];
const duplicateElements = findDuplicateElements(myArray);
console.log("Duplicate Elements:", duplicateElements);