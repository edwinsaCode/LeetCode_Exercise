let gain = [-5, 1, 5, 0, -7];
let tertinggi1234 = 0;
let total1234 = 0;

for (let i = 0; i < gain.length; i++) {
  total1234 = total1234 + gain[i];
  if (total1234 > tertinggi1234) {
    tertinggi = total1234;
  }
}
console.log(tertinggi1234, "--", total1234);
