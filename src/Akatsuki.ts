// import readline from "readline-sync";
// let kalimat: string | number = readline.question("masukkan kalimat: ");
// let alfabet = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "p",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// let kalimatKonvert: string = kalimat.toLowerCase();
// let gesrKarakter: number = 2;
// let enkripsi: string = "";
// for (let i = 0; i < kalimatKonvert.length; i++) {
//   if (alfabet.includes(kalimatKonvert[i])) {
//     let lokasi = alfabet.indexOf(kalimatKonvert[i]);
//     let posisi = lokasi + gesrKarakter;
//     if (posisi > 26) {
//       posisi = posisi - 26;
//     }
//     enkripsi += `${alfabet[posisi]}`;
//   } else {
//     if (kalimatKonvert[i] === "|") {
//       gesrKarakter = 4;
//     } else if (kalimatKonvert[i] === "]") {
//       gesrKarakter = 2;
//     }
//     enkripsi += `${kalimatKonvert[i]}`;
//   }
// }
// console.log(enkripsi);

// for (let a = -10; a < 10; a += 2) {
//   console.log(a);
// }
// for (let b = 50; b > 5; b -= 11) {
//   console.log(b);
// }
// for (let c = 20; c <= 21; c++) {
//   console.log(c);
// }
// for (let d = 31; d > 4; d -= 10) {
//   console.log(d);
// // }
// for (let e = -50; e < 5; e += 5) {
//   console.log(e);
// }
// console.log("tes");
for (let f = 0; f <= 5; f++) {
  console.log(`*${f}*`);
  for (let g = 0; g <= f; g++) {
    console.log(`-${g}-`);
  }
}

for (let h = 5; h >= 0; h--) {
  for (let i = h; i >= 0; i--) {
    process.stdout.write("*");
  }
  console.log();
}

for (let j = 0; j <= 5; j++) {
  for (let k = 0; k <= 5 - j; k++) {
    process.stdout.write(" ");
  }
  for (let l = 0; l <= j; l++) {
    process.stdout.write(" *");
  }
  console.log();
}
for (let j = 0; j <= 5; j++) {
  for (let k = j; k >= 0; k--) {
    process.stdout.write(" ");
  }
  for (let l = 5; l >= j; l--) {
    process.stdout.write(" *");
  }
  console.log();
}
