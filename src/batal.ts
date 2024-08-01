import readline from "readline-sync";
let kaka = readline.question("Sebutkan Angka: ");
let arayKaka = kaka.split(" ");
// console.log(arayKaka);
let total = 0;
for (let i = 0; i < arayKaka.length; i++) {
  if (arayKaka[i] === "B" && total !== 0) {
    total = total - Number(arayKaka[i - 1]);
  } else {
    total = total + Number(arayKaka[i]);
  }
}
console.log(total);
