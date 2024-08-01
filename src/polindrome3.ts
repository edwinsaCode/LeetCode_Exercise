import readline from "readline-sync";
let input = readline.question("Masukkan Kata : ");
let sambung = input.toLowerCase();
let tampung = " ";
let tampung2 = " ";
let tampung3 = " ";
for (let a = 0; a < sambung.length; a++) {
  tampung += sambung[a];
}
for (let b = sambung.length - 1; b >= 0; b--) {
  tampung2 += sambung[b];
}
if (tampung2 === sambung) {
  for (let c = 1; c < sambung.length; c++) {
    tampung2 += sambung[c];
    for (let d = tampung2.length - 1; d >= 0; d--) {
      tampung3 += tampung2[d];
    }
  }
}
console.log(tampung2, tampung3);
