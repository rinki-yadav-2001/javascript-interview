let details = {
  name: "riya",
  age: "26",
};
function printName(city, state) {
  console.log(
    `my name is ${this.name} and I am ${this.age} year  young from ${city} ${state} `
  );
}

printName.call(details, "ayodhya", "UP");

// PollyFill for call
Function.prototype.myCall = function (BorrowedMethod = {}, ...args) {
  // below line indicates the borrowed method
  BorrowedMethod.fn = this;

  BorrowedMethod.fn(...args);
};

printName.myCall(details, "ayodhya", "UP");
