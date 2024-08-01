type siwa = { height: number; lower: number; upper: number }[];
const N = 3;
const students: siwa = [
  { height: 150, lower: 2, upper: 3 },
  { height: 160, lower: 2, upper: 2 },
  { height: 140, lower: 1, upper: 2 },
];
let hasil = [];
let coun = 0;
for (let i = 0; i < students.length - 1; i++) {
  let selisih = 0;
  for (let j = i + 1; j < students.length; j++) {
    if (i === j) {
      continue;
    } else {
      selisih = students[i].height;
      if (students[i].height >= students[j].height) {
        let kk: any = students.splice(j, 1);
        selisih = kk[0][1] - 1;
        students.splice(selisih, 0, kk[0]);
      }
    }
  }
}
console.log(students, "/", coun);
