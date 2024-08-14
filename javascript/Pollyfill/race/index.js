// The Promise.race() method returns a promise that fulfills or rejects
//  as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise

const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 100)
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Promise 2 rejected"), 500)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 1500)
);



Promise.race([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


//   Promise.race() Pollyfill 

function racePromise(promisesArr) {
    return new Promise((resolve, reject) => {
      promisesArr.forEach((p) => {
        p.then(resolve, reject);
      });
    });
  }
  
  racePromise([promise1, promise2, promise3])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));