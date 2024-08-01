import readline from "readline-sync";
let awalRumah = readline.question("Titik awal rumah: ");
let akhirRumah = readline.question("Titik akhir rumah: ");
let LetakpohonApel = readline.question("Letak pohon  apel: ");
let LetakpohonJeruk = readline.question("Letak pohon  jeruk: ");
let panjangApel = readline.question("Panjang pohon  apel: ");
let panjangJeruk = readline.question("Panjang pohon  Jeruk: ");

let apelJatuh: number[] = [];
let jerukJatuh: number[] = [];
let totalApel = 0;
let totalJeruk = 0;

for (let a = 0; a < parseInt(panjangApel); a++) {
  let inputApel = readline.question("Tambah Apel: ");
  apelJatuh.push(parseInt(inputApel));
}
for (let b = 0; b < parseInt(panjangJeruk); b++) {
  let inputJeruk = readline.question("Tambah Jeruk: ");
  jerukJatuh.push(parseInt(inputJeruk));
}
for (let i = 0; i < apelJatuh.length; i++) {
  let Apel = apelJatuh[i] + parseInt(LetakpohonApel);
  if (Apel >= parseInt(awalRumah) && Apel <= parseInt(akhirRumah)) {
    totalApel += 1;
  }
}
for (let j = 0; j < apelJatuh.length; j++) {
  let Jeruk = jerukJatuh[j] + parseInt(LetakpohonJeruk);
  if (Jeruk >= parseInt(awalRumah) && Jeruk <= parseInt(akhirRumah)) {
    totalJeruk += 1;
  }
}
console.log(
  `Total buah jatuh di rumah sam ${totalApel} Apel dan ${totalJeruk} Jeruk`
);
