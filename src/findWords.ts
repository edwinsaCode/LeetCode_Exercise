let words = ["abc", "bcd", "aaaa", "cbc"];
let x = "a";
let output = [];
for (let a = 0; a < words.length; a++) {
  if (words[a].includes(x)) {
    output.push(a);
  }
}
console.log(output);
