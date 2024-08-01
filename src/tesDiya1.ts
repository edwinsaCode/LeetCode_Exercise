let totalPopulasi = 1000;
let totalLaki = 400;
let lakiKoor = 100;

let probabilitasLakiAcak = totalLaki / totalPopulasi;

let probabilitasAnggotaKoor = lakiKoor / totalPopulasi;

let probabilitasLakiAnggotaKoor =
  probabilitasAnggotaKoor / probabilitasLakiAcak;

console.log(probabilitasLakiAnggotaKoor);

let resul = 0;
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    resul = resul + i;
  } else {
    resul = resul - i;
  }
}
console.log(resul);
