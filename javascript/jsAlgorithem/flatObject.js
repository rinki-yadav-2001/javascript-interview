function flattenObject(obj, parentKey=""){
    let storedObj= {}
   
    for(let key in obj){
      let newKey = parentKey? `${parentKey}.${key}` : key
        if(typeof obj[key] === "object"){
            storedObj = {...storedObj, ...flattenObject(obj[key], newKey)}
            
        }else{
            storedObj[newKey] = obj[key]
        }
    }
    return storedObj
}


const user ={
    name:'John',
    age:23,
    address:{
      home: {
        street: '21-23 copwer st',
        pincode:2150
      },
      office:{
        street:'kent street',
        pincode:2000
      }
    }
  }
console.log(flattenObject(user,'user'))
//   {
//     "user.name" : "John",
//     "user.age": 23,
//     "user.address.home.street": "21-23 copwer st",
//     "user.address.home.pincode": 2150,
//     "user.address.office.street": "kent street",
//     "user.address.office.pincode": 2000
// }