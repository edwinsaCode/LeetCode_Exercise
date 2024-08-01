// import readline from "readline-sync";
// let input = readline.question("masukkan kata : ");
// //  example1 = ["kamu", "saya", "apa", "tutu", "hallo", "oyo"]
// //  example2 = ["iya", "sama", "toto", "anna", "leo", "eye"]
// let penampung = [];
// let total = [];
// let notPolindrom = [];
// let polindrom = input.split(" ");
// console.log("------");
// console.log("default", polindrom.length, polindrom);
// console.log("------");
// for (let i = 0; i < polindrom.length; i++) {
//   let wadah = "";
//   for (let j = polindrom[i].length - 1; j >= 0; j--) {
//     // console.log(j);
//     // console.log(polindrom[i][j]);
//     wadah += polindrom[i][j];
//   }
//   penampung.push(wadah);
//   if (polindrom[i] === penampung[i]) {
//     total.push(polindrom[i]);
//   } else {
//     notPolindrom.push(polindrom[i]);
//   }
// }
// console.log("reverse", penampung.length, penampung);
// console.log("------");
// console.log("polindrom =", total.length, total);
// console.log("not a polindrom =", notPolindrom.length, notPolindrom);

import readline from "readline-sync";
let input = readline.question("masukkan Angka : ");
let pol = input.split(" ");
let pol2 = [];

for (let i = 0; i < pol.length; i++) {
  let wadah = "";
  for (let j = pol[i].length - 1; j >= 0; j--) {
    wadah += pol[i][j];
  }
  pol2.push(wadah);
  console.log(wadah);
  if (pol[i] === pol2[i]) {
    console.log(`Polindrome`);
  } else {
    console.log(`Bukan Polindrome`);
  }
}
