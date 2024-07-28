function removeAnagrams(strArr){
    const obj={}
    const result=[]
    for(elem of strArr){
        const sortedStr = elem.split('').sort().join('')
        if(!obj[sortedStr]){
            obj[sortedStr]=elem
            result.push(elem)
        }
    }
    return result
}
const str = ['code', 'doce', 'ecod', 'framer', 'frame'];
const result = removeAnagrams(str);
console.log(result);

// function removeAnagrams(strArr){
//     const seen=new Set()
//     const result=[]
//     for(elem of strArr){
//         const sortedStr = elem.split('').sort().join('')
//         if(!seen.has(sortedStr)){
//             seen.add(sortedStr)
//             result.push(elem)
//         }
//     }
//     return result
// }
// const str = ['code', 'doce', 'ecod', 'framer', 'frame'];
// const result = removeAnagrams(str);
// console.log(result);