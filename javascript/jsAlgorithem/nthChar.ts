function nthChar(str: String, n: number) {
  if (n <= 0) {
    console.error("n is not valid ");
    return null;
  }
  let result: Array<string> = [];
  for (let i = n - 1; i < str.length - 1; i += n) {
    result.push(str[i]);
  }
  return result.join("");
}

console.log(nthChar("helloiutdjkjhgfjh", 2));
console.log(nthChar("stupidlkjhgfdsasdfghjkjhgfd", 65));
