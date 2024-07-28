function rotateArray(nums, k){
    let n = nums.length
    if(k>n){
        k= k%n
    }
    
   reverseMethod(nums, 0,n-1)
   reverseMethod(nums, 0,k-1)
   reverseMethod(nums, k,n-1)
   return nums
}

function reverseMethod(arr, start,end){
    while(start<end){
        [arr[start], arr[end]]=[arr[end], arr[start]]
        start++
        end--
    }
}
console.log(rotateArray([1,1,2,3,3,4,4,4,4,4,66,66],6))