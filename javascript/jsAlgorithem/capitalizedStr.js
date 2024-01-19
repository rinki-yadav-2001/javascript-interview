function capitalizeStr(str) {
  // return str
  //   .split(" ")
  //   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //   .join(" ");

  let strArr = str.split(" ");

  const capitalWord = strArr.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalWord.join(" ");
}

console.log(capitalizeStr("rinki kha ja rhi ho"));
console.log(capitalizeStr("jai shree raam"));
