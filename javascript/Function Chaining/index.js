// Function chaining is a technique where multiple functions are called on the same object in a sequential manner.
// Each function in the chain operates on the result of the previous function, making the code concise and expressive.



/****************************Function Channing: Using Object */

const myObject = {
    value: 10,
    add: function (num) {
      this.value += num;
      return this;
    },
    subtract: function (num) {
      this.value -= num;
      return this;  // Return the object for chaining
    },
    multiply: function (num) {
      this.value *= num;
      return this;  // Return the object for chaining
    },
    divide: function (num) {
      if (num !== 0) {
        this.value /= num;
      } else {
        console.log("value can not be devide");
      }
  
      return this;   // Return the object for chaining
    },
    display: function () {
      console.log(this.value);
      return this;  // Return the object for chaining
    },
  };
  myObject.add(10).subtract(5).multiply(2).divide(2).display();

  

/****************************Function Channing: Using Class Method */

class MyObject {
    constructor(value) {
      this.value = value || 0;
    }
    add(num) {
      this.value += num;
      return this;
    }
    subtract(num) {
      this.value -= num;
      return this;
    }
    multiply(num) {
      this.value *= num;
      return this;
    }
    divide(num) {
      if (num !== 0) {
        this.value /= num;
      } else {
        console.log("value can not be devide");
      }
  
      return this;
    }
    display() {
      console.log(this.value);
      return this;
    }
  }
  
  const myObject1 = new MyObject(10);
  myObject1.add(10).subtract(5).multiply(2).divide(2).display();


  /**************************** Function Channing : Using Constructor Function,
*/


function MyObject(value) {
    this.value = value || 0;
  
    this.add = function (num) {
      this.value += num;
      return this;
    };
    this.subtract = function (num) {
      this.value -= num;
      return this;
    };
    this.multiply = function (num) {
      this.value *= num;
      return this;
    };
    this.divide = function (num) {
      if (num !== 0) {
        this.value /= num;
      } else {
        console.log("value can not be devide");
      }
  
      return this;
    };
    this.display = function () {
      console.log(this.value);
      return this;
    };
  }
  
  const myObject2 = new MyObject(10);
  myObject2.add(10).subtract(5).multiply(2).divide(2).display();
  