import readline from "readline-sync";
let input = readline.question("Masukkan Kata : ");
let diya = input.toLowerCase();
let kump = "";
let manip = "";
let akhir = 0;

for (let a = 0; a < diya.length; a++) {
  for (let b = a; b < diya.length; b++) {
    kump += diya[b];
    for (let c = kump.length - 1; c >= 0; c--) {
      manip += kump[c];
    }
    // console.log(kump, manip);
    if (kump.length !== 1 && kump === manip && manip.length >= 3) {
      akhir++;
      console.log(manip);
    }
    manip = "";
  }
  kump = "";
}
console.log(akhir);
