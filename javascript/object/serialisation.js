const details = { name: "rinki", lastname: "Yadav", age: "26" };

//  serialization---- change normal JS object into JSON format or string

const jsToJson = JSON.stringify(details);
console.log(jsToJson);

//  deSerialization---- change JSON format or string to normal JS object

const JsonToJSObject = JSON.parse(jsToJson);
console.log(JsonToJSObject);
