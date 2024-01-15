let details = {
  name: "riya",
  age: "26",
};
function printName(city, state) {
  console.log(
    `my name is ${this.name} and I am ${this.age} year  young from ${city} ${state} `
  );
}

// let p1 = printName.bind(details);
// p1()

// PollyFill for Bind
Function.prototype.myBind = function (BorrowedMethod = {}, ...args) {
  BorrowedMethod.fn = this;
  if (typeof this !== "function") {
    throw new Error("not calllable");
  }
  return function (...args2) {
    BorrowedMethod.fn(...args, ...args2);
  };
};

let p2 = printName.myBind(details, "ayodhya");
p2("UP");

// printName.call(details, ""ayodhya", "UP"");

// PollyFill for call
Function.prototype.myCall = function (BorrowedMethod = {}, ...args) {
  // below line indicates the borrowed method
  BorrowedMethod.fn = this;

  BorrowedMethod.fn(...args);
};

printName.myCall(details, "ayodhya", "UP");

// printName.apply(details, ["ayodhya", "UP"]);
// PollyFill for Apply
Function.prototype.myApply = function (BorrowedMethod = {}, ...args) {
  // below line indicates the borrowed method

  if (!Array.isArray(...args)) {
    throw new Error("argument must passed as array");
  }
  BorrowedMethod.fn = this;
  BorrowedMethod.fn(...args);
};

printName.myApply(details, ["ayodhya", "up"]);
