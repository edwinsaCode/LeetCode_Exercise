let numsss = [7, 52, 2, 4];
let value = 0;
for (let a = 0; a < numsss.length; a++) {
  if (numsss.length > 1) {
    let first = numsss[a];
    let last = numsss[numsss.length - 1];
    value += Number(`${first}${last}`);
    numsss.pop();
  } else {
    value += numsss.pop()!;
  }
  console.log("🚀 ~ file: concatenation.ts:3 ~ value:", value);
}
console.log(numsss);
