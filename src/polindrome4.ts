import readline from "readline-sync";
let input = readline.question("Masukkan Kata : ");
let sentence = input.toLowerCase();
let saveSentence = "";
let reverseSentence = "";
let final = false;
for (let a = 0; a < sentence.length; a++) {
  for (let b = a; b < sentence.length; b++) {
    saveSentence += sentence[b];
    console.log(saveSentence)
    for (let c = saveSentence.length - 1; c >= 0; c--) {
      reverseSentence += saveSentence[c];
    }
    if (saveSentence.length !== 1 && saveSentence === reverseSentence) {
      final = true;
      console.log(reverseSentence);
      break;
    }
    reverseSentence = "";
  }
  saveSentence = "";
  if (final) {
    break;
  }
}
