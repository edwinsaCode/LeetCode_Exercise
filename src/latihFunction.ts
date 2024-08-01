// function kali(a: number, b: number): number {
//   return a / b;
// }
// console.log(kali(4, 2));

type Sapi = {
  susu: number; //atribute
  peras: (lawan: Sapi, kekuatan: number) => void; //method
};
let lunamaya: Sapi = {
  susu: 100,
  peras: (lawan: Sapi, kekuatan: number) => {
    lawan.susu -= kekuatan;
  },
};

let aril: Sapi = {
  susu: 100,
  peras: (lawan: Sapi, kekuatan: number) => {
    lawan.susu -= kekuatan;
  },
};
console.log(lunamaya.susu);
aril.peras(lunamaya, 30);
console.log(lunamaya.susu);
