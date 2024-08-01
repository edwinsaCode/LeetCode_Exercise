let S = "0 - 22 1985--324";
let kelompok = "";
let jarak = 0;
for (let a = 0; a < S.length; a++) {
  if (S[a] === "-" || S[a] === " ") {
    continue;
  } else {
    jarak++;
    kelompok += S[a];
    console.log(kelompok);
    if (jarak === 3) {
      kelompok += "-";
      jarak = 0;
    }
  }
}
console.log(kelompok);
