let waktu: number[] = [2, 3, 3, 7, 1, 2, 2, 1, 5, 2];
let kasir: number[][] = [
  [1, 4],
  [2, 5, 7, 9],
  [3, 6, 8, 10],
];
const numKasir = kasir.length;
let totalWaktu = 0;

  let minWaktu = Infinity;
  let indexKasir = -1;
  for (let i = 0; i < waktu.length; i++) {
    if (waktu[i] < minWaktu) {
      minWaktu = waktu[i];
      indexKasir = i;
    }
  }
  console.log(indexKasir);

const waktuKasir: number[] = new Array(numKasir).fill(0);


for(let i=0; i<waktu.length;i++){
  waktuKasir.push(waktu[i])
  totalWaktu=Math.max(totalWaktu,waktuKasir[i])
}
console.log(totalWaktu+indexKasir)
