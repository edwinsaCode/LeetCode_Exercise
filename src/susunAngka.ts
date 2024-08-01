// import readline from "readline-sync";
// let angka = readline.question("Masukan Angka: ");
// let arayAngka = angka.split(" ");
// let susunan = [];
// let loop = arayAngka.length * (arayAngka.length - 1) - 1;

// for (let i = 1; i <= loop; i++) {
//   susunan = arayAngka;
//   let kombinasi=[[],[susunan]]
//   if((kombinasi[0][0])==="" ){

//   }
// }

// // let aray = [
// //   [2, 3],
// //   [4, 5],
// // ];

// // console.log(aray[1][1]);
// let aray = [];
// for (let i = 1; i <= 20; i++) {
//   aray.push(i);
// }
// for (let j = 0; j < aray.length; j++) {
//   if (aray[j] % 2 !== 0) {
//     aray.splice(j, 1);
//   }
// }
// console.log(aray);
// aray.splice(4, 1);
// console.log(aray);
let text = [];
let secText = [];
for (let i = 31; i >= 1; i--) {
  text.push(i);
}
// for (let j = 1; j <= text.length; j++) {
//   text.splice(0, 1, 1);
//   console.log(text[j]);
// // }
console.log(text);
for (let j = 0; j < text.length / 2; j++) {
  let l: number = text.length - j - 1;
  let z: number = text[j];
  text[j] = text[l];
  text[l] = z;
  secText.push(j);
  console.log(text[j], text[l]);
}
console.log(secText);
for (let d = 0; d < text.length / 2; d++) {
  let e: number = text.length / 2 + d;
  let c: number = text[d];
  text[d] = text[e];
  text[e] = c;
  console.log(text[d], text[e]);
}
console.log(text, "----");
for (let f = 0; f < text.length / 2; f++) {
  let g: number = text.length / 2 + f;
  let h: number = text.length - f - 1;
  let l: number = text[f];
  text[f] = text[h];
  text[h] = text[h];
  text[h] = l;
  console.log(text[f], text[g], text[l]);
}
console.log(text);

// for(let s=0; c<=)
