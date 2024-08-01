let angkaa = [6, 5, 4, 3, 4, 5];
let defaulet = -1;
for (let a = 0; a < angkaa.length - 2; a++) {
  console.log(angkaa[a], "==");
  for (let b = a + 1; b < angkaa.length - 1; b++) {
    console.log(angkaa[b], "++");
    for (let c = b + 1; c < angkaa.length; c++) {
      console.log(angkaa[c], "--");
      if (angkaa[a] < angkaa[b] && angkaa[c] < angkaa[b]) {
        let mount = angkaa[a] + angkaa[b] + angkaa[c];
        if (defaulet === -1 || mount < defaulet) {
          defaulet = mount;
          console.log(mount);
        }
      }
    }
  }
}
console.log("🚀 ~ file: mountain.ts:3 ~ defaulet:", defaulet);
