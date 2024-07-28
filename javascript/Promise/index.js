// Execution Blocking:

// Synchronous: Blocking. Each line waits for the previous one to complete.
// Asynchronous: Non-blocking. The program can continue running other tasks.
// Use Cases:

// Synchronous: Useful for operations that must be completed immediately and sequentially.
// Asynchronous: Ideal for I/O operations, timers, network requests, etc.

// Promise: 
// A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. 
// It allows you to write asynchronous code in a more synchronous fashion, improving readability and manageability.

// A Promise has four states---------:
// Pending: Before the event has happened, the promise is in the pending state.

// Settled: Once the event has happened it is then in the settled state.

// Fulfilled: Action related to the promise has succeeded.

// Rejected: Action related to the promise has failed.

let promise = new Promise((resolve, reject) => {
    const success = true;
    const data = { name: "Rinki", last: "Yadav" };
    setTimeout(() => {
      if (success) {
        resolve(data);
      } else {
        reject("failed");
      }
    }, 1000);
  });

  
  
  promise
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });