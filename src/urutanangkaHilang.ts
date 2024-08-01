let angka = "1415161820";
let simpanAngka = [];
for (let i = 1; i < 7; i++) {
  for (let j = 0; j < angka.length; j += i) {
    // console.log(angka[j]);
    let save = "";
    for (let k = j; k < j + i; k++) {
      save += angka[k];
    }
    if (
      simpanAngka.length === 0 ||
      parseInt(save) - simpanAngka[simpanAngka.length - 1] === 1 ||
      parseInt(save) - simpanAngka[simpanAngka.length - 1] === 2
    ) {
      simpanAngka.push(parseInt(save));
    } else {
      simpanAngka = [];
      break;
    }
  }
  if (simpanAngka.length !== 0) {
    for (let l = 0; l < simpanAngka.length - 1; l++) {
      if (simpanAngka[l] + 1 !== simpanAngka[l + 1]) {
        console.log(simpanAngka[l] + 1);
        // break;
      }
    }
  }
}
