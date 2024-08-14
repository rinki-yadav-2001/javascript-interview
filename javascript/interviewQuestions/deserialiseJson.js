
// Implement a function to deserialize a JSON string.

function deserializeJson(str) {
    try {
      return JSON.parse(str);
    } catch (err) {
      console.log(err);
    }
  }
  
  const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
  
  console.log(deserializeJson(jsonString));