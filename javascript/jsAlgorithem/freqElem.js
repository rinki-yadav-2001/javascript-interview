// To find the maximum frequency element in an array in JavaScript, you can use an object
// to keep track of the frequency of each element. Here's an example function:

function freqElement(arr) {
  let countElem = {};

  for (let elem of arr) {
    countElem[elem] = (countElem[elem] || 0) + 1;
  }

  let maxFreq = 0;
  let maxFreqElem;
  for (let element in countElem) {
    if (countElem[element] > maxFreq) {
      maxFreq = countElem[element];
      maxFreqElem = element;
    }
  }
  return {
    maxFreq,
    maxFreqElem,
  };
}

console.log(freqElement([3, 2, 1, 1, 3, 3, , 209, 3, 44, 33, 56]));
console.log(freqElement([1, 2, 3, 3, 32, 12, 1, 2, 34, 3, 2, 2]));
