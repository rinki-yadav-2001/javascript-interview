function capitalized(str) {
  const words = str.split(" ");
  const capitalWord = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalWord.join(" ");
}
console.log(capitalized("god is always with me"));
