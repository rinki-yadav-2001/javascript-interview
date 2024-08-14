function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      result = fn(...args);
      called = true;
    }
    return result;
  };
}

const greet = function (name) {
  console.log("hii" + " " + name);
};

const hi = once(greet);
hi("rinki");