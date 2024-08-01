let integ: number = 10;
let divisible: number = 3;
let save1 = 0;
let save2 = 0;
for (let a = 1; a <= integ; a++) {
  console.log(a);
  if (a % divisible === 0) {
    save1 += a;
  } else {
    save2 += a;
  }
}
let out = save2 - save1;
console.log(save2 - save1);
console.log(out);
console.log(save2, "--");
