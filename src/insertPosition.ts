// let nums = [1, 3, 5, 9];
// let target = 8;
// let position = 0;
// if (target > nums[nums.length - 1]) {
//   position = nums.length;
// } else {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       position = i;
//       break;
//     } else if (target > nums[i] && target < nums[i + 1]) {
//       position = i + 1;
//       break;
//     }
//   }
// }
// console.log(position);

let toko = ["apel", "bola", "celengan", "dadu", "gandum"];
let pesanan = "keju";

for (let x = 0; x < toko.length; x++) {
  if (toko[x] !== pesanan) {
    toko.push(pesanan);
    break;
  }
}
for (let i = 0; i < toko.length - 1; i++) {
  for (let j = i + 1; j < toko.length; j++) {
    if (toko[i] > toko[j]) {
      let posisi = toko[i];
      toko[i] = toko[j];
      toko[j] = posisi;
    }
  }
}
console.log(toko);
console.log(toko.indexOf(pesanan));
