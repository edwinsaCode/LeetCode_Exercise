let Input = "a.";
let lowerCase = Input.toLowerCase();
let abc: Array<string> = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let no=["1","2","3","4","5","6","7","8","9","0"]
let simpan1 = "";
let simpan2 = "";

for (let i = 0; i < lowerCase.length; i++) {
  if (
    (lowerCase[i] >= "a" && lowerCase[i] <= "z") ||
    (lowerCase[i] >= "0" && lowerCase[i] <= "9")
  ) {
    simpan1 += lowerCase[i];
  }
}
for (let j = simpan1.length - 1; j >= 0; j--) {
  simpan2 += simpan1[j];
}
console.log(simpan1, simpan2);
if (simpan2 === simpan1) {
  console.log("true");
} else {
  console.log("false");
}
