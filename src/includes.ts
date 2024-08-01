// import readline from "readline-sync";

// let angka: string | number = readline.question("Masukkan Angka : ");
// angka = parseInt(angka);
// let arrFib = [];
// let arrGen = [];
// let v = 1;
// let x = 0;
// for (let i = 1; i <= angka; i++) {
//   let fibo = x + v;
//   x = v;
//   v = fibo;
//   arrFib.push(fibo);
// }
// for (let k = 1; k <= angka; k++) {
//   if (k % 2 == 0) {
//     arrGen.push(k);
//   }
// }
// console.log(arrFib, "---");
// console.log(arrGen);

let aray = [3, 3, -3, 3, 3];
let ubah = [[], [], []];
let s = 0;
for (let j = 0; j < aray.length - 2; j++) {
  for (let k = j + 1; k <= aray.length; k++)
    for (let t = k + 1; t <= aray.length; t++) s++;
  console.log(j, k, t);
}
console.log(s);
