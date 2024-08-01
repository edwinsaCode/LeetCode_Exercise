import readline from "readline-sync";
let angka: number = 1000000;
let input;
let hasil = 0;
let loop = 1;

input = readline.question("Angka: ");
angka = Number(input);
for (let i = 1; i <= angka; i++) {
  let fib = hasil + loop;
  hasil = loop;
  loop = fib;
  // console.log(`${fib}"---"`);
  if (loop % 2 == 0) {
    console.log(`${loop}`);
  }
}
