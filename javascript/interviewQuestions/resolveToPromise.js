
// Implement a function to resolve a given value to a Promise.
async function resolveToPromise(value) {
    return Promise.resolve(value);
  }
  
  const peomiseToResolve1 = resolveToPromise("hi");
  
  peomiseToResolve1
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  
  resolveToPromise(42).then((result) => console.log(result)); // Logs: 42
  resolveToPromise("Hello, world!").then((result) => console.log(result)); // Logs: Hello, world!
  resolveToPromise({ key: "value" }).then((result) => console.log(result));