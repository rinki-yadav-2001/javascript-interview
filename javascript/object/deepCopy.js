function deepCopy(obj) {
    if ( typeof obj !== "object" || obj === null) {
      return obj;
    }
    if (Array.isArray(obj)) {
      return obj.map((item) => deepCopy(item));
    }
    const copy = {};
    for (let key in obj) {
      if (obj[key]) {
        copy[key] = deepCopy(obj[key]);
      }
    }
    return copy;
  }
  
  const original = {
    name: "John",
    address: {
      city: "New York",
      zip: "10001",
    },
  };
  
  const deepCopyObj = deepCopy(original);