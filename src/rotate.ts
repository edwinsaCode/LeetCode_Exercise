let matriks = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let finalMatriks = [];
for (let a = matriks.length - 1; a > -1; a--) {
  let seconMatriks = [];
  for (let b = 0; b < matriks.length; b++) {
    seconMatriks.push(matriks[matriks.length - b - 1][matriks.length - a - 1]);
  }
  finalMatriks.push(seconMatriks);
}
for (let c = 0; c < matriks.length; c++) {
  matriks[c] = finalMatriks[c];
}
console.log(matriks);
