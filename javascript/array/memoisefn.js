function memoise(fn) {
    const cache = {};
    return function (...args) {
      let key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
        
      }
      const res = fn(...args);
      cache[key] = res;
      return res;
    };
  }
  
  function add(a, b, c) {
    return a + b + c;
  }
  
  const memoFn = memoise(add);
  console.log(memoFn(1, 2, 3));