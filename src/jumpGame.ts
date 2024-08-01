let ang = [2, 3, 1, 2, 4, 3, 5, 1];
let star = ang[1];
let loncat = 0;
let benar = null;
for (let i = 2; i < ang.length; i++) {
  loncat++;
  //   console.log(ang[i]);
  if (loncat === star) {
    star = ang[1];
    loncat = 0;
    benar = true;
  } else {
    benar = false;
  }
}
console.log(benar);
