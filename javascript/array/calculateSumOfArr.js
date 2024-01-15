// Calculate the sum of all numbers in an array.

// with traditional for loop method
function calculateSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add each element to the sum
  }

  return sum;
}

const numbers = [5, 3, 9, 2, 11, 8];
const totalSum = calculateSum(numbers);

console.log("The sum of all numbers is:", totalSum); // Output: The sum of all numbers is: 38

// with reduce method
const totalSumOfArrNum = numbers.reduce((sum, item) => {
  sum += item;
  return sum;
}, 0);

console.log(totalSumOfArrNum);
