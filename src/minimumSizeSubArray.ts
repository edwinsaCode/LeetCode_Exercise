const target = 7;
const nums1234 = [2, 3, 1, 2, 4, 3];
let bukti: Number[] = [];
let save1234 = 0;
let sebelum1234 = 0;
let jumlah = nums1234.length + 1;
let truty = false;
for (let i = 0; i < nums1234.length; i++) {
  save += nums[i];
  while (save1234 >= target) {
    if (i - sebelum + 1 < jumlah) {
      jumlah = i - sebelum + 1;
      bukti = nums.slice(sebelum, i + 1);
      truty = true;
    }
    save1234 -= nums[sebelum];
    sebelum++;
  }
}
if (!truty) {
  console.log(0);
} else {
  console.log(jumlah);
}
console.log(bukti);
