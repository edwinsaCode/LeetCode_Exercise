import readline from "readline-sync";

let diya = ["edwin", "adim", "abror", "mail", "albi"];
let lolos = [0];
let edwin: number;
let adim: number;
let abror: number;
let mail: number;
let albi: number;
let input;
input = readline.question("Nilai edwin: ");
edwin = Number(input);
input = readline.question("Nilai adim: ");
adim = Number(input);
input = readline.question("Nilai abror: ");
abror = Number(input);
input = readline.question("Nilai mail: ");
mail = Number(input);
input = readline.question("Nilai albi: ");
albi = Number(input);
for (let i = 0; i < 100; i++) {
  if (edwin <= 75 || adim <= 75 || abror <= 75 || mail <= 75 || albi <= 75) {
    lolos.push(i);
  }
}
console.log(lolos);
