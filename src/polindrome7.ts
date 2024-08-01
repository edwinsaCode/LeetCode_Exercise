import readline from "readline-sync";
let input = readline.question("Masukkan Kata : ");
let diya = input.toLowerCase();
let kotakMainan: Array<Array<string>> = [];

for (let i = 0; i < diya.length; i++) {
  if (diya[i] === " ") {
    continue;
  }

  if (kotakMainan.length === 0) {
    kotakMainan.push([diya[i]]);
  } else {
    let dataNotFound = true;
    for (let j = 0; j < kotakMainan.length; j++) {
      if (kotakMainan[j].includes(diya[i])) {
        kotakMainan[j].push(diya[i]);
        dataNotFound = false;
      }
    }
    if (dataNotFound) {
      kotakMainan.push([diya[i]]);
    }
  }
}
let hasil: number = 0;
for (let k = 0; k < kotakMainan.length; k++) {
  console.log(`${kotakMainan[k][0]}: ${kotakMainan[k].length}`);
  hasil = hasil + kotakMainan[k].length;
}
console.log(hasil);
console.log(kotakMainan);
console.log(kotakMainan.length);
