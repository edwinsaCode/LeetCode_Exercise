let nnum = [-1];
let kk = 1;
let kanan = 0;
let kiri = 0;
for (let a = 0; a < nnum.length; a++) {
  kanan += nnum[a];
}
kiri = kanan;
for (let b = kk; b < nnum.length; b++) {
  kiri = kiri - nnum[b - kk] + nnum[k];
  if (kanan === 0) {
    kanan = kiri;
  } else if (kiri > kanan) {
    kanan = kiri;
  }
}

console.log(kanan / kk);
