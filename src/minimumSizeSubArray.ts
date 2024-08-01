const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
let bukti: Number[] = [];
let save = 0;
let sebelum = 0;
let jumlah = nums.length + 1;
let truty = false;
for (let i = 0; i < nums.length; i++) {
  save += nums[i];
  while (save >= target) {
    if (i - sebelum + 1 < jumlah) {
      jumlah = i - sebelum + 1;
      bukti = nums.slice(sebelum, i + 1);
      truty = true;
    }
    save -= nums[sebelum];
    sebelum++;
  }
}
if (!truty) {
  console.log(0);
} else {
  console.log(jumlah);
}
console.log(bukti);
