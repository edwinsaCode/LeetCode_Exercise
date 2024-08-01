// let array = [1, 2, 3, 4, 5, 6];
// let array2 = [7, 8];
// let hasilSplice = array.splice(3, 3);
// console.log(hasilSplice);

// let hasilSlice = array.slice(2, 3);
// console.log(hasilSlice);

// let hasilConcat = array.concat(array2, [12], [32, 1], [32]);
// console.log(hasilConcat);

import readline from "readline-sync";

let angka: string | number = readline.question("Masukkan Angka : ");
angka = parseInt(angka);
let arr = [1, 2, 3, 4, 5];
let a = arr.length;
let rotation = angka % a;

let rotatedArr = arr.slice(a - rotation).concat(arr.slice(0, a - rotation));
console.log(rotatedArr);
// for (let i = 0; i < angka; i++) {
//   let j = arr.pop();
//   if (j) {
//     arr.unshift(j);
//   }
// }
// console.log(arr);
