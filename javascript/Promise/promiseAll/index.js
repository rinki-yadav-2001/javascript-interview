
// The Promise.all() method executes many promises in parallel. It accepts an array of promises and returns a single promise.

// It will only resolve if all the promises passed have been resolved.
// If any promise in an array of promises fails then it will reject.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("56");
    }, 1000);
  });
  const promise2 = Promise.resolve("hii");
  const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 100, "hello")
  );
  
  Promise.all([promise1, promise2, promise3])
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

    // POLYFILL FOR Promise.all



function allPromise(promises) {
  return new Promise((resolve, reject) => {
    if (!promises.length) {
      resolve([]);
    }
    const output = [];
    let counter = 0;
    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          output[index] = result;
          counter++;
          if (counter === promises.length) {
            resolve(output);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}


allPromise([promise1, promise2, promise3])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

  