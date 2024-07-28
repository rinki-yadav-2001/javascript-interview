function memoise(fn) {
    const cashe = {};
    return function (...args) {
      let key = JSON.stringify(args);
      if (cashe[key]) {
        return cashe[key];
        
      }
      const res = fn(...args);
      cashe[key] = res;
      return res;
    };
  }
  
  function add(a, b, c) {
    return a + b + c;
  }
  
  const memoFn = memoise(add);
  console.log(memoFn(1, 2, 3));