// o/p=>[[1,"Alan", "Bangalore, Karnataka, India" ], [2, "John", "Mysore, Karnataka, India"]]
const idList = { user1: { id: 1 }, user2: { id: 2 } }
const addressObj = { 1: "Bangalore, Karnataka, India", 2: "Mysore, Karnataka, India", 3: "New Delhi, NCR, India" }
const nameList = {
  1: {
    name: {
      fullName: "Alan"
    }
  }, 2: {
    name: {
      fullName: "John"
    }
  }, 3: {
    name: {
 
      fullName: "Mike"
 
    }
  }
}

let idArr = Object.entries(idList)
console.log(idArr)

 const newDetails= idArr.map(([key, val])=>{
     console.log(key, val)
  userId = val.id

  const personName =nameList[userId].name.fullName;
  const add = addressObj[userId]
  
  return [userId, personName, add]
})

console.log(newDetails)
