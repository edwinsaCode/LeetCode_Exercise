import readline from "readline-sync";
let input = readline.question("Masukkan Kata : ");
let oskadon = input.toLowerCase();
let tam = "";
let balik = "";
let hasi = 0;
for (let i = 0; i < oskadon.length; i++) {
  // tam += oskadon[i];
  // console.log(tam);
  for (let j = i; j < oskadon.length; j++) {
    tam += oskadon[j];
    // console.log(tam);
    for (let y = tam.length - 1; y >= 0; y--) {
      balik += tam[y];
    }
    console.log(tam, balik);
    if (tam === balik) {
      // console.log(`polindrom:${balik}`);
      hasi++;
    }
    balik = "";
  }
  tam = "";
}
console.log(hasi);
