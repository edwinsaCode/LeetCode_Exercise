import readline from "readline-sync";

let toko: string | number = readline.question("Masukkan jumlah toko : ");
toko = parseInt(toko);
let step = [];
let peluangA = 0;
let peluangB = 0;

for (let i = 1; i <= toko; i++) {
  if (i % 3 === 0) {
    step.push(3);
  } else if (i > 3) {
    step.push(i % 3);
  } else {
    step.push(i);
  }
}
console.log(step);
for (let j = 0; j < toko - 2; j++) {
  if (step[j] === 1) {
    for (let k = j + 1; k < toko; k++) {
      if (step[k] === 2) {
        for (let h = k + 1; h < toko; h++) {
          if (step[h] === 3) {
            peluangA++;
          }
        }
      }
    }
  }
}
console.log(peluangA);
console.log("-----");

for (let a = 1; a <= toko - 2; a++) {
  for (let b = a + 1; b <= toko; b++) {
    for (let c = b + 1; c <= toko; c++) {
      console.log(a, b, c);
      peluangB++;
    }
  }
}
console.log("----");
console.log(peluangB);
