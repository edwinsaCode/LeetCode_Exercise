import readline from "readline-sync";
let angka: number;
let input;
input = readline.question("Masukan angka: ");
angka = Number(input);
if (angka < 10) {
  console.log((angka = 10));
} else if (angka < 20 && angka > 10) {
  console.log((angka = 20));
} else if (angka > 20 && angka < 30) {
  console.log((angka = 30));
}

for (let i = 0; i < angka; i++) {
  for (let j = i; j < angka; j++) {}
}
