function shuffleArrMethod(arr) {
  const shuffleArr = [...arr];
  for (let i = shuffleArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleArr[i], shuffleArr[j]] = [shuffleArr[j], shuffleArr[i]];
  }
  return shuffleArr;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArrMethod(originalArray);
console.log(shuffledArray);
