// Removes all falsy values from an object.

function removeFalsyValues(obj) {
    const result = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key) && obj[key]) {
        result[key] = obj[key];
      }
    }
    return result;
  }
  const obj = {
    name: "John",
    age: 0,
    address: null,
    email: "",
    phone: "123-456-7890",
    isActive: true,
  };
  
  const cleanedObj = removeFalsyValues(obj);
  console.log(cleanedObj);