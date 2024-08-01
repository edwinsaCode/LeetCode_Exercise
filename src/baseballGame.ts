let ops = ["5", "2", "C", "D", "+"];
let hasil_Penjumlahan: number[] = [];

for (let i = 0; i < ops.length; i++) {
  //   hasil_Penjumlahan.push(ops[i]);
  if (ops[i] !== "C" && ops[i] !== "D" && ops[i] !== "+") {
    hasil_Penjumlahan.push(ops[i]);
  }
  if (ops[i] === "C") {
    hasil_Penjumlahan.pop();
  } else if (ops[i] === "D") {
    hasil_Penjumlahan.push(hasil_Penjumlahan[hasil_Penjumlahan.length - 1] * 2);
  } else if (ops[i] === "+") {
    hasil_Penjumlahan.push(hasil_Penjumlahan[i] + hasil_Penjumlahan[i - 1]);
  }
}
console.log(hasil_Penjumlahan);
