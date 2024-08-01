let nomer = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let urut = 2;
for (let i = 2; i < nomer.length; i++) {
  //   if (urut[i] === 0) {
  //     urut[i] = nomer[i];
  //     urut.push(nomer[i]);
  //     urut = [];
  //   }
  //   if (nomer[i] === urut[1]) {
  //     nomer.splice(nomer[i], 1);
  //     continue;
  //   } else {
  //     urut[i] = nomer[i];
  //     urut.push(nomer[i]);
  //     urut = [];
  //   }
  if (nomer[i] !== nomer[urut - 2]) {
    nomer[urut] = nomer[i];
    urut++;
  }
}
console.log(urut);
