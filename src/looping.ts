import readline from "readline-sync";
let angka: number;
let input;

input = readline.question("Angka: ");
angka = Number(input);
for (let i = 0; i < angka; i++) {
  if (i % 2 === 0 && !(i === 0)) {
    console.log(`${i} bilangan genap`);
  }
}
