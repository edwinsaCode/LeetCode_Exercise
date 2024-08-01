import readline from "readline-sync";
let input = readline.question("Masukkan Kata : ");
let sambung = input.toLowerCase();

let wadah = "";
let wadah2 = "";

for (let i = 0; i < sambung.length; i++) {
  if (sambung[i] !== " " && sambung[i] !== "," && sambung[i] !== ":") {
    wadah += sambung[i];
  }
}
for (let j = wadah.length - 1; j >= 0; j--) {
  wadah2 += wadah[j];
}
console.log(wadah2);
if (wadah2 == wadah) {
  console.log("Polindrome");
} else {
  console.log("Bukan Polindrome");
}
