let s = "leet**cod*e";
let tampung: string[] = [];
for (let i = 0; i < s.length; i++) {
  if (s[i] === "*") {
    tampung.pop();
  } else {
    tampung.push(s[i]);
  }
}
console.log(tampung.join(""));
