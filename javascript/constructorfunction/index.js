// you can use a constructor function to define a custom type and the new operator to create multiple objects from this type.

// Technically speaking, a constructor function is a regular function with the following convention:

// The name of a constructor function starts with a capital letter like Person, Document, etc.
// A constructor function should be called only with the new operator.

function Person(name, add) {
  this.name = name;
  this.add = add;
  this.info = function () {
    console.log("hello my name is " + this.name + "from " + this.add);
  };
}

const p1 = new Person("Rinki", "Ayodhya");
p1.info();

// Basically, the new operator does the following:

// Create a new empty object and assign it to the this variable.
// Assign the arguments 'John' and 'Doe' to the firstName and lastName properties of the object.
// Return the this value.

// The problem with the constructor function is that when you create multiple instances of the Person, the this.getFullName() is duplicated in every instance, which is not memory efficient.

// To resolve this, you can use the prototype so that all instances of a custom type can share the same methods.

// Creating a simple constructor function and adding a method to its prototype
function Person(name) {
  this.name = name;
}

// Adding a method to the prototype of Person objects
Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}.`;
};

// Creating an instance of Person
const john = new Person("John");

// Accessing the method from the prototype
console.log(john.greet()); // Output: Hello, my name is John.
