function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried.apply(this, [...args, ...nextArgs]);
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6
console.log(curriedAdd(1, 2, 3));

// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func(...args);
//     } else {
//       return function (...nextArgs) {
//         return curried(...args, ...nextArgs);
//       };
//     }
//   };
// }

// function add(a, b, c) {
//   return a + b + c;
// }
// const curriedAdd = curry(add);
// console.log(curriedAdd(1)(2)(3)); // Output: 6
// console.log(curriedAdd(1, 2)(3)); // Output: 6
// console.log(curriedAdd(1)(2, 3)); // Output: 6
// console.log(curriedAdd(1, 2, 3));
