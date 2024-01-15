// Simulate private members in JavaScript objects.

const createCounter = () => {
  let privateNum = 0;
  function changeBy(val) {
    privateNum += val;
  }
  return {
    increment: () => {
      changeBy(1);
    },
    decrement: () => {
      changeBy(-1);
    },
    getValue: () => {
      return privateNum;
    },
  };
};
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 4

counter.decrement();
counter.decrement();
console.log(counter.getValue()); // Output: 2
console.log(counter.privateNum); //undefined
