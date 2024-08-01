let kata = "ccac";
let kumHuruf = "aacc";
// let kata = "nagaram";
// let kumHuruf = "anagram";
let save = "";
for (let i = 0; i < kata.length; i++) {
  let sisa = "";
  for (let j = 0; j < kumHuruf.length; j++) {
    if (kata[i] === kumHuruf[j]) {
      save += kumHuruf[j];
      sisa += kumHuruf.slice(j + 1);
      break;
    } else {
      sisa += kumHuruf[j];
    }
  }
  kumHuruf = sisa;
}
if (save === kata && kumHuruf.length === 0) {
  console.log(true);
} else {
  console.log(false);
}
