import * as input from "readline-sync";
let n: string | number = input.question("Masukan Angka: ");
n = parseInt(n);
let genap: number[] = [];
let ganjil: number[] = [];
let hasilGanjil = 0;
let hasilGenap = 0;
for (let i = 0; i <= n; i++) {
  if (i % 2 == 0) {
    genap.push(i);
    hasilGenap += i;
  }
  if (i % 2 == 1) {
    ganjil.push(i);
    hasilGanjil += i;
  }
}
console.log(genap);
console.log(hasilGenap);
console.log(ganjil);
console.log(hasilGanjil);
