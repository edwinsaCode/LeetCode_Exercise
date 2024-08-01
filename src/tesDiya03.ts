let antrian = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let menitPlayanan = [2, 3, 3, 7, 1, 2, 2, 1, 5, 2];
let kasir1 = 0;
let kasir2 = 0;
let kasir3 = 0;
for (let a = 0; a < antrian.length; a++) {
  for (let b = a; b < menitPlayanan.length; b++) {
    if (kasir1 === 0 && kasir2 === 0 && kasir3 === 0) {
      kasir1 += menitPlayanan[b];
      kasir2 += menitPlayanan[b + 1];
      kasir3 += menitPlayanan[b + 2];
    } else {
    }
  }
}
console.log(kasir1, kasir2, kasir3);
