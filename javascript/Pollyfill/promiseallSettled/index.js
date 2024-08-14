// `Promise.allSettled()`
// Promise.allSettled() method which accepts an array of promises. 
// It returns a new promise that will resolve if all the promises in the array are settled,
//  regardless of whether the promises are resolved or rejected.


// Promise.allSettled Pollyfill
function allSettledPromise(promises) {
    return new Promise((resolve, reject) => {
      if (!promises.length) {
        resolve([]);
      }
      const output = [];
      let counter = 0;
      promises.forEach((promise, index) => {
        promise
          .then((result) => {
            counter++;
            output[index] = { status: "fulfilled", result };
          })
          .catch((err) => {
            counter++;
            output[index] = {
              status: "reject",
              err,
            };
          })
          .finally(() => {
            if (counter === promises.length) {
              resolve(output);
            }
          });
      });
    });
  }
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("56");
    }, 1000);
  });
  const promise2 = Promise.reject("faileddd");
  const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 100, "hello")
  );
  
//   Promise.allSettled([promise1, promise2, promise3])
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));


    allSettledPromise([promise1, promise2, promise3])
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

    const allSettled = async (promises) => {
        if (!promises.length) {
          return []
        }
      
        const poolResponses = []
        let counter = 0
      
        for (let i = 0; i < promises.length; i++) {
          try {
            const res = await promises[i];
            poolResponses[i] = {
              status: 'fulfilled',
              value: res
            }
          } catch (err) {
            poolResponses[i] = {
              status: 'rejected',
              reason: err
            }
          } finally {
            counter++
            if (counter === promises.length) {
              return poolResponses
            }
          }
        }
      }