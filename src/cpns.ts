// import readline from "readline-sync";
let sKanguru2 = [0, 3];
let sKanguru1 = [4, 2];
let vKanguru2: number = 0;
let vKanguru1: number = 4;
// let input;
// let susul = 0;
// let loop = 1;
// let kang1 = 0;
// let kang2 = 0;

// input = readline.question("Start Kangguru 1: ");
// sKanguru1 [0]= Number (input);
// input = readline.question("Start Kangguru 2: ");
// sKanguru2 [0]= Number(input);
// input = readline.question("Kecepatan Kangguru 1: ");
// vKanguru1 [0]= Number(input);
// input = readline.question("Kecepatan Kangguru 2: ");
// vKanguru2 [0]= Number(input);
// // let susul = (sKanguru2 - sKanguru1) / (vKanguru2 - vKanguru1);
// console.log(`${susul}`);
for (let i = 0; i <= 1000; i++) {
  vKanguru1 = vKanguru1 + sKanguru1[1];
  vKanguru2 = vKanguru2 + sKanguru2[1];
  if (vKanguru1 === vKanguru2) {
    console.log(`${vKanguru1} Ya`);
    break;
  }
}
if (vKanguru1 !== vKanguru2) console.log("tidak");
