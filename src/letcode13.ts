let objek: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const Romawi: string = "CCCMX";
let has = 0;
let sebelum = 0;
for (let i of Romawi.split("").reverse()) {
  console.log(i);
  const angka = objek[i];

  if (angka < sebelum) {
    has -= angka;
  } else {
    has += angka;
  }
  sebelum = angka;
}
console.log(has);
