let mulai = 9;
let kum: Array<number> = [];

for (let i = 1; i <= mulai; i++) {
  kum.push(i);
}
let direction = "right";
while (kum.length > 1) {
  if (direction === "right") {
    let index_ = 0;
    while (index_ <= kum.length - 1) {
      if (kum.length === 1) break;
      kum.splice(index_, 1);
      index_ = index_ + 1;
    }
    direction = "left";
  } else {
    let index_ = kum.length - 1;
    while (index_ >= 0) {
      if (kum.length === 1) break;
      kum.splice(index_, 1);
      index_ = index_ - 2;
    }
    direction = "right";
  }
}
console.log(kum);
// for (let j = 0; j < kum.length; j++) {

//     if (kum.indexOf(j%2) === 0) {
//       new_kum.push(kum[j]);
//   }
//   for (let k = 0; k < new_kum.length; k++) {
//     if (new_kum.indexOf(k % 2) !== 0) {
//       akhir.push(new_kum[k]);
//     }
//     }
// }
// console.log(kum);
// console.log(new_kum);
// console.log(akhir);
