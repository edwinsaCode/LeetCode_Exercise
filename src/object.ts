// type Manusia = {
//   nama: string;
//   gender: string;
//   //   umur: number;
//   //   tinggi_Badan: number;
// };
// let manusia: Manusia[] = [
//   { nama: "ahmad", gender: "P" },
//   { nama: "edwin", gender: "P" },
//   { nama: "adim", gender: "P" },
//   { nama: "mail", gender: "P" },
//   { nama: "albi", gender: "P" },
// ];
// for (let i = 0; i < manusia.length; i++) {
//   console.log(manusia[i].nama);
//   console.log(manusia[i].gender);
//   console.log("----");
// }
// console.log(manusia.nama);
// console.log(manusia.gender);
// console.log(manusia.umur);
// manusia.tinggi_Badan = 190;
// console.log(manusia);

// let sentence = "saya mau kaya";
// let object: any = {};
// for (let i = 0; i < sentence.length; i++) {
//   if (sentence[i] !== " ") {
//     if (!object.hasOwnProperty(sentence[i])) {
//       object[sentence[i]] = 1;
//     } else {
//       object[sentence[i]] = object[sentence[i]] + 1;
//     }
//   }
// }
// console.log(object);

//  buat inputan unntuk 3 orang, isinya ada nama, gender, tinggi
// berat badan, dan th lahir.
//kemudian cek dari 3 orang ini
//1. siapa yang tertinggi output Nama, tinggi?
// 2. siapa yang terpendek  output Nama, tinggi?
// 3. cek siapa paling tua
//4. siapa paling muda
// 5. siapa paling berat
// sipan data [{},{},{}]

// JAWABAN
// import readline from "readline-sync";
// let nama1: any = readline.question("masukkan nama orang 1: ");
// let gender1: any = readline.question("masukkan gender orang 1: ");
// let tinggi1: any = readline.question("masukkan tinggi orang 1: ");
// let berat1: any = readline.question("masukkan berat orang 1: ");
// let tahun1: any = readline.question("masukkan tahunlahir orang 1: ");
// let nama2: any = readline.question("masukkan nama orang 2: ");
// let gender2: any = readline.question("masukkan gender orang 2: ");
// let tinggi2: any = readline.question("masukkan tinggi orang 2: ");
// let berat2: any = readline.question("masukkan berat orang 2: ");
// let tahun2: any = readline.question("masukkan tahunlahir orang 2: ");
// let nama3: any = readline.question("masukkan nama orang 3: ");
// let gender3: any = readline.question("masukkan gender orang 3: ");
// let tinggi3: any = readline.question("masukkan tinggi orang 3: ");
// let berat3: any = readline.question("masukkan berat orang 3: ");
// let tahun3: any = readline.question("masukkan tahunlahir orang 3: ");
// let identitas = [
//   {
//     nama: nama1,
//     gender: gender1,
//     tinggi: tinggi1,
//     bb: berat1,
//     ThLahir: tahun1,
//   },
//   {
//     nama: nama2,
//     gender: gender2,
//     tinggi: tinggi2,
//     bb: berat2,
//     ThLahir: tahun2,
//   },
//   {
//     nama: nama3,
//     gender: gender3,
//     tinggi: tinggi3,
//     bb: berat3,
//     ThLahir: tahun3,
//   },
// ];

// console.log(identitas);
let identitas = [
  { nama: "edwin", gender: "L", tinggi: 170, bb: 60, ThLahir: 2003 },
  { nama: "vony", gender: "W", tinggi: 160, bb: 50, ThLahir: 2002 },
  { nama: "udin", gender: "L", tinggi: 165, bb: 55, ThLahir: 2004 },
];

let tertinggi = undefined;
for (let i = 0; i < identitas.length; i++) {
  if (tertinggi === undefined || identitas[i].tinggi > tertinggi.tinggi) {
    tertinggi = identitas[i];
  }
}
if (tertinggi !== undefined) {
  console.log("1. Tertinggi:", tertinggi.nama, tertinggi.tinggi);
}

let terpendek = undefined;
for (let i = 0; i < identitas.length; i++) {
  if (terpendek === undefined || identitas[i].tinggi < terpendek.tinggi) {
    terpendek = identitas[i];
  }
}
if (!!terpendek) {
  // console.log(terpendek);
  console.log("2. Terpendek:", terpendek.nama, terpendek.tinggi);
}

let tertua = undefined;
// let tanggal = new Date();
for (let i = 0; i < identitas.length; i++) {
  // console.log(identitas[i].ThLahir);
  if (tertua === undefined || identitas[i].ThLahir < tertua.ThLahir) {
    tertua = identitas[i];
  }
}
if (!!tertua) {
  console.log("3. Tertua:", tertua.nama, tertua.ThLahir);
}

let termuda = undefined;
for (let i = 0; i < identitas.length; i++) {
  if (termuda === undefined || identitas[i].ThLahir > termuda.ThLahir) {
    termuda = identitas[i];
  }
}
if (!!termuda) {
  console.log("4. Termuda:", termuda.nama, termuda.ThLahir);
}

let terberat = undefined;
for (let i = 0; i < identitas.length; i++) {
  if (terberat === undefined || identitas[i].bb > terberat.bb) {
    terberat = identitas[i];
  }
}
if (!!terberat) {
  console.log("5. Terberat:", terberat.nama, terberat.bb);
}
