function removeDuplicate(str){
    const seen=new Set()
    let result=''
    for(char of str){
      
        if(!seen.has(char)){
            seen.add(char)
            result+=char
        }
    }
    return result
}
const str = 'adajshbafafagsgsxvxgs';
const result = removeDuplicate(str);
console.log(result);