let details = {
  name: "riya",
  age: "26",
};
function printName(city, state) {
  console.log(
    `my name is ${this.name} and I am ${this.age} year  young from ${city} ${state} `
  );
}

printName.apply(details, ["ayodhya", "UP"]);
// PollyFill for Apply
Function.prototype.myApply = function (BorrowedMethod = {}, args) {
  // below line indicates the borrowed method

  if (!Array.isArray(args)) {
    throw new Error("argument must passed as array");
  }
  BorrowedMethod.fn = this;
  BorrowedMethod.fn(...args);
};

printName.myApply(details, ["ayodhya", "up"]);
