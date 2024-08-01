let arrr = [3, 2, 1];
let first = 0;
let second = 0;
let third = 0;

for (let a = 0; a < arrr.length; a++) {
  let nu = arrr[a];
  if (nu > first) {
    third = second;
    second = first;
    first = nu;
  } else if (nu > second && nu < first) {
    third = second;
    second = nu;
  } else if (nu > third && nu < second) {
    third = nu;
  }
}
console.log(first, "/", second, "/", third);
