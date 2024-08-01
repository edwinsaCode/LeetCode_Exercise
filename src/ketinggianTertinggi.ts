let gain = [-5, 1, 5, 0, -7];
let tertinggi = 0;
let total = 0;

for (let i = 0; i < gain.length; i++) {
  total = total + gain[i];
  if (total > tertinggi) {
    tertinggi = total;
  }
}
console.log(tertinggi, "--", total);
