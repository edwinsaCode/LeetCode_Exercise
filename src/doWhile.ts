for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  } else if (i > 5) {
    break;
  }
  console.log(i);
}
console.log("-----");
let k = 0;
while (k <= 10) {
  k++;
  if (k % 2 !== 0) {
    continue;
  } else if (k > 5) {
    break;
  }

  console.log(k);
}
console.log("----");
let l = 0;
do {
  l++;
  if (l % 2 !== 0) {
    continue;
  } else if (l > 5) {
    break;
  }
  console.log(l);
} while (l <= 10);
