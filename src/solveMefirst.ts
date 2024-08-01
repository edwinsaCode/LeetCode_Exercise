// soal 1
// let first = 2;
// let second = 3;
// let output = 0;
// output = first + second;
// console.log(output);

// soal kedua
// let ar = [1, 2, 3];
// let hasil = 0;
// for (let i = 0; i < ar.length; i++) {
//   hasil += ar[i];
// }
// console.log(hasil);

// soal ke tiga

// let alice = [5, 6, 7];
// let bob = [3, 6, 10];

// function bandingkanTriplets(a, b) {
// let al = [17, 28, 30];
// let bo = [99, 16, 8];
// let skorAlice = 0;
// let skorBob = 0;

// for (let i = 0; i < 3; i++) {
//   if (al[i] > bo[i]) {
//     skorAlice++;
//   } else if (al[i] < bo[i]) {
//     skorBob++;
//   }
//   // Tidak ada poin jika a[i] sama dengan b[i]
// }
// console.log(skorAlice, skorBob);
// return [skorAlice, skorBob];
// }

// Contoh penggunaan
// const a = [17, 28, 30];
// const b = [99, 16, 8];

// const hasilPerbandingan = bandingkanTriplets(a, b);
// console.log("Skor Alice:", hasilPerbandingan[0]);
// console.log("Skor Bob:", hasilPerbandingan[1]);

// soal ke 4
// function aVeryBigSum(ar) {
//   // Menggunakan fungsi reduce untuk menjumlahkan semua elemen dalam array
//   const sum = ar.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );

//   return sum;
// }

// // Contoh penggunaan
// const arrayBilangan = [
//   1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
// ];
// const hasilJumlah = aVeryBigSum(arrayBilangan);
// console.log("Hasil Jumlah:", hasilJumlah);

// function aVeryBigSum(ar: number[]): number {
//   // Menggunakan metode reduce untuk menjumlahkan semua elemen array
//   const sum: number = ar.reduce((acc, num) => acc + num, 0);

//   return sum;
// }

// // Contoh penggunaan
// const n: number = 5; // Jumlah elemen dalam array
// const array: number[] = [
//   1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
// ];

// const result: number = aVeryBigSum(array);
// console.log(result);

// let no: number = 5;
// let array: number[] = [
//   1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
// ];
// let total: number = 0;

// for (let i = 0; i < array.length; i++) {
//   total += array[i];
// }
// console.log(total);

// Soal Ke 5
// let mod = 17 % 15;
// console.log(mod);

const arr: number[][] = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

const n: number = arr.length; // Jumlah baris
const m: number = arr[0].length; // Jumlah kolom

let leftToRightSum: number = 0;
let rightToLeftSum: number = 0;

// Menggunakan loop untuk menjumlahkan elemen diagonal dari kiri ke kanan
for (let i = 0; i < n; i++) {
  leftToRightSum += arr[i][i];
  console.log(arr[i][i]);
}
console.log(leftToRightSum);

// // Menggunakan loop untuk menjumlahkan elemen diagonal dari kanan ke kiri
// for (let i = 0; i < n; i++) {
//   rightToLeftSum += arr[i][n - i - 1];
//   console.log(arr[i][n - i - 1]);
// }
// // console.log(rightToLeftSum);
// // Menghitung selisih mutlak antara jumlah kedua diagonal
// // const result: number = Math.abs(leftToRightSum - rightToLeftSum);

// // console.log(result);
// console.log(Math.abs(leftToRightSum - rightToLeftSum));

// soal ke 6
// function plusMinus(arr) {
//   const n = arr.length;
//   let positiveCount = 0;
//   let negativeCount = 0;
//   let zeroCount = 0;

//   // Menghitung jumlah elemen positif, negatif, dan nol
//   for (let i = 0; i < n; i++) {
//     if (arr[i] > 0) {
//       positiveCount++;
//     } else if (arr[i] < 0) {
//       negativeCount++;
//     } else {
//       zeroCount++;
//     }
//   }

//   // Menghitung rasio dan mencetak hasil
//   const positiveRatio = positiveCount / n;
//   const negativeRatio = negativeCount / n;
//   const zeroRatio = zeroCount / n;

//   console.log(positiveRatio.toFixed(6));
//   console.log(negativeRatio.toFixed(6));
//   console.log(zeroRatio.toFixed(6));
// }

// Contoh penggunaan
// const array = [1, -2, 0, 3, -1];
// plusMinus(array);

// Contoh penggunaan
// const n = 5; // Jumlah elemen dalam array
// const arr = [1, -2, 0, 3, -1];

// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;

// // Menghitung jumlah elemen positif, negatif, dan nol
// for (let i = 0; i < n; i++) {
//   if (arr[i] > 0) {
//     positiveCount++;
//   } else if (arr[i] < 0) {
//     negativeCount++;
//   } else {
//     zeroCount++;
//   }
// }

// // Menghitung rasio dan mencetak hasil
// const positiveRatio = positiveCount / n;
// const negativeRatio = negativeCount / n;
// const zeroRatio = zeroCount / n;

// console.log(positiveRatio.toFixed(6));
// console.log(negativeRatio.toFixed(6));
// console.log(zeroRatio.toFixed(6));

// Soal Ke 7

// for (let f = 1; f <= 5; f++) {
//   // let bintang = "";
//   // let spasi = "";
//   // console.log(`*${f}*`);
//   for (let g = 1; g <= 5 - 1; g++) {
//     process.stdout.write(" ");
//   }
//   for (let h = 1; h <= f; h++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// for (let h = 5; h >= 1; h--) {
//   // console.log(`<${h}>`);
//   for (let i = h ; i <= 5; i++) {
//     // console.log(`[${i}]`);
//     process.stdout.write("*");
//   }
//   console.log();
// }

// for (let i = 1; i <= 5; i++) {
//   let spasi = " ".repeat(5 - i);
//   let pager = "#".repeat(i);
//   console.log(spasi + pager);
// }

// for (let i = 1; i <= 5; i++) {
//   // let spasi = "";
//   // let pager = "";
//   for (let j = 1; j <= 5 - i; j++) {
//     // spasi += " ";
//     process.stdout.write(" ");
//   }
//   for (let k = 1; k <= i; k++) {
//     // pager += "#";
//     process.stdout.write("#");
//   }
// console.log(spasi + pager);
//   console.log();
// }
