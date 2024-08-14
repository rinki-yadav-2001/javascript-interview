/* async and await are built on top of promises and provide a more readable and 
convenient way to handle asynchronous operations in JavaScript. 
 They allow you to write asynchronous code that looks and behaves like synchronous code
 , making it easier to understand and maintain. Here's how they work:


 async Function
 An async function is a function that returns a promise. It can contain await expressions, which pause the execution of the function, waiting for the promise to resolve.


 await Expression
 The await expression is used to pause the execution of an async function until the promise is resolved. It can only be used inside an async function.

 How async and await Work Together
/* When an async function is called, it returns a promise. Inside the function, the await expression is
 used to wait for a promise to resolve. While the await expression pauses the execution of the async function,
  it doesn't block the main thread. Instead, it allows other operations to continue executing  */

  