/*********************************METHOD 01****************************************/
// function removeDuplicate(arr) {
//   let uniqueArr = [];
//   for (const element of arr) {
//     if (!uniqueArr.includes(element)) {
//       uniqueArr.push(element);
//     }
//   }
//   return uniqueArr;
// }
// const myArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 8, 8, 6, 7, 6, 6, 5, 5, 5, 4, 9];
// const uniqueArray = removeDuplicate(myArray);
// console.log("unique Elements:", uniqueArray);

/*********************************METHOD 02****************************************/
// function removeDuplicate(arr) {

//   let uniqueArr = [];
//   arr.forEach(item=>{
//     if(!uniqueArr.includes(item)){
//       uniqueArr.push(item)
//     }
//   })
//   return uniqueArr;
// }
// const myArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 8,8,6,7,6,6,5,5,5,4, 9];
// const uniqueArray = removeDuplicate(myArray);
// console.log("unique Elements:", uniqueArray);

/*********************************METHOD 03****************************************/
// function removeDuplicate(arr) {
//   return arr.reduce((uniqueArr, elem) => {
//     if (!uniqueArr.includes(elem)) {
//       uniqueArr.push(elem);
//     }
//     return uniqueArr;
//   }, []);
// }
// const myArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 8, 8, 6, 7, 6, 6, 5, 5, 5, 4, 9];
// const uniqueArray = removeDuplicate(myArray);
// console.log("unique Elements:", uniqueArray);

/*********************************METHOD 04****************************************/
function removeDuplicate(arr) {
  return arr.filter((elem, index) => arr.indexOf(elem) === index);
}
const myArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 8, 8, 6, 7, 6, 6, 5, 5, 5, 4, 9];
const uniqueArray = removeDuplicate(myArray);
console.log("unique Elements:", uniqueArray);
