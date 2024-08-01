let sta = new Date().getTime();
let soal = "leetcode";
let arrR: string[] = [];
for (let i = 0; i < soal.length; i++) {
  arrR[i] = soal[i];
}
console.log(arrR);
let left: number = 0;
let rightt: number = arrR.length - 1;

const vowels: { [key: string]: boolean } = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
  A: true,
  E: true,
  I: true,
  O: true,
  U: true,
};

while (left <= rightt) {
  if (vowels[arrR[left]] && vowels[arrR[rightt]]) {
    let temp: string = arrR[left];
    arrR[left] = arrR[rightt];
    arrR[rightt] = temp;
    left++;
    rightt--;
  } else if (!vowels[arrR[left]]) {
    left++;
  } else {
    rightt--;
  }
}

let resultt: string = "";
for (let i = 0; i < arrR.length; i++) {
  resultt += arrR[i];
}

console.log(resultt);
let end = new Date().getTime();
console.log(end - sta);
