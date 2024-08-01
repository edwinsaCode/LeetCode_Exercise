let numss = [4, 4, 3];
let modus = [];
let count = 0;
for (let a = 0; a < numss.length; a++) {
  let right = false;
  for (let b = 0; b < numss.length; b++) {
    if (numss[a] === numss[b]) {
      count++;
    }
  }
  if (count > numss.length / 2) {
    console.log(numss[a]);
    break;
  }
}
// console.log(numss);
// console.log(numss[0], count);
