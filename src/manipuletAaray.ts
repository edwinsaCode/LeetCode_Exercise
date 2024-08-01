// push
let a: number[] = [];
a[a.length] = 1;
console.log(a);

let b: number[] = [];

for (let i = 1; i <= 15; i++) {
  b[b.length] = i;
}
console.log(b);
delete b[b.length - 1];
console.log(b);
// unshif
for (let j = 2; j <= 5; j++) {
  delete b[j];
}
console.log(b);
for (let k = 0; k <= b.length; k++) b[15] = 15;
console.log(b);
