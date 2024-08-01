import readline from "readline-sync";
let angka: number;
let input;
let hasil = 0;
input = readline.question("Angka: ");
angka = Number(input);
for (let i = 1; i < angka; i++) {
  //   hasil = hasil + i * ;
  //   console.log(`${i}`);
  if (i % 3 === 0 || i % 5 === 0) {
    hasil = hasil + i;
  }
}
console.log(`${hasil}`);
