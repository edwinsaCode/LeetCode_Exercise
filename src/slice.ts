let lis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// let lis2 = ["apa", "yang", "sedang", "dilakukan", "dony"];
// let copy = lis.slice(5, 6);
// let splice_ = lis.splice(3, 1);
// let index_ = lis2.indexOf("edang");
let redus = lis.reduce((a, b) => a + b);

console.log(redus, "==");
// console.log(index_);
// console.log(copy);
// console.log(lis);
// console.log(splice_);

// let median = (lis.length + 1) / 2;
// let jumlah = [];
// // console.log(median);
// // let angkaMedian = lis.slice(5, median);
// // console.log(angkaMedian);
if (lis.length % 2 !== 0) {
  for (let i = 0; i < (lis.length - 1) / 2; i++) {
    let potong1 = lis[i] + lis[lis.length - 1 - i];
    console.log(potong1);
  }
}

let anggka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let medianawal = anggka.length / 2;
let medianakhir = anggka[medianawal - 0.5];
console.log(medianakhir, "is median");
if (medianakhir) {
  for (let i = 0; i < anggka.length; i++) {
    let penambahn = 0;
    penambahn = anggka[i] + anggka[anggka.length - i - 1];
    console.log(anggka[i], "+", anggka[anggka.length - i - 1], "=", penambahn);
    if (anggka[i] === medianakhir - 1) {
      break;
    }
  }
} else {
  console.log("tidak ada median");
}
