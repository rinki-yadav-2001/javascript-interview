function maxSuminArr(arr){
    let maxSofar=arr[0]
    let maxEnding=arr[0]
    
    for (let i=0; i<arr.length; i++){
        maxEnding= Math.max(arr[i], maxEnding+arr[i])
        maxSofar= Math.max(maxSofar, maxEnding)
    }
    return maxSofar
}
const array = [-2, 1, -3, 4, -1, 2, 1, 0, 4];
console.log(maxSuminArr(array));