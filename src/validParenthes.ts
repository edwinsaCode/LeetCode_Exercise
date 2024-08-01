let ss = "()[]{}";
// let ss = "(]";

let store = { ")": "(", "}": "{", "]": "[" };

let rigth = false;
let couple: Array<string> = [];

for (let i = 0; i < ss.length; i++) {
  if (ss[i] === "(" || ss[i] === "{" || ss[i] === "[") {
    couple.push(ss[i]);
  } else if (
    (ss[i] === ")" && couple[couple.length - 1] === "(") ||
    (ss[i] === "}" && couple[couple.length - 1] === "{") ||
    (ss[i] === "]" && couple[couple.length - 1] === "[")
  ) {
    couple.pop();
  }
}
if (couple.length > 0) {
  console.log("false");
} else {
  console.log("true");
}
console.log(!(couple.length > 0));
