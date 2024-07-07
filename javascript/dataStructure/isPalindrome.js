
function isPalindrome(s){

    let strArr = s.split('')
    let start=0
    let end= s.length-1

    while(start< end){
       [ strArr[start],strArr[end]] = [strArr[end],strArr[start]]
       start++
       end--
    }
    return s===strArr.join('')
}
console.log(isPalindrome("121"))