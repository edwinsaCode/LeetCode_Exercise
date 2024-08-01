const nilaiRomawi: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const nilaiRomawiTerbalik = Object.keys(nilaiRomawi).reverse();
console.log(nilaiRomawiTerbalik);
const romawiKeDesimal = (romawi: string): number => {
  let hasil = 0;
  let sebelumnya = 0;

  for (const karakter of romawi.split("").reverse()) {
    const nilai = nilaiRomawi[karakter];
    console.log(karakter, "..", nilai);
    if (nilai < sebelumnya) {
      hasil -= nilai;
    } else {
      hasil += nilai;
    }

    sebelumnya = nilai;
  }

  return hasil;
};

const angkaRomawi: string = "CCCMX";
const hasilDesimal: number = romawiKeDesimal(angkaRomawi);
console.log(`${angkaRomawi} dalam angka desimal: ${hasilDesimal}`);
